import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "../components/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51OyGQT094BOTwk2YwarxukO4yj7iTqTT3XzD6zr7MNCvprt880JPh4indLYdUreF8qxYPWoBHK88DbeZOgt803Pk00c8HbyOBG"
);
function Payment(props) {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("http://localhost:5252/create-payment-intent", {
      method: "Post",
      body: JSON.stringify({}),
    }).then(async (r) => {
      const { clientSecret } = await r.json();
      setClientSecret(clientSecret);
    });
  }, []);

  const options = {
    clientSecret,
  };

  return (
    <div className="flex justify-center">
      <div>
        <h1>React Stripeand the Payment Element</h1>
        {stripePromise && clientSecret && (
          <Elements stripe={stripePromise} options={options}>
            <CheckOutForm />
          </Elements>
        )}
      </div>
    </div>
  );
}

export default Payment;
