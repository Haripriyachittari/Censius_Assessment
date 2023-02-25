import React, { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { HeaderContext } from "../App";

const Header = (props) => {
  const { open, handleToggle, searchText, setSearchText } = props;

  const handleNav = () => {
    handleToggle();
  };
  console.log(open);
  const { header } = useContext(HeaderContext);
  return (
    <div
      className={
        "bg-primary flex gap-4 justify-between items-center h-[72px] py-3 px-2 md:px-6  md:col-start-2 md:col-end-7 md:row-start-1 md:row-end-2 "
      }
    >
      <div className="flex md:hidden">
        <GiHamburgerMenu size={26} onClick={handleNav} />
      </div>
      <h1 className={"font-semibold  text-lg md:text-3xl text-primary"}>
        {header}
      </h1>

      <div className="border border-slate-400  flex justify-between px-3 rounded-md   ">
        <input
          placeholder="Search..."
          className="p-1 w-[50%] md:w-[256px] border-none focus:outline-0 bg-primary text-primary"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button>
          <AiOutlineSearch size={24} className="text-gray-400 font-bold" />
        </button>
      </div>
    </div>
  );
};

export default Header;
