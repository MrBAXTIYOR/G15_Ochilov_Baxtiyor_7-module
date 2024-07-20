import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { filterData } from "../store/slice/slice";

const Header = () => {
  const [inputVal, setInputVal] = useState(null);

  return (
    <div className="flex justify-between items-center ">
      <Link to={`/`}>
        <h1 className="text-3xl font-extrabold">Jobs</h1>
      </Link>
      <input type="text" placeholder="Search" className="w-[300px] outline-none border p-2 rounded-md"  />
      <ul className="flex items-center gap-[25px]">
        <li>
          <Link to={`/`} className="text-[15px] font-bold ">
            Home
          </Link>
        </li>
        <li>
          <Link to={`/job`} className="text-[15px] font-bold">
            Jobs
          </Link>
        </li>
        <li>
          <Link to={`/companies`} className="text-[15px] font-bold">
            Companies
          </Link>
        </li>
        <li>
          <Link to={`/add`} className="text-[15px] font-bold">
            Add
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
