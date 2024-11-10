import { useEffect } from 'react';

const Sparkles: React.FC = () => {
  useEffect(() => {
    const createSparkles = () => {
      const numberOfSparkles = 50;
      const container = document.getElementById('sparkle-container') as HTMLElement;

      for (let i = 0; i < numberOfSparkles; i++) {
        const randomShape = Math.random() > 0.3 ? 'circle' : 'x';

        const sparkle = document.createElement('div');
        sparkle.classList.add('absolute');
        
        // 랜덤 크기와 위치 지정
        const circleSize = Math.random() * 10 + 4;
        const starSize = Math.random() * 20 + 2;
        const xPosition = Math.random() * 2000;
        const yPosition = Math.random() * 2000;

        // 스타일 적용
        sparkle.style.left = `${xPosition}px`;
        sparkle.style.top = `${yPosition}px`;

        if (randomShape === 'circle') {
          sparkle.classList.add('rounded-full', 'bg-white', 'opacity-80');
          sparkle.style.width = `${circleSize}px`;
          sparkle.style.height = `${circleSize}px`;
        } else {
          sparkle.classList.add('opacity-80');

          // 선 3개 생성
          const line1 = document.createElement('div');
          const line2 = document.createElement('div');
          const line3 = document.createElement('div');
          
          // 선의 스타일을 설정하여 X 모양을 만든다
          [line1, line2, line3].forEach(line => {
            line.classList.add('absolute', 'bg-white', 'opacity-80');
            line.style.width = `${starSize}px`;
            line.style.height = '1px';
          });

          // 선 회전 설정
          line1.style.transform = 'rotate(45deg)';
          line2.style.transform = 'rotate(-45deg)';
          line3.style.transform = 'rotate(90deg)';  // 가로선 추가

          // 선 위치 설정
          line1.style.top = '50%';
          line1.style.left = '50%';
          line2.style.top = '50%';
          line2.style.left = '50%';
          line3.style.top = '50%';
          line3.style.left = '50%';

          // 부모에 선들을 추가
          sparkle.appendChild(line1);
          sparkle.appendChild(line2);
          sparkle.appendChild(line3);
        }

        // 최종적으로 부모 요소에 추가
        container.appendChild(sparkle);
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
    <div id="sparkle-container" className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 overflow-hidden">
    </div>
  );
};

export default Sparkles;
