import React from "react";

const Navbar = () => {
  return (
    <>
      {data.map((d, index) => (
        <div key={index} className="flex ml-7 mb-6 w-[15%] ">
          <img src={d.img} className="w-6 h-6" />
          <h1 className="ml-8">{d.name}</h1>
        </div>
      ))}
    </>
  );
};

const data = [
  {
    img: "/src/icon2.svg",
    name: "Home",
  },
  {
    img: "/src/icon3.svg",
    name: "Shorts",
  },
  {
    img: "/src/icon4.png",
    name: "You",
  },
  {
    img: "/src/icon5.png",
    name: "History",
  },
  {
    img: "/src/icon6.png",
    name: "Music",
  },
  {
    img: "/src/icon7.png",
    name: "Movies",
  },
  {
    img: "/src/icon8.png",
    name: "Live",
  },
  {
    img: "/src/icon9.png",
    name: "Gaming",
  },
  {
    img: "/src/icon10.png",
    name: "News",
  },
  {
    img: "/src/icon11.png",
    name: "Trending",
  },
  {
    img: "/src/icon12.png",
    name: "Shopping",
  },
];

export default Navbar;
