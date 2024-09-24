import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import * as Yup from "yup"
import Cookies from 'js-cookie';
import imgLogo from '../Assets/6321602.jpg'

export default function EditPassword() {
    const [loading, setLoading] = useState(false)
    const [errorResponse, setErrorResponse] = useState([])
    const token = Cookies.get("accessToken");
    let dataUser = JSON.parse(sessionStorage.getItem("user"));

    let mySchema = Yup.object({
        current_password: Yup.string()
            .oneOf([Yup.ref("new_password"), null], "The password confirmation does not match"),


        new_password: Yup.string()
            .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,}$/, "The new password must be at least 6 characters."),

        new_password_confirmation: Yup.string()
            .oneOf([Yup.ref("new_password"), null], "The password confirmation does not match")


    })



    let formik = useFormik({
        initialValues: {
            current_password: "",
            new_password: "",
            new_password_confirmation: ""
        },
        validationSchema: mySchema, onSubmit: (values) => { chgPassword(values) }
    })





    async function chgPassword(values) {
        setLoading(true)

        try {
            let response = await axios.post(`https://unih0me.com/api/auth/user-profile/${dataUser.type}`, values, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            setLoading(false)

        }
        catch (error) {
            setErrorResponse(error.response.data)
            console.log(errorResponse);
            setLoading(false)

        }
    }





    return <>

        <section className="changePassword h-screen flex bg-white justify-center items-center">
            <form class="w-2/6 px-10 py-10 mx-auto border-2 shadow-2xl border-orange-400 rounded-lg" onSubmit={formik.handleSubmit}>
                <div className="img flex justify-center">
                    <img src={imgLogo} alt="" className='w-40 mb-10 ' />

                </div>

                <div class="mb-5">
                    <label for="currentPassword" class="block ms-4 mb-2 text-sm font-bold text-blue-600 dark:text-white">Current Password</label>
                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.current_password} type="password" id="currentPassword" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" name='current_password' />
                    <div className="text-red-500 text-xs mt-2  font-bold">
                        {formik.touched.current_password && formik.errors.current_password}

                    </div>


                </div>


                <div class="mb-5">
                    <label for="newPassword" class="block mb-2 text-sm font-bold text-blue-600 dark:text-white ms-4">New password</label>
                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.new_password} type="password" id="newPassword" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required name='new_password' />

                    <div className="text-red-500 text-xs mt-2 font-bold">
                        {formik.touched.new_password && formik.errors.new_password}
                    </div>
                    
                </div>






                <div class="mb-5">
                    <label for="confirmPassword" class="block ms-4 mb-2 text-sm font-bold  text-blue-600 dark:text-white">confirm_password</label>
                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.new_password_confirmation} type="password" id="confirmPassword" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required name='new_password_confirmation' />

                    <div className="text-red-500 text-xs mt-2  font-bold">
                        {formik.touched.new_password_confirmation && formik.errors.new_password_confirmation}

                    </div>
                </div>

                <div className="mt-11">
                    <button class=" border-2 border-orange-500 bg-orange-500 hover:bg-white hover:text-black duration-500  w-full text-white font-bold py-3 px-4 rounded-full focus:outline-none focus:shadow-outline" type="submit" >
                        {loading ? <span className="loading loading-infinity loading-lg h-4"></span>

                            : "Save Change "}
                    </button>
                </div>
            </form>

        </section>

    </>
}
