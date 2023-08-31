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

  useEffect(() => {
    // Check if the product is already in the cart and update the button state
    if (product && product.id) {
      setIsAddedToCart(cart.some((item: any) => item.id === product.id));
    }
  }, [cart, product]);

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
  const ref = useRef<any>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [addReview]);

  return (
    <div
      className={`fixed inset-0 flex items-center flex-col py-3 justify-center modal-overlay rounded-lg z-50 backdrop-blur-sm ${
        isOpen
          ? "opacity-100 pointer-events-auto transition-all duration-300"
          : "opacity-0 pointer-events-none transition-all duration-300"
      }`}
      onClick={handleModalClick}
    >
      <div className="overflow-y-auto flex flex-col h-full w-11/12 relative scrollbar scrollbar-thumb-slate-300 scrollbar-track-gray-100">
        <div className="flex flex-col md:flex-row gap-8 p-8 shadow-md min-h-[80vh] bg-sky-50">
          {/* Left side of the modal with images and product details */}
          <div className=" flex flex-col items-center justify-center ">
            <Image
              src={product?.images[selectedImage]}
              alt={product?.name}
              width={1000}
              height={1000}
              className="rounded-lg max-h-[66vh] object-contain"
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
          <div className="md:w-1/2 flex flex-col justify-between h-[60vh] items-start">
            <h2 className="text-2xl font-semibold mb-2 ">{product?.name}</h2>
            <h2 className="text-xl text-left font-semibold ">
              {product?.description}
            </h2>
            <p className="text-lg ">${product?.price}</p>
            <p className="text-lg ">-{product?.discount}%</p>
            <div className=" text-start flex justify-center items-center gap-5">
              <p className="text-gray-700">Rating: {product?.rating} / 5</p>
              <select
                value={rating}
                onChange={handleRatingChange}
                className="border rounded-md bg-white text-gray-800 p-2 focus:outline-none focus:border-blue-500"
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
                className={`bg-blue-500  px-7 py-3 rounded-md text-white  hover:bg-blue-600 ${
                  isAddedToCart &&
                  "bg-slate-400 hover:bg-slate-400 cursor-pointer"
                }`}
                disabled={isAddedToCart}
              >
                {isAddedToCart ? "Added to Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 relative">
          <div className="flex">
            <div className="w-fit flex justify-end absolute right-4 top-4">
              <h4
                className="text-lg font-semibold mb-2 text-center ring-2 w-48 ring-blue-400 rounded-3xl px-2 py-3 cursor-pointer bg-sky-50 hover:bg-blue-100 transition-colors"
                onClick={() => setAddReview(!addReview)}
              >
                Add Your Review?
              </h4>
            </div>
            {addReview && (
              <div className="relative left-4 -top-5 w-4/6 border-violet-400 ">
                <textarea
                  ref={ref}
                  rows={3}
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  className="w-full p-2 border rounded-md mb-2 focus:outline-none focus:ring border-blue-500 focus:border-blue-500"
                />
                <button
                  onClick={handleReviewSubmit}
                  className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 text-white transition-colors"
                >
                  Submit Review
                </button>
              </div>
            )}
          </div>

          {/* Right side of the modal with reviews */}
          <h3 className="text-lg font-semibold mb-2 text-left">
            Customer Reviews
          </h3>
          <div className="space-y-4">
            {product?.reviews.map((review: any) => (
              <div key={review.id} className="text-left">
                <p>{review.text}</p>
                <p className="text-gray-400">
                  Reviewer: {review.name} | Date: {review.date}
                </p>
              </div>
            ))}
          </div>
        </div>

        <button
          className="absolute text-gray-400 hover:text-gray-600 hover:rotate-90 bgr p-1 top-2 right-2 transition-all duration-500 rounded-full"
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
  );
};

export default ProductModal;