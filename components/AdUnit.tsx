import React, { useContext } from 'react';
import { AppContext } from '../App';
import { DICTIONARY } from '../constants';

interface AdUnitProps {
  className?: string;
  format?: 'horizontal' | 'vertical' | 'square';
}

const AdUnit: React.FC<AdUnitProps> = ({ className = '', format = 'horizontal' }) => {
  const { lang } = useContext(AppContext);
  
  let sizeClass = 'h-24 w-full'; // default horizontal
  if (format === 'vertical') sizeClass = 'h-96 w-full max-w-[300px]';
  if (format === 'square') sizeClass = 'h-64 w-64';

  return (
    <div className={`bg-gray-100 border border-gray-200 flex flex-col items-center justify-center p-4 my-6 rounded-md ${sizeClass} ${className}`}>
      <span className="text-xs text-gray-400 uppercase tracking-widest mb-1">
        {DICTIONARY[lang].adLabel}
      </span>
      <div className="text-gray-300 font-bold text-lg select-none">
        Google AdSense
      </div>
    </div>
  );
};

export default AdUnit;
