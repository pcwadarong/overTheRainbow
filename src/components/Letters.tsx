import { useCallback, useMemo } from 'react';

import { LetterProps } from '../types';
import { GradientColors } from './../constants/gradientColors';
import RandomComp from './RandomComp';

interface LettersProps {
  data: LetterProps[];
  onClick: (letter: string) => void;
}

const Letters: React.FC<LettersProps> = ({ data, onClick }) => {
  const handleButtonClick = useCallback(
    (letter: string) => {
      onClick(letter);
    },
    [onClick],
  );

  const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;
  const windowHeight =
    typeof window !== 'undefined' ? window.innerHeight : 1080;

  const baseSize = useMemo(() => {
    if (windowWidth < 540) return 150; //phone
    if (windowWidth < 1024) return 200; //tablet
    return 300; //desktop
  }, [windowWidth]);

  const xLimit = useMemo(() => {
    if (baseSize === 150) return 540;
    if (baseSize === 200) return 1024;
    return 1920;
  }, [baseSize]);

  const yLimit = useMemo(() => windowHeight, [windowHeight]);

  return (
    <div className="absolute inset-0 z-20 overflow-hidden">
      {data.map((letter) => (
        <RandomComp
          key={letter.id}
          id={letter.id}
          baseSize={baseSize}
          xLimit={xLimit}
          yLimit={yLimit}
          gradient={
            GradientColors[Math.floor(Math.random() * GradientColors.length)]
          }
          onClick={handleButtonClick}
        />
      ))}
    </div>
  );
};

export default Letters;
