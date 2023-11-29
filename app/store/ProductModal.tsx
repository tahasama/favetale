"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useCart } from "../provider/CartProvider";
import Link from "next/link";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import {
  addDoc,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "@/firebase";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
TimeAgo.addDefaultLocale(en);

import en from "javascript-time-ago/locale/en.json";

const productModal = () => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const {
    cartItems,
    setCartItems,
    cart,
    setCart,
    uploadpetModalOpen,
    product,
    setUploadpetModalOpen,
    userx,
  } = useCart();

  const [rating, setRating] = useState<any[]>(product?.rating);
  const [index, setIndex] = useState<any>(0);

  const handleImageChange = (index: any) => {
    setIndex(index);
  };

  const handleRatingChange = async (event: any) => {
    const newRating = {
      userId: userx.id,
      points: parseInt(event.target.value),
    };

    setRating([...product.rating, newRating]);

    if (!product.rating.some((item: any) => item.userId === userx.id)) {
      await updateDoc(doc(db, "products", product.id), {
        rating: [...product.rating, newRating],
      });
    } else {
      const updatedRating = rating.map((item: any) =>
        item.userId === userx.id ? { ...item, points: newRating.points } : item
      );
      await updateDoc(doc(db, "products", product.id), {
        rating: updatedRating,
      });
    }
  };

  useEffect(() => {
    if (product && product.id) {
      setIsAddedToCart(cart.some((item: any) => item.id === product.id));
    }
  }, [cart, product]);

  const handleModalClick = (e: any) => {
    if (e.target.classList.contains("modal-overlay")) {
      setUploadpetModalOpen(false);
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
      const updatedCartItems = [...cart, { ...product, quantity: 1 }];
      setCartItems(updatedCartItems);
      setIsAddedToCart(true);
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

  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState<any[]>([]);

  const handleAddComment = async () => {
    if (newComment) {
      if (updatedComment === null) {
        const commentRef = await addDoc(collection(db, "comments"), {
          comment: newComment,
          commenter: userx,
          imageId: product.id,
          timestamp: Date.now(),
          likes: [],
          dislikes: [],
        });
        try {
          await updateDoc(doc(db, "products", product.id), {
            commenters: arrayUnion(userx.id),
          });
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          await updateDoc(doc(db, "comments", updatedComment), {
            comment: newComment,
          });
          setNewComment("");
          setUpdatedComment(null);
        } catch (error) {
          console.log(error);
        }
      }
    }
    fetchComments();
    setNewComment("");
    setUpdatedComment(null);
  };

  useEffect(() => {
    product?.id && fetchComments();
  }, [product?.id]);

  const fetchComments = async () => {
    try {
      if (product.id) {
        // Check if selectedImage.id is defined
        const q = query(
          collection(db, "comments"),
          where("imageId", "==", product.id)
        );
        const querySnapshot = await getDocs(q);

        const fetchedComments: any[] = [];

        querySnapshot.forEach((doc) => {
          fetchedComments.push({ id: doc.id, ...doc.data() });
        });

        setComments(fetchedComments);
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const [updatedComment, setUpdatedComment] = useState<any>(null);

  const updateComment = async (reply: any) => {
    setNewComment(reply.comment);
    setUpdatedComment(reply.id);
  };

  const commentsSectionRef = useRef<any>(null);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center modal-overlay h-screen z-50 backdrop-blur-md backdrop-brightness-50 ${
        uploadpetModalOpen
          ? "opacity-100 pointer-events-auto transition-all duration-300"
          : "opacity-0 pointer-events-none transition-all duration-300"
      }`}
      onClick={handleModalClick}
    >
      <div className="overflow-y-auto flex flex-col h-full lg:w-11/12 relative  lg:rounded-lg lg:scrollbar scrollbar-thumb-slate-300 scrollbar-track-gray-100">
        <div className="flex flex-col md:flex-row gap-8 lg:p- shadow-md lg:min-h-[80vh] bg-sky-50">
          {/* Left side of the modal with images and product details */}
          <div className="flex justify-center md:w-1/2">
            <div className=" flex flex-col items-center justify-center w-full">
              <Image
                src={product?.images[index]}
                alt={product?.name}
                width={1000}
                height={1000}
                className="lg:rounded-lg w-full h-full lg:max-h-[66vh] object-contain !rounded-sm"
              />
              <div className="flex mt-4">
                {product?.images.map((image: any, index: any) => (
                  <img
                    key={index}
                    src={image}
                    alt={product?.name}
                    className={`w-16 h-16 object-cover cursor-pointer border-2 border-white ${
                      index === product ? "border-blue-500 scale-110" : ""
                    }`}
                    onClick={() => handleImageChange(index)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col justify-between lg:h-[60vh] items-start px-3 lg:p-0">
            <h2 className="text-2xl font-semibold mb-2 mt-4 ">
              {product?.name}
            </h2>
            <h2 className="text-xl text-left font-semibold ">
              {product?.description}
            </h2>
            <p className="text-lg ">${product?.price}</p>
            <p className="text-lg ">-{product?.discount}%</p>
            <div className=" text-start flex justify-center items-center gap-5">
              <p className="text-gray-700">
                Rating:{" "}
                {product?.rating?.reduce(
                  (acc: any, rate: any) => acc + rate.points,
                  0
                ) / product?.rating.length}{" "}
                / 5
              </p>
              {product?.rating.map((rate: any) => rate.userId !== userx.id) && (
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
              )}
            </div>

            <div className="mt-3">
              <button
                onClick={addToCart}
                className={`bg-blue-500 px-7 py-3 mb-3 lg:mb-0 rounded-md text-white  hover:bg-blue-600 ${
                  (product?.stock === 0 || isAddedToCart) &&
                  "bg-slate-400 hover:bg-slate-400 cursor-pointer"
                }`}
                disabled={product?.stock === 0 || isAddedToCart}
              >
                {isAddedToCart
                  ? "Added to Cart"
                  : product?.stock === 0
                  ? "Out of stock"
                  : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white p-3 lg:px-8 relative">
          {userx.id && (
            <div className="mt-12">
              <div className="flex items-start space-x-4">
                {userx.image ? (
                  <Link
                    href="/profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={userx.image}
                      alt="Your Name"
                      className="w-10 h-10 rounded-full"
                    />
                  </Link>
                ) : (
                  <div className="w-12 h-12 rounded-full bg-sky-300 px-3"></div>
                )}
                <div className="flex flex-col  space-y-4 w-full">
                  <textarea
                    className="flex-grow border rounded-lg px-4 py-2  focus:outline-none focus:ring focus:border-blue-300"
                    rows={3}
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  ></textarea>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded w-fit"
                    onClick={handleAddComment}
                  >
                    Add Comment
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Right side of the modal with reviews */}
          <h3 className="text-lg font-semibold mb-2 mt-4 text-left">
            Customer Reviews
          </h3>
          <div className="mt-6" ref={commentsSectionRef}>
            {comments &&
              comments.map((comment, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between">
                    <div className="flex items-center space-x-4">
                      {comment.commenter.image ? (
                        <Link
                          href={`/profile/${comment.commenter.name}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={comment.commenter.image}
                            alt={comment.commenter.name}
                            className="w-10 h-10 rounded-full object-cover"
                            width={500}
                            height={500}
                          />
                        </Link>
                      ) : (
                        <div className="w-7 h-7 rounded-full bg-emerald-300 px-3"></div>
                      )}
                      <span className="text-gray-600">
                        <Link
                          href={`/profile/${comment.commenter.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {comment.commenter.name}
                        </Link>{" "}
                        &nbsp;
                        <ReactTimeAgo
                          date={comment.timestamp}
                          className="text-sky-700 text-xs"
                          locale="en-US"
                        />
                      </span>
                    </div>
                    {comment.commenter.id === userx.id && (
                      <div className=" w-fit flex gap-3 md:gap-5 z-30 h-fit">
                        <button
                          onClick={() => updateComment(comment)}
                          className="text-xl md:text-3xl hover:scale-105 active:scale-110 transition-all duration-300"
                        >
                          <span className="text-base md:text-xl"></span>
                          <AiOutlineEdit color={"#a9aeb4"} size={24} />
                        </button>
                        <button
                          onClick={async () => {
                            await deleteDoc(
                              doc(db, "comments", comment.id)
                            ).then(() => fetchComments());
                          }}
                          className="text-xl md:text-3xl hover:scale-105 active:scale-110 transition-all duration-300"
                        >
                          <span className="text-base md:text-xl"></span>
                          <AiFillDelete color={"#a9aeb4"} size={24} />
                        </button>
                      </div>
                    )}
                  </div>
                  <p className="mt-2 text-gray-800 text-start indent-4">
                    {comment.comment}
                  </p>
                </div>
              ))}
          </div>
        </div>

        <button
          className="absolute text-gray-400 hover:text-gray-600 hover:rotate-90 bg-gray-100/50 hover:bg-gray-100 active:bg-gray-100 p-1 top-2 right-2 transition-all duration-500 rounded-full"
          onClick={() => setUploadpetModalOpen(false)}
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

export default productModal;
