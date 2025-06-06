import { useState } from "react";
import FavGen from "./components/favGen";
import Res from "./components/Res";
const App = () => {
  return (
    <div>
      <h1 className="capitalize font-bold text-2xl m-4 ">favicon generator</h1>
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
      </div>
    </div>
  );
};

export default App;
