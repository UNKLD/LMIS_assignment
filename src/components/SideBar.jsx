import { Fragment, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Dashboard,
  Logo,
  TableView
} from "../helpers/icons";

function SideBar() {
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <div
        className={`flex flex-col items-center ${
          open ? "w-56" : "w-[5rem]"
        } min-h-[100vh] py-5 overflow-hidden text-gray-700 bg-[#F9F9F9] rounded
          duration-700
        `}
      >
        <a className={`flex items-center ${open ? "" : ""} px-16`} href="#">
          <Logo
            className={`
              ${open ? "w-[87px] " : "w-[50px]"} duration-700 
            `}
          />
        </a>
        <div className="z-50">
          <button
            className={`absolute top-28  ${
              open ? "left-44" : "left-[3.3rem]"
            } z-50 bg-white rounded-xl shadow-xl border duration-700`}
            onClick={() => setOpen(!open)}
          >
            {open ? <ChevronLeft /> : <ChevronRight />}
          </button>
        </div>
        <div className={`${open ? "w-full mt-9" : "mt-16"} px-2`}>
          <div className="flex flex-col items-center w-full mt-5">
            <a
              className="flex items-center w-full h-12 px-3 mt-2 rounded-lg bg-gray-300"
              href="#"
            >
              <Dashboard />

              <span
                className={`ml-2 text-sm font-medium ${
                  open ? "block" : "hidden"
                } duration-500`}
              >
                Dasboard
              </span>
            </a>
            <a
              className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
              href="#"
            >
              <TableView />

              <span
                className={`ml-2 text-sm font-medium ${
                  open ? "block" : "hidden"
                } duration-500`}
              >
                Tableview
              </span>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SideBar;
