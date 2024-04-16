// notes: https://docs.stripe.com/checkout/quickstart && https://www.npmjs.com/package/react-stripe-checkout

import React, { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import ViewDetails from "./ViewDetails";

const ProductDisplay = () => (
  <section>
    <div className="product">
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
        <h3>Stubborn Attachments</h3>
        <h5>$20.00</h5>
      </div>
    </div>
    {/* <form action="/create-checkout-session" method="POST">
      <button type="submit">Checkout</button>
    </form> */}
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default class TakeMoney extends React.Component {
  onToken = (token) => {
    fetch("/save-stripe-token", {
      method: "POST",
      body: JSON.stringify(token),
    }).then((response) => {
      response.json().then((data) => {
        alert(`We are in business, ${data.email}`);
      });
    });
  };

  // ...

  render() {
    return (
      <div>
        <ProductDisplay />
        <StripeCheckout
          token={this.onToken}
          stripeKey="pk_test_51P5rYeKu8FwGD361m1RWer38xTSA4O4QOR3ousHgNIoCnNAa98ERfHW0CodfivDNtCiQjMDTJf4SwyU9lF2lTDCD00LwlZe2ce"
        />
      </div>
    );
  }
}

// export default function Stripe() {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     // Check to see if this is a redirect back from Checkout
//     const query = new URLSearchParams(window.location.search);

//     if (query.get("success")) {
//       setMessage("Order placed! You will receive an email confirmation.");
//     }

//     if (query.get("canceled")) {
//       setMessage(
//         "Order canceled -- continue to shop around and checkout when you're ready."
//       );
//     }
//   }, []);

//   return message ? <Message message={message} /> : <ProductDisplay />;
// }
