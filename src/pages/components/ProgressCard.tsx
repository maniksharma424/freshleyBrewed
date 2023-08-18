import React from "react";
import { BsBookmarkFill } from "react-icons/bs";
interface prop {
  progress: {
    id: number;
    title: string;
    author: string;
    completed: string;
    imageUrl: string;
  };
}
const ProgressCard: React.FC<prop> = ({ progress }) => {
  return (
    <div className="flex p-1 lg:w-[35rem] md:w-full sm:w-full w-full 
    lg:h-[150px] 
    border-[1px] border-gray-500 rounded-2xl m-1 lg:text-[13px] lg:font-[300] sm:text-[12px] sm:font-[200] text-[9px]  font-[200]">
      <img
        src={progress?.imageUrl}
        alt="img"
        className="w-1/3 h-full rounded-xl bg-contain bg-inherit"
      />
      <div id="info" className="w-3/4 py-1 px-4">
        <p className="w-full flex justify-between ">
          <span className="lg:text-[15px] font-[700] sm:text-[14px] text-[12px]">
            {progress?.title}
          </span>
          <span className="p-2 rounded-2xl bg-[#f71b1b] text-white">
            <BsBookmarkFill />
          </span>
        </p>
        <p className="relative bottom-2 font-[400] text-gray-500">
          {progress?.author}
        </p>
        <div className="w-full border-[2px] border-gray-500 mt-9"></div>
        <p className="text-gray-500 mt-2">{progress?.completed}</p>
      </div>
    </div>
  );
};
export default ProgressCard;
