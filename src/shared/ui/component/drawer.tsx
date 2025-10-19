'use client';

import { forwardRef, ReactNode, useEffect } from 'react';
import { motion, AnimatePresence, PanInfo, useAnimation } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from 'tailwind-variants/lite';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  withBackdrop?: boolean;
  className?: string;
}

const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  ({ isOpen = true, onClose, children, withBackdrop = false, className = '' }, ref) => {
    const controls = useAnimation();

    useEffect(() => {
      if (isOpen) {
        controls.start('visible');
      }
    }, [isOpen, controls]);

    const onDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      event.preventDefault();
      event.stopPropagation();

      const shouldClose = info.offset.y > 50;
      if (shouldClose && typeof onClose === 'function') {
        onClose();
      } else {
        controls.start('visible');
      }
    };

    const showShadow = !withBackdrop;
    const shadowValue = '0 -24px 40px 0 rgba(0, 0, 0, .16)';
    const noShadowValue = '0 0px 0px 0px rgba(0, 0, 0, 0)';

    return (
      <AnimatePresence>
        {isOpen && (
          <>
            {withBackdrop && (
              <motion.div
                className={cn(
                  `w-full md:max-w-md mx-auto h-dvh fixed top-0 left-0 bg-black/50 z-99`,
                )}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.3, ease: 'easeInOut' },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.2, ease: 'easeOut' },
                }}
              />
            )}

            <motion.div
              ref={ref}
              className={cn(
                `flex flex-col justify-start items-center gap-3 w-full md:max-w-md mx-auto bg-background z-100 fixed bottom-0 max-h-1/3 ${className}`,
              )}
              variants={{
                visible: {
                  y: '0%',
                  boxShadow: showShadow ? shadowValue : noShadowValue,
                  transition: { duration: 0.2, ease: 'easeInOut' },
                },
                hidden: {
                  y: '110%',
                  transition: { duration: 0.2, ease: 'easeOut' },
                },
              }}
              initial='hidden'
              animate={controls}
              exit='hidden'
              drag={!withBackdrop ? 'y' : false}
              dragConstraints={{ top: 0 }}
              dragElastic={{ top: 0, bottom: 0.2 }}
              onDragEnd={onDragEnd}
            >
              {withBackdrop ? (
                <button
                  type='button'
                  onClick={onClose}
                  className={cn(
                    `size-10 absolute top-[-44px] right-1 text-background flex justify-center items-center gap-1`,
                  )}
                  aria-label='닫기'
                >
                  <X width={28} height={28} />
                </button>
              ) : (
                <div className={cn(`w-1/4 h-1 shrink-0 bg-gray-100 rounded-full`)} />
              )}

              <section className={cn(`w-full flex-grow overflow-y-auto`)}>{children}</section>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  },
);

Drawer.displayName = 'Drawer';

export default Drawer;
