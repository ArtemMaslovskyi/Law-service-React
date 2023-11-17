import React from "react";
import photoData from "./photoData";

export default function Gallery() {
  const [photoCount, setPhotoCount] = React.useState(0);

  function rightButtonClick() {
    setPhotoCount((prevCount) =>
      prevCount > photoData.length - 2 ? 0 : prevCount + 1
    );
  }
  function leftButtonClick() {
    setPhotoCount((prevCount) =>
      prevCount === 0 ? photoData.length - 1 : prevCount - 1
    );
  }

  return (
    <div>
      <h2
        id="gallery"
        className="my-12 text-6xl font-bold text-center uppercase"
      >
        Gallery
      </h2>
      <div className="flex justify-center m-3">
        <button
          onClick={leftButtonClick}
          className="p-3 transition-opacity bg-purple-500 rounded-s hover:opacity-70"
        >
          &#10094;
        </button>
        <img
          className="max-w-[600px] max-h-[400px] min-w-[100px]"
          src={photoData[photoCount]}
          alt="gallery"
        ></img>
        <button
          onClick={rightButtonClick}
          className="p-3 transition-opacity bg-purple-500 rounded-e hover:opacity-70"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}
