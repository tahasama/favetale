import ImageClient from "../ImageClient";
import ViewClient from "../ViewClient";
import ImageModal from "@/app/explore/(components)/gallery/ImageModal";
import ActionsClient from "../ActionsClient";
import { fetchComments, getGalleryData } from "@/app/api/GerData";
import UploadImageModal from "@/app/explore/(components)/gallery/UploadImageModal";
import UploadpetModalOpenButton from "@/app/explore/(components)/gallery/UploadpetModalOpenButton";

const Gallery = async () => {
  const petImages: any = await getGalleryData();

  const comms: any = [];
  for (const blog of petImages) {
    const ccc: any = await fetchComments(blog.id);
    comms.push(ccc);
  }
  const buttonStyle =
    "bg-indigo-500 px-3 mx-2 py-3 h-fit rounded hover:bg-indigo-700 text-slate-200";

  return (
    <div className="bg-tealLight px-0 relative ">
      <div className="flex justify-between items-center">
        <h2 className="text-center py-6 w-10/12">Gallery</h2>
        <UploadpetModalOpenButton buttonStyle={buttonStyle} />
      </div>

      <UploadImageModal />
      <ImageModal />

      <table className="w-full max-h-[400px] overflow-y-auto border-collapse border border-gray-300 text-xs md:text-sm lg:text-base">
        <thead className="bg-gray-100">
          <tr className="text-xs md:text-base">
            <th className="p-2 border border-gray-300">Image</th>
            <th className="invisible hidden md:block p-2 md:visible border ">
              View
            </th>
            <th className="p-2 border border-gray-300">User</th>
            <th className="p-2 border border-gray-300">Posted</th>
            <th className="p-2 border border-gray-300">Likes</th>
            <th className="p-2 border border-gray-300 truncate max-w-[3.2rem] md:max-w-none">
              Comments
            </th>
            <th className="p-2 border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody className="mt-10 text-xs md:text-base">
          {petImages &&
            petImages?.map((image: any, index: any) => (
              <tr
                key={index}
                className={`text-center border border-slate-300 border-b bg-gray-300 ${
                  index % 2 !== 0 ? "bg-white" : "bg-teal-50"
                }`}
              >
                <ImageClient image={image} index={index} />
                <ViewClient image={image} />

                <td className="max-w-[5rem] text-sky-600 underline cursor-pointer border border-gray-300">
                  <p className="text-center">{image.poster.name}</p>
                </td>
                <td className="border border-gray-300">
                  {new Date(image.postedOn).toDateString()}
                </td>
                <td className="border border-gray-300">{image.likes.length}</td>
                <td className="border border-gray-300">
                  {image.comments.length}
                </td>
                <ActionsClient image={image} collectionName={"gallery"} />
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Gallery;
