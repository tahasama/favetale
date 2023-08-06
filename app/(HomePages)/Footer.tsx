import React from "react";

const Footer = () => {
  return (
    <footer className="bg-teal-950 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="">
          <p>Contact or Support:</p>
          <p>Email: contact@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <p className="mt-4">
          &copy; {new Date().getFullYear()} FaveTale . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
