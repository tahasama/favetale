import { getUsersData } from "@/app/api/GerData";
import { auth, db } from "@/firebase";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";

const TotalUsers = async () => {
  const usersData: any = await getUsersData();

  return (
    <p className="text-lg md:text-2xl font-bold text-white">
      {(usersData && usersData.length) || 0}
    </p>
  );
};

export default TotalUsers;
