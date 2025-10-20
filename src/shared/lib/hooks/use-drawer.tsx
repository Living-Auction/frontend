import { useCallback, useRef, useState } from 'react';
import useOnClickOutside from './use-onclick-outside';

interface useDrawerProps {
  defaultOpen?: boolean;
}

export const useDrawer = ({ defaultOpen = false }: useDrawerProps = {}) => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);
  const drawerRef = useRef<HTMLElement>(null);

  const openDrawer = useCallback(() => setIsOpen(true), []);
  const closeDrawer = useCallback(() => setIsOpen(false), []);
  const toggleDrawer = useCallback(() => setIsOpen((prev) => !prev), []);

  useOnClickOutside(drawerRef, closeDrawer);

  return { isOpen, openDrawer, closeDrawer, toggleDrawer, drawerRef };
};
