import React from "react";

type IconProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  size?: number;
  color?: string;
};

function Wallet({
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
      viewBox="0 0 20 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      onClick={onClick}
      fill={color}
    >
      <path d="M19.2716 8.00099L11.2743 0.504035C10.5577 -0.168012 9.44226 -0.168012 8.72569 0.504035L0.728389 8.00099C0.352826 8.35325 0.139404 8.84521 0.139404 9.36036V22.1367C0.139404 23.1658 0.97392 24 2.00269 24H7.67208V18.5224H12.3279V24H17.9972C19.026 24 19.8606 23.1658 19.8606 22.1367V9.36036C19.8606 8.84521 19.6471 8.35325 19.2716 8.00099Z" />
    </svg>
  );
}

export default Wallet;
