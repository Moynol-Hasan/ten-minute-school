import React from "react";
import Image from "next/image";
import { Sections } from "@/app/types/products";

interface JoinEngagementProps {
  joinEngagementData: Sections[];
}

const JoinEngagement = ({ joinEngagementData }: JoinEngagementProps) => {
  const joinEngagement = joinEngagementData.find(
    (engagement) => engagement.type === "group_join_engagement"
  );
  const joinEngagementValues = joinEngagement?.values;

  if (
    !joinEngagement ||
    !joinEngagementValues ||
    joinEngagementValues.length === 0
  ) {
    return <div className="p-4">No engagement data available</div>;
  }

  const engagementData = joinEngagementValues[0];

  return (
    <div
      id="group_join_engagement"
      style={{
        backgroundImage: `url(${engagementData.background?.image || ""})`,
        backgroundSize: "cover",
      }}
      className="flex gap-4 p-4 mb-8 overflow-hidden md:p-8 rounded-xl md:mb-12 font-poppins"
    >
      {" "}
      <div className="w-full md:w-1/2">
        <Image
          src={engagementData.top_left_icon_img}
          height={200}
          width={200}
          className="mb-4"
          alt="Engagement icon"
        />
        <h2 className="text-xl font-semibold text-white">
          {engagementData.title}
        </h2>
        <p className="mt-2 text-base text-gray-200">
          {engagementData.description}
        </p>
        <button className="mt-6 button primary">
          {engagementData.cta.text}
        </button>
      </div>
      <div className="items-center hidden w-1/2 md:flex">
        <Image
          src={engagementData.thumbnail}
          height={200}
          width={200}
          alt="Course thumbnail"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default JoinEngagement;
