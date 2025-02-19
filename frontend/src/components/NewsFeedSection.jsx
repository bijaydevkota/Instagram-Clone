import {
  Bookmark,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Send,
} from "lucide-react";
import React from "react";

export default function NewsFeedSection() {
  return (
    <div className="space-y-8 px-1 lg:px-20 mt-4 md:mt-4">
      {posts.map((eachPost, index) => (
        <div key={index} className="space-y-2">
          <div className="px-4 md:px-0 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img
                className="h-10 w-10 object-cover rounded-full"
                src={eachPost.profilePicture}
                alt=""
              />
              <p>
                {eachPost.username} .{" "}
                <span className="text-xs opacity-70 font-semibold">
                  10 min ago
                </span>
              </p>
            </div>
            <MoreHorizontal />
          </div>

          <img
            className="h-[70vh] w-full object-cover rounded mt-2"
            src={eachPost.postPicture}
            alt=""
          />

         <div className="px-4 md:px-0 mt-4">
         <div className="flex justify-between">
            <div className="flex gap-4">
              <Heart />
              <MessageCircle />
              <Send />
            </div>
            <Bookmark />
          </div>
          <p className="mt-4">
            {" "}
            <span className="font-semibold">{eachPost.username}</span>{" "}
            {eachPost.caption}
          </p>
          <p className="text-xs opacity-70 font-semibold">10 min ago</p>
         </div>

          <hr className="hidden md:block text-gray-300 mt-8" />
        </div>
      ))}
    </div>
  );
}

const posts = [
  {
    profilePicture:
      "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmVzfGVufDB8fDB8fHww",
    username: "bijay_devkota",
    postPicture:
      "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmVzfGVufDB8fDB8fHww",
    caption:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cum placeat at, quam rem commodi in perspiciatis vero sint facilis!",
  },
  {
    profilePicture:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBpY3R1cmVzfGVufDB8fDB8fHww",
    username: "aalupotato",
    postPicture:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBpY3R1cmVzfGVufDB8fDB8fHww",
    caption:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cum placeat at, quam rem commodi in perspiciatis vero sint facilis!",
  },
  {
    profilePicture:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmVzfGVufDB8fDB8fHww",
    username: "binod_dhami",
    postPicture:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmVzfGVufDB8fDB8fHww",
    caption:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cum placeat at, quam rem commodi in perspiciatis vero sint facilis!",
  },
  {
    profilePicture:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3R1cmVzfGVufDB8fDB8fHww",
    username: "loki_chaulagain",
    postPicture:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3R1cmVzfGVufDB8fDB8fHww",
    caption:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cum placeat at, quam rem commodi in perspiciatis vero sint facilis!",
  },
  {
    profilePicture:
      "https://plus.unsplash.com/premium_photo-1689565611422-b2156cc65e47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMHBpY3R1cmVzfGVufDB8fDB8fHww",
    username: "rajan_shahi",
    postPicture:
      "https://plus.unsplash.com/premium_photo-1689565611422-b2156cc65e47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMHBpY3R1cmVzfGVufDB8fDB8fHww",
    caption:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cum placeat at, quam rem commodi in perspiciatis vero sint facilis!",
  },
  {
    profilePicture:
      "https://images.unsplash.com/photo-1521252659862-eec69941b071?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHx8MA%3D%3D",
    username: "bimla_saud",
    postPicture:
      "https://images.unsplash.com/photo-1521252659862-eec69941b071?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHx8MA%3D%3D",
    caption:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cum placeat at, quam rem commodi in perspiciatis vero sint facilis!",
  },
  {
    profilePicture:
      "https://images.unsplash.com/photo-1613145997970-db84a7975fbb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHx8MA%3D%3D",
    username: "bibek_chaulagain",
    postPicture:
      "https://images.unsplash.com/photo-1613145997970-db84a7975fbb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHx8MA%3D%3D",
    caption:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cum placeat at, quam rem commodi in perspiciatis vero sint facilis!",
  },
  {
    profilePicture:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHx8MA%3D%3D",
    username: "bishal_dhungana",
    postPicture:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHx8MA%3D%3D",
    caption:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cum placeat at, quam rem commodi in perspiciatis vero sint facilis!",
  },
  {
    profilePicture:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHx8MA%3D%3D",
    username: "vharat_the",
    postPicture:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHx8MA%3D%3D",
    caption:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cum placeat at, quam rem commodi in perspiciatis vero sint facilis!",
  },
  {
    profilePicture:
      "https://plus.unsplash.com/premium_photo-1689565611422-b2156cc65e47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "lokesh_shahi",
    postPicture:
      "https://plus.unsplash.com/premium_photo-1689565611422-b2156cc65e47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cum placeat at, quam rem commodi in perspiciatis vero sint facilis!",
  },
  {
    profilePicture:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmVzfGVufDB8fDB8fHww",
    username: "sushant_bhattarai",
    postPicture:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmVzfGVufDB8fDB8fHww",
    caption:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cum placeat at, quam rem commodi in perspiciatis vero sint facilis!",
  },
];
