import React, { useState } from "react";

interface RadioButtonProps {
  options: { value: string; label: string }[];
  name?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const RadioButton = ({
  options,
  name = "",
  value,
  onChange,
}: RadioButtonProps) => {
  const [selectedValue, setSelectedValue] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    onChange?.(event.target.value);
  };

  return (
    <div className="flex space-x-4 mt-2 justify-center sm:justify-start">
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center gap-2 text-sm text-gray-600"
        >
          <div
            className={`flex justify-center items-center rounded-full border w-4 h-4 ${
              selectedValue === option.value ? "border-blue" : "border-gray-500"
            }`}
          >
            <div
              className={`rounded-full bg-blue w-2 h-2 ${
                selectedValue === option.value ? "bg-blue" : "bg-white"
              }`}
            ></div>
            <input
              type="radio"
              name={name}
              id={option.value}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={handleChange}
              className="hidden"
            />
          </div>
          <span
            className={`text-xs ${
              selectedValue === option.value ? "text-blue" : "text-gray-500"
            }`}
          >
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
