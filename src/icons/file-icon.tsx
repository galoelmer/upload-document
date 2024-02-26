import React from "react";

const FileIcon: React.FC = () => {
  return (
    <svg
      width="17"
      height="18"
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0H11.7692L14.5385 2.57143L16.6154 4.5V18H0V0Z"
        fill="#F99C26"
      />
      <line
        x1="4"
        y1="15"
        x2="13.0769"
        y2="15"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="4"
        y1="12"
        x2="13.0769"
        y2="12"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default FileIcon;
