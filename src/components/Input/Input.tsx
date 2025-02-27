"use client";

import { InputHTMLAttributes, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  placeholder: string;
  label?: string;
  type: "text" | "password";
  value: string;
  onChange: (value: string) => void;
}

const Input = ({ placeholder, label, type = "text", value, onChange }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="relative">
        {label && (
          <label className="absolute left-3 top-3 ml-3.5 text-secondary-dark text-sm">
            {label}
          </label>
        )}
        <input
          type={type === "password" && showPassword ? "text" : type}
          className={`w-full border border-secondary rounded-[20px] text-primary-dark outline-none focus:border-primary-dark p-6 shadow-light focus:shadow-dark ${
            label && "pt-8"
          } placeholder:text-secondary-dark`}
          placeholder={!label ? placeholder : ""}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        {type === "password" && (
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" strokeWidth={1} />
            ) : (
              <Eye className="w-5 h-5" strokeWidth={1} />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;