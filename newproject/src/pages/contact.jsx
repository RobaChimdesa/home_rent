import React from "react";
import Layout from "../components/Layout";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ContactMailIcon from "@mui/icons-material/ContactMail";

function Contact() {
  return (
    <Layout>
      <div className="h-screen mt-10">
        <h1 className="text-white mx-40 my-10 md:mx-10 text-4xl font-serif font-bold md:2xl">
          CONTACTS
        </h1>

        <div className="grid md:grid-cols-1 w-full  grid-cols-2 text-white  ">
          <div>
            <div className="w-1/2  md:w-full md:mx-0  mx-20 ">
              <div className=" bg-slate-700 p-2 my-6 rounded-lg  flex justify-start justify-items-center  grid-cols-2">
                <div className=" mx-1 p-3 rounded-full  bg-slate-400 text-black">
                  <LocationOnIcon />
                </div>
                <div className="mx-1 font-serif">
                  <h3 className="font-bold">Location</h3>
                  <h4>Adama,Ethiopia</h4>
                </div>
              </div>

              <div className=" bg-slate-700 p-2 my-6  rounded-lg  flex justify-start justify-items-center  grid-cols-2">
                <div className=" mx-1 p-3 rounded-full  bg-slate-400 text-black">
                  <ContactMailIcon />
                </div>
                <div className="mx-1 font-serif">
                  <h3 className="font-bold">Gmail</h3>
                  <h4>robachimdesa123@gmail.com</h4>
                </div>
              </div>

              <div className=" bg-slate-700 p-2 my-6 rounded-lg  flex justify-start justify-items-center  grid-cols-2">
                <div className=" mx-1 p-3 rounded-full  bg-slate-400 text-black">
                  <LocalPhoneIcon />
                </div>
                <div className="mx-1 font-serif">
                  <h3 className="font-bold">Call</h3>
                  <h4>+251983626772</h4>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className="w-1/2 md:w-full">
                <h1 className="text-2xl  font-serif ">Your Name</h1>

                <input
                  placeholder="Full Name"
                  type="text"
                  className="w-full  rounded
                      shadow-xl  p-2 text-white px-5 bg-slate-700  "
                />
                <h1 className="text-2xl mt-7 font-serif ">Your Email</h1>

                <input
                  placeholder="Email"
                  type="email"
                  className="w-full bg-slate-700 rounded 
            shadow-xl  p-2 text-white px-5   "
                />
                <h1 className="text-2xl mt-7 font-serif ">Subject</h1>

                <input
                  placeholder="Subject"
                  type="text"
                  className="w-full bg-slate-700 rounded 
                  shadow-xl  p-2 text-white px-5"
                />
                <h1 className="text-2xl mt-7 font-serif ">Message</h1>

                <textarea className="min-w-full min-h-full bg-slate-700 h-168px" />
                <button className="bg-blue-700 hover:bg-blue-500 p-2 px-6 rounded-3xl my-4 mx-28">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
