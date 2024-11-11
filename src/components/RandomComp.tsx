import { useMemo, memo } from "react";
import { LetterBtnProps } from "../types";
import CircleIcon from "./shapes/Circle";
import HeartIcon from "./shapes/Heart";
import StarIcon from "./shapes/Star";
import CloudIcon from "./shapes/Cloud";

const RandomComp = memo(({ id, baseSize, color, onClick, usedCoordinates }: LetterBtnProps) => {
  const IconComponent = useMemo(() => {
    return [CircleIcon, HeartIcon, StarIcon, CloudIcon][Math.floor(Math.random() * 4)];
  }, []);

  // baseSize를 기준으로 ± 범위 내에서 랜덤 크기 생성
  const size = useMemo(() => {
    const variance = baseSize === 300 ? 100 : 50;
    return baseSize + Math.floor(Math.random() * (variance * 2 + 1)) - variance;
  }, [baseSize]);

  // baseSize에 따라 좌표 범위를 동적으로 설정
  const generateUniquePosition = (): { xPosition: number; yPosition: number } => {
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

    // 최대 시도 횟수를 초과했을 때도 겹치는 경우 기본 위치 설정
    if (!isValid) {
      xPosition = Math.random() * (xRange - 200) + 100;
      yPosition = Math.random() * (yRange - 200) + 100;
    }

    usedCoordinates.add(`${xPosition},${yPosition}`);
    return { xPosition, yPosition };
  };

  const { xPosition, yPosition } = generateUniquePosition();

  return (
    <button onClick={() => onClick(id)} className="absolute" style={{
      top: yPosition,
      left: xPosition,
      transform: 'translate(-50%, -50%)',
    }}>
      <IconComponent color={color} width={size} height={size} aria-label={`letter #${id}`} />
    </button>
  );
});

export default RandomComp;
