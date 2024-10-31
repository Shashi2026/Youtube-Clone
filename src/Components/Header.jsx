import React from "react";

const Header = () => {
  return (
    <div className="flex w-[100vw] justify-between ">
      <div className="flex ">
        <img src="/src/menu.svg" className="w-7 h-8 mb-6" />
        <img src="/src/icon1.svg" className="w-10 h-10 ml-8" />
      </div>
      <div class="flex w-[100vw] max-w-md border border-gray-300 rounded-full shadow-md overflow-hidden items-center justify-center    ">
        <input
          type="text"
          id="searchInput"
          placeholder="Search"
          class="w-full p-3 outline-none text-gray-800 text-lg"
        />
        <button class="bg-gray-100 hover:bg-gray-200 text-white px-5 flex items-center justify-center">
          🔍
        </button>
      </div>
      <img className=" w-9 ml-5" src="/src/mic.svg" />
    </div>
  );
};

export default Header;
