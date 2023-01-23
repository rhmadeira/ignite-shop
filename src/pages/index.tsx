import { HomeContainer, Product } from "../styles/pages/home";
import Image from "next/image";
import camisa01 from "../assets/camisas/01.png";
import camisa02 from "../assets/camisas/02.png";
import camisa03 from "../assets/camisas/03.png";
import camisa04 from "../assets/camisas/04.png";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48, // space between slides
    },
  });
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={camisa01} alt="camisa" width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camisa02} alt="camisa" width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camisa03} alt="camisa" width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camisa04} alt="camisa" width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
