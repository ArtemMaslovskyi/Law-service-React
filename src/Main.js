import React from "react";

export default function Main() {
  const handleScroll = () => {
    const element = document.getElementById("about-us");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-between">
      <div className="flex justify-center items-center w-[500px] max-w-[500px] flex-col">
        <h1 className="m-3 text-4xl text-center drop-shadow-text-shadow">
          Law service of the
        </h1>
        <h2 className="m-3 text-6xl font-bold text-center drop-shadow-text-shadow">
          University
        </h2>
        <p className="m-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A natus animi
          distinctio facere accusantium nihil doloremque ducimus rerum optio
          obcaecati asperiores, maxime dolore sit, perferendis dignissimos
          praesentium quia magni
        </p>
        <button
          onClick={handleScroll}
          className="w-20 p-1 text-white bg-purple-500 rounded hover:animate-pulseBeat"
        >
          About Us
        </button>
      </div>
      <img
        className="relative w-full h-full object-cover min-w-[125px] max-w-[600px] -z-10 left-[-60px]"
        src="https://cdn-icons-png.flaticon.com/512/11625/11625060.png"
        alt="img"
      ></img>
    </div>
  );
}
