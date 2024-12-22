import React from "react";

const Value = () => {
  return (
    <div className="mb-[4rem] mt-[]6rem">
      <h1 className="text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block">
        The value that holds us true to account
      </h1>

      <div className="grid gap-[10rem] grid-cols-3 items-center">
        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[100px] w-[40px] flex items-center justify-center">
              <img src="" alt="" className="w-[70%]" />
            </div>

            <span className="font-semibold text-textColor text -[18px]">
              Simplicity
            </span>
          </div>
          <p className="text-[13px] text-Color opacity-[.7] py-[1rem] font-semibold">
            Things being made beautiful simple are at the heart of everything we
            do.
          </p>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[100px] w-[40px] flex items-center justify-center">
              <img src="" alt="" className="w-[70%]" />
            </div>

            <span className="font-semibold text-textColor text -[18px]">
              Simplicity
            </span>
          </div>
          <p className="text-[13px] text-Color opacity-[.7] py-[1rem] font-semibold">
            Things being made beautiful simple are at the heart of everything we
            do.
          </p>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[100px] w-[40px] flex items-center justify-center">
              <img src="" alt="" className="w-[70%]" />
            </div>

            <span className="font-semibold text-textColor text -[18px]">
              Simplicity
            </span>
          </div>
          <p className="text-[13px] text-Color opacity-[.7] py-[1rem] font-semibold">
            Things being made beautiful simple are at the heart of everything we
            do.
          </p>
        </div>
      </div>

      <div className="card mt-[2rem] flex justify-between bg-white p-[5rem] rounded [10px]">
        <div>
          <h1 className="text-black  text-[30px] font-bold">
            Ready to switch a career?
          </h1>
          <button className="bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-400 transition-all duration-300 hover:translate-x-1 hover:translate-y-1">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Value;
