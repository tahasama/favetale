import { useCart } from "@/app/provider/CartProvider";
import { db } from "@/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";

const UploadImageMeetupModal = ({ id }: any) => {
  const { imageModalOpen, setImageModalOpen, setUploadpetModalOpen } =
    useCart();

  const [loading, setLoading] = useState(false);

  const handleModalClick = (e: any) => {
    if (e.target.classList.contains("modal-overlay")) {
      setImageModalOpen(false);
    }
  };

  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState("");

  const { userx } = useCart();

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);

    if (imageFile) {
      const storage = getStorage();
      const storageRef = ref(
        storage,
        `pet_images/${userx.id}/${Date.now()}.jpg`
      );

      try {
        await uploadBytes(storageRef, imageFile);

        const imageUrl = await getDownloadURL(storageRef);

        const imageRef = doc(db, "gatherings", id);

        const docSnap = await getDoc(imageRef);
        const existingData = docSnap.data();

        const updateData = {
          images: existingData?.images
            ? [...existingData.images, imageUrl]
            : [imageUrl],
        };

        await updateDoc(imageRef, updateData).then(() => {
          setImageModalOpen(false);
        });
      } catch (error) {
        console.log(error);
      }
    }

    setImageFile(null);
    setUploadpetModalOpen(false);
    setLoading(false);
    setError("");
  };

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center modal-overlay h-screen z-50 backdrop-blur-md backdrop-brightness-50 ${
        imageModalOpen
          ? "opacity-100 pointer-events-auto transition-all duration-300"
          : "opacity-0 pointer-events-none transition-all duration-300"
      }`}
      onClick={handleModalClick}
    >
      <div className="shadow-2xl  inset-0 relative flex flex-col justify-center items-center my-1 rounded-lg h-fit">
        <div className="bg-white p-4 md:p-6 mx-auto rounded-lg shadow-md w-full md:w-[35vw] ">
          <h1 className="text-2xl lg:text-3xl mb-4 text-center">
            Upload an Image
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mb-4">
              <label htmlFor="image" className="block text-gray-700 mb-2">
                Select an image:
              </label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full bg-indigo-100 border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-400"
              />
            </div>

            <div className="grid place-items-center">
              <button
                disabled={error !== "" && true}
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-3.5 px-5 rounded-full w-fit hover:animate-bounceQ"
              >
                {!loading ? (
                  "Upload Image"
                ) : (
                  <span className="flex">
                    Loading
                    <div className="flex justify-center ml-0.5 mt-1.5">
                      <div className="w-1 h-1 bg-white rounded-full animate-bounceQ1 mx-0.5"></div>
                      <div
                        className="w-1 h-1 bg-white rounded-full animate-bounceQ1 mx-0.5"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-1 h-1 bg-white rounded-full animate-bounceQ1 mx-0.5"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>
        <button
          className="absolute bg-sky-600 scale-125 hover:rotate-90 p-1 top-4 right-4  ring-2 ring-gray-300 transition-all duration-500 rounded-full"
          onClick={() => setImageModalOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            id="close"
          >
            <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
export default UploadImageMeetupModal;
