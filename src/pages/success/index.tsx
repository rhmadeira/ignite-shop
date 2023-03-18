import { stripe } from "@/lib/stripe";
import { SuccessContainer, ImageContainer } from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";

export default function SuccessPage({ customerName, product }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Success | shop</title>

        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <h1>Compra efetuada</h1>
        <ImageContainer>
          <Image src={product.image} width={120} height={110} alt="" />
        </ImageContainer>
        <p>
          Ihuul! <strong>{customerName}</strong> Voce comprou a camisa,{" "}
          <strong>{product.name}</strong>
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}
//como os dados são sensíveis, não posso deixar exposto no front-end
//então, vou fazer o fetch no back-end (server-side)
interface SuccessProps {
  customerName: string;
  product: {
    name: string;
    description: string;
    image: string;
  };
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = query.session_id as string;
  if (!sessionId)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details?.name;
  const product = session.line_items?.data[0].price?.product as Stripe.Product;

  return {
    props: {
      customerName,
      product: {
        name: product.name,
        description: product.description,
        image: product.images[0],
      },
    },
  };
};
