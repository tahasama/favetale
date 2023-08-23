import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import React from "react";

const PaymentButton = ({ onClick }: any) => {
  return (
    <button
      onClick={onClick}
      className="bg-indigo-100  text-white px-4 py-6 rounded-md shadow-md w-full h-fit"
    >
      <PayPalScriptProvider
        options={{
          clientId: "test",
        }}
      >
        <PayPalButtons style={{ layout: "vertical" }} />
      </PayPalScriptProvider>{" "}
    </button>
  );
};

export default PaymentButton;
