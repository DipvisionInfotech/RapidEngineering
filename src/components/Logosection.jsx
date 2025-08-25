import React from "react";
import logo from "../assets/react.svg";

export default function Logosection() {
  return (
    <>
      <div className="flex items-center">
        <img src={logo} alt="Company Logo" className="h-17 w-auto" />
        <div>
          <h1 className="text-1xl font-bold text-gray-900">
            Rapid Engineering Services
          </h1>
          {/* <p className="text-sm text-gray-600">Chartered Accountants</p> */}
        </div>
      </div>
    </>
  );
}