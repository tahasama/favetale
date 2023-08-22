import React from "react";

const PaymentButton = ({ onClick }: any) => {
  return (
    <button
      onClick={onClick}
      className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md shadow-md"
    >
      Proceed to Payment
    </button>
  );
};

export default PaymentButton;
