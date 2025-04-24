import React, { useState } from "react";
import Lawyer from "../Lawyer/Lawyer";

const Lawyers = ({ data }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleLawyers = showAll ? data : data.slice(0, 10);

  return (
    <div className="pt-5">
      <div>
        <h1 className="text-3xl text-center pb-5 font-bold">
          Our Best Lawyers
        </h1>
        <p className="text-center text-gray-500 pb-13 lg:w-3/4 mx-auto">
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-2 md:mx-0">
        {visibleLawyers.map((lawyer, index) => (
          <Lawyer key={index} lawyer={lawyer} />
        ))}
      </div>

      <div className="text-center mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="btn hover:bg-[#0ea10627] hover:text-black bg-[#0EA106] text-white rounded-4xl px-6 py-2"
        >
          {showAll ? "Show Less" : "Show All Lawyer"}
        </button>
      </div>
    </div>
  );
};

export default Lawyers;
