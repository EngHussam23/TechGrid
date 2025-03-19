import React from "react";

type IconProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  size?: number;
  color?: string;
};

function Profile({
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
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.9909 6.0756C14.9909 9.9096 12.6749 13.2 9.59089 13.2C6.50449 13.2 4.19089 9.9096 4.19089 6.0744C4.19089 2.2416 6.18289 0 9.59089 0C12.9989 0 14.9909 2.2404 14.9909 6.0756ZM0.113287 21.7704C0.575287 22.32 2.56489 24 9.59089 24C16.6169 24 18.6053 22.32 19.0685 21.7716C19.1114 21.7189 19.1432 21.658 19.1618 21.5926C19.1803 21.5271 19.1853 21.4586 19.1765 21.3912C19.0709 20.3328 18.1181 15.6 9.59089 15.6C1.06369 15.6 0.110887 20.3328 0.00408657 21.3912C-0.00460392 21.4587 0.000599831 21.5273 0.0193787 21.5927C0.0381576 21.6581 0.0701151 21.7178 0.113287 21.7704Z"
      />
    </svg>
  );
}

export default Profile;
