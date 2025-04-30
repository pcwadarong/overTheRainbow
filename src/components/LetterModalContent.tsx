import { LetterProps } from '../types';

interface LetterModalContentProps {
  letter: LetterProps;
  id: string | null;
}

const LetterModalContent = ({ letter, id }: LetterModalContentProps) => (
  <>
    {letter.imageURL && (
      <div className="w-56 h-56 border-2 overflow-hidden border-neutral-100 rounded-full">
        <img src={letter.imageURL} alt={`Letter #${id}`} />
      </div>
    )}
    <p className="text-font whitespace-pre-line">{letter.content}</p>
  </>
);

export default LetterModalContent;
