import React, { use, useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Lawyers from "../Lawyers/Lawyers";
import { useLoaderData, useLocation, useNavigate } from "react-router";
import HomeEnd from "../../components/HomeEnd/HomeEnd";
import { toast, ToastContainer } from "react-toastify";
import { getCurrentUser } from "../../utilities/firebaseDB";

const Home = () => {
  const data = useLoaderData();

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
