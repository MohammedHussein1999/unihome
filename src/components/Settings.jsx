import { Form } from "react-bootstrap";
import { timezones } from "../assets/data/timezones.js";

const InputField = ({ label, type = "text", required = true }) => {
  return (
    <div className="flex items-center">
      <Form.Label className="min-w-[160px]" htmlFor={label}>
        {label} {required && <span className="text-red-700">*</span>}
      </Form.Label>
      <Form.Control
        id={label}
        type={type}
        required
        className="border-[1px] rounded-sm outline-none shadow-sm pl-2 py-1 text-sm"
      />
    </div>
  );
};

const handleSubmit = (e) => {
  e.preventDefault();
};

const Settings = () => {
  return (
    <div className="flex justify-start items-start w-full h-full pl-0 py-4">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <InputField label="First Name" />
        <InputField label="Last Name" />
        <div className="flex items-center">
          <p className="min-w-[160px]">Gender</p>
          <div className="flex items-center justify-between gap-4">
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
            <label className="flex items-center gap-3" htmlFor="female">
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
          <Form.Label className="min-w-[160px]" htmlFor="timezone">
            Timezone <span className="text-red-700">*</span>
          </Form.Label>
          <Form.Select id="timezone" size="sm">
            {timezones.map((zone, index) => {
              return (
                <option key={index} value={zone.name}>
                  {zone.label}
                </option>
              );
            })}
          </Form.Select>
        </div>
        <button className="bg-blue-700 text-white rounded-md p-2" type="submit">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Settings;
