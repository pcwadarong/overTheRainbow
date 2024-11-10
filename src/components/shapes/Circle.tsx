import { ShapeProps } from "../../types";

const CircleIcon = ({
  color = '#ffffff',
  width = 300,
  height = 300,
  id,
  onClick,
}: ShapeProps) => {
  return (
    <div
      id={id}
      onClick={()=>onClick(id)}
      aria-label={`letter #${id}`}
      role="img"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: color,
        borderRadius: '100%',
        border: `5px solid`,
        borderImage: 'linear-gradient(180deg, #0015D7, #FCFFA1) 1',
      }}
      className="relative"
    >
    </div>
  );
}

export default CircleIcon;