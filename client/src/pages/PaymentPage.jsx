import React, { useState, useEffect } from "react";
const VITE_API_URL = import.meta.env.VITE_API_URL;
console.log(VITE_API_URL);

const ProductDisplay = () => (
  <section
    style={{
      background: "url(gradia-assets/images/hero/bg.png) no-repeat",
      backgroundSize: "cover",
      minHeight: "100vh",
    }}
    className="flex flex-col items-center justify-center"
  >
    <div className="text-white text-center flex flex-col justify-center items-center">
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
      />
      <div>
        <h3>Nome do produto</h3>
        <h5>Valor R$0,50</h5>
      </div>
    </div>
    <form action={`${VITE_API_URL}/create-checkout-session`} method="POST">
      <button className="text-white" type="submit">
        Checkout
      </button>
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function Payment() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? <Message message={message} /> : <ProductDisplay />;
}
