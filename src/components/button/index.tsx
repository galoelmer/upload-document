interface ButtonProps {
  label: string;
  onClick?: React.DOMAttributes<HTMLButtonElement>["onClick"];
  type?: "primary" | "outline";
  size?: "sm" | "lg";
  className?: string;
}

const ButtonType = {
  primary:
    "rounded-md bg-blue text-white text-xs active:bg-blue hover:bg-sky-950",
  outline:
    "rounded-md bg-slate-50 border-2 border-orange text-orange text-xs active:bg-orange active:text-white hover:bg-rose-100",
};

const ButtonSize = {
  sm: "py-2 px-6",
  lg: "py-3 px-6",
};

const Button = ({
  label,
  onClick,
  type = "primary",
  size = "lg",
  className,
}: ButtonProps) => {
  const classNames = ButtonType[type] + " " + ButtonSize[size];

  return (
    <button
      onClick={onClick}
      className={`sm:min-w-40 sm:h-10 ${classNames} ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
