// SelectableButton.tsx
import React from 'react';

type SelectableButtonProps = {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  bgColor:string;
};

const SelectableButton: React.FC<SelectableButtonProps> = ({ label, isSelected, onClick,bgColor }) => {
  return (
    <button
      className={`px-4 py-2 border ${isSelected ? 'bg-blue-500 text-white' : 'bg-white text-black'} ${bgColor}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default SelectableButton;
