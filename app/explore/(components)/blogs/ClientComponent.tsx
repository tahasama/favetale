"use client";
import React, { useState } from "react";

import { useCart } from "@/app/provider/CartProvider";

const ClientComponent = () => {
  const { uploadpetModalOpen, setUploadpetModalOpen } = useCart();
  const [first, setfirst] = useState("second");

  return <>{first}</>;
};

export default ClientComponent;
