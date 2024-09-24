/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SupportIcon from "./components/SupportIcon";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export const apiWallet = createContext(null);

export default function App() {
  const [dataUse, setDataUse] = useState([]);
  const [refAPI, setRefAPI] = useState([]);

  const [userTable, setUserTable] = useState();
  const loc = useLocation();

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
  }, 660000);

  useEffect(() => {
    const getWalletData = async () => {
      try {
        const res = await axios.get("https://unih0me.com/api/auth/wallets", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setDataUse(res.data.data.wallets);
      } catch (error) {
        console.log("Error fetching wallet data:", error);
      }
    };

    getWalletData();
  }, [loc.pathname, refAPI]);

  return (
    <>
      <apiWallet.Provider
        value={{ dataUse, setDataUse, userTable, setUserTable }}
      >
        <div>
          {/* عرض الـ NavBar إذا كان show true */}
          {/*   {show && (
            <div className=" m-auto">
              <NavBar showLink1={true} />
            </div>
          )} */}
          {token ? (
            <div className=" m-auto">
              <NavBar showLink4={false} showLink1={true} />
            </div>
          ) : (
            <div className=" m-auto">
              <NavBar showLink4={true} showLink1={false} />
            </div>
          )}
          <main className="min-h-screen  w-full  py-6 bg-[#eee]">
            <Outlet /> {/* لعرض المحتويات المخصصة حسب المسار */}
          </main>
          <SupportIcon />
          <Footer /> {/* الفوتر الثابت */}
        </div>
      </apiWallet.Provider>
    </>
  );
}
