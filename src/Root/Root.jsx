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
            Loading...
          </div>
        }
      >
        <Outlet></Outlet>
      </Suspense>
      <Footer></Footer>
    </div>
  );
};

export default Root;
