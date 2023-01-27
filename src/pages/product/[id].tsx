import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/styles/pages/product";
import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camisa</h1>
        <span>79</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ab
          tenetur molestiae qui velit animi iure totam aspernatur laboriosam sed
          consequuntur voluptatibus cupiditate libero, debitis explicabo
          molestias, obcaecati mollitia ipsum!
        </p>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
