import { PropsWithChildren, Ref } from "react";

type Size = "xs" | "sm" | "md" | "lg";

export type Variant =
  | "blue"
  | "emerald"
  | "blue"
  | "red"
  | "yellow"
  | "green"
  | "purple"
  | "gray"
  | "orange"
  | "slate"
  | "white"
  | "black"
  | "transparent";

type Props = PropsWithChildren<{
  variant?: Variant;
  size?: Size;
  ref?: Ref<HTMLButtonElement>;
  htmlType?: "button" | "submit" | "reset";
  block?: boolean;
  loading?: boolean;
  disabled?: boolean;
  opacity?: boolean;
  className?: string;
  onClick?: () => void;
}>;

const sizes: Record<Size, string> = {
  xs: "py-0.5 px-1 text-xs",
  sm: "py-1 px-2 text-sm",
  md: "py-1.5 px-2.5 text-base",
  lg: "py-2 px-4 text-lg",
};

const variants: Record<Variant, string> = {
  blue: "bg-blue-500 text-white",
  emerald: "bg-emerald-500 text-white",
  red: "bg-red-500 text-white",
  yellow: "bg-yellow-500 text-white",
  green: "bg-green-500 text-white",
  purple: "bg-purple-500 text-white",
  orange: "bg-orange-500 text-white",
  gray: "bg-gray-500 text-white",
  slate: "bg-slate-200 text-black dark:bg-neutral-800 dark:text-white",
  white: "bg-white text-black",
  black: "bg-black text-white",
  transparent: "bg-transparent text-black",
};

const withOpacityVariant: Record<Variant, string> = {
  blue: "bg-blue-500/5 text-blue-500",
  emerald: "bg-emerald-500/5 text-emerald-500",
  red: "bg-red-500/5 text-red-500",
  yellow: "bg-yellow-500/5 text-yellow-500",
  green: "bg-green-500/5 text-green-500",
  orange: "bg-orange-500/5 text-orange-500",
  purple: "bg-purple-500/5 text-purple-500",
  gray: "bg-gray-500/5 text-gray-500",
  slate: "bg-slate-1000/5 text-slate-500",
  white: "bg-white/5 text-white",
  black: "bg-black/5 text-black",
  transparent: "bg-transparent text-black",
};

export default function Button({
  variant = "blue",
  size = "md",
  htmlType = "button",
  ref,
  block = false,
  disabled = false,
  opacity = false,
  loading = false,
  onClick,
  children,
  className,
}: Props) {
  return (
    <button
      className={`${sizes[size]} ${block ? "w-full" : ""} ${
        opacity ? withOpacityVariant[variant] : variants[variant]
      } rounded transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-opacity-50 min-w-max disabled:opacity-50 ${
        disabled ? "cursor-not-allowed" : "hover:brightness-125"
      } ${loading ? "curosr-progress" : ""} ${className ? className : ""}`}
      disabled={!!loading || !!disabled}
      type={htmlType}
      onClick={onClick}
      ref={ref}
    >
      {children}
    </button>
  );
}
