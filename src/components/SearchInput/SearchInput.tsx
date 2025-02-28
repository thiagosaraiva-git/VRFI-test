"use client";

import { useState } from "react";
import { Search } from "lucide-react";

interface SearchInputProps {
  placeholder: string;
  onChange?: (selectedValue: string) => void;
}

const SearchInput = ({ placeholder, onChange }: SearchInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="relative">
        <Search
          className={`absolute left-5 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-colors duration-100 ${isFocused ? "text-primary-dark" : "text-secondary-dark"}`}
          strokeWidth={1}
        />
        <input
          type="text"
          className="w-full border-none rounded-[40px] text-primary-dark outline-none focus:placeholder-primary-dark p-4 pl-12 shadow-light placeholder:text-secondary-dark focus:shadow-dark transition-shadow duration-100"
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
    </div>
  );
};

export default SearchInput;
