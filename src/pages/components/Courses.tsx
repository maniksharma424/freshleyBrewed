import React from "react";
import courseData from "../../db/courses.json";
import CourseCard from "./CourseCard";
const Courses = () => {
  return (
  <div className="   h-fit  w-full ">
      <h1 className=" lg:text-[30px] sm:text-[28px] text-[24px] mb-5 flex lg:justify-start sm:justify-start justify-center">
        Featured Courses
      </h1>
      <div
        id="Course-container"
        className="w-full h-1/3 flex lg:justify-between sm:justify-between justify-center items-center flex-wrap"
      >
        {courseData.map((course) => (
          <CourseCard key={course?.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
