import { useState } from "react";

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  onSelect: (selectedValue: string) => void;
  defaultLabel?: string;
  className?: string;
}

const Dropdown = ({
  options,
  onSelect,
  defaultLabel = "Select",
  className,
}: DropdownProps) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    onSelect(value);
  };

  return (
    <div className="border-2 pr-2 rounded-lg m-2 sm:m-0 overflow-hidden">
      <select
        value={selectedValue || ""}
        onChange={handleSelect}
        className={`bg-inherit px-4 py-2 w-full text-xs font-semibold focus:outline-none ${className}`}
      >
        <option value="" disabled hidden>
          {defaultLabel}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
