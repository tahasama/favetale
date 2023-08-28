import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useCart } from "@/app/provider/CartProvider";
import stripe from "stripe";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51NjYqEBOXs6fP5LSV7Nl077GJlha66OR3nsOtdfJPzujg6h6nplxMqEWJEwnGQbGepMWptEvtUGxvraFw1kYpO10002ZKw2YEM"
);

export default function App() {
  const { total, cart, quantities } = useCart();
  console.log("🚀 ~ file: Payment.tsx:14 ~ App ~ cart:", cart);

  const adaptedCart = cart.map((item: any) => ({
    price_data: {
      currency: "MAD",
      product_data: {
        name: item.name,
        description: `${item.quantity} x ${item.name}`,
      },
      unit_amount: item.price * 100, // Convert price to cents
    },
    quantity: item.quantity,
  }));

  async function onCheckout() {
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        body: JSON.stringify(adaptedCart),
      });
      if (response.ok) {
        localStorage.setItem("cartItems", "");
        const session = await response.json();
        window.location.href = session.url;
      } else {
        console.error("Error creating session:", response.statusText);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  return (
    <button type="submit" onClick={onCheckout}>
      Checkout
    </button>
  );
}
