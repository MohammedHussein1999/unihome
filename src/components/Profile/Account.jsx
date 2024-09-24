import { useMemo, useState, useRef } from "react";
import userProfile from "../Assets/images/profile.jpg";
import axios from "axios";
import countryList from "react-select-country-list";
import timezone from "../timezones.json";

export default function Account() {
  const options = useMemo(() => countryList().getData(), []);
  const timezoneMap = useMemo(() => timezone, []);

  const [imgAvatar, setImgAvatar] = useState(null);
  const [dataUser, setDataUser] = useState({});
  const [profileInput, setProfileInput] = useState({
    image: "",
    country: "",
    timeZone: "",
  });

  // Reference for file input
  const fileInputRef = useRef(null);

  async function profile() {
    let response = await axios.post(
      "https://unih0me.com/api/auth/user-profile/teacher",
      profileInput,
      {
        headers: {
          Authorization: "Bearer YOUR_TOKEN",
        },
      }
    );
    setDataUser(response.data);
  }

  function input(e) {
    const { name, value } = e.target;
    setProfileInput((prevInput) => {
      const updatedInput = {
        ...prevInput,
        [name]: value,
      };

      // Update timezone if country changes
      if (name === "country") {
        updatedInput.timeZone = timezoneMap[value] || "";
      }

      return updatedInput;
    });
  }

  function uploadPictureProfile(e) {
    setImgAvatar(e.target.files[0]);
    fileInputRef.current.value = "";
  }

  function removePictureProfile() {
    setImgAvatar(null);
  }

  return (
    <>
      <section className="bg-white overflow-auto accountSettings pt-10 ps-10">
        <div
          className="flex flex-col md:flex-row justify-between flex-wrap"
          id="profileSetting"
        >
          {/* Form Section */}
          <div className="formSetting basis-full md:basis-1/2 mb-10">
            <form className="w-full">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block capitalize tracking-wide text-blue-600 text-sm font-bold mb-2 ms-5"
                    htmlFor="grid-first-name"
                  >
                    First Name
                  </label>
                  <input
                    onChange={input}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border-none rounded-3xl py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Jane"
                    name="firstname"
                    value={profileInput.firstname || ""}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block capitalize tracking-wide text-blue-600 text-sm font-bold mb-2 ms-5"
                    htmlFor="grid-last-name"
                  >
                    Last Name
                  </label>
                  <input
                    onChange={input}
                    className="appearance-none block w-full bg-gray-200 text-blue-600 border-none rounded-3xl py-4 px-4 leading-tight focus:outline-none focus:bg-white"
                    id="grid-last-name"
                    type="text"
                    placeholder="Doe"
                    name="lastname"
                    value={profileInput.lastname || ""}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="basis-full md:basis-1/2 px-3">
                  <label
                    className="block capitalize tracking-wide text-blue-600 text-sm font-bold mb-2 ms-5"
                    htmlFor="grid-whats"
                  >
                    WhatsApp Number
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border-none rounded-3xl py-4 px-4 m-0 leading-tight focus:outline-none focus:bg-white"
                    id="grid-whats"
                    type="text"
                    placeholder="Enter WhatsApp number"
                    name="whats"
                    value={profileInput.whats || ""}
                    onChange={input}
                  />
                </div>
                <div className="flex flex-col basis-full md:basis-1/2 gap-2 px-3">
                  <label className="block capitalize tracking-wide text-blue-600 text-sm font-bold ms-6">
                    Gender
                  </label>
                  <div className="flex gap-4">
                    <div className="flex items-center basis-1/2 shadow-inner shadow-gray-500 ps-4 border border-gray-200 rounded-3xl ms-3">
                      <input
                        onChange={input}
                        id="bordered-radio-1"
                        type="radio"
                        value="female"
                        name="gender"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                      />
                      <label
                        htmlFor="bordered-radio-1"
                        className="w-full py-3 px-4 text-sm font-medium text-gray-900"
                      >
                        Female
                      </label>
                    </div>
                    <div className="flex items-center basis-1/2 shadow-inner shadow-gray-500 ps-4 border border-gray-200 rounded-3xl">
                      <input
                        onChange={input}
                        id="bordered-radio-2"
                        type="radio"
                        value="male"
                        name="gender"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                      />
                      <label
                        htmlFor="bordered-radio-2"
                        className="w-full py-4 ms-3 text-sm font-medium text-gray-900"
                      >
                        Male
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/2 px-3 mb-6">
                  <label
                    className="block capitalize tracking-wide text-blue-600 text-sm font-bold mb-2 ms-5"
                    htmlFor="grid-country"
                  >
                    Country
                  </label>
                  <div className="relative">
                    <select
                      className="block appearance-none w-full bg-gray-200 text-gray-700 py-4 px-4 pr-8 rounded-3xl leading-tight focus:outline-none focus:bg-white"
                      id="grid-country"
                      name="country"
                      onChange={input}
                      value={profileInput.country}
                    >
                      <option hidden>Select</option>
                      {options.map((option, index) => (
                        <option key={index} value={option.label}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6">
                  <label
                    className="block capitalize tracking-wide text-blue-600 text-sm font-bold mb-2 ms-5"
                    htmlFor="grid-timezone"
                  >
                    Timezone
                  </label>
                  <div className="relative">
                    <select
                      className="block appearance-none w-full bg-gray-200 text-gray-700 py-4 px-4 pr-8 rounded-3xl leading-tight focus:outline-none focus:bg-white"
                      id="grid-timezone"
                      name="timeZone"
                      onChange={input}
                      value={profileInput.timeZone}
                    >
                      <option value="">Select Timezone</option>
                      {Object.entries(timezoneMap).map(([key, value]) => (
                        <option key={key} value={value}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
          {/* Avatar and Buttons */}
          <div className="pictureAvatar flex flex-col justify-center items-center basis-full md:basis-1/2">
            <span className="font-bold text-lg mb-4">
              Change your profile picture
            </span>
            <img
              className="w-24 h-24 md:w-36 md:h-36 avatar mt-5 mb-5 rounded-full shadow-lg shadow-black"
              src={imgAvatar ? URL.createObjectURL(imgAvatar) : userProfile}
              alt="rounded avatar"
              id="avatar"
            />
            <div className="btnPicture w-full flex flex-col items-center duration-500 transition-all">
              <div className="mt-4">
                <label
                  htmlFor="upload"
                  className="border-2 border-orange-500 bg-orange-500 hover:bg-white hover:text-black cursor-pointer duration-500 w-full text-white font-bold py-2 px-10 md:px-20 rounded-3xl focus:outline-none focus:shadow-outline"
                >
                  Upload
                </label>
                <input
                  className="w-full"
                  hidden
                  type="file"
                  id="upload"
                  name="image"
                  ref={fileInputRef}
                  onChange={uploadPictureProfile}
                />
              </div>
              {imgAvatar && (
                <div className="mt-4">
                  <button
                    onClick={removePictureProfile}
                    className="border-2 border-red-600 bg-red-600 hover:bg-white hover:text-black cursor-pointer duration-500 w-full text-white font-bold py-2 px-10 md:px-20 rounded-3xl focus:outline-none focus:shadow-outline"
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="formBtn flex justify-center w-full mt-10">
          <button
            onClick={profile}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 md:px-10 rounded-3xl focus:outline-none focus:shadow-outline"
          >
            Save Changes
          </button>
        </div>
      </section>
    </>
  );
}
