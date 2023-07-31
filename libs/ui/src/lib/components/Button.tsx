import React from 'react';

const buttonTypes = {
  primary:
    'bg-primary px-3 py-2 rounded-xl text-bgColor hover:opacity-90 w-full',
  normal:
    'px-3 py-2 hover:bg-bgDark hover:rounded-xl border border-primary rounded-xl w-full',
};

const Button: React.FC<{
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type: 'primary' | 'normal';
  children: string;
}> = ({ onClick, type, children }) => {
  return (
    <button
      onClick={onClick}
      className={type ? buttonTypes[type] : buttonTypes.normal}
    >
      {children}
    </button>
  );
};

export default Button;
