import { useState } from "react";

const CustomBtn = ({ color, text, setCount }) => {
  return (
    <>
      <button
        className={`${color} px-3 py-1 text-lg font-medium cursor-pointer border mt-3 rounded-lg uppercase `}
        onClick={setCount}
      >
        {text}
      </button>
    </>
  );
};

export default CustomBtn;
