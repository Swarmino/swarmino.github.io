import React from 'react';
import tailwind from 'tailwindcss';

type BentoBoxProps = {
  size: string;
  children: React.ReactNode | null;
};

const BentoBox = ({ size, children }: BentoBoxProps) => {
  const boxClasses = [
    size === 'small' ? 'bg-gray-200 rounded-md p-4 mt-4' : size === 'medium' ? 'bg-gray-300 rounded-md p-6 mt-4' : 'bg-gray-400 rounded-md p-8 mt-4',
    'flex',
    'flex-col',
  ];

  return (
    <div className={boxClasses.join(' ')}>
      {children}
    </div>
  );
};

const BentoGrid = () => {
  return (
    <div className="max-w-md mx-auto px-4 lg:px-6">
      <div className="flex flex-wrap justify-between">
        <div className="flex mt-4">
          <BentoBox size="small">Small Bento Box</BentoBox>
          <BentoBox size="medium">Medium Bento Box</BentoBox>
        </div>
        <div className="flex mt-4">
          <BentoBox size="large">Large Bento Box</BentoBox>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
