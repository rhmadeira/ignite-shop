import { styled } from "@/styles";

const Button = styled("button", {
  backgroundColor: "$black",
  color: "white",
});

export default function Home() {
  return <Button>Hello World</Button>;
}
