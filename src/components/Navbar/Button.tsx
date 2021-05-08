import * as React from 'react';
import './Button.css';

type ButtonType = 'button' | 'submit' | 'reset' | undefined;
type ButtonStyles = 'btn--primary' | 'btn--outline';
type ButtonSizes = 'btn--medium' | 'btn--large';

interface Props {
  type: ButtonType;
  size?: ButtonSizes;
  style?: ButtonStyles;
  onClick: () => void;
}

export const Button: React.FC<Props> = ({
  children,
  type,
  size = 'btn--medium',
  style = 'btn--primary',
}): JSX.Element => {
  return (
    <button type={type} className={`btn ${size} ${style}`}>
      {children}
    </button>
  );
};
