import React from 'react';

const buttonTypes = {
  primary:
    'bg-primary px-3 py-2 rounded-xl text-bgColor hover:opacity-90 w-full',
  normal:
    'px-3 py-[7px] hover:bg-bgDark hover:rounded-xl border border-primary rounded-xl w-full text-textColor',
  danger:
    'bg-red-500 px-3 py-2 rounded-xl text-bgColor hover:opacity-90 w-full',
};

const Button: React.FC<{
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type: 'primary' | 'normal' | 'danger';
  children: string;
  className?: string;
}> = ({ onClick, type, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={
        (type ? buttonTypes[type] : buttonTypes.normal) + ' ' + className
      }
    >
      {children}
    </button>
  );
};

export default Button;
