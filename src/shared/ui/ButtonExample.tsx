import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export default function ButtonExample({ children, style }: ButtonProps) {
  return (
    <button style={style}>
      {children}
    </button>
  );
}
