import React from "react";
import { Film, Home, Search, SquarePlus, User } from "lucide-react";
import { NavLink } from "react-router";

export default function MobileMenu() {
  return (
    <div className="fixed bottom-0 bg-gray-100 w-full border-t border-gray-300 p-4 block md:hidden  ">
      <div className=" flex items-center justify-between ">

        <NavLink to="/">
          <Home />
        </NavLink>

        <NavLink to="/search">
          <Search />
        </NavLink>

        <NavLink to="/create">
          <SquarePlus />
        </NavLink>

        <NavLink to="/reels">
          <Film />
        </NavLink>

        <NavLink to="/profile">
          <User />
        </NavLink>
      </div>
    </div>
  );
}
