import React from "react";
import { Typewriter } from 'react-simple-typewriter'
import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <div>
        <div className="  h-screen bg-indigo-950">

          <div className=" grid  md:grid-cols-1 grid-cols-2 mx-10 z-10
          items-center">

          <div className="items-center h-1/2  font-bold text-white md:px-5">
            <h1 className=" font-sans text-7xl md:text-4xl  ">Hi I am Student</h1>
            <h1><b className="text-red-500 text-8xl">@ astu</b></h1>
            <h1>
              <Typewriter
               options=
               {{
                autoStart:true,
                loop:true,
                delay:50,
                Strings:['hello i am']

               }}

              />
            </h1>
          </div>

          <div className="h-1/2">
          <lottie-player
                src="https://assets4.lottiefiles.com/packages/lf20_kkflmtur.json"
                background="transparent"
                speed="2"
                loop
                autoplay
              ></lottie-player>
           </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}

export default Home;
