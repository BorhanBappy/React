import React from "react";
import { Link, NavLink, useLocation, useRoutes } from "react-router-dom";
import { clsx as cn } from "clsx";

import { FaHome, FaBloggerB, FaQuestion } from "react-icons/fa";

// "a b c d"

// cn("a b", condiont && "c", condiont &&"d") => "a b c d"
// cn("a b", condiont && "c", condiont &&"d") => "a b"

const routes = [
  {
    name: "Home",
    to: "/",
    icon: <FaHome />,
  },
  {
    name: "Blogs",
    to: "/blogs",
    icon: <FaBloggerB />,
  },
  {
    name: "About",
    to: "/about",
    icon: <FaQuestion />,
  },
];

function Navbar() {
  const location = useLocation();
  return (
    <nav className="bg-blue-500 ">
      <div className="flex justify-center items-center h-12 w-full bg-blue-500 space-x-2">
        {routes.map((route,index) => (
          <NavLink
          key={index}
            to={route.to}
            className={cn(
              "flex items-center space-x-2 p-1 border rounded-md text-white ",
              location.pathname == route.to && " bg-black",
            
              route.to == "/about" &&location.pathname=="/about" && " bg-green-500"
            )}
          >
            <span>{route.icon}</span>
            <span>{route.name}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
