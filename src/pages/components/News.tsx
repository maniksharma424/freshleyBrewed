import React from "react";
import { AiOutlineLineChart } from "react-icons/ai";
import { FaGuitar } from "react-icons/fa";
import { FaRoad } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { PiCalculatorFill } from "react-icons/pi";
import { FaHeadphones } from "react-icons/fa";
const News = () => {
  const styleBox =
    "flex flex-col items-center justify-center lg:w-[150px] sm:w-[90px] w-[80px] border-[1px] border-black lg:p-3 sm:p-2 p-1 rounded-2xl m-1";
    const styleText = 'text-[14px]'
  return (
    <div className=" h-fit py-7 w-full lg:pr-20 sm:pr010 pr-0">
      <h1 className=" lg:text-[30px] sm:text-[28px] text-[24px] mb-5 flex lg:justify-start sm:justify-start justify-center">
        Latest News
      </h1>
      <ul id="newsContainer" className="w-full flex lg:justify-between sm:justify-between justify-center flex-wrap">
        <li className={styleBox}>
          <AiOutlineLineChart className="font-[700] text-[25px]" />
          <p className={styleText}>Musicians</p>
        </li>
        <li className={styleBox}>
          <FaGuitar className="font-[700] text-[25px]" />
          <p className={styleText}>Instrument</p>
        </li>

        <li className={styleBox}>
          <FaRoad className="font-[700] text-[25px]" />
          <p className={styleText}>Journey</p>
        </li>
        <li className={styleBox}>
          <BsMusicNoteBeamed className="font-[700] text-[25px]" />
          <p className={styleText + ' h-1/3 w-full flex justify-center'}>MusicNotes</p>
        </li>
        <li className={styleBox}>
          <FaHeadphones className="font-[700] text-[25px]" />
          <p className={styleText}>Podcast</p>
        </li>
        <li className={styleBox}>
          <FaLightbulb className="font-[700] text-[25px]" />
          <p className={styleText}>Tips</p>
        </li>
        <li className={styleBox}>
          <PiCalculatorFill className="font-[700] text-[25px]" />
          <p className={styleText}>Updates</p>
        </li>
      </ul>
    </div>
  );
};

export default News;
