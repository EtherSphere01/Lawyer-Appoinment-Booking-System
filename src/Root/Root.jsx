import React, { Suspense } from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <div className="container mx-auto mulish">
      <Header></Header>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <span className="loading loading-bars loading-xl"></span>
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
