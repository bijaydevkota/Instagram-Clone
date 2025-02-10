import React from "react";
import {
  AtSign,
  Compass,
  Film,
  Heart,
  House,
  ListCollapse,
  MessageCircleMore,
  Search,
  SquarePlus,
  User,
} from "lucide-react";
import { NavLink } from "react-router";

export default function LeftSide() {
  return (
    <div className="hidden md:block px-4 space-y-4 mt-8">
      <img height={120} width={120} src="/insta.png" alt="Instagram" />

      <div className="flex flex-col justify-between h-[85vh]">
        <div>
        {linkstop.map((eachItem, index) => (
          <NavLink to={eachItem.path} key={index} className="flex items-center gap-4 font-semibold py-4 px-2 hover:bg-gray-200 cursor-pointer rounded-md opacity-70">
            {eachItem.icon}
            <p>{eachItem.title}</p>
          </NavLink>
        ))}
        </div>

        <div>
            {linksBottom.map((eachItem, index)=>(
                 <div key={index} className="flex items-center gap-2 font-semibold py-2 hover:bg-gray-200 cursor-pointer px-2 rounded-md opacity-70">
                 {eachItem.icon}
                 <p>{eachItem.title}</p>
               </div>
            ))}
        </div>
      </div>
      
    </div>
  );
}

const linkstop = [
  {
    icon: <House />,
    title: "Home",
    path:"/",
  },
  {
    icon: <Search />,
    title: "Search",
    path: "/search",
  },
  {
    icon: <Compass />,
    title: "Explore",
    path:"/explore",
  },
  {
    icon: <Film />,
    title: "Reels",
    path:"/reels",
  },
  {
    icon: <MessageCircleMore />,
    title: "Messege",
    path:"/messeges",
  },

  {
    icon: <Heart />,
    title: "Notification",
    path:"/notifications",
  },
  {
    icon: <SquarePlus />,
    title: "Create",
    path:"/create",
  },
  {
    icon: <User />,
    title: "Profile",
    path:"/profile",
  },
];

const linksBottom = [
  {
    icon: <AtSign />,
    title: "Thread",
  },
  {
    icon: <ListCollapse />,
    title: "More",
  },
];
