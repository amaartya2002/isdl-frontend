import React from "react";

const Card = (props) => {

  return (
    <div className="flex  items-center h-auto mt-16">
      <div className="max-w-sm p-6 ml-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            CS001 mid term
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Exam Date - 7th Dec 2023
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Assigned as - Course Coordinator
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Exam Time - 12pm to 3pm
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Duration - 180 mins
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Assigned Venue - lt1
        </p>
        {props.useCase==='invigilator'&&
        <button
          onClick={()=>props.handleLeave(props.id)}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Request for leave
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>}
        <button   ></button>
      </div>
    </div>
  );
};

export default Card;
