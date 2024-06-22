// SelectableButton.tsx
import { useTheme } from '@/hooks/useTheme';
import React from 'react';

type SelectableButtonProps = {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  
};

const SelectableButton: React.FC<SelectableButtonProps> = ({ label, isSelected, onClick }) => {
  const { currentBackground } = useTheme()

  return (
    <button
      className={`p-2 border border-black text-clip ${isSelected ? ` 
        ${currentBackground} text-white` : 'bg-gray-800 text-white'} rounded-sm `}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default SelectableButton;
