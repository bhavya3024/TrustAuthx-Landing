import Image from "next/image";
import React from "react";

function New() {
  return (
    <div className="-z-20    min-h-screen bg-black    py-12 text-gray-200">
      <div className="  flex flex-col items-center   ">
        <div className="flex max-h-[738px] w-full  max-w-[1240px] flex-col gap-14  rounded-3xl  px-4">
          <div className="   text-4xl font-semibold  ">
            TrustAuthx is the world’s most Easiest and
            <br />
            completely Managed Auth platform
          </div>

          <div className="flex items-center gap-2">
            <button className="flex items-center justify-center gap-2 rounded-full border border-white px-3 py-1">
              Get started <ArrowIcon />
            </button>

            <button className="flex items-center justify-center gap-2 rounded-full  border-white px-3 py-1">
              Schedule a demo <ArrowIcon />
            </button>
          </div>
        </div>
      </div>

      <div className="relative ">
        <div className="flex items-center justify-center px-4">
          <div className=" relative  z-10 mt-6  h-full max-h-[738px] w-full max-w-[1240px]  rounded-3xl  border border-white border-opacity-25 bg-white bg-opacity-5 p-12 shadow-inner">
            <img src="/page3.png" alt="imagetrustauthx" className="bg-cover" />
          </div>
        </div>

        <img
          src="./gradientbg.png "
          className="absolute top-1/2  w-screen -translate-y-1/2 bg-no-repeat"
        />
      </div>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="4"
      height="8"
      viewBox="0 0 4 8"
      fill="none"
    >
      <path
        d="M0.847656 6.62402L3.20716 4.26452C3.24208 4.22969 3.26979 4.18831 3.28869 4.14275C3.30759 4.09719 3.31733 4.04835 3.31733 3.99902C3.31733 3.9497 3.30759 3.90086 3.28869 3.8553C3.26979 3.80974 3.24208 3.76836 3.20716 3.73352L0.847656 1.37402"
        stroke="#F35815"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default New;
