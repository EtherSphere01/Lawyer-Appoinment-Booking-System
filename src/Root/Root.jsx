import React, { Suspense, useDebugValue } from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import useDynamicTitle from "../utilities/useDynamicTitle";
import LoadingScreen from "../Pages/LoadingPage/LoadingScreen";

const Root = () => {
  useDynamicTitle();
  return (
    <div className="container mx-auto mulish">
      <Header></Header>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <span className="loading loading-bars loading-xl"></span>
            {/* <LoadingScreen></LoadingScreen> */}
          </div>
        }
      >
        <Outlet />
      </Suspense>
      <Footer></Footer>
    </div>
  );
};

export default Root;
