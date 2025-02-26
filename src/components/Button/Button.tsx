"use client";

import { ButtonHTMLAttributes } from "react";
import Icon from "../Icon/Icon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: "microsoft" | "google";
  disabled?: boolean;
  bgColor?: string;
  onClick?: () => void;
}

const Button = ({
  text,
  icon,
  disabled = false,
  bgColor,
  onClick,
}: ButtonProps) => {
  const renderIcon = () => {
    if (icon === "google") return <Icon data="google" />;
    if (icon === "microsoft") return <Icon data="microsoft" />;
    return null;
  };

  return (
    <button
      className={`w-full flex items-center justify-center gap-4 px-6 py-3 rounded-[40px] font-medium transition-all duration-100 border shadow-light hover:shadow-dark
        ${disabled ? "text-secondary border-secondary bg-transparent cursor-not-allowed" : `text-white ${bgColor} hover:opacity-80  border-primary-dark`}`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {icon && renderIcon()}
      {text}
    </button>
  );
};

export default Button;
