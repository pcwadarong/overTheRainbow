import { useCallback, useMemo } from "react";
import { LetterProps } from "../types";
import { GradientColors } from "./../constants/gradientColors";
import RandomComp from "./RandomComp";

const Letters: React.FC<{data: LetterProps[], onClick: (letter: string) => void}> = ({ data, onClick }) => {
  const usedCoordinates = new Set<string>();

  const handleButtonClick = useCallback((letter: string) => {
    onClick(letter);
  }, []);

  // 윈도우 크기에 따라 기본 아이콘 크기 설정 (한 번만 계산)
  const baseSize = useMemo(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 540) return 150; // phone
    if (windowWidth < 1024) return 200; // ipad
    return 300; // desktop
  }, []);

  return (
    <div className="absolute inset-0 z-20 overflow-hidden">
      {data.map((letter) => (
        <div key={letter.id}>
          <RandomComp
            id={letter.id}
            baseSize={baseSize}
            color={GradientColors[Math.floor(Math.random() * GradientColors.length)]}
            onClick={handleButtonClick}
            usedCoordinates={usedCoordinates}
          />
        </div>
      ))}
    </div>
  );
};

export default Letters;
