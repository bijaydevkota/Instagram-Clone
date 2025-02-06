import { Key } from "lucide-react";
import React from "react";

export default function RightSide() {
  return (
    <div className="space-y-8 px-2 bg-gray-50">
      <div className="flex justify-between items-center font-semibold opacity-80">
        <p className="">Suggested For You</p>
        <p className="text-blue-500 cursor-pointer">See All</p>
      </div>


     <div className="space-y-4">   
{
    people.map((eachItem, index)=>(
        <div key={index} className="flex justify-between items-center">
        <div className="flex gap-2">
            <img height={50} width={50}  className="rounded-full object-cover" src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="pp" />
            <div>
            <p>{eachItem.username}</p>
            <p className="text-sm">Followed By {" "} {eachItem.followedBy}</p>
            </div>  
        </div>
       
        
          <p className="font-semibold text-blue-500 bg-gray-100 px-2 py-1 rounded ">Follow</p>
        
      </div>
    ))
}

     </div>
    </div>
  );
}

const people=[
    {
        profilePicture:"https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        username:"Bijay Devkota",
        followedBy:"Loki Chaulagain",
    },
    {
        profilePicture:"https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        username:"Loki Chaulagain",
        followedBy:"Bijay Devkota",
    },
    {
        profilePicture:"https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        username:"Puza Xettri",
        followedBy:"Bijay Devkota",
    },
    {
        profilePicture:"https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        username:"Binod Dhami",
        followedBy:"Rajan Shahi",
    },
    {
        profilePicture:"https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        username:"Bishal Dhungana",
        followedBy:"Bharat Saud",
    },
    {
        profilePicture:"https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        username:"Bimala Saud",
        followedBy:"Bijay Devkota",
    }
]