import { useState } from "react";
import CustomBtn from "./button";

const DecrementBtn = ({ setCount }) => {
  return (
    <div>
      <CustomBtn text={"Decrement"} color={"bg-red-500"} setCount={setCount} />
    </div>

    // ===========================
    // =======================
    // ====================
    // =======================

    // <div className="shadow-lg  p-5 flex-1 ">
    //   <h1 className="mb-4 font-bold text-2xl">{rTitle}</h1>
    //   <p className="">{rP}</p>
    // </div>
  );
};

export default DecrementBtn;
