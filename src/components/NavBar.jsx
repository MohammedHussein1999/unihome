import { Link } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaListUl } from "react-icons/fa";
import { BsChatHeart } from "react-icons/bs";

export default function NavBar({
  link1,
  link2,
  link3,
  link4,
  showLink1,
  showLink2,
  showLink3,
  showLink4,
  showChat,
}) {
  let dataUser = JSON.parse(sessionStorage.getItem("user"));

  return (
    <>
      {/* {AccessToken()} */}

      <div className="navbar bg-white text-black  justify-between   space-x-5 flex flex-row ">
        <div className=" grow-0  w-max ">
          <Link to="" className="btn shrink-0 btn-ghost text-xl">
            UniHome
          </Link>
        </div>
        <div className=" group  ">
          <div className=" flex-none  flex-nowrap flex-row left-0 z-[99]  ">
            <ul className="menu   menu-horizontal  max-md:flex max-md:flex-col  ">
              {showLink1 && (
                <li className=" text-2xl font-bold ">
                  <Link to="">{link1}</Link>
                </li>
              )}

              {showLink2 && (
                <li>
                  <Link to="">{link2}</Link>
                </li>
              )}

              {showLink3 && (
                <li className="order-last ">
                  <Link to="Chat">
                    {link4}
                    <BsChatHeart className=" text-red-500 text-2xl" />
                  </Link>
                </li>
              )}

              {showLink4 && (
                <li className=" w-28">
                  <Link to="">{link3}</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className=" gap-x-3  flex justify-center items-center">
          <div className="   gap-x-2 flex-nowrap flex flex-row ">
            {showChat && (
              <div className="order-last ">
                <div>
                  <div className="indicator h-[42px] relative cursor-pointer  mr-3">
                    <span className="indicator-item text-xs  bg-red-400   badge  text-white ">
                      7
                    </span>

                    <Link to="Chat">
                      {/* <span className="mx-2"></span> */}
                      <BsChatHeart className=" inline text-blue-600  text-3xl" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="">
            <div className="indicator relative cursor-pointer group mr-3">
              <div className=" hidden py-3 absolute z-[70] right-0 top-9 group-hover:block rounded-lg  min-h-80 min-w-60 border-2	 bg-neutral-100">
                <div className=" bg-white p-2 rounded-md  w-full">
                  <h2>Title</h2>
                  <p className=" text-slate-400 ">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <span className="indicator-item text-xs bg-blue-600   badge  text-white ">
                2
              </span>

              <IoIosNotificationsOutline className=" text-4xl" />
            </div>
          </div>

          <div className="group grow-0 relative m-auto ">
            <div className="avatar flex flex-row flex-nowrap justify-center items-center gap-1  ">
              <div className=" w-16  h-16 rounded-full">
                <img src={dataUser.img} alt="" />
              </div>
              <span>
                {dataUser.firstName}
                <IoMdArrowDropdown className=" inline text-lg" />
              </span>
            </div>
            <span className="absolute z-[75] top-16 min-w-36 rounded-md   bg-neutral-100    group-hover:block right-0  hidden">
              <ul className=" list-none w-full ">
                <li className="  py-3 px-1 hover:cursor-pointer  hover:bg-blue-500  hover:text-white   ">
                  <Link to="DD">Dashboard</Link>
                </li>
                <li className="  py-3 px-1 hover:cursor-pointer hover:bg-blue-500  hover:text-white   ">
                  <Link>My Teacher</Link>
                </li>
                <li className="  py-3 px-1 hover:cursor-pointer hover:bg-blue-500  hover:text-white   ">
                  <Link>Settings</Link>
                </li>
                <li className="  py-3 px-1 hover:cursor-pointer hover:bg-blue-500  hover:text-white   ">
                  <Link>LogOut</Link>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
