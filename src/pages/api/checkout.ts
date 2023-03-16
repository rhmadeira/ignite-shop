import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { priceId } = req.body;

  if (req.method !== "POST") return res.status(405).end("Method not allowed");

  if (!priceId) return res.status(400).json({ error: "Price ID is required" });

  const successUrl = `${process.env.NEXT_URL}/success`;
  const cancelUrl = `${process.env.NEXT_URL}/cancel`;

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    success_url: successUrl,
    cancel_url: cancelUrl,
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    payment_method_types: ["card"],
  });

  return res.status(200).json({ checkoutUrl: checkoutSession.url });
}
