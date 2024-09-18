import { useContext } from "react";
import { apiWallet } from "../App";

export default function Wallet() {
  const { dataUse } = useContext(apiWallet);
  let nameUser = JSON.parse(sessionStorage.getItem("user"));
  // console.log(dataUse);

  // التحقق من وجود بيانات المحفظة قبل محاولة الوصول إليها
  if (!dataUse || dataUse.length === 0) {
    return <div>Loading wallet data...</div>; // عرض رسالة أو مؤشر أثناء التحميل
  }

  return (
    <div className=" text-black">
      <div className="flex flex-col items-stretch">
        <label htmlFor="" className="space-y-2 text-3xl m-3">
          <h2>My Wallet</h2>
          <div className="flex flex-col items-start p-5 gap-y-2 bg-white border border-gray-200 rounded-lg shadow md:flex-col md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 ">
            <label htmlFor="" className="text-3xl opacity-60">
              Hi {nameUser?.firstName}
            </label>

            <span>EGP : {Number(dataUse[0].totalAmount)}</span>
          </div>
        </label>
      </div>

      <section className="w-min">
        <span>Transactions</span>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="table w-max text-sm text-left rtl:text-right bg-white dark:text-gray-400">
            <thead>
              <tr className=" text-black">
                <th></th>
                <th>Tax Id</th>
                <th>Date</th>
                <th>Credit</th>
                <th>Debit</th>
                <th>Balance</th>
                <th>Comments</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {dataUse.map((e, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{e.id}</td>
                  <td>{e?.date}</td>
                  {e.type === "Credit" ? (
                    <td className=" text-green-600">EGP {e?.amount}</td>
                  ) : (
                    <td></td>
                  )}

                  {e.type === "Debit" ? <td>{e?.amount}</td> : <td></td>}
                  <td>{e.amount}</td>

                  <td>{e.description}</td>
                  <td>{e.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
