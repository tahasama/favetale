import { db } from "@/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import CanvasClient from "./CanvasClient";
import { getPurchasesData } from "@/app/api/GerData";

const StoreSalesChart = async () => {
  const purchasesData: any = await getPurchasesData();

  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = purchasesData.reduce(
    (result: any, sale: any) => {
      const saleDate = sale.date.toDate();
      const month = saleDate.getMonth();
      const label = labels[month];

      result.sales[label] =
        (result.sales[label] || 0) +
        sale.cart.reduce(
          (total: any, product: any) => total + product.quantity,
          0
        );

      result.revenue[label] =
        (result.revenue[label] || 0) +
        sale.cart.reduce(
          (total: any, product: any) =>
            total +
            product.quantity *
              (product.price - (product.price * product.discount) / 100),
          0
        );

      return result;
    },
    { sales: {}, revenue: {} }
  );

  const sales = labels.map((label) => data.sales[label] || 0);
  const revenue = labels.map((label) => data.revenue[label] || 0);

  const storeSalesData = {
    labels,
    sales,
    revenue,
  };

  return <CanvasClient storeSalesData={storeSalesData} />;
};

export default StoreSalesChart;
