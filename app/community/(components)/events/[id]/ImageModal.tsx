import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SearchModal = ({ isOpen, onClose, images }: any) => {
  console.log("🚀 ~ file: ImageModal.tsx:6 ~ SearchModal ~ image:", images);
  const handleModalClick = (e: any) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center modal-overlay  z-50 backdrop-blur-sm backdrop-brightness-0 ${
        isOpen
          ? "opacity-100 pointer-events-auto transition-all duration-300"
          : "opacity-0 pointer-events-none transition-all duration-300"
      }`}
      onClick={handleModalClick}
    >
      <div className="relative w-11/12">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          className="my-swiper"
        >
          {images.map((pet: any, index: any) => (
            <SwiperSlide
              className="flex justify-center items-center"
              key={index}
            >
              <div className="flex justify-center items-center bg-slate-700">
                <Image
                  src={pet}
                  alt="pet"
                  style={{ height: "100vh", width: "auto" }}
                  width={2000}
                  height={800}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="absolute  scale-125 hover:rotate-90 p-1 top-3 bg-slate-300 ring-1 ring-slate-400 right-3 z-50 transition-all duration-500 rounded-full"
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

export default SearchModal;
