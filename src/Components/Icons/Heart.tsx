import React from "react";

type IconProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  size?: number;
  color?: string;
};

function Heart({
  className,
  style,
  onClick,
  color = "none",
  size = 24,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      onClick={onClick}
      fill={color}
    >
      <path d="M0 9.13885C0 15.0709 4.82332 18.2321 8.35408 21.0615C9.6 22.06 10.8 23 12 23C13.2 23 14.4 22.06 15.646 21.0615C19.1767 18.2321 24 15.0709 24 9.13885C24 3.20675 17.3998 -1.00018 12 4.70287C6.60019 -1.00018 0 3.20675 0 9.13885Z" />
    </svg>
  );
}

export default Heart;
