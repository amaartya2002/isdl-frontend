import React from "react";
import { COLLEGE_PHOTO } from "../utils/constant";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-8 text-center">
        <h1 className="text-4xl font-bold mb-8">Welcome to !</h1>
        <h1 className="text-4xl font-bold mb-8">Exam Management Portal</h1>

        {/* <div>
        <img
          src={COLLEGE_PHOTO}
          alt="CollegePhoto"
          className="mx-auto max-w-full h-auto max-h-48 mb-8 rounded-lg mt-4 "
        />
      </div> */}

        <h3 className="text-lg mb-8">
          With the use of this WebApp, students will be able to view their
          schedule of their exams and their seating arrangements. This WebApp is
          beneficial to the staff as well. They can see their invigilation
          schedules and apply for leave in case of any emergency. The admin will
          be the Moderator of this WebApp, who will send the exam schedule with
          the seating arrangement and will also approve or reject the requests
          of the staff and can see the overall maintenance of the Examination.
        </h3>
      </div>
    </>
  );
};

export default Home;
