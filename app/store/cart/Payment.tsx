import { useCart } from "@/app/provider/CartProvider";

export default function App() {
  const { total, cart, quantities } = useCart();

  const adaptedCart = cart.map((item: any) => ({
    price_data: {
      currency: "MAD",
      product_data: {
        name: item.name,
        description: `${item.quantity} x ${item.name}`,
      },
      unit_amount: item.price * 100,
    },
    quantity: quantities[item.id],
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
