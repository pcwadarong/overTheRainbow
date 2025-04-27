export interface ShapeProps {
  color: string;
  width: number;
  height: number;
}

export interface LetterBtnProps {
  id: string;
  baseSize: number;
  xLimit: number;
  yLimit: number;
  color: string;
  onClick: (id: string) => void;
}

export interface LetterProps {
  id: string;
  imageURL: string | null;
  content: string;
}

export interface FormProps extends LetterProps {
  createdDate: string;
  contact: string | null;
}
