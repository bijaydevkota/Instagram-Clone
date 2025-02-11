import {
  Camera,
  ChevronDown,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Music,
  Send,
} from "lucide-react";
import React from "react";

export default function ReelsPage() {
  return (
    <div className="">
      {reels.map((eachItem, index) => (
        <div key={index} className="relative">
          <video
            src={eachItem.video}
            className="w-full"
            autoPlay={true}
            muted={true} // Add this to allow autoplay
            controls={true}
          ></video>

          <div className="absolute top-0 text-white flex items-end justify-between w-full p-4">
            <div className="flex gap-2 items-end">
              <p className="text-2xl font-semibold">Reels</p>
              <ChevronDown size={28} />
            </div>
            <Camera size={28} />
          </div>

          <div className="absolute bottom-4 flex justify-between w-full items-end text-white p-4">
            <div>
              <div className="flex items-center gap-4">
                <img
                  className="h-16 w-16 rounded-full object-cover"
                  src="https://plus.unsplash.com/premium_photo-1673356713416-a8ed69af6f4a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmlkZW98ZW58MHx8MHx8fDA%3D"
                  alt=""
                />

                <div className="space-y-2">
                  <p>{eachItem.username}</p>
                  <p className="flex items-center gap-2">
                    {" "}
                    <Music size={16} /> {eachItem.music}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <p>Lorem ipsum dolor sit amet.</p>
                <p className="opacity-80">followed by loki and 68 others</p>
              </div>
            </div>

            <div className="flex flex-col gap-10">
              <Heart size={28} />
              <MessageCircle size={28} />
              <Send size={28} />
              <MoreHorizontal size={28} />
              <Music size={28} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const reels = [
  {
    Id: 1,
    username: "bijay_devkota",
    music: "Badal Sari, John & Swar",
    video:
      "https://videos.pexels.com/video-files/6761670/6761670-uhd_1440_2560_25fps.mp4",
  },
  {
    Id: 1,
    username: "loki_chaulagain",
    music: "Asti ko Sajha, Bijay Devkota",
    video:
      "https://videos.pexels.com/video-files/6761670/6761670-uhd_1440_2560_25fps.mp4",
  },
  {
    Id: 1,
    username: "binod_dhami",
    music: "Bardali, Sushant Kc",
    video:
      "https://videos.pexels.com/video-files/6761670/6761670-uhd_1440_2560_25fps.mp4",
  },
  {
    Id: 1,
    username: "rajan_shahi",
    music: "Timile, Bijay Devkota",
    video:
      "https://videos.pexels.com/video-files/6761670/6761670-uhd_1440_2560_25fps.mp4",
  },
  {
    Id: 1,
    username: "puza_xettri",
    music: "maya ma, sushant kc",
    video:
      "https://videos.pexels.com/video-files/6761670/6761670-uhd_1440_2560_25fps.mp4",
  },
];
