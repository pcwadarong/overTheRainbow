import { LetterProps } from "../types";
import CancelBtn from './../assets/Cancel.svg'

interface ModalProps {
  data: LetterProps[];
  id: string;
  onClose: () => void;
}

const Modals = ({ data, id, onClose }: ModalProps) => {
  const letter = data.find((letter) => letter.id === id);
  if (!letter) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 p-8">
        <div className="relative p-8 h-fit bg-gradient-to-b from-gr1 to-gr2 max-w-[790px] rounded-2xl shadow-2xl" role='dialog' aria-modal='true'>
          <button onClick={onClose} className="absolute right-8 top-8 text-3xl text-gray hover:text-dark p-4 -m-4" aria-label="편지 닫기"><img src={CancelBtn} alt="x"/></button>
          <div className="mt-10 w-full flex flex-col items-center justify-center overflow-y-auto gap-8">
            {letter.image && <div className="w-56 h-56 border-2 overflow-hidden border-neutral-100 rounded-full"><img src={letter.image} alt={`Letter #${id} image`} /></div>}
            <p className="text-font">{letter.content}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Modals;