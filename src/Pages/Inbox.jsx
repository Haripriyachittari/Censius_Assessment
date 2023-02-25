import React, { useContext, useEffect } from "react";
import { HeaderContext } from "../App";

const Inbox = () => {
  const { setHeader } = useContext(HeaderContext);
  useEffect(() => {
    setHeader("Inbox");
  });
  return (
    <div className="md:row-start-2 md:row-end-7 md:col-start-2 md:col-end-7  p-8 flex justify-center mt-[5px]  bg-body">
      <div className="text-center">
        {" "}
        <h1 className=" text-4xl text-[#2563EB] font-bold">Chat with us.</h1>
        <p className="mt-4">
          <a
            href="https://censius.ai/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-300 underline"
          >
            Censius AI
          </a>{" "}
          Click here to know more about us.
        </p>
      </div>
    </div>
  );
};

export default Inbox;
