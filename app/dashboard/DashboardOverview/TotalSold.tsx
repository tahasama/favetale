import { getPurchasesData } from "@/app/api/GerData";

const TotalSold = async () => {
  const purchasesData: any = await getPurchasesData();

  const totalMoneySpent = purchasesData.reduce((total: any, purchase: any) => {
    const purchaseTotal = purchase.cart.reduce(
      (subtotal: any, product: any) =>
        subtotal +
        product.quantity *
          (product.price - (product.price * product.discount) / 100),
      0
    );

    return total + purchaseTotal;
  }, 0);

  return (
    <p className="text-lg md:text-2xl font-bold text-white">
      {(purchasesData && totalMoneySpent.toFixed(2)) || 0} Dh
    </p>
  );
};

export default TotalSold;
