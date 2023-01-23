import { HomeContainer, Product } from "../styles/pages/home";
import Image from "next/image";
import camisa01 from "../assets/camisas/01.png";
import camisa02 from "../assets/camisas/02.png";
import camisa03 from "../assets/camisas/03.png";
import camisa04 from "../assets/camisas/04.png";

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camisa01} alt="camisa" width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={camisa02} alt="camisa" width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
