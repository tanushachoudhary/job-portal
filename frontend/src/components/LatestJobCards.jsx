import React from "react";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarImage } from "./ui/avatar";

const LatestJobCards = ({ job }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/description/${job._id}`)}
      className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer transition-transform duration-300 hover:scale-105"
    >
      <div>
        <div className="flex gap-3 items-center">
          <Avatar>
            <AvatarImage src={job?.company?.logo} />
          </Avatar>
          <h1 className="font-medium text-2xl">{job?.company?.name}</h1>
        </div>
        <p className="text-base text-gray-500 mt-2">{job?.location}</p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">{job?.description}</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge
          className={"text-blue-700 font-bold text-base h-7"}
          variant="ghost"
        >
          {job?.position} Positions
        </Badge>
        <Badge
          className={"text-[#0d582a] text-base font-bold h-7"}
          variant="ghost"
        >
          {job?.jobType}
        </Badge>
        <Badge
          className={"text-[#F83002] text-base font-bold h-7"}
          variant="ghost"
        >
          {job?.salary} LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
