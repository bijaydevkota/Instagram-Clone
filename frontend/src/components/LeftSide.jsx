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

export default function LeftSide() {
  return (
    <div className="hidden md:block px-4 space-y-4 mt-8">
      <img height={120} width={120} src="/insta.png" alt="" />

      <div className="flex flex-col justify-between h-[85vh]">
        <div>
        {linkstop.map((eachItem, index) => (
          <div key={index} className="flex items-center gap-4 font-semibold py-4 px-2 hover:bg-gray-200 cursor-pointer rounded-md opacity-70">
            {eachItem.icon}
            <p>{eachItem.title}</p>
          </div>
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
  },
  {
    icon: <Search />,
    title: "Search",
  },
  {
    icon: <Compass />,
    title: "Explore",
  },
  {
    icon: <Film />,
    title: "Reels",
  },
  {
    icon: <MessageCircleMore />,
    title: "Messege",
  },

  {
    icon: <Heart />,
    title: "Notification",
  },
  {
    icon: <SquarePlus />,
    title: "Create",
  },
  {
    icon: <User />,
    title: "Profile",
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
