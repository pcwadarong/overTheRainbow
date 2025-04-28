import { memo, useMemo, useRef } from 'react';

import { LetterBtnProps } from '../types';
import CircleIcon from './shapes/Circle';
import CloudIcon from './shapes/Cloud';
import HeartIcon from './shapes/Heart';
import StarIcon from './shapes/Star';

const ICON_COMPONENTS = [CircleIcon, HeartIcon, StarIcon, CloudIcon] as const;

interface Position {
  x: number;
  y: number;
  size: number;
}

const pickRandomPosition = (
  baseSize: number,
  maxWidth: number,
  maxHeight: number,
  minDistance: number,
  positions: Position[],
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

const RandomComp = memo(
  ({ id, baseSize, xLimit, yLimit, gradient, onClick }: LetterBtnProps) => {
    // IconComponent는 첫 렌더링 시 한 번만 선택되도록 설정
    const IconComponent = useMemo(() => {
      return ICON_COMPONENTS[Math.floor(Math.random() * 4)];
    }, []);

    // 크기와 위치 값을 처음 렌더링 시에만 계산하도록 useRef로 저장
    const sizeRef = useRef<number | null>(null);
    const positionRef = useRef<{ x: number; y: number } | null>(null);
    const positions = useRef<Position[]>([]).current;

    // 아이콘 크기, 좌표 설정 (페이지 새로고침 시에만 랜덤 값 적용)
    if (sizeRef.current === null || positionRef.current === null) {
      const { x, y, size } = pickRandomPosition(
        baseSize,
        xLimit,
        yLimit,
        200,
        positions,
      );

      sizeRef.current = size;
      positionRef.current = { x, y };
    }

    const { x, y } = positionRef.current;

    return (
      <button
        onClick={() => onClick(id)}
        className="absolute"
        style={{
          top: y,
          left: x,
          transform: 'translate(-50%, -50%)',
        }}
        aria-label={`Letter Button ${id}`}
      >
        <IconComponent
          gradient={gradient}
          width={sizeRef.current ?? baseSize}
          height={sizeRef.current ?? baseSize}
        />
      </button>
    );
  },
);

RandomComp.displayName = 'RandomComp';

export default RandomComp;
