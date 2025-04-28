import { ShapeProps } from '../../types';

const CircleIcon = ({ gradient, width = 300, height = 300 }: ShapeProps) => {
  const gradientString =
    gradient.shape === 'radial'
      ? `radial-gradient(circle, ${gradient.stops.map(({ color, offset }) => `${color} ${offset}%`).join(', ')})`
      : `linear-gradient(${gradient.angle ?? 30}deg, ${gradient.stops.map(({ color, offset }) => `${color} ${offset}%`).join(', ')})`;

  return (
    <div
      style={{
        background: gradientString,
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: '100%',
      }}
      role="img"
      className="relative"
    ></div>
  );
};

export default CircleIcon;
