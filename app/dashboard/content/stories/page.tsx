import { db } from "@/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import React from "react";
import ViewClient from "./ViewClient";
import ImageClient from "./ImageClient";
import ActionsClient from "./ActionsClient";
import { isAbsolute } from "path";
import Link from "next/link";

async function getData() {
  const blogsData: any[] = [];
  const blogRef = query(collection(db, "storys"), where("draft", "==", false));

  const snapshot = await getDocs(blogRef);
  if (snapshot.empty) {
    console.log("No matching documents.");
    return;
  }
  snapshot.forEach((doc: any) => {
    blogsData.push({ id: doc.id, ...doc.data() });
  });
  return blogsData;
}

const fetchComments = async (blogId: any) => {
  try {
    // Check if selectedImage.id is defined
    const q = query(collection(db, "comments"), where("imageId", "==", blogId));
    const querySnapshot = await getDocs(q);

    const fetchedComments: any[] = [];

    querySnapshot.forEach((doc) => {
      fetchedComments.push({ id: doc.id, ...doc.data() });
    });
    return fetchedComments;
  } catch (error) {
    console.error("Error fetching comments:", error);
  }
};
const Stories = async () => {
  const blogsData: any = await getData();

  const comms: any = [];
  for (const blog of blogsData) {
    const ccc: any = await fetchComments(blog.id);
    comms.push(ccc);
  }
  return (
    <div className="bg-tealLight px-0">
      <h2 className="text-center py-6">Blogs</h2>

      <table className="w-full max-h-[400px] overflow-y-auto">
        <thead>
          <tr className="text-xs md:text-base">
            <th className="p-2">Image</th>
            <th className="p-2">Title</th>
            <th>User</th>
            <th>Posted</th>
            <th>Likes</th>
            <th className="truncate max-w-[3.2rem] md:max-w-none ">Comments</th>
            <th>Flag</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="mt-10 text-xs md:text-base">
          {blogsData?.map((image: any, index: any) => (
            <tr
              key={index}
              className={`text-center border-2 border-slate-300 ${
                index % 2 !== 0 ? "bg-white" : "bg-teal-50"
              }`}
            >
              <ImageClient image={image} index={index} />
              <td className="max-w-[5rem] text-sky-600 underline cursor-pointer">
                <Link href={`explore/blogs/${image.id}`}> {image.title}</Link>
              </td>
              <td className="max-w-[5rem] text-sky-600 underline cursor-pointer">
                <Link
                  href={`profile/${image.writer.id}`}
                  className="text-center"
                >
                  {image.writer.name}
                </Link>
              </td>
              <td className="">{image.createdAt.toDate().toDateString()}</td>
              <td>{image.likes.length}</td>
              <td>
                {
                  comms.flat().filter((comm: any) => comm.imageId === image.id)
                    .length
                }
              </td>
              <td>{image.flagged ? "Yes" : "No"}</td>
              <ActionsClient image={image} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Stories;
