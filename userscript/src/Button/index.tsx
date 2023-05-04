import React from "react";
import style from "./style.module.css";

type ButtonProps = {
  children: React.ReactNode;
  title: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<ButtonProps> = ({ title, children, onClick }) => {
  return (
    <div className={style.buttonContainer}>
      <div className={style.title}>{title}</div>
      <button className={style.button} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
