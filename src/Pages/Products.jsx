import React, { useContext } from "react";
import { useEffect } from "react";

import { HeaderContext } from "../App";

const Products = () => {
  const { setHeader } = useContext(HeaderContext);
  useEffect(() => {
    setHeader("Products");
  });
  return (
    <div className="md:row-start-2 md:row-end-7 md:col-start-2 md:col-end-7  p-8 flex justify-center mt-[5px] bg-body ">
      <h1 className=" text-4xl text-[#2563EB] font-bold text-center">
        Products Launching Soon. Stay Tuned!!!
      </h1>
    </div>
  );
};

export default Products;
