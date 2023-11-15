import { getProductsData } from "@/app/api/GerData";
import ProductClient from "./ProductClient";

const AllProducts = async () => {
  const products = await getProductsData();

  return (
    <>
      <ProductClient products={products} />
    </>
  );
};

export default AllProducts;
