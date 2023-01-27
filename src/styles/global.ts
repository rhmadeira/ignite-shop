import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
  },
  a: {
    textDecoration: "none",
  },

  body: {
    "-webkit-font-smoothing": "antialiased",
    backgroundColor: "$gray900",
    color: "$gray100",
  },

  "body, input, textarea, button": {
    fontFamily: "Roboto, sans-serif",
    fontWeight: 400,
    fontSize: "1rem",
  },
});
