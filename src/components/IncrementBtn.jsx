import { useState } from "react";
import CustomBtn from "./button";

const IncrementBtn = ({ setCount }) => {
  return (
    <>
      <div>
        <CustomBtn text="Increment" setCount={setCount} color="bg-green-500" />
      </div>
    </>

    // ===================================================
    // ========================================
    // =======================================
    // ========================================

    // <div className="shadow-lg mt-3 rounded-lg overflow-hidden">
    //   <h1
    //     className={`${fColor} flex justify-center  h-40 font-bold text-4xl text-white items-center mb-3`}
    //   >
    //     {fTitle}
    //   </h1>
    //   <div className="p-4">
    //     <h3 className="text-2xl capitalize font-medium mb-2.5">{fSub}</h3>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore nisi
    //       ratione alias eos vel deleniti?
    //     </p>
    //   </div>
    // </div>
  );
};

export default IncrementBtn;
