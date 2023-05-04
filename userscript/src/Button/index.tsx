import React from "react";
import "./style.css";

type ButtonProps = {
  children: React.ReactNode;
  title: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<ButtonProps> = ({ title, children, onClick }) => {
  return (
    <div className="ytt-buttonContainer">
      <div className="ytt-button-title">{title}</div>
      <button className="ytt-button" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
