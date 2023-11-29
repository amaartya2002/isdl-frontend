import React from "react";
import Navbar from "./Navbar";

function SeatingPlan() {
  return (
    <div>
      <Navbar />
      <section>
        <section className="flex flex-wrap">
          <div className="flex flex-col">
            <label htmlFor="i1">Students List</label>
            <input type="file" id="i1" accept=".excel" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="i2">Invigilator list</label>
            <input type="file" id="i2" accept=".excel" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="i3">Lecture hall list</label>
            <input type="file" id="i3" accept=".excel" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="i4">Exam Schedule</label>
            <input type="file" id="i4" accept=".excel" />
          </div>
          <button className="">Generate Seating Plan</button>
        </section>
      </section>
    </div>
  );
}

export default SeatingPlan;
