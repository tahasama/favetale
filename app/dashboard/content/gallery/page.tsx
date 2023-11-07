import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import ImageClient from "../ImageClient";
import ViewClient from "../ViewClient";
import ImageModal from "@/app/explore/(components)/gallery/ImageModal";
import {
  AiFillDelete,
  AiOutlineFlag,
  AiOutlineHolder,
  AiTwotoneFlag,
} from "react-icons/ai";
import ActionsClient from "../ActionsClient";
import { fetchComments, getGalleryData } from "@/app/api/GerData";

const Gallery = async () => {
  const petImages: any = await getGalleryData();

  const comms: any = [];
  for (const blog of petImages) {
    const ccc: any = await fetchComments(blog.id);
    comms.push(ccc);
  }

  return (
    <div className="bg-tealLight px-0">
      <h2 className="text-center py-6">Gallery</h2>

      <ImageModal />

      <table className="w-full max-h-[400px] overflow-y-auto">
        <thead>
          <tr className="text-xs md:text-base">
            <th className="p-2">Image</th>
            <th className="invisible md:visible">View</th>
            <th>User</th>
            <th>Posted</th>
            <th>Likes</th>
            <th className="truncate max-w-[3.2rem] md:max-w-none ">Comments</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="mt-10 text-xs md:text-base">
          {petImages &&
            petImages?.map((image: any, index: any) => (
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
                <td className="">{new Date(image.postedOn).toDateString()}</td>
                <td>{image.likes.length}</td>
                <td>{image.comments.length}</td>
                <ActionsClient image={image} />
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Gallery;
