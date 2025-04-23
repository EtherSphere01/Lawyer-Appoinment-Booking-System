import React from "react";
import Banner from "../Banner/Banner";
import Lawyers from "../Lawyers/Lawyers";
import { useLoaderData } from "react-router";
import HomeEnd from "../../components/HomeEnd/HomeEnd";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner></Banner>

      <Lawyers data={data}></Lawyers>

      <HomeEnd></HomeEnd>
    </div>
  );
};

export default Home;
