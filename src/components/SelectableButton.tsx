// SelectableButton.tsx
import React from 'react';

type SelectableButtonProps = {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  bgColor: string;
};

const SelectableButton: React.FC<SelectableButtonProps> = ({ label, isSelected, onClick, bgColor }) => {
  return (
    <button
      className={`p-1 border text-clip ${isSelected ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'} rounded-sm ${bgColor}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default SelectableButton;
