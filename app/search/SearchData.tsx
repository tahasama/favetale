import { db } from "@/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import Link from "next/link";
import React from "react";

const searchFirestore = async (searchQuery: any) => {
  const collections = [
    "blogs",
    "storys",
    "questions",
    "gatherings",
    "event",
    "products",
    "discussions",
  ];

  const allResults: any = [];

  await Promise.all(
    collections.map(async (collectionName) => {
      const q = query(collection(db, collectionName));
      const querySnapshot = await getDocs(q);
      const results = querySnapshot.docs
        .filter((doc) =>
          doc.data()?.title?.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((doc) => ({
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

  const collections: any = {
    blogs: { name: "blogs" },
    storys: { name: "stories" },
    gatherings: { name: "meetups" },
    products: { name: "products" },
    discussions: { name: "discussion" },
    event: { name: "events" },
  };

  const generateLink = (collectionName: any) => {
    const isExplore = ["blogs", "storys"].includes(collectionName);
    const isCommunity = [
      "discussions",
      "gatherings",
      "event",
      "questions",
    ].includes(collectionName);

    const realName = collections[collectionName]?.name || collectionName;

    if (isExplore) {
      return `/explore/${realName}`;
    } else if (isCommunity) {
      if (collectionName === "discussions") {
        return `/community/forums/check/${realName}`;
      } else {
        return `/community/${realName}`;
      }
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
              <td className="py-2 px-4 border-b text-center text-red-700 capitalize">
                {data.collection !== "discussions"
                  ? collections[data.collection]?.name
                  : "forums"}
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
