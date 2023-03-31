import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "~/styles/modules/buttons.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color: "primary" | "danger " | "warning" | "success" | "default";
  icon?: ReactNode;
}

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: "primary" | "danger " | "warning" | "success" | "default";
  icon?: ReactNode;
}

export const Button = ({ text, icon, color, ...rest }: ButtonProps) => {
  return (
    <button className={`${styles.btn} ${styles[color]}`} {...rest}>
      {icon}
      {text}
    </button>
  );
};

export function IconButton({ icon, color, ...rest }: IconButtonProps) {
  return (
    <button className={`${styles.btn} ${styles[color]}`} {...rest}>
      {icon}
    </button>
  );
}
