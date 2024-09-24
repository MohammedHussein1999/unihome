import React, { useState, useMemo } from "react";
import imgRegister from "../Assets/4794658-removebg-preview.png";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import countryList from "react-select-country-list";
export default function Register() {
  const options = useMemo(() => countryList().getData(), []);

  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [teacherOrStudent, setTeacherOrStudent] = useState("student");
  const [registerInput, setRegisterInput] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    email: "",
    password: "",
    confirm_password: "",
    whats: "",
    accept_terms: "1",
    country: "",
    timezone: "",
    source: "",
    type: "",
  });

  async function register(e) {
  
    try {
      let response = await axios.post(
        `https://unih0me.com/api/auth/register/${teacherOrStudent}`,
        registerInput
      );
      console.log(response);

        navigate("/");
    } catch (error) {
      setError(error.response.data);
      // console.log(JSON.parse(error.response.data));
      let filed = Object.keys(JSON.parse(error.response.data));
      for (let f of filed) {
        // console.log(f);
        correct(f);
      }
      // console.log(filed);
    }
    setLoading(false);
  }

  function correct(cor) {
    console.log(cor);
  }

  function selectUser(e) {
    if (e.target.value === "student") {
      setTeacherOrStudent("teacher");
      localStorage.setItem("user", "teacher");
    } else {
      setTeacherOrStudent("student");
      localStorage.setItem("user", "student");
    }
  }

  function input(e) {
    let registerUser = { ...registerInput };
    registerUser[e.target.name] = e.target.value;
    registerUser.type = teacherOrStudent;
    setRegisterInput(registerUser);
    // console.log(registerUser);
  }

  function submitRegister(e) {
    e.preventDefault();
    setLoading(true);
    register();
  }

  // function matchPassword() {
  //     if (registerInput.password == registerInput.confirm_password) {
  //         register()
  //     }
  //     else
  //         <p className='text-red-600 text-xs mb-5'>The Password confirmation does not match. </p>
  // }

  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <section className="h-full register flex flex-row flex-wrap justify-around items-start">
        <div className="uniHomeImg xl:basis-1/3 md:basis-3/5 basis-7/12 ">
          <img src={imgRegister} alt="img Register" className="w-4/5 m-auto" />
        </div>

        <div class="formRegister xl:basis-2/5 lg:basis-2/5 basis-full">
          <div className=" flex bg-white rounded-lg shadow-lg border overflow-hidden w-full">
            <div className="w-full p-5 ">
              <p className="text-2xl text-gray-600 text-center">Register</p>
              <div className="selectUser my-10 flex justify-center">
                <label className="flex cursor-pointer gap-2">
                  <span className="label-text text-base	 font-bold">
                    Student
                  </span>
                  <input
                    onChange={selectUser}
                    name="type"
                    type="checkbox"
                    value={teacherOrStudent}
                    className="toggle theme-controller  bg-orange-500 hover:bg-orange-500"
                  />
                  <span className="label-text text-base	 font-bold">
                    Teacher
                  </span>
                </label>
              </div>

              <form class="w-full" onSubmit={submitRegister}>
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

                <div class="flex flex-wrap -mx-3">
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-first-name"
                    >
                      First Name
                    </label>
                    <input
                      onChange={input}
                      name="firstname"
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Jane"
                    />
                  </div>
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      Last Name
                    </label>
                    <input
                      onChange={input}
                      name="lastname"
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name"
                      type="text"
                      placeholder="Doe"
                    />
                  </div>

                  <div class="w-full px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-first-name"
                    >
                      Email Address
                    </label>
                    <input
                      onChange={input}
                      name="email"
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="email"
                      placeholder="Jane"
                    />
                  </div>

                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-password"
                    >
                      Password
                    </label>
                    <input
                      name="password"
                      onChange={input}
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-password"
                      type="password"
                      placeholder="******************"
                    />
                  </div>

                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 sm:mb-0 ">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="confirm_password"
                    >
                      Confirm Password
                    </label>
                    <input
                      name="confirm_password"
                      onChange={input}
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="confirm_password"
                      type="password"
                      placeholder="******************"
                    />
                  </div>

                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="gender"
                    >
                      gender
                    </label>
                    <div class="relative">
                      <select
                        onChange={input}
                        class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="gender"
                        name="gender"
                      >
                        <option hidden>Select</option>
                        <option value={"female"}>Female</option>
                        <option value={"male"}>Male</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          class="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div class="xl:basis-1/2 md:w-1/2 w-full px-3">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="whatsapp_number"
                    >
                      WhatsApp Number
                    </label>
                    <input
                      onChange={input}
                      name="whats"
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="whatsapp_number"
                      type="text"
                      placeholder="Enter WhatsApp Number"
                    />
                  </div>

                  <div class="xl:basis-1/2 md:w-1/2 w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Time Zone
                    </label>

                    <div class="relative">
                      <select
                        onChange={input}
                        class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        name="timezone"
                      >
                        <option hidden>Select</option>

                        <option value="Facebook">Facebook</option>
                        <option value="Twitter">Twitter</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Friend">Friend</option>
                        <option value="You Tube">You Tube</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          class="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div class="xl:basis-1/2 md:w-1/2 w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      country
                    </label>

                    <div class="relative">
                      <select
                        onChange={input}
                        class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="country"
                        name="country"
                      >
                        <option hidden>Select</option>

                        {options.map((option, index) => (
                          <option key={index} value={option.label}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          class="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div class=" w-full px-3 mt-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Source
                    </label>

                    <div class="relative">
                      <select
                        onChange={input}
                        class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="source"
                        name="source"
                      >
                        <option hidden>Select</option>

                        <option value="Facebook">Facebook</option>
                        <option value="Twitter">Twitter</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Friend">Friend</option>
                        <option value="You Tube">You Tube</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          class="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="acceptTerms flex gap-2 mt-5">
                  <input
                    onChange={input}
                    type="checkbox"
                    className="w-4"
                    name="accept_terms"
                    value={1}
                  />
                  <p
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    accept the{" "}
                    <span className="text-blue-500  hover:underline underline-offset-1 cursor-pointer">
                      Terms and Conditions
                    </span>
                  </p>

                  <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle  btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                      </form>
                      <h3 className="font-bold text-lg">Terms & Conditions</h3>
                      <p className="py-4">
                        Protecting your private information is our priority.
                        This Statement of Privacy applies to
                        http://www.unih0me.com and Unihome and governs data
                        collection and usage. For the purposes of this Privacy
                        Policy, unless otherwise noted, all references to
                        Unihome include http://www.unih0me.com and Unihome. The
                        Unihome website is an Online language platform for
                        teaching and learning foreign languages. site. By using
                        the Unihome website, you consent to the data practices
                        described in this statement. Collection of your Personal
                        Information In order to better provide you with products
                        and services offered on our Site, Unihome may collect
                        personally identifiable information, such as your: -
                        First and Last Name - Mailing Address - E-mail Address -
                        Phone Number - credentials and college degrees,
                        certificates, etc. If you purchase Unihome's products
                        and services, we collect billing and credit card
                        information. This information is used to complete the
                        purchase transaction. Please keep in mind that if you
                        directly disclose personally identifiable information or
                        personally sensitive data through Unihome's public
                        message boards, this information may be collected and
                        used by others. We do not collect any personal
                        information about you unless you voluntarily provide it
                        to us. However, you may be to provide certain personal
                        information to us when you select to use certain
                        products or services available on the Site. These may
                        include: (a) registering for an account on our Site; (b)
                        entering a sweepstake or contest sponsored by us or one
                        of our partners; (c) signing up for special offers from
                        selected third parties; (d) sending us an email message;
                        (e) submitting your credit card or other payment
                        information when ordering and purchasing products and
                        services on our Site. To wit, we will use your
                        information for, but not limited to, communicating with
                        you in relation to services and/or products you have
                        requested from us. We also may gather additional
                        personal or non-personal information in the future. Use
                        of your Personal Information Unihome collects and uses
                        your personal information to operate its website(s) and
                        deliver the services you have requested. Unihome may
                        also use your personally identifiable information to
                        inform you of other products or services available from
                        Unihome and its affiliates. Sharing Information with
                        Third Parties Unihome does not sell, rent or lease its
                        customer lists to third parties. Unihome may share data
                        with trusted partners to help perform statistical
                        analysis, send you email or postal mail, provide
                        customer support, or arrange for deliveries. All such
                        third parties are prohibited from using your personal
                        information except to provide these services to Unihome,
                        and they are to maintain the confidentiality of your
                        information. Unihome may disclose your personal
                        information, without notice, if to do so by law or in
                        the good faith belief that such action is necessary to:
                        (a) conform to the edicts of the law or comply with
                        legal process served on Unihome or the site; (b) protect
                        and defend the rights or property of Unihome; and/or (c)
                        act under exigent circumstances to protect the personal
                        safety of users of Unihome, or the public. Automatically
                        Collected Information Information about your computer
                        hardware and software may be automatically collected by
                        Unihome. This information can include your IP address,
                        browser type, domain names, access times, and referring
                        website addresses. This information is used for the
                        operation of the service, to maintain the quality of the
                        service, and to provide general statistics regarding the
                        use of the Unihome website. Use of Cookies The Unihome
                        website may use "cookies" to help you personalize your
                        online experience. A cookie is a text file that is
                        placed on your hard disk by a web page server. Cookies
                        cannot be used to run programs or deliver viruses to
                        your computer. Cookies are uniquely assigned to you, and
                        can only be read by a web server in the domain that
                        issued the cookie to you. One of the primary purposes of
                        cookies is to provide a convenience feature to save you
                        time. The purpose of a cookie is to tell the Web server
                        that you have returned to a specific page. For example,
                        if you personalize Unihome pages, or register with
                        Unihome site or services, a cookie helps Unihome to
                        recall your specific information on subsequent visits.
                        This simplifies the process of recording your personal
                        information, such as billing addresses, shipping
                        addresses, and so on. When you return to the same
                        Unihome website, the information you previously provided
                        can be retrieved, so you can easily use the Unihome
                        features that you customized. You have the ability to
                        accept or decline cookies. Most Web browsers
                        automatically accept cookies, but you can usually modify
                        your browser setting to decline cookies if you prefer.
                        If you choose to decline cookies, you may not be able to
                        fully experience the interactive features of the Unihome
                        services or websites you visit. Links This website
                        contains links to other sites. Please be aware that we
                        are not responsible for the content or privacy practices
                        of such other sites. We encourage our users to be aware
                        when they leave our site and to read the privacy
                        statements of any other site that collects personally
                        identifiable information. Security of your Personal
                        Information Unihome secures your personal information
                        from unauthorized access, use, or disclosure. Unihome
                        uses the following methods for this purpose: - SSL
                        Protocol - SSL When personal information (such as a
                        credit card number) is transmitted to other websites, it
                        is protected through the use of encryption, such as the
                        Secure Sockets Layer (SSL) protocol. We strive to take
                        appropriate security measures to protect against
                        unauthorized access to or alteration of your personal
                        information. Unfortunately, no data transmission over
                        the Internet or any wireless network can be guaranteed
                        to be 100% secure. As a result, while we strive to
                        protect your personal information, you acknowledge that:
                        (a) there are security and privacy limitations inherent
                        to the Internet which are beyond our control; and (b)
                        security, integrity, and privacy of any and all
                        information and data exchanged between you and us
                        through this Site cannot be guaranteed. Children Under
                        Thirteen Unihome does not knowingly collect personally
                        identifiable information from children under the age of
                        thirteen. If you are under the age of thirteen, you must
                        ask your parent or guardian for permission to use this
                        website. Disconnecting your Unihome Account from Third
                        Party Websites You will be able to connect your Unihome
                        account to third-party accounts. BY CONNECTING YOUR
                        Unihome ACCOUNT TO YOUR THIRD PARTY ACCOUNT, YOU
                        ACKNOWLEDGE AND AGREE THAT YOU ARE CONSENTING TO THE
                        CONTINUOUS RELEASE OF INFORMATION ABOUT YOU TO OTHERS
                        (IN ACCORDANCE WITH YOUR PRIVACY SETTINGS ON THOSE THIRD
                        PARTY SITES). IF YOU DO NOT WANT INFORMATION ABOUT YOU,
                        INCLUDING PERSONALLY IDENTIFYING INFORMATION, TO BE
                        SHARED IN THIS MANNER, DO NOT USE THIS FEATURE. You may
                        disconnect your account from a third-party account at
                        any time. Users may learn how to disconnect their
                        accounts from third-party websites by visiting their "My
                        Account" page. Users may also contact us via email or
                        telephone. Right to erasure You may ask us to delete or
                        remove your Personal Data, such as where you withdraw
                        your consent. If we shared your data with others, we
                        will tell them about the erasure where possible. If you
                        ask us, and where possible and lawful to do so, we will
                        also tell you with whom we shared your Personal Data
                        with. so you can contact them directly. Deletion of an
                        Account You may request to delete your Account at any
                        time, however, there are no refunds for cancellation. In
                        case Unihome shall suspend or terminate your Account
                        because of breach of any of our policies, you understand
                        and agree that you shall receive no refund or exchange
                        for any unused lessons or any portion of the Service,
                        any content or data associated with your account, or for
                        anything else. To delete your account and personal data
                        from Unihome, please send your request to{" "}
                        <a
                          href="mailto:support@unih0me.com"
                          className="text-blue-600"
                        >
                          support@unih0me.com
                        </a>
                        E-mail Communications From time to time, Unihome may
                        contact you via email for the purpose of providing
                        announcements, promotional offers, alerts,
                        confirmations, surveys, and/or other general
                        communication. If you would like to stop receiving
                        marketing or promotional communications via email from
                        Unihome, you may opt-out of such communications by
                        Customers may unsubscribe from emails or from the
                        platform by "replying STOP" or "clicking on the
                        UNSUBSCRIBE button. Through email requests, they can
                        have their profiles removed. Changes to this Statement
                        Unihome reserves the right to change this Privacy Policy
                        from time to time. We will notify you about significant
                        changes in the way we treat personal information by
                        sending a notice to the primary email address specified
                        in your account, by placing a prominent notice on our
                        site, and/or by updating any privacy information on this
                        page. Your continued use of the Site and/or Services
                        available through this Site after such modifications
                        will constitute your: (a) acknowledgment of the modified
                        Privacy Policy; and (b) agreement to abide and be bound
                        by that Policy. Contact Information Unihome welcomes
                        your questions or comments regarding this Statement of
                        Privacy. If you believe that Unihome has not adhered to
                        this Statement, please contact Unihome at: Email
                        Address: info@unih0me.com
                      </p>
                    </div>
                  </dialog>
                </div>

                <div className="mt-8">
                  <button
                    class="border-2 border-orange-500 bg-orange-500 hover:bg-white duration-500 hover:text-black  w-full text-white font-bold py-3 px-4 rounded-full focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    {loading ? (
                      <span className="loading loading-infinity loading-lg h-4"></span>
                    ) : (
                      "Register"
                    )}
                  </button>
                </div>
              </form>

              <a
                href="#"
                className=" flex items-center justify-center mt-4 text-white rounded-full shadow-md hover:bg-gray-100"
              >
                <div className="flex px-5 justify-center w-full py-3">
                  <div className="min-w-[30px]">
                    <svg className="h-6 w-6" viewBox="0 0 40 40">
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
                  <div className="flex w-full justify-center">
                    <h1 className="whitespace-nowrap text-gray-600 font-bold">
                      Sign in with Google
                    </h1>
                  </div>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center justify-center my-6 text-white rounded-full shadow-md hover:bg-gray-100"
              >
                <div className="flex px-5 justify-center w-full py-3">
                  <div className="min-w-[30px]">
                    <svg className="h-6 w-6" viewBox="0 0 40 40">
                      <path
                        d="M20 0C8.955 0 0 8.955 0 20c0 9.157 6.379 16.703 14.688 19.217v-13.607H10.297V20h4.391v-3.25c0-4.343 2.578-6.75 6.49-6.75 1.883 0 3.943.344 3.943.344v4.308h-2.22c-2.188 0-2.875 1.355-2.875 2.743V20h4.687l-.75 5.61h-3.938V39.217C33.621 36.703 40 29.157 40 20c0-11.045-8.955-20-20-20z"
                        fill="#3b5998"
                      />
                    </svg>
                  </div>
                  <div className="flex w-full justify-center">
                    <h1 className="whitespace-nowrap text-gray-600 font-bold">
                      Sign in with Facebook
                    </h1>
                  </div>
                </div>
              </a>

              <div className="mt-4 flex items-center w-full text-center">
                <a
                  href="#"
                  className="text-base text-gray-500 capitalize text-center w-full"
                >
                  Don&apos;t have any account yet?
                  <Link to={"/"}>
                    <span className="text-blue-700 ms-2 font-bold">Login</span>
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
