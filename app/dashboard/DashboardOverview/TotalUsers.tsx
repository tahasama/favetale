import { auth, db } from "@/firebase";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";

async function getData() {
  const questionsData: any[] = [];
  const blogRef = collection(db, "users");

  const snapshot = await getDocs(blogRef);
  if (snapshot.empty) {
    console.log("No matching documents.");
    return;
  }
  snapshot.forEach((doc: any) => {
    questionsData.push({ id: doc.id, ...doc.data() });
  });
  return questionsData;
}

const TotalUsers = async () => {
  const usersData: any = await getData();

  return (
    <p className="text-lg md:text-2xl font-bold text-white">
      {(usersData && usersData.length) || 0}
    </p>
  );
};

export default TotalUsers;
