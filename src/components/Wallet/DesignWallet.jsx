import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import { GiWallet } from "react-icons/gi";
import { MdWavingHand } from "react-icons/md";

const DesignWallet = () => {
    return (
        <>
            <div className="w-full max-w-5xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
                {/* Wallet Info Section */}
                <div className="bg-white p-6 rounded-lg shadow mb-4">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                        <div className="flex items-center mb-3 md:mb-0">
                            <GiWallet className="text-4xl text-orange-500 mr-3" />
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">My Wallet</h1>
                        </div>
                        <div className="text-xl font-bold text-gray-500 flex justify-center gap-2 items-center"><span className="text-orange-500 text-2xl">Hi </span>Ibrahim <span><MdWavingHand className="text-yellow-300" /></span></div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-end">
                        <p className="text-gray-600 text-sm mb-3 md:mb-0 w-full md:w-1/2">
                            To ensure accuracy and security, regularly review your wallet details by verifying transaction histories, checking balances, and confirming the authenticity of each entry. Stay vigilant for any discrepancies and update your information as needed to maintain full control over your account.
                        </p>
                        <div className="flex flex-col items-end w-full md:w-1/2">
                            <div className="text-4xl font-bold text-green-500">EGP 900</div>
                            <div className="text-sm font-semibold text-orange-500">Your Wallet Balance.</div>
                        </div>
                    </div>
                </div>

                {/* Transactions Section */}
                <div className="bg-white rounded-lg shadow overflow-x-auto">
                    <table className="w-full text-sm text-gray-500 text-center">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                            <tr>
                                <th scope="col" className="px-6 py-3">Id</th>
                                <th scope="col" className="px-6 py-3">Date</th>
                                <th scope="col" className="px-6 py-3">Credit</th>
                                <th scope="col" className="px-6 py-3">Debit</th>
                                <th scope="col" className="px-6 py-3">Balance</th>
                                <th scope="col" className="px-6 py-3">Comments</th>
                                <th scope="col" className="px-6 py-3">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Transaction Rows */}
                            <tr className="bg-white border-b">
                                <td className="px-6 py-4">1</td>
                                <td className="px-1 py-4">2024-09-08 16:12:28</td>
                                <td className="px-2 py-4 font-bold"></td>
                                <td className="px-2 py-4 font-bold text-red-500"></td>
                                <td className="px-2 py-4 font-bold text-blue-500">EGP 900</td>
                                <td className="px-6 py-4">s</td>
                                <td className="px-6 py-4 flex justify-center items-center">
                                    <div className="bg-green-500 flex justify-center items-center gap-2 py-1 px-3 rounded-3xl w-fit">
                                        <span className="text-white"><FaCheckCircle /></span>
                                        <span className="text-white">Done</span>
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-white border-b">
                                <td className="px-6 py-4">2</td>
                                <td className="px-1 py-4">2024-09-09 10:00:45</td>
                                <td className="px-2 py-4 font-bold text-green-500">EGP 250</td>
                                <td className="px-2 py-4 font-bold text-red-500"></td>
                                <td className="px-2 py-4 font-bold text-blue-500">EGP 1150</td>
                                <td className="px-6 py-4">s</td>
                                <td className="px-6 py-4 flex justify-center items-center">
                                    <div className="bg-green-500 flex justify-center items-center gap-2 py-1 px-3 rounded-3xl w-fit">
                                        <span className="text-white"><FaCheckCircle /></span>
                                        <span className="text-white">Done</span>
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-white border-b">
                                <td className="px-6 py-4">3</td>
                                <td className="px-1 py-4">2024-09-09 10:00:54</td>
                                <td className="px-2 py-4 font-bold text-green-500">EGP 500</td>
                                <td className="px-2 py-4 font-bold text-red-500"></td>
                                <td className="px-2 py-4 font-bold text-blue-500">EGP 1650</td>
                                <td className="px-6 py-4">s</td>
                                <td className="px-6 py-4 flex justify-center items-center">
                                    <div className="bg-green-500 flex justify-center items-center gap-2 py-1 px-3 rounded-3xl w-fit">
                                        <span className="text-white"><FaCheckCircle /></span>
                                        <span className="text-white">Done</span>
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-white border-b">
                                <td className="px-6 py-4">4</td>
                                <td className="px-1 py-4">2024-09-09 10:03:54</td>
                                <td className="px-2 py-4 font-bold"></td>
                                <td className="px-2 py-4 font-bold text-red-500">EGP 150</td>
                                <td className="px-2 py-4 font-bold text-blue-500">EGP 1500</td>
                                <td className="px-6 py-4">s</td>
                                <td className="px-6 py-4 flex justify-center items-center">
                                    <div className="bg-green-500 flex justify-center items-center gap-2 py-1 px-3 rounded-3xl w-fit">
                                        <span className="text-white"><FaCheckCircle /></span>
                                        <span className="text-white">Done</span>
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-white border-b">
                                <td className="px-6 py-4">5</td>
                                <td className="px-1 py-4">2024-09-09 10:20:48</td>
                                <td className="px-2 py-4 font-bold"></td>
                                <td className="px-2 py-4 font-bold text-red-500">EGP 200</td>
                                <td className="px-2 py-4 font-bold text-blue-500">EGP 1300</td>
                                <td className="px-6 py-4">s</td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center gap-2 bg-red-500 py-1 px-3 lg:px-1 rounded-3xl">
                                        <span className="text-white"><FaCircleXmark /></span>
                                        <span className="text-white">UnCompleted</span>
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-white">
                                <td className="px-6 py-4">6</td>
                                <td className="px-1 py-4">2024-09-09 10:22:50</td>
                                <td className="px-2 py-4 font-bold"></td>
                                <td className="px-2 py-4 font-bold text-red-500">EGP 5000</td>
                                <td className="px-2 py-4 font-bold text-blue-500">EGP 5000</td>
                                <td className="px-6 py-4">s</td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center gap-2 bg-red-500 py-1 px-3 lg:px-1 rounded-3xl">
                                        <span className="text-white"><FaCircleXmark /></span>
                                        <span className="text-white">UnCompleted</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default DesignWallet;
