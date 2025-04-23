import React from "react";

const Banner = () => {
  return (
    <div className="my-10">
      <div className="hero min-h-[50vh]  ">
        <img
          src="./assets/banner-img-1.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center lg:w-2/3 mx-auto">
          <div className="">
            <h1 className="mb-5 lg:text-5xl text-3xl font-bold">
              It avoids subjective claims or exaggeration that might raise red
              flags legally
            </h1>
            <p className="pt-5 text-xs font-normal text-center lg:w-3/4 mx-auto text-gray-300">
              Our platform connects you with verified, experienced doctors
              across various specialties — all at your convenience. Whether it's
              a routine checkup or urgent consultation, book appointments in
              minutes and receive quality care you can trust.
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
