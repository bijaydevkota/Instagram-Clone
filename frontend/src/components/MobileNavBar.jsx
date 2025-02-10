import { ChevronDown, Heart, MessageCircleMore } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

export default function MobileNavBar() {
  return (
    <div className="md:hidden  flex justify-between px-4 mt-2 mb-2">
      <div className="flex items-center">
        <img height={140} width={140} src="/insta.png" alt="" />
        <ChevronDown />
      </div>

      <div className="flex gap-6 items-center">
        <NavLink to={"/notifications"}>
          <Heart size={30} />
        </NavLink>
        <NavLink to={"/messeges"}>
          <MessageCircleMore size={30} />
        </NavLink>
      </div>
    </div>
  );
}
