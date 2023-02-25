import React, { useContext, useEffect } from "react";
import { HeaderContext } from "../App";
import { users } from "../constants/data";

const TeamMembers = (props) => {
  //setting the header according to the active path
  const { setHeader } = useContext(HeaderContext);
  useEffect(() => {
    setHeader("Team Members");
  });
  //filter users based on searchtext
  const { searchText } = props;
  return (
    <div className="md:row-start-2 md:row-end-7 md:col-start-2 md:col-end-7 bg-body flex justify-center items-center p-8  ">
      <div className="flex justify-center items-center flex-wrap gap-6 ">
        {users
          .filter((user) =>
            user.name.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((user, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center shadow bg-card  p-4 rounded-lg w-[172px] h-[204px] hover:scale-105 duration-300 cursor-pointer"
              >
                <div className="w-20 h-20 rounded-full flex justify-center items-center bg-[#2563EB]">
                  <h1 className="text-3xl text-white">{user.initials}</h1>
                </div>
                <div className="mt-4 text-center">
                  <h1 className="font-bold">{user.name}</h1>
                  <p>{user.position}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TeamMembers;
