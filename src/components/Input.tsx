"use client";

import { InputHTMLAttributes, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type: "text" | "password";
}

const Input = ({ placeholder, type = "text", ...props }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="relative">
        <input
          {...props}
          type={type === "password" && showPassword ? "text" : type}
          className="w-full border border-secondary rounded-[20px] text-primary-dark outline-none focus:border-primary-dark p-6"
          placeholder={placeholder}
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
