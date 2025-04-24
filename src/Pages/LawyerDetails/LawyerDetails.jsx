import React from "react";
import { Link, useLoaderData, useParams } from "react-router";

const LawyerDetails = () => {
  const { id } = useParams();
  const lawyer_details = useLoaderData();
  const lawyerDetails = lawyer_details.find(
    (lawyer) => lawyer.license_number === id
  );

  const {
    image,
    name,
    speciality,
    experience,
    license_number,
    consultation_fee,
    availability,
  } = lawyerDetails;

  return (
    <div className="flex flex-col gap-5 md:my-10 my-2">
      <div className="rounded-2xl w-full bg-gray-200 h-auto flex flex-col items-center justify-center p-8 mx-2 md:mx-0">
        <h1 className="md:text-4xl text-2xl font-bold pb-3 text-center">
          Lawyer's Profile Details
        </h1>
        <p className="text-center text-gray-500 pb-5 lg:w-3/4 mx-auto">
          Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor
          amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis
          turpis imperdiet mattis donec dignissim volutpat.
        </p>
      </div>

      <div>
        <div className="border-1 border-gray-300 rounded-2xl flex flex-col md:flex-row md:justify-start md:gap-20 items-center lg:items-center justify-center p-3 mx-2 md:mx-0">
          {/* image */}

          <div className="h-52 w-52 rounded object-cover">
            <img src={image} alt="" className="h-full w-full p-3 rounded-2xl" />
          </div>

          {/* content */}

          <div className="flex flex-col justify-start mt-4 lg:mt-0">
            <div className="flex items-center md:justify-start justify-center gap-5">
              <p className="bg-[#1769e52d] text-[#176AE5] rounded-4xl p-1 text-center w-30 text-xs">
                {experience} Experience
              </p>
            </div>

            <div className="mt-2 text-center md:text-start">
              <p className="text-2xl font-bold">{name}</p>
            </div>
            <div className="flex flex-col md:flex-row md:gap-6 ">
              <p className="text-gray-600 text-center lg:text-start mt-2">
                {speciality}
              </p>

              <div className="flex items-center justify-center gap-2 text-center lg:text-start mt-2">
                <div className="h-4 w-4 rounded-full border-1 flex items-center justify-center text-xs border-gray-600 text-gray-600">
                  R
                </div>
                <p className="text-gray-600">
                  License Number: {license_number}
                </p>
              </div>
            </div>
            <div>
              <p className="flex gap-2 pt-2 flex-col md:flex-row items-center justify-center md:justify-start">
                Availability
                <div className="flex gap-2">
                  {availability.map((day, index) => (
                    <p
                      key={index}
                      className="bg-[#09982f2d] text-[#09982F] rounded-4xl w-22 text-center text-xs p-1"
                    >
                      {day}
                    </p>
                  ))}
                </div>
              </p>
            </div>

            <div className="mt-3 text-center md:text-start ">
              <p>
                Consultation Fee:{" "}
                <span className="text-green-700">Taka {consultation_fee}</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-2 md:mx-0 w-full border-1 border-gray-300 p-3 rounded-2xl">
        <div className="border-b-1 border-dashed border-gray-300 p-3">
          <h1 className="text-2xl font-bold text-center">
            Book an Appointment
          </h1>
        </div>

        <div className="flex items-center justify-between border-b-1 border-dashed border-gray-300 p-3">
          <p>Availability</p>
          <p className="bg-[#09982f2d] text-[#09982F] rounded-4xl text-center text-xs py-1 px-2">
            Lawyer Available Today
          </p>
        </div>

        <div className="border-b-1 border-dashed border-gray-300 p-3 ">
          <p className="text-center text-xs bg-[#ffa20021] text-yellow-700 rounded-2xl px-2 py-1">
            Due to high patient volume, we are currently accepting appointments
            for today only. We appreciate your understanding and cooperation.
          </p>
        </div>

        <div className="flex items-center justify-center pt-3">
          <button className="btn hover:bg-[#0ea10627] hover:text-black bg-[#0EA106] text-white rounded-4xl px-6 py-2 w-full">
            <Link to={"/my-bookings"}>Book Appointment Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LawyerDetails;
