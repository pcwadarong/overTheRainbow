import { memo, useMemo, useRef } from 'react';

import { motion, Variants } from 'framer-motion';

import { PositionProps } from '../types';
import { LetterBtnProps } from '../types';
import { pickRandomPosition } from '../utils/pickRandomPosition';
import CircleIcon from './shapes/Circle';
import CloudIcon from './shapes/Cloud';
import HeartIcon from './shapes/Heart';
import StarIcon from './shapes/Star';

const ICON_COMPONENTS = [CircleIcon, HeartIcon, StarIcon, CloudIcon] as const;

const RandomComp = memo(
  ({ id, baseSize, xLimit, yLimit, gradient, onClick }: LetterBtnProps) => {
    // IconComponent는 첫 렌더링 시 한 번만 선택되도록 설정
    const IconComponent = useMemo(() => {
      return ICON_COMPONENTS[Math.floor(Math.random() * 4)];
    }, []);

    // 크기와 위치 값을 처음 렌더링 시에만 계산하도록 useRef로 저장
    const sizeRef = useRef<number | null>(null);
    const positionRef = useRef<{ x: number; y: number } | null>(null);
    const positions = useRef<PositionProps[]>([]).current;

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

    //------------------------------------------------------------ motion
    // ✅ 랜덤 duration 값 useMemo로 생성
    const randomDuration = useRef(Math.random() * 4 + 8).current;

    // ✅ variants를 내부에서 선언하며 랜덤 duration 적용
    const buttonVariants: Variants = {
      floating: {
        x: [0, 5, 0, -5, 0],
        y: [0, -10, 0, 10, 0],
        rotate: [0, 2, 0, -2, 0],
        transition: {
          duration: randomDuration,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'mirror',
        },
      },
      hover: {
        scale: 1.1,
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 20,
        },
      },
      tap: {
        scale: 0.8,
      },
    };

    return (
      <motion.button
        className="absolute"
        onClick={() => onClick(id)}
        aria-label={`Letter Button ${id}`}
        style={{
          top: y,
          left: x,
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
        }}
        variants={buttonVariants}
        animate="floating"
        whileHover="hover"
        whileTap="tap"
      >
        <IconComponent
          gradient={gradient}
          width={sizeRef.current ?? baseSize}
          height={sizeRef.current ?? baseSize}
        />
      </motion.button>
    );
  },
);

RandomComp.displayName = 'RandomComp';

export default RandomComp;
