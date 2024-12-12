"use client";

import { GoSearch } from "react-icons/go";

const Input = () => {
  return (
    <form className="flex gap-2 items-center text-gray-500 max-sm:w-1/3 ">
      <button>
        <GoSearch />
      </button>

      <input type="text" className="p-1 outline-none max-sm:w-full " />
    </form>
  );
};

export default Input;
