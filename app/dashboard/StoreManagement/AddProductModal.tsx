"use client";
import { useCart } from "@/app/provider/CartProvider";
import { db } from "@/firebase";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import React, { ChangeEvent, useState } from "react";

const AddProductModal = ({ isOpen, onClose }: any) => {
  const { selectedImage, setSelectedImage } = useCart();
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [imagesArrayData, setImagesArrayData] = useState<string[]>([]);

  const [product, setProduct] = useState<any>({
    name: "",
    images: [],
    price: 0,
    discount: 0,
    rating: [],
    cumulativeStock: 0,
    description: "",
    stock: 0,
    timestamp: Date.now(), // replace with your timestamp logic
    reviews: [],
  });

  const handleModalClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).classList.contains("modal-overlay")) {
      onClose();
    }
  };

  const handleProductChange = (field: any, value: any) => {
    setProduct((prevProduct: any) => ({
      ...prevProduct,
      [field]: value,
    }));
  };

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setLoading2(true);
    const files = e.target.files;

    if (files && files.length > 3) {
      alert("You can only upload up to 3 images.");
      return;
    }

    const imagesArray: string[] = [];
    const imagesArrayDatas: string[] = [];

    if (files && files.length < 3) {
      console.log(
        "🚀 ~ file: AddProductModal.tsx:51 ~ handleImageChange ~ files:",
        files
      );
      for (let i = 0; i < files.length; i++) {
        const imageUrl = URL.createObjectURL(files[i]);
        console.log(
          "🚀 ~ file: AddProductModal.tsx:57 ~ handleImageChange ~ imageUrl:",
          imageUrl
        );
        imagesArray.push(imageUrl);
        console.log(1);
        const storage = getStorage();
        console.log(2);

        const storageRef = ref(
          storage,
          `products/${Date.now()}_${files[i].name}`
        );
        console.log(3);

        // Upload image to Firebase Storage
        await uploadBytes(storageRef, files[0]);
        console.log(4);

        // Get the download URL and store it in the state
        const imageUrls = await getDownloadURL(storageRef);
        console.log(
          "🚀 ~ file: AddProductModal.tsx:80 ~ handleImageChange ~ imageUrls:",
          imageUrls
        );
        console.log(5);

        imagesArrayDatas.push(imageUrls);
        console.log(6);
      }

      setProduct((prevProduct: any) => ({
        ...prevProduct,
        images: imagesArrayDatas, // Update images with the download URLs
      }));
    }

    setImagesArrayData(imagesArrayDatas);
    setLoading2(false);
  };

  const handleAddOrUpdateProduct = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const productsCollection = collection(db, "products");

      if (selectedImage) {
        // Update existing product
        const updatedProductData = {
          name: product.name || selectedImage?.name,
          images: product.images || selectedImage?.images,
          price: product.price || selectedImage?.price,
          discount: product.discount || selectedImage?.discount,
          rating: product.rating || selectedImage?.rating,
          cumulativeStock:
            product.cumulativeStock + product.stock ||
            selectedImage?.cumulativeStock,
          description: product.description || selectedImage?.description,
          stock: product.stock || selectedImage?.stock,
          createdAt: Date.now(),
          reviews: product.reviews || selectedImage?.reviews,
        };

        const productRef = doc(db, "products", selectedImage?.id);
        await updateDoc(productRef, updatedProductData)
          .then(() => onClose())
          .finally(() => setSelectedImage(null));
        // Add any additional logic if needed after updating a product
      } else {
        // Add new product
        const newProductData = {
          name: product.name,
          images: imagesArrayData,
          price: product.price,
          discount: product.discount,
          rating: product.rating,
          cumulativeStock: product.stock,
          description: product.description,
          stock: product.stock,
          updateted: Date.now(),
          reviews: product.reviews,
        };
        console.log(
          "🚀 ~ file: AddProductModal.tsx:143 ~ handleAddOrUpdateProduct ~ newProductData:",
          newProductData.images
        );

        const newProduct = await addDoc(productsCollection, newProductData)
          .then(() => setLoading(false))
          .then(() => onClose())
          .finally(() => setSelectedImage(null));
      }

      setLoading(false);
    } catch (error) {
      console.error("Error adding or updating product: ", error);
    }
  };

  const adjustTextareaRows = (textarea: any) => {
    textarea.rows = textarea.value.split("\n").length || 14;
  };

  return (
    <div
      className={`fixed inset-0 flex items-center flex-col lg:py-3 justify-center modal-overlay z-50 backdrop-blur-sm backdrop-brightness-50 ${
        isOpen
          ? "opacity-100 pointer-events-auto transition-all duration-300"
          : "opacity-0 pointer-events-none transition-all duration-300"
      }`}
      onClick={handleModalClick}
    >
      <div
        className={` inset-0 relative flex flex-col justify-start rounded-lg lg:overflow-auto my-1 h-full w-full lg:w-6/12
              mb-4 bg-white scrollbar scrollbar-thumb-slate-00 scrollbar-track-gray-0`}
      >
        <div className="md:p-6 py-4 px-1.5 rounded-lg  h-full ">
          <div className="flex flex-col gap-0">
            <h2 className="mb-4">Add a product</h2>
            <div className="flex items-center mb-4 gap-3">
              <label htmlFor="name">Product Name: </label>
              <input
                type="text"
                placeholder="Product Name..."
                value={product.name || selectedImage?.name}
                onChange={(e) => handleProductChange("name", e.target.value)}
                className="py-2 px-3 lg:w-80 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="price" className="block text-gray-700 mb-2">
                Price:
              </label>
              <input
                type="number"
                placeholder="Price"
                value={product.price || selectedImage?.price}
                onChange={(e) =>
                  handleProductChange("price", parseFloat(e.target.value))
                }
                className="w-full bg-indigo-100 border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-400"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="discount" className="block text-gray-700 mb-2">
                Discount:
              </label>
              <input
                type="number"
                placeholder="Discount"
                value={product.discount || selectedImage?.discount}
                onChange={(e) =>
                  handleProductChange("discount", parseFloat(e.target.value))
                }
                className="w-full bg-indigo-100 border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-400"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 mb-2">
                Description:
              </label>
              <textarea
                rows={3}
                placeholder="Product Description..."
                value={product.description || selectedImage?.description}
                onChange={(e) => {
                  handleProductChange("description", e.target.value);
                  adjustTextareaRows(e.target);
                }}
                className="w-full bg-indigo-100 border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-400"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="stock" className="block text-gray-700 mb-2">
                Stock:
              </label>
              <input
                type="number"
                placeholder="Stock"
                value={product.stock || selectedImage?.stock}
                onChange={(e) =>
                  handleProductChange("stock", parseInt(e.target.value))
                }
                className="w-full bg-indigo-100 border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-400"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="image" className="block text-gray-700 mb-2">
                Select up to 3 images:
              </label>

              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                multiple // Add the multiple attribute here
                required
                className="w-full bg-indigo-100 border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-400"
              />
              <p className="mt-1.5">
                <span className="text-red-400">Note:</span> first image selected
                is the one that would present the product
              </p>
              <div className="mt-2 space-x-2">
                {product.images.map((imageUrl: any, index: any) => (
                  <img
                    key={index}
                    src={imageUrl}
                    alt={`Product Image ${index + 1}`}
                    className="inline-block h-20 w-20 object-cover border border-gray-300 rounded-md"
                  />
                ))}
              </div>
            </div>
            {/* Add or modify any other fields as needed */}
            <div className="mb-6  flex justify-center lg:justify-end space-x-5 lg:space-x-4">
              <button
                type="submit"
                className="ring-1 ring-green-600 hover:bg-green-700 group hover:text-white transition-colors duration-300 text-green-600 py-2 px-10 rounded-lg focus:outline-none scale-110 hover:animate-bounceZ"
                onClick={handleAddOrUpdateProduct}
              >
                <p>Send</p>{" "}
                {loading && <span className="animate-bounce">loading</span>}
              </button>
            </div>
          </div>
          <button
            className="absolute  scale-125 hover:rotate-90 p-1 top-4 right-4  ring-1 ring-gray-300 transition-all duration-500 rounded-full"
            onClick={onClose}
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
    </div>
  );
};

export default AddProductModal;
