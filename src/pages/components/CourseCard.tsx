import React from "react";

import Avatar from "react-avatar";
import { AiFillClockCircle } from "react-icons/ai";
import { AiTwotoneStar } from "react-icons/ai";
interface prop {
  course: {
    id: number;
    name: string;
    title: string;
    time: string;
    rating: string;
    imageUrl: string;
    githubHandle:string
  };
}
const CourseCard: React.FC<prop> = ({ course }) => {

  return (
    <div
      className=" lg:w-[260px] lg:h-[210px] sm:w-[200px] sm:h-1/3 h-[150px] w-[145px]

     p-1 m-1 lg:text-[13px] lg:font-[300] sm:text-[12px] sm:font-[200] text-[9px]  font-[200] border-[1px] border-black rounded-3xl  "
    >
      <div id="image" className=" w-full h-1/2">
        <img
          alt="bg"
          src={course?.imageUrl}
          className="rounded-3xl w-full h-full bg-cover bg-no-repeat "
        />
      </div>

      <div className=" p-2 w-full h-1/2 flex flex-col justify-around">
        <button className="flex justify-between p-1 items-center w-fit lg:border-[0.5px] border-[1px] border-black rounded-2xl  bg-white relative bottom-6 ">
          <Avatar githubHandle={course?.githubHandle} size="25" round="25px" />
          <span className="mx-1">{course?.name}</span>
        </button>

        <span className="relative bottom-2">{course?.title}</span>

        <div className="w-full flex justify-between">
          <p className="flex items-center">
            <AiFillClockCircle className="mr-1" />
            {course?.time}
          </p>

          <p className="flex items-center">
            <AiTwotoneStar className="mr-1" />
            {course?.rating}
          </p>

          <button className="bg-[#f71b1b] p-1 w-1/4  rounded-2xl text-white">
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
