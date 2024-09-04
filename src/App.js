import axios from "axios";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

import { Outlet, useLocation } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export const apiWallet = createContext(null);

export default function App() {
  const [dataUse, setDataUse] = useState();
  const loc = useLocation();
  const accessToken = Cookies.get("accessToken");
  const [show, setShow] = useState(false);
  useEffect(() => {
    apiData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    loc.pathname === "/Log" ? setShow(false) : setShow(true);
  });

  const tokenR = async () => {
    try {
      let response = await axios.create(
        "https://unih0me.com/api/auth/refresh",
        {}, // يمكنك تركها فارغة إذا لم تكن هناك بيانات ليتم إرسالها
        {
          headers: {
            Authorization: `Bearer ${accessToken}`, // تأكد من إرسال التوكن الصحيح
            "Content-Type": "application/json",
          },
        }
      );
      let tt = response.data;
      console.log(tt);
    } catch (error) {
      console.log();
    }
  };
       setInterval(() => {
    tokenR();
  }, 3000);  

  const apiData = async () => {
    try {
      let userData = await axios.get("https://unih0me.com/api/auth/wallets", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });
      setDataUse(userData.data.data.wallets);
      console.log(userData.data.data.wallets);
    } catch (error) {}
  };

  return (
    <apiWallet.Provider value={{ dataUse }}>
      <div className=" ">
        {show && (
          <NavBar link1="Find a Teacher" link3="About" link2="" link4="Chat" />
        )}

        <main className="p-4 min-h-screen">
          <Outlet />
        </main>

        <Footer />
      </div>
    </apiWallet.Provider>
  );
}
