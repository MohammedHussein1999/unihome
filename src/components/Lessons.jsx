// import axios from "axios";
// import Cookies from "js-cookie";

export default function Lessons() {
 /*  let apiToken = Cookies.get("accessToken");
  let dataSection = axios
    .get(
      "https://unih0me.com/api/auth/sessions",
      {},
      {
        headers: `Bearer ${apiToken}`,
        "Content-Type": "application/json",
      }
    )
    .then((rr) => console.log(rr))
    .catch((error) => console.log(error)); */

  return (
    <div className=" w-max h-max bg-[#fff] transform hover:scale-105 hover:cursor-pointer hover:-rotate-2 shadow-xl flex flex-row gap-32 p-3 justify-evenly items-center rounded-lg">
      <div className=" flex flex-col justify-center items-center gap-2">
        <div className="avatar">
          <div className="w-24 rounded-full">
            {/* <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" /> */}
          </div>
        </div>
        {/* <h3 className="font-bold text-lg opacity-60">{userData.firstName}</h3> */}
        <p className=" font-semibold opacity-55">
          {/* {(userData.country = "لم يتم تحديد البلد")} */}
        </p>
      </div>
      <label htmlFor="">
        <span className="font-bold text-2xl">Time Section</span>
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-3xl">
              <span style={{ "--value": 15 }}></span>
            </span>
            days
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-3xl">
              <span style={{ "--value": 10 }}></span>
            </span>
            hours
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-3xl">
              <span style={{ "--value": 24 }}></span>
            </span>
            min
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-3xl">
              <span style={{ "--value": 0 }}></span>
            </span>
            sec
          </div>
        </div>
      </label>
    </div>
  );
}
