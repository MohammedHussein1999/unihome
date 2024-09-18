/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SupportIcon from "./components/SupportIcon";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { AccessToken } from "./AccessToken";

export const apiWallet = createContext(null);

export default function App() {
  const [dataUse, setDataUse] = useState([]);
  const [refAPI, setRefAPI] = useState([]);
  const [show, setShow] = useState(false);
  const [userTable, setUserTable] = useState();
  const loc = useLocation();
  // const nav = useNavigate();
  // console.log(userTable);

  let usersData = async () => {
    let userTable = await axios.get("https://unih0me.com/api/teachers");
    setUserTable(userTable);
  };
  useEffect(() => {
    usersData();
  }, []);
  const token = Cookies.get("accessToken");
  setInterval(() => {
    const refreshToken = async () => {
      if (token) {
        try {
          const res = await axios.post(
            "https://unih0me.com/api/auth/refresh",
            {},
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );

          Cookies.set("accessToken", res.data.access_token);
          setRefAPI(res.data.access_token);
        } catch (error) {
          console.log("Error refreshing token:", error);
        }
      }
    };

    refreshToken();
  }, 360000);

  useEffect(() => {
    const getWalletData = async () => {
      try {
        const res = await axios.get("https://unih0me.com/api/auth/wallets", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setDataUse(res.data.data.wallets); // تخزين بيانات المحفظة
      } catch (error) {
        console.log("Error fetching wallet data:", error);
      }
    };

    !token ? console.log("ss") : getWalletData();
    loc.pathname === "/" || loc.pathname === "/register"
      ? setShow(false)
      : setShow(true);
  }, [loc.pathname, refAPI]);

  return (
    <>
      <apiWallet.Provider
        value={{ dataUse, setDataUse, userTable, setUserTable }}
      >
        <div>
          {/* عرض الـ NavBar إذا كان show true */}
          {show && (
            <div className=" m-auto">
              <NavBar
                link1="Find a Teacher"
                link2="Home"
                link3="About"
                link4="Chat"
                showChat={true}
                showLink1={true}
              />
            </div>
          )}
          <main className="min-h-screen  w-full   bg-[#eee]">
            <Outlet /> {/* لعرض المحتويات المخصصة حسب المسار */}
          </main>
          <SupportIcon />
          <Footer /> {/* الفوتر الثابت */}
        </div>
      </apiWallet.Provider>
    </>
  );
}
