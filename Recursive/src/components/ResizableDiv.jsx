import React from "react";

const ResizableDiv = ({ children }) => (
  <div className="flex justify-between items-center h-full w-full border-2 border-black">
    {children}
  </div>
);

export default ResizableDiv;
