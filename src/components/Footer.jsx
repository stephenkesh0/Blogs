import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black w-full text-white p-10 flex justify-between mt-10 ">
      <div>
        <span>
          <img className="h-12" src="/dikadika.png" alt="" /> DIKADIKA
        </span>
        <p className="my-5">Copyright © 2024 DIKADIKA Ent.</p>
        <p>All rights reserved</p>

        <div className="flex mt-6 gap-5">
          <Link to="">
            <img className="h-6" src="/Instagram_icon.webp" alt="" />
          </Link>
          <Link to="">
            <img className="h-6" src="/browser.png" alt="" />
          </Link>
          <Link to="">
            <img className="h-6" src="/twitter-logo.png" alt="" />
          </Link>
          <Link to="">
            <img className="h-6" src="/youtube-icon.png" alt="" />
          </Link>
        </div>
      </div>

      <div className="flex gap-12">
        <div>
          <h3 className="mb-5 text-2xl">Company</h3>
          <ul>
            <li className="hover:text-blue-700 mb-3">
              <Link>About us</Link>
            </li>
            <li className="hover:text-blue-700 mb-3">
              <Link>Blog</Link>
            </li>
            <li className="hover:text-blue-700 mb-3">
              <Link>Contact us</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-2xl">Support</h3>
          <ul>
            <li className="hover:text-blue-700 mb-3">
              <Link className="">Help center</Link>
            </li>
            <li className="hover:text-blue-700 mb-3">
              <Link className="">Legal</Link>
            </li>
            <li className="hover:text-blue-700 mb-3">
              <Link className="">Privacy policy</Link>
            </li>
            <li className="hover:text-blue-700 mb-3">
              <Link className="">Status</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h3 className="mb-6 text-2xl">Stay up to date</h3>
        <input
          className="ring ring-blue-700 h-8 border rounded-md shadow-sm  outline-none text-black"
          type="email"
          placeholder="Email address"
        />
      </div>
    </footer>
  );
};

export default Footer;
