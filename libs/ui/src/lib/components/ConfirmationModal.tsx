import React, { ReactEventHandler } from 'react';
import { RxCross2 } from 'react-icons/rx';
import Button from './Button';

const ConfirmationModal = ({
  isModal,
  setIsModal,
  message,
  clickHandler,
  isDanger
}: {
  isModal: boolean;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  clickHandler: React.MouseEventHandler<HTMLButtonElement>;
  isDanger?:boolean
}) => {
  return isModal ? (
    <div className="absolute top-0 left-0 h-screen w-screen grid place-items-center z-10 modal bg-opacity-50 bg-black">
      <div className="w-[300px] mx-auto bg-bgColor p-4 rounded-lg ">
        <div
          className="flex justify-end cursor-pointer"
          onClick={() => setIsModal(false)}
        >
          <RxCross2 size={20} />
        </div>
        <div className="mt-2">
          <Button type={isDanger ? "danger" : "primary"} onClick={clickHandler}>
            {message}
          </Button>
        </div>
      </div>
    </div>
  ) : (
    ''
  );
};

export default ConfirmationModal;
