import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useCart } from "../provider/CartProvider";

const ProductModal = ({
  isOpen,
  onClose,
  product,
  isTrending,
  discounted,
}: any) => {
  console.log("🚀 ~ file: ProductModal.tsx:13 ~ product:", product);
  const router = useRouter();
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const { cartItems, setCartItems, cart, setCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState<any>([]);

  const handleImageChange = (index: any) => {
    setSelectedImage(index);
  };

  const handleRatingChange = (event: any) => {
    setRating(parseInt(event.target.value));
  };

  const handleReviewSubmit = () => {
    const newReview = {
      id: reviews.length + 1, // Auto-incrementing review ID
      name: "John Doe", // Replace with actual user's name
      date: new Date().toLocaleDateString(), // Current date
      rating,
      text: reviewText,
    };
    setReviews([...reviews, newReview]);
    setRating(0);
    setReviewText("");
  };

  const inputRef = useRef<any>(null);

  const handleModalClick = (e: any) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setCart(JSON.parse(savedCartItems));
    }
  }, [cartItems]);

  const addToCart = () => {
    if (!isAddedToCart) {
      const updatedCartItems = [...cart, product];
      setCartItems(updatedCartItems);
      setIsAddedToCart(true);

      // Save the updated cart items to local storage
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
  };

  const [addReview, setAddReview] = useState(false);

  return (
    <div
      className={`fixed inset-0 flex items-center flex-col py-3 justify-center modal-overlay rounded-lg z-50 backdrop-blur-sm ${
        isOpen
          ? "opacity-100 pointer-events-auto transition-all duration-300"
          : "opacity-0 pointer-events-none transition-all duration-300"
      }`}
      onClick={handleModalClick}
    >
      <>
        <div className="flex flex-col md:flex-row gap-8 p-8 h-4/6 w-10/12 bg-white  shadow-md">
          {/* Left side of the modal with images and product details */}
          <div className="md:w-1/2 flex flex-col items-center justify-center">
            <Image
              src={product?.images[selectedImage]}
              alt={product?.name}
              width={1000}
              height={1000}
              className="rounded-lg h-5/6"
            />
            <div className="flex mt-4">
              {product?.images.map((image: any, index: any) => (
                <img
                  key={index}
                  src={image}
                  alt={product?.name}
                  className={`w-16 h-16 object-cover cursor-pointer border-2 border-white ${
                    index === selectedImage ? "border-blue-500 scale-110" : ""
                  }`}
                  onClick={() => handleImageChange(index)}
                />
              ))}
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col justify-between items-start">
            <h2 className="text-2xl font-semibold mb-2 ">{product?.name}</h2>
            <h2 className="text-xl font-semibold mb-2 ">
              {product?.description}
            </h2>
            <p className="text-lg mb-4 ">${product?.price}</p>
            <p className="text-lg mb-4 ">-{product?.discount}%</p>
            <div className="mb-4 text-start">
              <p className="text-gray-700 mb-4">
                Rating: {product?.rating} / 5
              </p>
              <select
                value={rating}
                onChange={handleRatingChange}
                className="mt-1 border rounded-md bg-white text-gray-800 p-2 focus:outline-none focus:border-blue-500"
              >
                <option value={0}>Select Rating </option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </div>

            <div className="mt-3">
              <button
                onClick={addToCart}
                className="bg-blue-500  px-7 py-3 rounded-md hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="bg-fuchsia-100 w-10/12 h-2/6 p-8 overflow-y-auto">
          <div className="w-full flex justify-end">
            <h4
              className="text-lg font-semibold mb-2 text-center ring-2 w-48  ring-blue-400 rounded-3xl px-2  py-3 cursor-pointer"
              onClick={() => setAddReview(!addReview)}
            >
              Add Your Review?
            </h4>
          </div>
          {addReview && (
            <div>
              <textarea
                rows={3}
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                className="w-full p-2 border rounded-md mb-2"
              />
              <button
                onClick={handleReviewSubmit}
                className="bg-blue-500  px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Submit Review
              </button>
            </div>
          )}
          {/* Right side of the modal with reviews */}
          <h3 className="text-lg font-semibold mb-2  text-left">
            Customer Reviews
          </h3>
          <div className="space-y-4">
            {product?.reviews.map((review: any) => (
              <div key={review.id} className=" text-left">
                <p>{review.text}</p>
                <p className="text-gray-400">
                  Reviewer: {review.name} | Date: {review.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </>
    </div>
  );
};

export default ProductModal;
