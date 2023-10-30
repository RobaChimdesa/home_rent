import React, { useState } from "react";
import Layout from "../components/Layout";

function About() {
  const[showmore,setShowmore]=useState(false)
  const discriptin=<p>My passion for learning and my drive to 
    succeed make me a dedicated and motivated software engineering 
    student. With my strong foundation in web development and 
    competitive programming, I’m well-positioned to excel in his 
    future career as a software engineer.</p>
   const handleshow=()=>{
    setShowmore(!showmore)
   }    
  return (
    <Layout>
      <div className="h-screen">
      <h1 className="text-white text-4xl m-6 font-bold font-serif">About Me</h1>
       <div className="grid h-screen  w-full grid-cols-2 md:grid-cols-1 text-white  font-serif">
       
        <div className="w-full md:w-1/2  text-2xl md:text:xl text-left m-20 my-3">
          <p className="text-left">My name is Ephrem Getachew. I'm a 3rd-year software engineering student at Adama Science and Technology University. I have a strong interest in web development and competitive programming, and am constantly seeking to improve my skills in these areas.</p>
           <p className="text-left text-justify-center"> I'm a self-motivated learner who is eager to explore new technologies and programming languages. I enjoy taking on new challenges and solving complex problems, which has led me to 
            develop a keen interest in competitive programming.</p>  <button onClick={handleshow}  className="bg-blue-700 hover:bg-blue-500 p-2 px-6 rounded-3xl my-4 mx-28 md:my-2 md:px-3 md:mx-28 md:p-0">
            {showmore?'Hide':'Show' } Details
          </button>
          {showmore && discriptin}
           </div>
         <div className="w-1/2 m-28 ">
          <img src="logo512.png" alt="" />
        </div>
       </div>
      </div>
    </Layout>
  );
}

export default About;
