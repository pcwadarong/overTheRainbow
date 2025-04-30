export interface GradientProps {
  shape: 'linear' | 'radial';
  angle?: number;
  stops: {
    color: string;
    offset: number;
  }[];
}

export interface ShapeProps {
  gradient: GradientProps;
  width: number;
  height: number;
}

export interface LetterBtnProps {
  id: string;
  baseSize: number;
  xLimit: number;
  yLimit: number;
  gradient: GradientProps;
  onClick: (id: string) => void;
  positions: PositionProps[];
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

export interface PositionProps {
  x: number;
  y: number;
  size?: number;
}
