import { memo, useMemo, useRef } from 'react';

import { LetterBtnProps } from '../types';
import CircleIcon from './shapes/Circle';
import CloudIcon from './shapes/Cloud';
import HeartIcon from './shapes/Heart';
import StarIcon from './shapes/Star';

const RandomComp = memo(
  ({ id, baseSize, color, onClick, usedCoordinates }: LetterBtnProps) => {
    // IconComponent는 첫 렌더링 시 한 번만 선택되도록 설정
    const IconComponent = useMemo(() => {
      return [CircleIcon, HeartIcon, StarIcon, CloudIcon][
        Math.floor(Math.random() * 4)
      ];
    }, []);

    // 크기와 위치 값을 처음 렌더링 시에만 계산하도록 useRef로 저장
    const sizeRef = useRef<number | null>(null);
    const positionRef = useRef<{ xPosition: number; yPosition: number } | null>(
      null,
    );

    // 아이콘 크기 설정 (페이지 새로고침 시에만 랜덤 값 적용)
    if (sizeRef.current === null) {
      const variance = baseSize === 300 ? 100 : 50;
      sizeRef.current =
        baseSize + Math.floor(Math.random() * (variance * 2 + 1)) - variance;
    }

    // 좌표 설정 (페이지 새로고침 시에만 랜덤 위치 생성)
    if (positionRef.current === null) {
      const XLimit = baseSize === 150 ? 540 : baseSize === 200 ? 1024 : 1920;
      const YLimit = baseSize === 100 ? 1000 : 1080;
      const xRange = XLimit - baseSize;
      const yRange = YLimit - baseSize;
      let xPosition: number, yPosition: number, isValid: boolean;
      const maxAttempts = 15; // 최대 반복 횟수 제한

      let attempts = 0;
      do {
        xPosition = Math.floor(Math.random() * xRange);
        yPosition = Math.floor(Math.random() * yRange);

        // 기존 좌표와 일정 범위 내에서 겹치지 않도록 설정 (대략 아이콘 크기 범위)
        isValid = !Array.from(usedCoordinates).some((key) => {
          const [existingX, existingY] = key.split(',').map(Number);
          return (
            Math.abs(existingX - xPosition) <= 300 &&
            Math.abs(existingY - yPosition) <= 300
          );
        });

        attempts++;
      } while (!isValid && attempts < maxAttempts);

      // 최대 시도 횟수를 초과해도 겹치는 경우 기본 위치 설정
      if (!isValid) {
        xPosition = Math.random() * (xRange - 200) + 100;
        yPosition = Math.random() * (yRange - 200) + 100;
      }

      usedCoordinates.add(`${xPosition},${yPosition}`);
      positionRef.current = { xPosition, yPosition };
    }

    const { xPosition, yPosition } = positionRef.current;

    return (
      <button
        onClick={() => onClick(id)}
        className="absolute"
        style={{
          top: yPosition,
          left: xPosition,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <IconComponent
          color={color}
          width={sizeRef.current}
          height={sizeRef.current}
          aria-label={`letter #${id}`}
        />
      </button>
    );
  },
);

RandomComp.displayName = 'RandomComp';

export default RandomComp;
