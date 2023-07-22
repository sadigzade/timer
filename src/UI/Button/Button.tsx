import React from "react";

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      Start
    </button>
  );
};

export default Button;
