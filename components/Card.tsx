import React from "react";
import { Line } from "react-chartjs-2";

interface Props {
  text: string;
  count: number;
  plusCount: number | undefined;
  bgColor: string;
  textColor: string;
}

const Card = ({ text, bgColor, textColor, count, plusCount }: Props) => {
  return (
    <div className="flex-1 px-3 py-4 border border-gray rounded flex flex-col items-start">
      <h3 className="text-sm mb-1 font-bold text-secondary">{text}</h3>
      <span className={`text-xl font-bold mb-2 ${textColor}`}>{count.toLocaleString()}</span>
      <span className={`plus-count ${bgColor} rounded-full p-1 px-2 text-xs`}>
        +{plusCount === undefined ? "Unknown" : plusCount.toLocaleString()}
      </span>
    </div>
  );
};

export default Card;
