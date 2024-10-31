import React from "react";

const Templates = () => {
  return (
    <>
      <div className="">
        <img className=" rounded-xl w-85 h-85" src="/src/1.png" />
      </div>
      <div className="flex mt-3">
        <img className="rounded-full w-10 h-10 " src="/src/4.png" />
        <p className="font-semibold ml-3">
          BTDT (Been There Done That)- Visualiser | Bilal Saeed, Talha Anjum
        </p>

        <img className="w-4 h-4" src="./src/dots.png" />
      </div>
      <div className="ml-12 mt-1">
        <p className="text-gray-500 font-medium">One Two Records</p>
        <p className="text-gray-500 font-medium">22K views • 1 day</p>
      </div>
    </>
  );
};

export default Templates;
