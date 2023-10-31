import React from "react";
import Layout from "../components/Layout";

function Projects() {
  return (
    <Layout>
      <div className="md:h-screen">
      <h1 className="text-white text-4xl mx-20 mt-20 mb-2 font-bold font-serif">
          Projects
        </h1>
        <div className="grid grid-cols-2 h-full pl-36 pr-10 md:grid-cols-1 font-semibold md:max-h-screen  font-serif justify-between w-full  text-white">
          <div className=" px-3  w-4/5 h-48 rounded-xl bg-slate-700">
           
             <h1 className="text-white mx-12 text-2xl">Bank Management System</h1>
            <p className="">
              I attended at Bako Secondary School and obtained my high school
              diploma. I have since pursued higher education by earning a pass
              mark and joining a university and eager to expand my knowledge and
              skills.
            </p>
          </div>

          <div className=" px-3 w-4/5  h-48  rounded-xl bg-slate-700">
              <h1 className="text-white mx-12 text-2xl">Quiz App</h1>
            <p>
              I am currently attending a five-year computer science and
              engineering course at Adama Science and Technology University. As
              a third-year student, I have already completed a significant
              portion of the program.
            </p>
          </div>
         
          <div className=" px-3  w-4/5 h-48 rounded-xl bg-slate-700">
           
             <h1 className="text-white mx-12 text-2xl">House Sell And Rental App</h1>
            <p className="">
              I attended at Bako Secondary School and obtained my high school
              diploma. I have since pursued higher education by earning a pass
              mark and joining a university and eager to expand my knowledge and
              skills.
            </p>
          </div>
          <div className=" px-3  w-4/5 h-48 rounded-xl bg-slate-700">
  
            <h1 className="text-white mx-12 text-2xl">Library Management App</h1>
            <p >
              I attended at Bako Secondary School and obtained my high school
              diploma. I have since pursued higher education by earning a pass
              mark and joining a university and eager to expand my knowledge and
              skills.
            </p>
          </div>
        </div>
     
      </div>
    </Layout>
  );
}

export default Projects;
