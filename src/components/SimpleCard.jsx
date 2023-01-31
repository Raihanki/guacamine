import React from "react";

export default function SimpleCard({ children, className = "" }) {
  return (
    <div className={`${className} w-full bg-white px-4 py-5 rounded-md`}>
      {children}
    </div>
  );
}
