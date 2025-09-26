import { useEffect, RefObject } from 'react';

type event = MouseEvent | TouchEvent;

const UseOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: event) => void,
) => {
  useEffect(() => {
    const listener = (event: event) => {
      const el = ref.current;
      if (!el || el.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
  return {};
};

export default UseOnClickOutside;
