import { PositionProps } from '../types';

function isOverlapping(
  x: number,
  y: number,
  positions: PositionProps[],
  minDistance: number,
): boolean {
  return positions.some((pos) => {
    const dx = pos.x - x;
    const dy = pos.y - y;
    return dx * dx + dy * dy < minDistance * minDistance;
  });
}

export function pickIconPosition(
  baseSize: number,
  maxWidth: number,
  maxHeight: number,
  positions: PositionProps[],
  minDistance: number,
  maxAttempts = 30,
): PositionProps {
  const variance = baseSize === 300 ? 100 : 50;

  for (let i = 0; i < maxAttempts; i++) {
    const size =
      baseSize + Math.floor(Math.random() * (variance * 2 + 1)) - variance;
    const x = Math.random() * (maxWidth - size);
    const y = Math.random() * (maxHeight - size);

    if (!isOverlapping(x, y, positions, minDistance)) {
      const pos = { x, y, size };
      positions.push(pos);
      return pos;
    }
  }

  const pos = {
    x: Math.random() * (maxWidth - baseSize),
    y: Math.random() * (maxHeight - baseSize),
    size: baseSize,
  };
  positions.push(pos);
  return pos;
}

export function pickSparklePosition(
  xMax: number,
  yMax: number,
  positions: PositionProps[],
  minDistance: number,
  maxAttempts = 100,
): PositionProps {
  for (let i = 0; i < maxAttempts; i++) {
    const x = Math.random() * xMax;
    const y = Math.random() * yMax;

    if (!isOverlapping(x, y, positions, minDistance)) {
      const pos = { x, y };
      positions.push(pos);
      return pos;
    }
  }

  const pos = {
    x: Math.random() * xMax,
    y: Math.random() * yMax,
  };
  positions.push(pos);
  return pos;
}
