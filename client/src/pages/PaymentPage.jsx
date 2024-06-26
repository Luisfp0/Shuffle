import React, { useState, useEffect } from "react";
const VITE_API_URL = import.meta.env.VITE_API_URL;

function ProductDisplay() {
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");

    try {
      const response = await fetch(`${VITE_API_URL}/create-checkout-session`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });

      if (!response.ok) {
        throw new Error("Erro ao criar a sessão de checkout");
      }

      const responseData = await response.json();
      const sessionUrl = responseData.checkoutUrl;
      window.location.href = sessionUrl;
    } catch (error) {
      console.error(error);
    }
  };

  return (
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
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <button className="text-white" type="submit">
          Checkout
        </button>
      </form>
    </section>
  );
}

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
