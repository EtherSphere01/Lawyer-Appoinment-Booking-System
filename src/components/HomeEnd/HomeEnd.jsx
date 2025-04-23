import React from "react";
import CountUp from "react-countup";

const HomeEnd = () => {
  return (
    <div>
      <div className="my-10">
        <div>
          <h1 className="text-3xl text-center pb-2 font-bold">
            We Provide Best Low Services
          </h1>
          <p className="text-center text-gray-500 lg:w-3/4 mx-auto">
            Our platform connects you with verified, experienced Lawyers across
            various specialties — all at your convenience.
          </p>
        </div>

        <div className="mt-7 flex items-center justify-center gap-5 flex-wrap">
          <div className="h-35 w-40 bg-[#0f0f0f25] rounded-2xl flex flex-col p-3.5 gap-2">
            <img
              src="./assets/success-doctor.png"
              alt=""
              className="h-10 w-10"
            />
            <h1 className="text-3xl font-bold">
              <CountUp end={199} enableScrollSpy={true} />+
            </h1>
            <p>Total Lawyer</p>
          </div>

          <div className="h-35 w-40 bg-[#0f0f0f25] rounded-2xl flex flex-col p-3.5 gap-2">
            <img
              src="./assets/success-review.png"
              alt=""
              className="h-10 w-10"
            />
            <h1 className="text-3xl font-bold">
              <CountUp end={547} enableScrollSpy={true} />+
            </h1>
            <p>Total Reviews</p>
          </div>

          <div className="h-35 w-40 bg-[#0f0f0f25] rounded-2xl flex flex-col p-3.5 gap-2">
            <img
              src="./assets/success-patients.png"
              alt=""
              className="h-10 w-10"
            />
            <h1 className="text-3xl font-bold">
              <CountUp end={1900} enableScrollSpy={true} />+
            </h1>
            <p>Cases Initiated</p>
          </div>

          <div className="h-35 w-40 bg-[#0f0f0f25] rounded-2xl flex flex-col p-3.5 gap-2">
            <img
              src="./assets/success-staffs.png"
              alt=""
              className="h-10 w-10"
            />
            <h1 className="text-3xl font-bold">
              <CountUp end={300} enableScrollSpy={true} />+
            </h1>
            <p>Total Stuffs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeEnd;
