import { useState } from 'react';

import FormModalContent from './FormModalContent';
import LetterContent from './LetterModalContent';
import { LetterProps } from '../types';

interface ModalProps {
  type: 'LETTER' | 'FORM';
  data: LetterProps[];
  id: string | null;
  onClose: () => void;
}

const ModalsShell = ({ type, data, id, onClose }: ModalProps) => {
  const letter = data.find((letter) => letter.id === id);
  const [isDirty, setIsDirty] = useState(false);

  const handleClose = () => {
    if (isDirty && !confirm('작성하신 내용이 삭제됩니다. 나가시겠습니까?'))
      return;
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 md:p-8">
      <div
        className="fixed inset-0 bg-black/40"
        role="button"
        tabIndex={0}
        onClick={handleClose}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') handleClose();
        }}
      ></div>
      <div
        className="relative overflow-y-auto p-8 w-full md:w-fit md:min-w-96 h-full md:h-fit md:max-h-full bg-gradient-to-b from-gr1 to-gr2 max-w-[790px] md:rounded-2xl shadow-2xl"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={handleClose}
          className="absolute right-8 top-8 p-3 -m-3 text-3xl text-gray hover:text-pink focus:text-pink"
          aria-label="닫기"
        >
          &times;
        </button>

        <div className="mt-10 w-full flex flex-col items-center justify-center gap-8">
          {type === 'LETTER' && letter ? (
            <LetterContent letter={letter} id={id} />
          ) : (
            <FormModalContent onClose={onClose} setIsDirty={setIsDirty} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalsShell;
