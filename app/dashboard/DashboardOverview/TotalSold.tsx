import { getPurchasesData } from "@/app/api/GerData";
import { db } from "@/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const TotalSold = async () => {
  const purchasesData: any = await getPurchasesData();

  const totalSold = purchasesData.map((data: any) =>
    data.cart.reduce(
      (total: any, product: any) =>
        total +
        product.quantity *
          (product.price - (product.price * product.discount) / 100),
      0
    )
  );

  return (
    <p className="text-lg md:text-2xl font-bold text-white">
      {(purchasesData && totalSold) || 0}
    </p>
  );
};

export default TotalSold;
