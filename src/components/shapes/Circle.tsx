import { ShapeProps } from "../../types";

const CircleIcon = ({
  color,
  width = 300,
  height = 300,
}: ShapeProps) => {
  return (
    <div
      role="img"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        background: color,
        borderRadius: '100%',
      }}
      className="relative"
    >
    </div>
  );
}

export default CircleIcon;