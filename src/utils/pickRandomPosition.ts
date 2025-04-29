import { PositionProps } from '../types';

export const pickRandomPosition = (
  baseSize: number,
  maxWidth: number,
  maxHeight: number,
  minDistance: number,
  positions: PositionProps[],
) => {
  let x: number, y: number, size: number;
  let attempts = 0;
  const maxAttempts = 30; // 최대 30번 시도
  const variance = baseSize === 300 ? 100 : 50;

  do {
    size = baseSize + Math.floor(Math.random() * (variance * 2 + 1)) - variance;
    x = Math.random() * (maxWidth - size);
    y = Math.random() * (maxHeight - size);

    const isTooClose = positions.some((pos) => {
      const dx = pos.x - x;
      const dy = pos.y - y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      return distance < minDistance;
    });

    if (!isTooClose) break;

    attempts++;
  } while (attempts < maxAttempts);

  positions.push({ x, y, size });
  return { x, y, size };
};
