import { Button } from "@/components/ui/button";
import { useCallback } from "react";

type Props = {
  title: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
};

const MainButton = ({
  title,
  onClick,
  className,
  disabled,
  children,
}: Props) => {
  const handleClick = useCallback(() => {
    onClick();
  }, [onClick]);
  return (
    <Button
      onClick={(e) => {
        e.stopPropagation();
        handleClick();
      }}
      disabled={disabled || false}
      className={`w-auto rounded-xl bg-primary px-3 py-5 text-lg font-semibold h-auto text-white shadow-[0px_4px_16px_rgba(0,0,0,0.25)] ${className}`}
    >
      {title}
      {children}
    </Button>
  );
};

export default MainButton;
