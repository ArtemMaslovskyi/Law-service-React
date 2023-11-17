import React from "react";
import logo from "./logo.svg";
import twitter from "./twitter.svg";
import facebook from "./facebook.svg";
import telegram from "./telegram.svg";

export default function Header() {
  const handleScrollGallery = () => {
    const element = document.getElementById("gallery");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollNews = () => {
    const element = document.getElementById("news");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-row justify-between">
      <img className="w-20 mx-3" src={logo} alt="logo" />
      <div className="flex flex-wrap items-center justify-center">
        <button className="m-2 uppercase border-b-4 border-purple-500 rounded-sm hover:rounded-lg">
          About
        </button>
        <button
          onClick={handleScrollNews}
          className="m-2 uppercase border-b-4 border-purple-500 rounded-sm hover:rounded-lg"
        >
          News
        </button>
        <button
          onClick={handleScrollGallery}
          className="m-2 uppercase border-b-4 border-purple-500 rounded-sm hover:rounded-lg"
        >
          Gallery
        </button>
        <button className="m-2 uppercase border-b-4 border-purple-500 rounded-sm hover:rounded-lg">
          Contact
        </button>
      </div>
      <div className="bg-purple-600 w-96 max-w-xl min-w-[120px] flex justify-end flex-wrap">
        <img
          src={twitter}
          alt="twitter"
          className="w-8 mx-2 cursor-pointer"
        ></img>
        <img
          src={facebook}
          alt="twitter"
          className="w-10 mx-2 cursor-pointer"
        ></img>
        <img
          src={telegram}
          alt="twitter"
          className="w-8 mx-2 cursor-pointer"
        ></img>
      </div>
    </div>
  );
}
