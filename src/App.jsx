import { useState } from "react";
import IncrementBtn from "./components/IncrementBtn";
import DecrementBtn from "./components/DecrementBtn";
import ResetBtn from "./components/reset";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="px-5 py-3">
        <div className="max-w-90">
          <h1 className="font-bold text-3xl mx-auto w-fit">Counter</h1>
          <h2
            className={`mt-5 mb-5 bg-gray-400 mx-auto w-fit px-3 py-1.5 font-bold text-2xl rounded-md ${
              count > 0
                ? "text-green-300"
                : count < 0
                ? "text-red-400"
                : "text-blue-400"
            }`}
          >
            {count}
          </h2>
        </div>

        <div
          className="flex
        gap-3"
        >
          <DecrementBtn setCount={() => setCount(count - 1)} />
          <ResetBtn setCount={() => setCount(0)} />
          <IncrementBtn setCount={() => setCount(count + 1)} />
        </div>
      </div>

      {/* ==================================
===================================
================================
=============================
 */}

      {/* <h1 className="capitalize font-bold text-2xl m-4 ">favicon generator</h1>
      <div
        className=" m-4 md:flex gap-5
    "
      >
        <FavGen
          fColor={"bg-green-400"}
          fTitle={"    PNG → ICO"}
          fSub={"image"}
        />

        <FavGen fColor={"bg-red-400"} fTitle={"    TEXT → ICO"} fSub={"text"} />

        <FavGen fColor={"bg-blue-400"} fTitle={"    😎 → ICO"} fSub={"emoji"} />
      </div>
      <h1 className="capitalize font-bold text-2xl mt-20 ml-5 mb-3 ">
        resources
      </h1>

      <div className="md:flex gap-2  mr-3 ml-3 ">
        <Res
          rTitle={"What is a favicon?"}
          rP={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
        <Res
          rTitle={"Install: favicon.ico"}
          rP={"Lorem ipsum dolor sit amet consectetur."}
        />
        <Res
          rTitle={"Install: favicon.png"}
          rP={"Lorem ipsum dolor sit amet consectetur."}
        />
        <Res
          rTitle={"Squarespace Favicon"}
          rP={" Lorem ipsum dolor sit amet consectetur adipisicing."}
        />
        <Res
          rTitle={"Logo Generator"}
          rP={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, eaque ex! Vero asperiores neque explicabo?"
          }
        />
      </div> */}
    </>
  );
};

export default App;
