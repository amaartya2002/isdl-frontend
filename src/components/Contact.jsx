import React from "react";
import ContactCard from "../utils/COntactCard";
import Navbar from "./Navbar";
export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center w-full h-full gap-5 p-6">
        <ContactCard />
        <ContactCard />
      </div>
    </>
  );
}
