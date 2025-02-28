"use client";

import { SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";

interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
  options: string[];
  onChange: (selectedValue: string) => void;
}

const Select = ({ options, onChange, ...props }: SelectProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="relative">
        <select
          {...props}
          className="w-full border-none rounded-[40px] text-primary-dark outline-none p-4 pl-4 pr-12 shadow-light bg-white appearance-none focus:shadow-dark transition-shadow duration-100"
          onChange={handleChange}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-secondary-dark pointer-events-none"
          size={20}
          strokeWidth={1.5}
        />
      </div>
    </div>
  );
};

export default Select;
