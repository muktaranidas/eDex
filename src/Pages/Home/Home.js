import React from "react";
import Banner from "./Banner/Banner";
import Instructor from "./Instructor/Instructor";
import PopularCategory from "./PopularCategory/PopularCategory";
import Course from "./Course/Course";
import StudentFeedback from "./StudentFeedback/StudentFeedback";
import About from "./About/About";

const Home = () => {
  return (
    <div>
      {/* <Banner></Banner> */}
      <Course></Course>
      <PopularCategory></PopularCategory>
      <Instructor></Instructor>
      <StudentFeedback></StudentFeedback>
      <About></About>
    </div>
  );
};

export default Home;
