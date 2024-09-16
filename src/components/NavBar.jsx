import { Link } from "react-router-dom";
import { BsChatText } from "react-icons/bs";
import UniHomeLogo from './Assets/images/UniHome.png';
import { MdNotificationsActive } from "react-icons/md";

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
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-row items-center justify-between mx-auto px-4 py-2">
          <Link to="/Home" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={UniHomeLogo} className="w-20 h-20" alt="Logo" />
          </Link>
          <Link
            to="/Home"
            className="hideUniHome">
            <h1 className="text-7xl font-[AntonSC-R]"><span className="text-blue-600">Uni</span><span className="text-orange-500">Home</span></h1>
            <p className="text-blue-600 text-md font-bold text-center">Online University From Home</p>
          </Link>

          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse md:gap-6 gap-0">
            {/* Chat Icon */}
            {showChat && (
              <div className="gap-x-3 flex justify-center items-center">
                <div className="indicator h-[42px] relative cursor-pointer mr-3">
                  <span className="indicator-item text-xs bg-red-500 badge text-white">
                    7
                  </span>
                  <Link to="Chat">
                    <BsChatText className="inline text-blue-600 text-3xl mt-2" />
                  </Link>
                </div>
              </div>
            )}

            {/* Notification Icon */}
            <div className="indicator relative cursor-pointer group mr-3">
              <div className="hidden py-3 absolute z-[70] right-0 top-9 group-hover:block rounded-lg min-h-80 min-w-60 border-2 bg-neutral-100">
                <div className="bg-white p-2 rounded-md w-full">
                  <h2>Title</h2>
                  <p className="text-slate-400">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <span className="indicator-item text-xs bg-blue-600 badge text-white">
                2
              </span>
              <MdNotificationsActive className="text-4xl text-yellow-300 mt-2" />
            </div>

            <div className="text-xl font-bold text-gray-500 flex justify-center gap-2 items-center capitalize"><span className="text-orange-500 text-2xl">Hi </span>{dataUser.firstname}</div>
            {/* User Profile */}
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <img id="animation-register" className="w-16 h-16 rounded-full" src={dataUser.image} alt="user" />
            </button>
            <div
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">{dataUser.firstname} {dataUser.lastname}</span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">{dataUser.email}</span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <Link
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    to="DD"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/TeacherS"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Find your Teacher
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}


{/* {AccessToken()} */ }
{/* <div className="navbar px- bg-white text-black ">
        <div className="container justify-between space-x-5 flex flex-row">
        <div className="grow-0 w-max">
          <Link to="/Home" className="">
            <img className="w-20 h-20" src={UniHomeLogo} alt="logo" />
          </Link>
        </div>
        <div className=" group">
          <div className="flex-none flex-nowrap flex-row left-0 z-[99]">
            <ul className="menu menu-horizontal max-md:flex max-md:flex-col">
              {showLink1 && (
                <li className="text-2xl font-bold">
                  <Link to="/TeacherS">{link1}</Link>
                </li>
              )}

              {showLink2 && (
                <li>
                  <Link to="">{link2}</Link>
                </li>
              )}

              {showLink3 && (
                <li className="order-last">
                  <Link to="Chat">
                    {link4}
                    <BsChatHeart className="text-red-500 text-2xl" />
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
        <div className="gap-x-3 flex justify-center items-center">
          <div className="gap-x-2 flex-nowrap flex flex-row ">
            {showChat && (
              <div className="order-last">
                <div>
                  <div className="indicator h-[42px] relative cursor-pointer  mr-3">
                    <span className="indicator-item text-xs bg-red-400 badge text-white ">
                      7
                    </span>

                    <Link to="Chat">
                      <BsChatHeart className="inline text-blue-600 text-3xl" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="">
            <div className="indicator relative cursor-pointer group mr-3">
              <div className="hidden py-3 absolute z-[70] right-0 top-9 group-hover:block rounded-lg  min-h-80 min-w-60 border-2	 bg-neutral-100">
                <div className=" bg-white p-2 rounded-md w-full">
                  <h2>Title</h2>
                  <p className=" text-slate-400">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <span className="indicator-item text-xs bg-blue-600 badge text-white">
                2
              </span>

              <IoIosNotificationsOutline className=" text-4xl" />
            </div>
          </div>

          <div className="group grow-0 relative m-auto ">
            <div className="avatar flex flex-row flex-nowrap justify-center items-center gap-1">
              <div className="w-16 h-16 rounded-full">
                <img src={dataUser.img} alt="" />
              </div>
              <span>
                {dataUser.firstName}
                <IoMdArrowDropdown className="inline text-lg" />
              </span>
            </div>
            <span className="absolute z-[75] top-16 min-w-36 rounded-md bg-neutral-100 group-hover:block right-0 hidden">
              <ul className=" list-none w-full ">
                <li className="py-3 px-1 hover:cursor-pointer hover:bg-blue-500 hover:text-white">
                  <Link to="DD">Dashboard</Link>
                </li>
                <li className="py-3 px-1 hover:cursor-pointer hover:bg-blue-500 hover:text-white">
                  <Link>My Teacher</Link>
                </li>
                <li className="py-3 px-1 hover:cursor-pointer hover:bg-blue-500 hover:text-white">
                  <Link>Settings</Link>
                </li>
                <li className="py-3 px-1 hover:cursor-pointer hover:bg-blue-500 hover:text-white">
                  <Link>LogOut</Link>
                </li>
              </ul>
            </span>
          </div>
          </div>
        </div>
      </div> */}
