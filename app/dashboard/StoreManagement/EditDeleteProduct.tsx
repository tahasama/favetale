import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const EditDeleteProduct = ({ product }: any) => {
  const handleEditProduct = () => {
    // Implement functionality to edit the selected product (e.g., open a modal)
  };

  const handleDeleteProduct = () => {
    // Implement functionality to delete the selected product (e.g., confirm and send a delete request to the backend)
  };
  return (
    <td className="flex flex-col md:flex-row justify-center gap-4 h-24 items-center">
      <button
        onClick={handleEditProduct}
        disabled={!product}
        className="text-xl text-sky-500"
      >
        <FaEdit />
      </button>
      <button
        onClick={handleDeleteProduct}
        disabled={!product}
        className="text-lg text-red-400"
      >
        <FaTrash />
      </button>
    </td>
  );
};

export default EditDeleteProduct;
