import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ to, label, handleClose }) => (
  <li className="lg:mx-2 text-black my-2 lg:my-0 hover:bg-[#1136ff] hover:text-white rounded-lg">
    <NavLink
      to={to}
      className="sm:text-lg lg:text-xl px-3 lg:px-4 py-2 block"
      onClick={handleClose}
    >
      {label}
    </NavLink>
  </li>
);

export default NavItem;
