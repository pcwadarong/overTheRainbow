import { LetterProps } from "../types";
import CancelBtn from './../assets/Cancel.svg';
import { useState } from "react";
import LetterContent from "./LetterContent";
import ImageUploadForm from "./ImageUploadForm";
import FormContent from "./FormContent";

interface ModalProps {
  type: 'LETTER' | 'FORM';
  data: LetterProps[];
  id: string | null;
  onClose: () => void;
}

const Modals = ({ type, data, id, onClose }: ModalProps) => {
  const letter = data.find((letter) => letter.id === id);
  const [image, setImage] = useState<File | null>(null);
  const [letterContent, setLetterContent] = useState('');
  const [contact, setContact] = useState('');

  const handleClose = () => {
    if ((letterContent || contact || image) && !confirm('작성하신 내용이 삭제됩니다. 나가시겠습니까?')) {
      return;
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-8">
      <div className="fixed inset-0 bg-black/40" onClick={handleClose}></div>
      <div className="relative p-8 h-fit bg-gradient-to-b from-gr1 to-gr2 max-w-[790px] rounded-2xl shadow-2xl" role="dialog" aria-modal="true">
        <button onClick={handleClose} className="absolute right-8 top-8 text-3xl text-gray hover:text-dark p-4 -m-4" aria-label="닫기">
          <img src={CancelBtn} alt="x" />
        </button>

        <div className="mt-10 w-full flex flex-col items-center justify-center overflow-y-auto gap-8">
          {type === 'LETTER' && letter ? (
            <LetterContent letter={letter} id={id!} />
          ) : (
            <>
              <ImageUploadForm image={image} setImage={setImage} />
              <FormContent onClose={onClose} image={image} letterContent={letterContent} setLetterContent={setLetterContent} contact={contact} setContact={setContact} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modals;
