import React from "react";
import Avatar from "../../images/profileImage.png"
import { HiStar } from "react-icons/hi";

const TeacherCard = () => {
    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-11/12 text-sm rtl:text-right text-gray-500 dark:text-gray-400 text-center">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Teacher
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Rating
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Booked
                            </th>
                            <th scope="col" className="px-6 py-3">
                                ReBooked
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Done
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <img
                                    className="w-20 h-20 rounded-3xl"
                                    src={Avatar}
                                    alt="Jese" />
                                <div className="ps-3">
                                    <div className="text-base font-semibold">Neil</div>
                                    <div className="font-normal text-gray-500">Egypt</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                <div className="flex justify-start items-center gap-1">
                                <span><HiStar className="text-yellow-500 text-lg" /></span><span>5</span>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <h3>0</h3>
                            </td>
                            <td className="px-6 py-4">
                                <h3>1</h3>
                            </td>
                            <td className="px-6 py-4">
                                <h3>0</h3>
                            </td>
                            <td className="px-6 py-4">
                                <button className="px-3 py-2 bg-orange-500 text-white rounded-3xl hover:bg-orange-400 active:bg-orange-500 ">Book Now</button>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <img
                                    className="w-20 h-20 rounded-3xl"
                                    src={Avatar}
                                    alt="Bonnie"
                                />
                                <div className="ps-3">
                                    <div className="text-base font-semibold">Bonnie</div>
                                    <div className="font-normal text-gray-500">Egypt</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                <div className="flex justify-start items-center gap-1">
                                <span><HiStar className="text-yellow-500 text-lg" /></span><span>5</span>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <h3>0</h3>
                            </td>
                            <td className="px-6 py-4">
                                <h3>0</h3>
                            </td>
                            <td className="px-6 py-4">
                                <h3>1</h3>
                            </td>
                            <td className="px-6 py-4">
                                <button className="px-3 py-2 bg-orange-500 text-white rounded-3xl hover:bg-orange-400 active:bg-orange-500 ">Book Now</button>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <img
                                    className="w-20 h-20 rounded-3xl"
                                    src={Avatar}
                                    alt="Jese"
                                />
                                <div className="ps-3">
                                    <div className="text-base font-semibold">Jese</div>
                                    <div className="font-normal text-gray-500">Egypt</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                <div className="flex justify-start items-center gap-1">
                                <span><HiStar className="text-yellow-500 text-lg" /></span><span>5</span>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <h3>0</h3>
                            </td>
                            <td className="px-6 py-4">
                                <h3>0</h3>
                            </td>
                            <td className="px-6 py-4">
                                <h3>2</h3>
                            </td>
                            <td className="px-6 py-4">
                                <button className="px-3 py-2 bg-orange-500 text-white rounded-3xl hover:bg-orange-400 active:bg-orange-500 ">Book Now</button>
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <img
                                    className="w-20 h-20 rounded-3xl"
                                    src={Avatar}
                                    alt="Leslie"
                                />
                                <div className="ps-3">
                                    <div className="text-base font-semibold">Leslie</div>
                                    <div className="font-normal text-gray-500">Egypt</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                <div className="flex justify-start items-center gap-1">
                                <span><HiStar className="text-yellow-500 text-lg" /></span><span>5</span>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <h3>0</h3>
                            </td>
                            <td className="px-6 py-4">
                                <h3>0</h3>
                            </td>
                            <td className="px-6 py-4">
                                <h3>3</h3>
                            </td>
                            <td className="px-6 py-4">
                                <button className="px-3 py-2 bg-orange-500 text-white rounded-3xl hover:bg-orange-400 active:bg-orange-500 ">Book Now</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default TeacherCard;
