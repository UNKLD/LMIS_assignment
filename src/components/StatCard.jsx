import React from "react";

function StatsCard({ title, value, icon }) {
  return (
    <div className="max-w-sm p-6 rounded-lg shadow-lg pr-8 w-[24%]">
      {icon && icon}
      <h1 className="text-2xl font-extrabold mt-3">{value}</h1>
      <h1 className="mt-2">{title}</h1>
    </div>
  );
}

export default StatsCard;
