import { Link } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
// import { useContext } from "react";
// import { apiWallit } from "../App";
export default function NavBar({
  link1 = "Link1",
  link2 = "Link2",
  link3 = "Link3",
  link4 = "Link4",
}) {
  let dataUser = JSON.parse(sessionStorage.getItem("user"));

  // console.log(dataUser);

  return (
    <div className="space-x-5 navbar bg-base-100 ">
      <div className="flex-1 w-max">
        <Link to="" className="text-xl btn btn-ghost">
          UniHome
        </Link>
      </div>
      <div className="flex-none ">
        <ul className="px-1 menu menu-horizontal">
          <li>
            <Link to="">{link1}</Link>
          </li>

          <li>
            <Link to="">{link2}</Link>
          </li>

          <li>
            <Link to="">{link4}</Link>
          </li>

          <li>
            <Link to="">{link3}</Link>
          </li>
        </ul>
      </div>
      <div>
        <div className="relative mr-3 cursor-pointer indicator group">
          <div className=" hidden py-3 absolute z-[70] right-0 top-9 group-hover:block rounded-lg  min-h-80 min-w-60 border-2	 bg-neutral-100">
            <div className="w-full p-2 bg-white rounded-md ">
              <h2>Title</h2>
              <p className=" text-slate-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
            </div>
          </div>
          <span className="text-xs text-white bg-blue-600 indicator-item badge ">
            2
          </span>

          <IoIosNotificationsOutline className="text-4xl " />
        </div>
      </div>
      <div className="relative m-auto group ">
        <div className="flex flex-row items-center justify-center gap-1 avatar flex-nowrap ">
          <div className="w-16 h-16 rounded-full ">
            <img src={dataUser?.img} alt="" />
          </div>
          <span>
            {dataUser?.firstName}
            <IoMdArrowDropdown className="inline text-lg " />
          </span>
        </div>
        <span className="absolute z-[75] top-16 min-w-36  bg-neutral-100   group-hover:block right-0  hidden">
          <ul className="w-full list-none ">
            <li className="px-1 py-3 rounded-md bg-slate-200 hover:cursor-pointer hover:bg-blue-500 hover:text-white">
              <Link to="DD">Dashboard</Link>
            </li>
            <li className="px-1 py-3 rounded-md bg-slate-200 hover:cursor-pointer hover:bg-blue-500 hover:text-white">
              <Link>My Teacher</Link>
            </li>
            <li className="px-1 py-3 rounded-md bg-slate-200 hover:cursor-pointer hover:bg-blue-500 hover:text-white">
              <Link>Settings</Link>
            </li>
            <li className="px-1 py-3 rounded-md bg-slate-200 hover:cursor-pointer hover:bg-blue-500 hover:text-white">
              <Link>LogOut</Link>
            </li>
          </ul>
        </span>
      </div>
    </div>
  );
}
