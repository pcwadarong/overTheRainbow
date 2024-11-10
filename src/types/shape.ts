export interface ShapeProps {
    color: string;
    width: number;
    height: number;
    id: string;
    onClick: (id:string) => void;
  }