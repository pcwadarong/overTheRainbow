export interface ShapeProps {
    color: string;
    width: number;
    height: number;
    id: string;
    onClick: (id:string) => void;
  }

  export interface LetterProps {
    id: string;
    image: string | null;
    content: string;
  }
  
  export interface FormProps extends LetterProps {
    createdDate: string;
    contact: string | null;
  }