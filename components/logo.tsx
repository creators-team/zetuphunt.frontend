import { cn } from "@/lib/classnames";

type Props = {
  className?: string;
};

export default function Logo({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      zoomAndPan="magnify"
      viewBox="0 0 375 374.999991"
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
      className={cn(className, {
        "size-16": !className || !className.includes("size-"),
      })}
    >
      <defs>
        <clipPath id="65c2a394ee">
          <path
            d="M 75 0 L 300 0 C 341.421875 0 375 33.578125 375 75 L 375 300 C 375 341.421875 341.421875 375 300 375 L 75 375 C 33.578125 375 0 341.421875 0 300 L 0 75 C 0 33.578125 33.578125 0 75 0 Z M 75 0 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="bae798d35e">
          <path
            d="M 107 102.320312 L 290.65625 102.320312 L 290.65625 216 L 107 216 Z M 107 102.320312 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="c88d8fe758">
          <path
            d="M 84.40625 159 L 268 159 L 268 272.570312 L 84.40625 272.570312 Z M 84.40625 159 "
            clipRule="nonzero"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#65c2a394ee)">
        <rect
          x="-37.5"
          width="450"
          fill="#0a0a0a"
          y="-37.499999"
          height="449.999989"
          fillOpacity="1"
        />
      </g>
      <g clipPath="url(#bae798d35e)">
        <path
          fill="#ffffff"
          d="M 233.753906 132.324219 L 185.503906 215.890625 L 225.023438 215.890625 L 290.597656 102.316406 L 107.988281 102.316406 L 107.988281 132.324219 L 233.753906 132.324219 "
          fillOpacity="1"
          fillRule="nonzero"
        />
      </g>
      <g clipPath="url(#c88d8fe758)">
        <path
          fill="#d9d9d9"
          d="M 84.394531 272.679688 L 267.007812 272.679688 L 267.007812 242.671875 L 141.242188 242.671875 L 189.488281 159.105469 L 149.96875 159.105469 L 84.394531 272.679688 "
          fillOpacity="1"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}
