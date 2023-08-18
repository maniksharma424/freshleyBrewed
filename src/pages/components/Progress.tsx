import React from "react";
import progressData from "../../db/progress.json";
import ProgressCard from "./ProgressCard";


const Progress:React.FC = () => {
  return (
    <div className=" h-fit  w-full ">
      <h1 className=" lg:text-[30px] sm:text-[28px] text-[24px] mb-5 flex lg:justify-start sm:justify-start justify-center">
        My Progress
      </h1>
      <div
        id="Course-container"
        className="w-full h-fit  flex lg:justify-between sm:justify-between justify-center items-center flex-wrap"
      >
        {progressData.map((progress) => (
          <ProgressCard key={progress?.id} progress={progress} />
        ))}
      </div>
      <div className="w-full flex justify-center items-center py-5">
        <button className="bg-[#f71b1b] text-white px-10 py-1 relative top-5 rounded-2xl  ">
          View All
        </button>
      </div>
    </div>
  );
};

export default Progress;
