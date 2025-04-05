import { Button as MuiButton } from "@mui/material";
import styles from "../../styles/page.module.css";

interface ButtonProps {
  label: string;
  color: "success" | "primary";
  onClick: () => void;
}

export default function CustomButton({ label, color, onClick }: ButtonProps) {
  // Dynamically determine which button class to apply based on the `color` prop
  const buttonClass = color === "success" ? styles.buttonSuccess : styles.buttonPrimary;

  return (
    <MuiButton
      variant="contained"
      color={color}
      onClick={onClick}
      className={`${styles.customButton} ${buttonClass}`} // Combine both the base and specific color classes
    >
      {label}
    </MuiButton>
  );
}
