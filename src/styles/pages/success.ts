import { styled } from "@stitches/react";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: "100vh",
  textAlign: "center",
  gap: "1rem",
  h1: {
    fontSize: "3rem",
  },
  p: {
    fontSize: "1.5rem",
  },
  a: {
    fontSize: "1.5rem",
  },
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 130,
  height: 145,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  background: "linear-gradient(180deg, #ea48 0%, #7465d4 100%)",
  borderRadius: "0.5rem",
  padding: "0.5rem",
  img: {
    objectFit: "cover",
  },
});
