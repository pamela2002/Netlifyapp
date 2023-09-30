import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="menu">
      <NavLink
        exact
        className={({ isActive }) => {
          return isActive ? "active_class" : "";
        }}
        to="/"
      >
        Best Education
      </NavLink>
      <NavLink
        exact
        className={({ isActive }) => {
          return isActive ? "active_class" : "";
        }}
        to="/expertFaculty"
      >
        Expert Faculty
      </NavLink>
      <NavLink
        exact
        className={({ isActive }) => {
          return isActive ? "active_class" : "";
        }}
        to="/personalizedAttention"
      >
        Personalized Attention
      </NavLink>
    </div>
  );
};

export default Navbar;
