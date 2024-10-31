import React from "react";

const sidebar = () => {
  return (
    <>
      {dataset.map((d, index) => (
        <div key={index}>
          <button className="border border-black hover:bg-gray-200  rounded-2xl pl-3 pr-3 pt-1 pb-1 bg-gray-100 font-medium ">
            {d.name}
          </button>
        </div>
      ))}
    </>
  );
};

const dataset = [
  { name: "All" },
  { name: "Comedy Clubs" },
  { name: "Indian pop music" },
  { name: "Podcasts" },
  { name: "Gaming" },
  { name: "T-series" },
  { name: "Movies" },
  { name: "Roasts" },
  { name: "Albums" },
  { name: "Hip hop" },
];
export default sidebar;
