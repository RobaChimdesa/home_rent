import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const [showMenu, setShowMenu] = useState("md:hidden");
  const menu = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Education", path: "/education" },
    { title: "Skill", path: "/skill" },
    { title: "Projects", path: "/projects" },
  ];

  const pathname = window.location.pathname;

  return (
    <div>
     
      <div
        className={`flex justify-between bg-black text-white items-center
      shadow-lg p-2 ${showMenu !== "md:hidden" && "md:flex-col "}`}
      >
        <div className="flex justify-between w-full">
          <h1 className="text-4xl font-bold">A S T U</h1>
          <button
            className="hidden 2xl:hidden xl:hidden lg:hidden  md:flex"
            onClick={() => {
              if (showMenu == "md:hidden") {
                setShowMenu("");
              } else {
                setShowMenu("md:hidden");
              }
            }}
          >
            <MenuIcon />
          </button>
        </div>

        <div className="flex md:hidden">
          {menu.map((items) => {
            return (
              <li
                className={`list-none  mx-4 ${
                  pathname == items.path &&
                  "bg-white text-black rounded-md px-5 p-1"
                } `}
              >
                <Link to={items.path}> {items.title}</Link>
              </li>
            );
          })}
        </div>

        <div
          className={`hidden mt-2 items-start justify-start  w-full md:flex flex-col lg:hidden xl:hidden 2xl:hidden  ${showMenu}`}
        >
          {menu.map((items) => {
            return (
              <li
                className={`list-none  mx-4 my-4 ${
                  pathname == items.path &&
                  "bg-white text-black rounded-md px-5 p-1"
                } `}
              >
                <Link to={items.path}> {items.title}</Link>
              </li>
            );
          })}
        </div>
      </div>
    
    </div>
    
  );
}

export default Header;
