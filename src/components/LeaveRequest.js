import React from "react";
import Navbar from "./Navbar";

const LeaveRequest = () => {

  
  return (
    <>
      <Navbar />
      <div className="relative flex flex-col overflow-hidden items-center justify-center min-h-screen  ">
        <div className="flex flex-col p-4 gap-4 border-solid border-black border-x border-y w-11/12 rounded-md ">
          <h2 className="text-center font-bold text-lg mt-4">
            Apply For Leave
          </h2>

          <div className="mb-2 ">
            <label
              htmlFor="small"
              className="text-sm font-semibold text-gray-800 "
            >
              Select Semester
            </label>
            <select
              id="selectExam"
              className="block w-full p-2 mt-2  text-black bg-sky-50 border rounded-md border-gray-300  focus:outline-none focus:ring focus:ring-opacity-40"
            >
              <option value="1">I</option>
              <option value="2">II</option>
              <option value="3">III</option>
            </select>
          </div>

          <div className="mb-2">
            <label
              htmlFor="selectExam"
              className="block text-sm font-semibold text-gray-800 "
            >
              Exam Type
            </label>
            <select
              id="selectExam"
              className=" block w-full p-2 mt-2 text-black bg-sky-50 border rounded-md border-gray-300  focus:outline-none focus:ring focus:ring-opacity-40"
            >
              <option value="quiz">Quiz</option>
              <option value="midTerm">Mid-Term</option>
              <option value="endTerm">End-Term</option>
            </select>
          </div>

          <div className="mb-2">
            <label
              htmlFor="base"
              className="text-sm font-semibold text-gray-800 "
            >
              Course Name
            </label>
            <input
              id="base"
              type="text"
              className="block w-full p-2 mt-2  text-black bg-sky-50 border rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="large"
              className="text-sm font-semibold text-gray-800 "
            >
              Reason for Leave
            </label>
            <input
              id="large"
              type="text"
              className="block w-full p-2 mt-2  text-black bg-sky-50 border rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mx-auto my-8 rounded-md border-solid border-black bg-green-500 text-center w-32 h-8 mt-2 px-2 py-1">
            <button color="submit">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaveRequest;
