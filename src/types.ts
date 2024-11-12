export interface ShapeProps {
    color: string;
    width: number;
    height: number;
  }

  export interface LetterBtnProps {
    id: string;
    baseSize: number;
    color: string;
    onClick: (id: string) => void;
    usedCoordinates: Set<string> 
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