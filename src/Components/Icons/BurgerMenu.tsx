import React from "react";

type IconProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  size?: number;
  color?: string;
};

function BurgerMenu({
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
      viewBox="0 0 24 19"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
      style={style}
      fill={color}
    >
      <path
        d="M1 17.5H23"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M1 9.25H23"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M1 1H23"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
}

export default BurgerMenu;
