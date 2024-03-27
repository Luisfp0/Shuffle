const express = require("express");
const app = express();
const { resolve } = require("path");
const cors = require("cors");
app.use(cors());
const env = require("dotenv").config({ path: "./.env" });
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
});

app.use(express.static(process.env.STATIC_DIR));

const YOUR_DOMAIN = "http://localhost:5173";

app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "BRL",
          product_data: {
            name: "Product Name",
          },
          unit_amount: 50,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.post(
  "/webhook",
  express.json({ type: "application/json" }),
  (request, response) => {
    const event = request.body;

    const eventTypes = {
      "payment_intent.succeeded": handlePaymentIntentSucceeded,
      "payment_method.attached": handlePaymentMethodAttached,
    };

    function handlePaymentIntentSucceeded(event) {
      // Handle the successful payment intent.
      const paymentIntent = event.data.object;
      console.log("Received payment_intent.succeeded event:");
      console.log(paymentIntent);
    }

    function handlePaymentMethodAttached(event) {
      // Happens when a customer updates or adds a PaymentMethod.
      const paymentMethod = event.data.object;
      console.log("Received payment_method.attached event:");
      console.log(paymentMethod);
    }

    const eventType = event.type;
    const eventHandler = eventTypes[eventType];

    if (eventHandler) {
      eventHandler(event);
    } else {
      console.log(`Unhandled event type ${eventType}`);
    }

    response.json({ received: true });
  }
);

app.listen(5252, () =>
  console.log(`Node server listening at http://localhost:5252`)
);
