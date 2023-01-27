import Stripe from "stripe";

//criar uma instância do stripe com a chave secreta do stripe
//a exclamação é para dizer que a variável não pode ser nula
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  //pegar a versão mais atualizada da api do stripe
  apiVersion: "2022-11-15",
  //informações do app fica registrado de onde vem a requisição
  appInfo: { name: "ignite Shop" },
});
