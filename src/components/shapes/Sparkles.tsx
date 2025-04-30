import { useEffect, useRef } from 'react';

import { PositionProps } from '../../types';
import { pickSparklePosition } from '../../utils/pickRandomPosition';

const getRandomSize = (min: number, max: number) =>
  Math.random() * (max - min) + min;

// x일 경우, 3가지 선을 각각 만드는 함수
const createLine = (starSize: number, rotation: string) => {
  const line = document.createElement('div');
  line.classList.add('absolute', 'bg-white', 'opacity-80');
  line.style.width = `${starSize}px`;
  line.style.height = '1px';
  line.style.transform = `rotate(${rotation})`;
  line.style.top = '50%';
  line.style.left = '50%';
  return line;
};

const appendSparkle = (
  container: HTMLElement,
  shape: 'circle' | 'x',
  x: number,
  y: number,
) => {
  const sparkle = document.createElement('div');
  sparkle.classList.add('absolute');
  sparkle.style.left = `${x}px`;
  sparkle.style.top = `${y}px`;

  if (shape === 'circle') {
    const circleSize = getRandomSize(4, 14);
    sparkle.classList.add('rounded-full', 'bg-white', 'opacity-80');
    sparkle.style.width = `${circleSize}px`;
    sparkle.style.height = `${circleSize}px`;
  } else {
    const starSize = getRandomSize(2, 22);
    sparkle.classList.add('opacity-80');
    sparkle.appendChild(createLine(starSize, '45deg'));
    sparkle.appendChild(createLine(starSize, '-45deg'));
    sparkle.appendChild(createLine(starSize, '90deg'));
  }

  container.appendChild(sparkle);
};

const Sparkles: React.FC = () => {
  const positions = useRef<PositionProps[]>([]);

  useEffect(() => {
    const createSparkles = () => {
      const numberOfSparkles = 50;
      const container = document.getElementById('sparkle-container');
      if (!container) return;

      for (let i = 0; i < numberOfSparkles; i++) {
        const randomShape = Math.random() > 0.4 ? 'circle' : 'x';
        const { x, y } = pickSparklePosition(2000, 2000, positions.current, 15);

        appendSparkle(container, randomShape, x, y);
      }
    };

    // 페이지가 로드될 때 sparkles 생성
    createSparkles();

    // cleanup: 컴포넌트가 언마운트될 때 sparkle 제거
    return () => {
      const container = document.getElementById('sparkle-container');
      while (container?.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <div
      id="sparkle-container"
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 overflow-hidden"
    ></div>
  );
};

export default Sparkles;
