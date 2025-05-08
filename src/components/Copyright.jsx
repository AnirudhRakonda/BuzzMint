import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';

const Copyright = () => {
  return (
    <div className="bg-[#1c1c1c] text-gray-400 text-center py-3 text-sm border-t border-gray-700">
      <div className="flex justify-center items-center gap-2">
        <FaRegCopyright />
        <span>2025 | buzzmint | all rights reserved</span>
      </div>
    </div>
  );
};

export default Copyright;
