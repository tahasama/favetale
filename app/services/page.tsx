import { Nunito } from "next/font/google";
import React from "react";
import mailbox from "../images/mailbox.png";
import Image from "next/image";

const nunito = Nunito({ subsets: ["latin"] });

const ContactUs = () => {
  return (
    <div className={`container mx-auto  mt-14 ${nunito.className} bg-sky-50 `}>
      <div className="container relative">
        <Image
          src={mailbox}
          alt="mailbox"
          width={1000}
          height={1000}
          className="w-full h-80"
        />
        <h1 className="text-5xl font-semibold mb-8 absolute top-32 text-slate-600 text-center w-full">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 mt-3">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Customer Support</h2>
            <p className="mb-4 text-lg">
              Our dedicated customer support team is here to assist you with any
              inquiries, issues, or concerns you may have. Feel free to reach
              out to us through any of the following methods:
            </p>
            <ul className="list-disc list-inside">
              <li className="mb-2 text-lg">Email: support@favetale.com</li>
              <li className="mb-2 text-lg">Phone: 123-456-7890</li>
              <li className="mb-2 text-lg">
                Live Chat: Available on our website
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Returns and Refunds</h2>
            <p className="mb-4 text-lg">
              Not satisfied with your purchase? Our hassle-free return and
              refund policy ensures a seamless process to meet your needs. If
              you need to initiate a return or request a refund, please contact
              our customer support team for assistance.
            </p>
          </div>
        </div>

        <div className="mt-0 p-6">
          <h2 className="text-2xl font-semibold mb-4">Delivery Information</h2>
          <p className="mb-4 text-lg">
            Experience swift and dependable delivery options that bring your
            pet's essentials right to your doorstep. We offer fast and reliable
            delivery services to ensure your pets receive the care they deserve
            on time.
          </p>
        </div>

        <div className="mt-0 p-6">
          <h2 className="text-2xl font-semibold mb-4">Pet-Related Events</h2>
          <p className="mb-4 text-lg">
            Stay connected with us through our pet-related events. Join us for
            workshops, seminars, and gatherings designed to enhance your
            knowledge about pet care and well-being. Follow our social media
            channels for event announcements and updates.
          </p>
          {/* Add images or event-related content */}
        </div>
      </div>
      <footer className="bg-teal-900 text-white text-center py-6">
        <p className="text-base">&copy; 2023 Favetale. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactUs;
