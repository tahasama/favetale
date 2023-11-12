import { db } from "@/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import Link from "next/link";
import React from "react";

const searchFirestore = async (searchQuery: any) => {
  console.log(
    "🚀 ~ file: SearchData.tsx:5 ~ searchFirestore ~ searchQuery:",
    searchQuery
  );

  // Array of collection names
  const collections = ["blogs", "storys"];

  // Array to store results
  const allResults: any = [];

  // Perform a separate query for each collection
  await Promise.all(
    collections.map(async (collectionName) => {
      const q = query(
        collection(db, collectionName),
        where("title", "==", searchQuery)
      );
      const querySnapshot = await getDocs(q);
      const results = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        collection: collectionName,
      }));
      allResults.push(...results);
    })
  );

  return allResults;
};

const SearchData = async ({ q }: any) => {
  const searchData: any = await searchFirestore(q);

  const generateLink = (collectionName: any) => {
    const isExplore = ["blogs", "storys"].includes(collectionName);
    const isCommunity = ["discussions", "meetups"].includes(collectionName);

    if (isExplore) {
      return `/explore/${collectionName}`;
    } else if (isCommunity) {
      return `/community/${collectionName}`;
    }

    return `/default/${collectionName}`;
  };
  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold mb-4">Search Results</h2>
      <table className="min-w-full bg-white border border-gray-300 shadow-md">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Collection</th>
            <th className="py-2 px-4 border-b">Writer</th>
          </tr>
        </thead>
        <tbody>
          {searchData?.map((data: any) => (
            <tr key={data.id}>
              <td className="py-2 px-4 border-b text-center">
                <Link
                  href={generateLink(data.collection) + "/" + data.id}
                  className="text-blue-500 hover:underline font-semibold"
                >
                  {data.title}
                </Link>
              </td>
              <td className="py-2 px-4 border-b text-center text-red-700">
                {data.collection}
              </td>
              <td className="py-2 px-4 border-b text-center">
                <Link
                  href={"profile/" + data.writer.id}
                  className="text-blue-500 hover:underline"
                >
                  {data.writer.name}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchData;
