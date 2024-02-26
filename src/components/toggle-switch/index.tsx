import { useState } from "react";

interface ToggleSwitchProps {
  label?: string;
  onChange?: (isChecked: boolean) => void;
  isChecked?: boolean;
}

const ToggleSwitch = ({
  label,
  onChange,
  isChecked = false,
}: ToggleSwitchProps) => {
  const [isOn, setIsOn] = useState(isChecked);

  const handleChange = () => {
    setIsOn(!isOn);
    onChange?.(!isOn);
  };

  return (
    <label className="flex items-center cursor-pointer">
      <div
        className={`relative inline-block w-9 h-5 pl-0.5 rounded-full ${
          isOn ? "bg-blue" : "bg-gray-200"
        }`}
        onClick={handleChange}
      >
        <span
          className={`absolute block w-4 h-4 rounded-full bg-white mt-0.5 ${
            isOn ? "translate-x-4" : ""
          }`}
        />
      </div>
      {label && <span className="ml-2 text-xs text-gray-400">{label}</span>}
    </label>
  );
};

export default ToggleSwitch;
