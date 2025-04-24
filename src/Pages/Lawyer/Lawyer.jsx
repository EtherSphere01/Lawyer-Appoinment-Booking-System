import React from "react";
import { Link } from "react-router";

const Lawyer = ({ lawyer }) => {
  const {
    image,
    name,
    speciality,
    experience,
    license_number,
    consultation_fee,
    availability,
  } = lawyer;
  return (
    <div>
      <div className="border-1 rounded-2xl flex flex-col lg:flex-row md:justify-around items-center lg:items-center justify-center p-3">
        {/* image */}

        <div className="h-52 w-52 rounded object-cover">
          <img src={image} alt="" className="h-full w-full p-3 rounded-2xl" />
        </div>

        {/* content */}

        <div className="flex flex-col justify-between mt-4 lg:mt-0">
          <div className="flex items-center justify-start gap-5">
            <p className="bg-[#09982f2d] text-[#09982F] rounded-4xl w-22 text-center text-xs p-1">
              Available
            </p>
            <p className="bg-[#1769e52d] text-[#176AE5] rounded-4xl p-1 text-center w-30 text-xs">
              {experience} Experience
            </p>
          </div>

          <div className="mt-2 text-center lg:text-start">
            <p className="text-2xl font-bold">{name}</p>
          </div>
          <div>
            <p className="text-gray-600 text-center lg:text-start mt-2">
              {speciality}
            </p>
          </div>
          <div className="flex items-center justify-start gap-2 text-center lg:text-start mt-2">
            <div className="h-4 w-4 rounded-full border-1 flex items-center justify-center text-xs border-gray-600 text-gray-600">
              R
            </div>
            <p className="text-gray-600">License Number: {license_number}</p>
          </div>
          <div className="mt-2 ">
            <button className="btn w-full border-1 border-gray-400 rounded-4xl text-center text-[#176AE5] bg-white hover:bg-[#1769e52d] hover:text-[#176AE5] lg:w-70 h-auto p-1">
              <Link to={`/lawyerDetails/${license_number}`}>View Details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lawyer;
