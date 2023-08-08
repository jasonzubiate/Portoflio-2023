"use client";

import { CustomButtonProps } from "@/types";
import "@/styles/CustomButton.css";

function CustomButton({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`${textStyles} marquee`}>{title}</span>
    </button>
  );
}

export default CustomButton;
