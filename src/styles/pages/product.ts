import { styled } from "..";

export const ProductContainer = styled("main", {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  alignItems: "stretch",
  gap: "4rem",

  maxWidth: 1180,
  margin: "0 auto",
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 576,
  height: 656,
  boxSizing: "border-box",
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.12rem",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",

  img: {
    objectFit: "cover", // Não distorce a imagem
  },
});

export const ProductDetails = styled("div", {
  display: "flex",
  flexDirection: "column",

  h1: {
    fontSize: "$2xl",
    color: "$gray300",
  },

  span: {
    marginTop: "1rem",
    display: "block",
    fontSize: "$2xl",
    color: "$green300",
  },

  p: {
    marginTop: "2.5rem",
    fontSize: "$md",
    lineHeight: 1.6, // Bom para textos grandes
    color: "$gray300",
  },

  button: {
    marginTop: "auto", //Joga o botão la para baixo
    background: "$green300",
    border: "none",
    color: "$white",
    borderRadius: 8,
    padding: "1.25rem",
    cursor: "pointer",
    fontWeight: "bold",

    "&:hover": {
      filter: "brightness(0.9)",
    },
  },
});
