import React from "react";

const Container = ({ children, className }) => {
  return (
    <div
      className={`w-11/12 md:w-10/12 max-w-screen-2xl mx-auto + ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
