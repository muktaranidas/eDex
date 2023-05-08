import React from "react";
import Banner from "./Banner/Banner";
import Instructor from "./Instructor/Instructor";
import PopularCategory from "./PopularCategory/PopularCategory";
import Course from "./Course/Course";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Course></Course>
      <PopularCategory></PopularCategory>
      <Instructor></Instructor>
    </div>
  );
};

export default Home;
