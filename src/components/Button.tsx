import { ButtonHTMLAttributes } from 'react';
import './Button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button className="appButton" type="button" {...rest}>
      {children}
    </button>
  );
};
