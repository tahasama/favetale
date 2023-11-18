import { getPurchasesData } from "@/app/api/GerData";
import { db } from "@/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const TotalSold = async () => {
  const purchasesData: any = await getPurchasesData();
  console.log(
    "🚀 ~ file: TotalSold.tsx:7 ~ TotalSold ~ purchasesData:",
    purchasesData
  );

  // Assuming purchasesData is an array of purchases
  const totalMoneySpent = purchasesData.reduce((total: any, purchase: any) => {
    const purchaseTotal = purchase.cart.reduce(
      (subtotal: any, product: any) =>
        subtotal +
        product.quantity *
          (product.price - (product.price * product.discount) / 100),
      0
    );
    console.log(
      "🚀 ~ file: TotalSold.tsx:21 ~ totalMoneySpent ~ purchaseTotal:",
      purchaseTotal
    );

    return total + purchaseTotal;
  }, 0);

  console.log("Total Money Spent:", totalMoneySpent);

  // const totalSold = 90;

  return (
    <p className="text-lg md:text-2xl font-bold text-white">
      {(purchasesData && totalMoneySpent.toFixed(2)) || 0} Dh
    </p>
  );
};

export default TotalSold;
