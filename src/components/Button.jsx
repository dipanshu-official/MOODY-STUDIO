import React from "react";

const Button = ({ children, variant = "primary", size = "md", onClick, className = "" }) => {
  const baseStyles = " p-4    ";

  const variantStyles = {
    primary: "text-black font-bold txt-color ",
    secondary: " text-white border border-white",
    danger: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white",
  };

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
