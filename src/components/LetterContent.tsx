import { LetterProps } from "../types";

interface LetterContentProps {
  letter: LetterProps;
  id: string;
}

const LetterContent = ({ letter, id }: LetterContentProps) => (
  <>
    {letter.image && (
      <div className="w-56 h-56 border-2 overflow-hidden border-neutral-100 rounded-full">
        <img src={letter.image} alt={`Letter #${id} image`} />
      </div>
    )}
    <p className="text-font">{letter.content}</p>
  </>
);

export default LetterContent;
