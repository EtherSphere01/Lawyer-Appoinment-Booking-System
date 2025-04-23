import React from "react";
import Banner from "../Banner/Banner";
import Lawyers from "../Lawyers/Lawyers";
import { useLoaderData } from "react-router";

const Home = () => {
    const data = useLoaderData();
  return (
    <div>
          <Banner></Banner>
          <Lawyers data={data} ></Lawyers>
    </div>
  );
};

export default Home;
