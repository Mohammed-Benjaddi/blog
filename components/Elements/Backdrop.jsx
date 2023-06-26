import React from "react";

const Backdrop = ({ hide }) => {
  return (
    <div
      onClick={() => hide(false)}
      className="transition-all fixed top-0 left-0 bg-slate-200 backdrop-blur-md bg-opacity-5 w-[100vw] h-[100vh] z-50"
    ></div>
  );
};

export default Backdrop;
