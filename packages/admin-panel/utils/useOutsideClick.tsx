import React, { useEffect } from 'react';

type Ref = React.RefObject<HTMLElement>;
type Handler = (event: MouseEvent) => void;

const useOutsideClick = (ref: Ref, secondRef: Ref, handler: Handler) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (
        !ref.current ||
        !secondRef.current ||
        secondRef.current.contains(event.target as Node | null) ||
        ref.current.contains(event.target as Node | null)
      ) {
        return;
      }
      handler(event);
    };
    document.addEventListener('click', listener);
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('click', listener);
    };
  }, [ref, handler]);
};

export default useOutsideClick;
