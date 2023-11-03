import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import ImageClient from "./ImageClient";
import ViewClient from "./ViewClient";

async function getData() {
  const petImages: any[] = [];
  const imageRef = collection(db, "petImages");

  const snapshot = await getDocs(imageRef);
  if (snapshot.empty) {
    console.log("No matching documents.");
    return;
  }
  snapshot.forEach((doc: any) => {
    petImages.push({ id: doc.id, ...doc.data() });
  });
  return petImages;
}
const Gallery = async () => {
  const petImages = await getData();
  console.log("🚀 ~ file: page.tsx:20 ~ Gallery ~ petImages:", petImages);

  return (
    <div className="bg-tealLight">
      <h2 className="text-center my-6">Content Moderation</h2>

      <table className="w-full max-h-[400px] overflow-y-auto">
        <thead>
          <tr>
            <th className="p-2">Image</th>
            <th>View</th>
            <th>User</th>
            <th>Posted On</th>
            <th>Likes</th>
            <th>Comments</th>
            <th>Flagged</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="mt-10">
          {petImages?.map((image, index) => (
            <tr
              key={index}
              className={`text-center border-2 border-slate-300 ${
                index % 2 !== 0 ? "bg-white" : "bg-teal-50"
              }`}
            >
              <ImageClient image={image} index={index} />
              <ViewClient image={image} />

              <td className="max-w-[5rem] text-sky-600 underline cursor-pointer">
                <p className="text-center">{image.poster.name}</p>
              </td>
              <td className="truncate max-w-[4rem] md:max-w-[12rem] text-start">
                {new Date(image.postedOn).toDateString()}
              </td>
              <td>{image.likes.length}</td>
              <td>{image.comments.length}</td>
              <td>{image.flagged ? "Yes" : "No"}</td>
              <td>
                {!image.flagged && (
                  <>
                    <button
                      // onClick={() => handleModerationAction(image)}
                      className="text-base text-red-400 m-2"
                    >
                      Delete
                    </button>
                    <button
                      // onClick={() => handleModerationAction(image)}
                      className="text-base text-red-400 m-2"
                    >
                      Hide
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Gallery;
