import React, { use, useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Lawyers from "../Lawyers/Lawyers";
import { useLoaderData, useLocation, useNavigate } from "react-router";
import HomeEnd from "../../components/HomeEnd/HomeEnd";
import { toast, ToastContainer } from "react-toastify";

const Home = () => {
  const data = useLoaderData();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location?.state?.loginSuccessful) {
      window.location.reload();
      toast.success("Welcome to Law.BD!");
      navigate(location.pathname, { replace: true });
    } else if (location?.state?.google) {
      window.location.reload();
      toast.success("Google Sign In Successful!");
      navigate(location.pathname, { replace: true });
    }
  }, [location.state]);
  return (
    <div>
      <div>
        <Banner></Banner>

        <Lawyers data={data}></Lawyers>

        <HomeEnd></HomeEnd>
      </div>

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

export default Home;
