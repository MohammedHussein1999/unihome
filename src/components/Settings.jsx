// import { timezones } from "../assets/data/timezones.js";
export const timezones = [
  { name: "UTC", label: "Coordinated Universal Time (UTC)" },
  { name: "PST", label: "Pacific Standard Time (PST)" },
  { name: "EST", label: "Eastern Standard Time (EST)" },
  // Add more timezones as needed
];

const InputField = ({ label, type = "text", required = true }) => {
  return (
    <div className="flex items-center">
      <label className="min-w-[160px]" htmlFor={label}>
        {label} {required && <span className="text-red-700">*</span>}
      </label>
      <input
        id={label}
        type={type}
        required={required}
        className="border border-gray-300 rounded-sm outline-none shadow-sm pl-2 py-1 text-sm w-full"
      />
    </div>
  );
};

const handleSubmit = (e) => {
  e.preventDefault();
};

const Settings = () => {
  return (
    <div className=" p-6 h-max  min-h-[67vh]  w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <form className="space-y-6 m-auto" onSubmit={handleSubmit}>
        <InputField label="First Name" />
        <InputField label="Last Name" />
        <div className="flex items-center">
          <p className="min-w-[160px]">Gender</p>
          <div className="flex items-center h-max w-max justify-between gap-4">
            <label className="flex items-center gap-3" htmlFor="male">
              Male
              <input
                name="gender"
                value="male"
                id="male"
                type="radio"
                required
                className="pl-1 py-1 text-sm"
              />
            </label>
            <label
              className="flex justify-center items-center gap-3"
              htmlFor="female"
            >
              Female
              <input
                name="gender"
                value="female"
                id="female"
                type="radio"
                required
                className="pl-1 py-1 text-sm"
              />
            </label>
          </div>
        </div>
        <InputField label="Phone Number" type="tel" required={false} />
        <InputField label="WhatsApp" type="tel" required={false} />
        <InputField label="Country" />
        <div className="flex items-center">
          <label className="min-w-[160px]" htmlFor="timezone">
            Timezone <span className="text-red-700">*</span>
          </label>
          <select
            id="timezone"
            className="border border-gray-300 rounded-sm outline-none shadow-sm pl-2 py-1 text-sm w-full"
          >
            {timezones.map((zone, index) => {
              return (
                <option key={index} value={zone.name}>
                  {zone.label}
                </option>
              );
            })}
          </select>
        </div>
        <button
          className="bg-blue-700 text-white rounded-md px-4 py-2"
          type="submit"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Settings;
