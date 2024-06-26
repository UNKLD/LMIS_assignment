import React from "react";

function ProgressBar({ progress }) {
  const style = { width: progress };
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div className="bg-[#32A583] h-2.5 rounded-full" style={style}></div>
    </div>
  );
}

export default ProgressBar;
