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
        const session = await response.json();
        window.location.href = session.url;
        localStorage.setItem("cartAfter", JSON.stringify(cart));
        localStorage.setItem("cartItems", "");
      } else {
        console.error("Error creating session:", response.statusText);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  return (
    <button
      type="submit"
      onClick={onCheckout}
      className="bg-indigo-500 w-full text-lg font-light tracking-wide hover:bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out"
    >
      Checkout
    </button>
  );
}
