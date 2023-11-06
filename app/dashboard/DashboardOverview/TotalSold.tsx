import { db } from "@/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

async function getData() {
  const blogsData: any[] = [];
  const blogRef = query(collection(db, "purchases"));

  const blogSnapshot = await getDocs(blogRef);

  blogSnapshot.forEach((doc: any) => {
    blogsData.push({ id: doc.id, ...doc.data() });
  });
  return blogsData;
}
const TotalSold = async () => {
  const usersData: any = await getData();

  const totalSold = usersData.map((data: any) =>
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
      {usersData && usersData.length}
    </p>
  );
};

export default TotalSold;
