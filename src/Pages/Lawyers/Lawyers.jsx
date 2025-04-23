import React from "react";
import Lawyer from "../Lawyer/Lawyer";

const Lawyers = ({ data }) => {
  

  return (
    <div className="pt-5">
      <div>
        <h1 className="text-3xl text-center pb-5">Our Best Lawyers</h1>
        <p className="text-center text-gray-500 pb-13 lg:w-3/4 mx-auto">
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {data.map((lawyer, index) => (
          <Lawyer key={index} lawyer={lawyer}></Lawyer>
        ))}
      </div>
    </div>
  );
};

export default Lawyers;
