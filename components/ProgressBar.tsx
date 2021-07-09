import React from "react";

interface Props {
  data: { count: number; color: string }[];
}

const ProgressBar = ({ data }: Props) => {
  const total =
    data.length > 0
      ? data.reduce((prevValue, currentValue) => {
          return prevValue + currentValue.count;
        }, 0)
      : 0;

  return (
    <div className="progress-bar h-2 w-full flex rounded">
      {data.length > 0 &&
        data.map((value) => (
          <span
            className={`${value.color} first:rounded-l last:rounded-r`}
            style={{
              width: `${(value.count / total) * 100}%`,
              height: "100%",
            }}
          ></span>
        ))}
    </div>
  );
};

export default ProgressBar;
