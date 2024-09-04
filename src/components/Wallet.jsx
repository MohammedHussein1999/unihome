// import { useContext } from "react";

import { apiWallet } from "../App";
import { useContext } from "react";
export default function Wallet() {
  const { dataUse } = useContext(apiWallet);
  let nameUser = JSON.parse(sessionStorage.getItem("user"));
  console.log(dataUse);

  console.log(nameUser);

  return (
    <div>
      <div className=" flex flex-col items-stretch">
        <label htmlFor="" className=" space-y-2 text-3xl">
          <h2>My Wallet</h2>
          <div className=" flex flex-col  p-5 rounded-lg items-start  h-max bg-white">
            <label htmlFor="" className=" text-3xl opacity-60">
              Hi {nameUser.firstName}
            </label>
            <span> EGP : {dataUse[0].amount} </span>
          </div>
        </label>
      </div>

      <section>
        <span>Transactions</span>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Tax Id</th>
                <th>Date</th>
                <th>Credit</th>
                <th>Debit</th>
                <th>Bala</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="bg-base-200">
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
