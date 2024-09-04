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
    <div className="navbar bg-base-100 space-x-5 ">
      <div className="flex-1 w-max">
        <Link to="" className="btn btn-ghost text-xl">
          UniHome
        </Link>
      </div>
      <div className="flex-none  ">
        <ul className="menu menu-horizontal px-1">
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
        <div className="indicator relative cursor-pointer group mr-3">
          <div className=" hidden py-3 absolute z-[70] right-0 top-9 group-hover:block rounded-lg  min-h-80 min-w-60 border-2	 bg-neutral-100">
            <div className=" bg-white p-2 rounded-md  w-full">
              <h2>Title</h2>
              <p className=" text-slate-400 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
            </div>
          </div>
          <span className="indicator-item text-xs bg-blue-600   badge  text-white ">
            2
          </span>

          <IoIosNotificationsOutline className=" text-4xl" />
        </div>
      </div>
      <div className="group relative m-auto ">
        <div className="avatar flex flex-row flex-nowrap justify-center items-center gap-1  ">
          <div className=" w-16  h-16 rounded-full">
            <img src={dataUser.img} alt="" />
          </div>
          <span>
            {dataUser.firstName}
            <IoMdArrowDropdown className=" inline text-lg" />
          </span>
        </div>
        <span className="absolute z-[75] top-16 min-w-36  bg-neutral-100   group-hover:block right-0  hidden">
          <ul className=" list-none w-full ">
            <li className=" bg-slate-200 py-3 px-1 hover:cursor-pointer hover:bg-blue-500  hover:text-white rounded-md  ">
              <Link to='DD'>Dashboard</Link>
            </li>
            <li className=" bg-slate-200 py-3 px-1 hover:cursor-pointer hover:bg-blue-500  hover:text-white rounded-md  ">
              <Link>My Teacher</Link>
            </li>
            <li className=" bg-slate-200 py-3 px-1 hover:cursor-pointer hover:bg-blue-500  hover:text-white rounded-md  ">
              <Link>Settings</Link>
            </li>
            <li className=" bg-slate-200 py-3 px-1 hover:cursor-pointer hover:bg-blue-500  hover:text-white rounded-md  ">
              <Link>LogOut</Link>
            </li>
          </ul>
        </span>
      </div>
    </div>
  );
}
