import React from "react";

type IconProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  size?: number;
  color?: string;
};

function Search({
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
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.7069 17.7066C18.0586 17.3549 18.6288 17.3549 18.9805 17.7066L23.7363 22.4624C24.088 22.8141 24.088 23.3843 23.7363 23.736C23.3846 24.0877 22.8143 24.0877 22.4626 23.736L17.7069 18.9803C17.3552 18.6286 17.3552 18.0583 17.7069 17.7066Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.8703 21.7407C16.8739 21.7407 21.7407 16.8739 21.7407 10.8703C21.7407 4.86682 16.8739 0 10.8703 0C4.86682 0 0 4.86682 0 10.8703C0 16.8739 4.86682 21.7407 10.8703 21.7407Z"
      />
    </svg>
  );
}

export default Search;
