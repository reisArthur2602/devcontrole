import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type ContainerProps = {
  children: ReactNode;
  classname?: string;
};

export const Container = ({ children, classname }: ContainerProps) => {
  return (
    <div className={twMerge('max-w-7xl w-full mx-auto', classname)}>
      {children}
    </div>
  );
};
