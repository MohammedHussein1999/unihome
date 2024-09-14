import React, { useState } from "react";
import imgLogin from "../assets/LogIN.png";
import axios from "axios";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Login() {
  let navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  async function login() {
    try {
      let response = await axios.post(
        "https://unih0me.com/api/auth/login",
        loginInput
      );
      Cookies.set("accessToken", response.data.access_token);
      console.log(response.data.user);

      sessionStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/Home");
    } catch (error) {
      setError("The email or password you entered doesn't match");
    }
    setLoading(false);
  }

  function input(e) {
    let loginUser = { ...loginInput };
    loginUser[e.target.name] = e.target.value;
    setLoginInput(loginUser);
    // console.log(loginInput);
  }

  function submitLogin(e) {
    e.preventDefault();
    setLoading(true);
    login();
  }
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <section className="h-screen login flex flex-row  flex-wrap justify-around items-center		">
        <div className="uniHomeImg xl:basis-1/3 md:basis-3/5 basis-7/12 ">
          <img src={imgLogin} alt="img Login" className=" w-[95vw] m-auto" />
        </div>

        <div class="formLogin xl:basis-2/5 lg:basis-2/5 basis-full">
          <div className=" flex bg-white rounded-lg shadow-lg border overflow-hidden w-full">
            <div className="w-full p-8 ">
              <p className="text-2xl pb-5 text-gray-600 text-center">
                Welcome to Unihome
              </p>
              <form onSubmit={submitLogin}>
                {error ? (
                  <div
                    class="bg-red-100 border w-full mt-5 mb-10 border-red-400 text-red-700 px-4 py-3 rounded relative"
                    role="alert"
                  >
                    <strong class="font-bold">{error}</strong>
                  </div>
                ) : (
                  ""
                )}
                <div className="mt-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email Address
                  </label>
                  <input
                    className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                    type="email"
                    required
                    onChange={input}
                    name="email"
                  />
                </div>
                <div className="mt-4 flex flex-col justify-between">
                  <div className="flex justify-between">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Password
                    </label>
                  </div>
                  <input
                    onChange={input}
                    name="password"
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="password"
                    placeholder="******************"
                  />

                  <Link
                    to={"forgetPassword"}
                    className="text-sm text-gray-500 font-bold hover:text-gray-900 text-end w-full mt-2"
                  >
                    Forget Password?
                  </Link>
                </div>
                <div className="mt-8">
                  <button
                    class=" border-2 border-orange-500 bg-orange-500 hover:bg-white hover:text-black duration-500  w-full text-white font-bold py-3 px-4 rounded-full focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    {loading ? (
                      <span className="loading loading-infinity loading-lg h-4"></span>
                    ) : (
                      "Login"
                    )}
                  </button>
                </div>
              </form>
              {/* /api/socialite/google */}
              {/* /api/socialite/facebook */}
              <a
                href="#"
                className=" flex items-center justify-center mt-6  text-white rounded-full shadow-md hover:bg-gray-100"
              >
                <div className="flex px-5 justify-center items-center  w-full py-3">
                  <div className="w-5/12 flex justify-between items-center">
                    <div className="min-w-[30px]">
                      <svg className="h-9 w-9" viewBox="0 0 40 40">
                        <path
                          d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                          fill="#FFC107"
                        />
                        <path
                          d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                          fill="#FF3D00"
                        />
                        <path
                          d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                          fill="#4CAF50"
                        />
                        <path
                          d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                          fill="#1976D2"
                        />
                      </svg>
                    </div>
                    <div className="textGoogle">
                      <h1 className="whitespace-nowrap text-gray-600 font-bold text-lg">
                        <span className="w-9 text-red-400">
                          Sign in with Google
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="#"
                className=" flex items-center justify-center mt-6  text-white rounded-full shadow-md hover:bg-gray-100"
              >
                <div className="flex px-5 justify-center items-center  w-full py-3">
                  <div className="w-5/12 flex justify-between items-center">
                    <div className="min-w-[30px]">
                      <svg className="h-9 w-9" viewBox="0 0 40 40">
                        <path
                          d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                          fill="#FFC107"
                        />
                        <path
                          d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                          fill="#FF3D00"
                        />
                        <path
                          d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                          fill="#4CAF50"
                        />
                        <path
                          d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                          fill="#1976D2"
                        />
                      </svg>
                    </div>
                    <div className="textGoogle">
                      <h1 className="whitespace-nowrap text-gray-600 font-bold text-lg">
                        <span className="w-9 text-red-400">
                          Sign in with Facebook
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
              </a>

              <div className="mt-4 flex items-center w-full text-center">
                <a
                  href="#"
                  className="text-base text-gray-500 capitalize text-center w-full"
                >
                  Don&apos;t have any account yet?
                  <Link to={"/register"}>
                    <span className="text-blue-700 font-bold"> Register</span>
                  </Link>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
