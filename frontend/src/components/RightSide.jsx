import React from "react";

export default function RightSide() {
  return (
    <div className="space-y-8 px-2 py-8">
      <div className="flex justify-between items-center font-semibold opacity-80">
        <p className="opacity-70">Suggested For You</p>
        <p className="text-blue-500 cursor-pointer text-sm">See All</p>
      </div>

      <div className="space-y-4 ">
        {people.map((eachItem, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex gap-2">
              <img
                className="rounded-full h-12 w-12 object-cover"
                src={eachItem.profilePicture}
                alt="pp"
              />
              <div>
                <p>{eachItem.username}</p>
                <p className="text-sm">Followed By {eachItem.followedBy}</p>
              </div>
            </div>

            <p className="font-semibold text-blue-500 text-sm bg-gray-100 px-2 py-1 rounded ">
              Follow
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const people = [
  {
    profilePicture:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    username: "Bijay Devkota",
    followedBy: "Loki Chaulagain",
  },
  {
    profilePicture:
      "https://plus.unsplash.com/premium_photo-1673866484792-c5a36a6c025e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    username: "Loki Chaulagain",
    followedBy: "Bijay Devkota",
  },
  {
    profilePicture:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    username: "Puza Xettri",
    followedBy: "Bijay Devkota",
  },
  {
    profilePicture:
      "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    username: "Binod Dhami",
    followedBy: "Rajan Shahi",
  },
  {
    profilePicture:
      "https://images.unsplash.com/photo-1466112928291-0903b80a9466?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    username: "Bishal Dhungana",
    followedBy: "Bharat Saud",
  },
  {
    profilePicture:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    username: "Potato Aalu",
    followedBy: "Bijay Devkota",
  },
];
