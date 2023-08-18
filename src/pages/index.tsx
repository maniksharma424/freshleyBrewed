import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdMusicNote } from "react-icons/md";
import Link from "next/link";
import Head from "next/head";

const auth = () => {
  useEffect(() => {
    toast.info("Click on any button to navigate to  home Page", {
      position: "top-right",
      autoClose: 15000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }, []);

  return (
    <>
      <Head>
        <title>Auth</title>
      </Head>
      <div className="w-full h-screen flex justify-center items-center bg-custom-bg bg-cover bg-no-repeat font-monstreat">
        <ToastContainer />
        <div className="border-[1px] lg:w-1/3 sm:h-3/4 sm:w-2/4 sm:3/4 w-2/3 h-3/5 bg-[#21211f] border-[#21211f] rounded-xl lg:p-10 sm:p-8 p-5 flex flex-col justify-evenly">
          <div
            id="comletions"
            className="flex justify-between w-full h-[10px] items-center"
          >
            <p className="w-1/5 h-[3px] border-[1px] border-gray-500 bg-[#939694] rounded-lg"></p>
            <p className="w-1/5 h-[3px] border-[1px] border-gray-500 bg-[#939694] rounded-lg"></p>
            <p className="w-1/5 h-[3px] border-[1px] border-gray-500 bg-[#939694] rounded-lg"></p>
            <p className="w-1/5 h-[3px] border-[1px] border-gray-500 bg-[#939694] rounded-lg"></p>
          </div>
          <p className="w-full flex justify-end text-gray-400 text-[12px]">
            Skip
          </p>

          <div
            id="welcome"
            className="w-full h-1/4 flex flex-col justify-center items-center"
          >
            <h1 className="lg:text-[25px] sm:text-[24px] text-[18px] text-white font-[500] tracking-widest">
              Welcome to Musify!
            </h1>

            <button className="bg-[#ffc0cb] rounded-full lg:p-4 sm:p-2 p-2 mt-2">
              <MdMusicNote className="text-black lg:text-[50px] sm:text-[40px] text-[35px]" />
            </button>
            <button className="lg:w-7 lg:h-7 sm:w-5 sm:h-5 w-4 h-4   rounded-[25px] relative bottom-6 left-6 bg-[#f71b1b] text-white flex justify-center items-center lg:text-[20px] sm:text-[15px] text-[10px]">
              +
            </button>
          </div>

          <div
            id="inputs"
            className="w-full h-2/5 text-gray-200 lg:text-[13px] sm:text-[11px] text-[10px] font-[300] flex flex-col justify-around "
          >
            <label htmlFor="" className="flex flex-col">
              Full name
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your full name"
                className="rounded-3xl bg-gray-200 p-2 text-gray-500 text-[7px] sm:text-[8px] lg:text-[10px] mt-1"
              />
            </label>
            <label htmlFor="" className="flex flex-col">
              Username
              <input
                type="text"
                name=""
                id=""
                placeholder="Create your username"
                className="rounded-3xl bg-gray-200 p-2 text-gray-500 text-[7px] sm:text-[8px] lg:text-[10px] mt-1"
              />
            </label>
            <label htmlFor="" className="flex flex-col">
              Location
              <input
                type="text"
                name=""
                id=""
                placeholder="Choose your Location"
                className="rounded-3xl bg-gray-200 p-2 text-gray-500 text-[7px] sm:text-[8px] lg:text-[10px] mt-1"
              />
            </label>
          </div>

          <div
            id="buttons"
            className="w-full h-1/6 flex justify-between items-center text-white lg:text-[13px] sm:text-[11px] text-[10px] font-[300] flex-wrap"
          >
            <button className="py-2 w-2/5 rounded-3xl bg-black text">
              <Link href={"/home"}>Back</Link>
            </button>

            <button className="py-2 w-2/5 rounded-3xl bg-[#f71b1b] text">
              <Link href={"/home"}>Next</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default auth;
