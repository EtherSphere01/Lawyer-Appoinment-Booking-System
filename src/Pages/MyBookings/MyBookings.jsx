import React, { useEffect, useState } from "react";
import { getData, removeData } from "../../utilities/database";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";

const MyBookings = () => {
  const [lawyers, setLawyers] = useState([]);
  const allLawyers = useLoaderData();
  useEffect(() => {
    const data = getData();
    const bookedLawyers = allLawyers.filter((lawyer) =>
      data.includes(lawyer.license_number)
    );
    setLawyers(bookedLawyers);
  }, []);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location?.state?.bookingSuccess) {
      toast.success("Booked Successfully!");
      navigate(location.pathname, { replace: true });
    }
  }, [location.state]);

  const handleCancel = (id) => {
    removeData(id);
    toast.success("Appointment Cancelled Successfully!");
    const updatedData = getData();
    const updatedLawyers = allLawyers.filter((lawyer) =>
      updatedData.includes(lawyer.license_number)
    );
    setLawyers(updatedLawyers);
  };

  return (
    <div>
      {lawyers.length > 0 ? (
        <div>
          <div className="pt-5 pb-10">
            <h1 className="text-2xl md:text-3xl font-bold text-center">
              My Today's Appointment
            </h1>
            <p className="text-center text-gray-500 pb-5 lg:w-3/4 mx-auto">
              Our platform connects you with verified, experienced Lawyers
              across various specialties — all at your convenience.
            </p>
          </div>
          <div className="flex flex-col gap-6 mx-2 md:mx-0 mb-6">
            {lawyers.map((lawyer) => (
              <div
                key={lawyer.id}
                className="border-1 border-gray-300 w-full bg-base-100 rounded-2xl h-auto p-5"
              >
                <div>
                  <h1 className="text-xl text-center md:text-start font-bold ">
                    {lawyer.name}
                  </h1>
                  <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 pt-2">
                    <p>{lawyer.speciality}</p>
                    <p>Appointment Fee: {lawyer.consultation_fee} Taka</p>
                  </div>
                  <button
                    onClick={() => handleCancel(lawyer.license_number)}
                    className="btn shadow-none text-center border-red-900 text-red-900 w-full border-1 rounded-4xl my-2 py-1"
                  >
                    Cancel Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen gap-7">
          <h1 className="text-2xl md:text-3xl font-bold">
            No Appointment Today
          </h1>
          <button className="btn hover:bg-[#0ea10627] hover:text-black bg-[#0EA106] text-white rounded-4xl px-6 py-2 w-auto ">
            <Link to={"/"}>Book an Appointment</Link>
          </button>
        </div>
      )}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default MyBookings;
