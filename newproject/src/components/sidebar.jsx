import "./navbar.css";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import ImageAspectRatioIcon from "@mui/icons-material/ImageAspectRatio";
import PsychologyIcon from "@mui/icons-material/Psychology";
import MenuIcon from "@mui/icons-material/Menu";
import { Form, Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [side, setSide] = useState(false);
  const sidebarlist = [
    { name: "Home", icon: <HomeIcon />, path: "/home" },
    { name: "About", icon: <PersonIcon />, path: "/about" },
    { name: "Skills", icon: <PsychologyIcon />, path: "/skills" },
    { name: "Eduction", icon: <SchoolIcon />, path: "/education" },
    { name: "Projects", icon: <ImageAspectRatioIcon />, path: "/projects" },
    { name: "Contacts", icon: <LocalPostOfficeIcon />, path: "/contact" },
  ];

  const mapOrderList = sidebarlist.map((order, index) => (
    <li className="" key={index}>
      <h1 className="text-red-500">
        {" "}
        {order.icon} {order.name}
      </h1>
    </li>
  ));

  const handleMenu = () => {
    setSide(true);
  };

  return (
    <>
    
      <button onClick={handleMenu}>enu</button>
      <div className="flex justify-between flex-row sm:flex-col">
       
        <h1>Hi</h1>
        <h1>Hello</h1>
      </div>
     
      {mapOrderList}
      <h1 className="text-3xl font-bold ">Hello world!</h1>
    </>
  );
}
export default Navbar;
