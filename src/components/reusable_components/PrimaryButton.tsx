import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: string;
}

function PrimaryButton({ children, ...props }: Props) {
  return (
    <button {...props} className="button">
        <span className="button_lg">
            <span className="button_sl"></span>
            <span className="button_text">{children}</span>
        </span>
    </button>
  )
}

export default PrimaryButton