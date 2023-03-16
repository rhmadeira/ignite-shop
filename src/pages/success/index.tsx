import { SuccessContainer, ImageContainer } from "@/styles/pages/success";
import Image from "next/image";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada</h1>
      <ImageContainer></ImageContainer>
      <p>
        Ihuul! <strong>Rafael</strong> Voce comprou a camisa,{" "}
        <strong>legal!</strong>
      </p>

      <Link href="/">Voltar ao catálogo</Link>
    </SuccessContainer>
  );
}
