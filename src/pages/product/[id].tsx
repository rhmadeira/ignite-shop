import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/styles/pages/product";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import Image from "next/image";
import axios from "axios";
import Head from "next/head";

interface IProduct {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPricedId: string;
  };
}

export default function Product({ product }: IProduct) {
  const router = useRouter();
  async function handleBuyProduct() {
    try {
      const response = await axios.post("/api/checkout", {
        priceId: product.defaultPricedId,
      });
      const { checkoutUrl } = response.data;

      //quando redireciono para rota externa, preciso usar o window.location.href
      window.location.href = checkoutUrl;
      //quando redireciono para rota interna, preciso usar o router.push
      //router.push('/checkoutUrl');
    } catch (error) {
      //conectar com o toastify //conectar com o sentry,conectar com o DataDog
      console.log(error);
    }
  }
  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Head>
        <title>{product.name} | shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} alt="" width={530} height={480} />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>
          <button onClick={handleBuyProduct}>Comprar agora</button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await stripe.products.list();

  const paths = response.data.map((product) => ({
    params: { id: product.id },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params?.id;

  const product = await stripe.products.retrieve(productId!, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        proce: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price.unit_amount! / 100),
        description: product.description,
        defaultPricedId: price.id,
      },
    },
    revalidate: 60 * 60 * 24,
  };
};
