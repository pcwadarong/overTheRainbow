import { LetterProps, LetterBtnProps } from "../types";
import { useState } from "react";
import CircleIcon from "./shapes/Circle";
import HeartIcon from "./shapes/Heart";
import StarIcon from "./shapes/Star";
import CloudIcon from "./shapes/Cloud";

const gradientColors = [
  "linear-gradient(13deg, rgba(221, 247, 225, 0.2) 0%, rgba(255, 182, 197, 0.6) 60%, rgba(255, 253, 244, 0.8) 100%)",
  "radial-gradient(circle, rgba(238, 253, 197, 0.2) 0%, rgba(238, 253, 197, 0.8) 50%, rgba(130, 255, 213, 1) 100%)",
  "linear-gradient(150deg, rgba(221, 247, 225, 0.4) 0%, rgba(190, 215, 242, 1) 40%, rgba(190, 215, 242, 1) 60%, rgba(226, 237, 244, 1) 100%)",
  "linear-gradient(30deg, rgba(221, 247, 225, 0.2) 0%, rgba(255, 229, 57, 0.2) 20%, rgba(255, 253, 244, 1) 100%)",
  "linear-gradient(30deg, rgba(184, 161, 243, 1) 0%, rgba(123, 225, 225, 0.5) 50%, rgba(245, 255, 180, 0.8) 100%)",
];


const RandomComp = ({ id, size, color, onClick }: LetterBtnProps) => {
  const IconComponent = [CircleIcon, HeartIcon, StarIcon, CloudIcon][Math.floor(Math.random() * 4)];

  return (
    <button onClick={() => onClick(id)}>
      <IconComponent color={color} width={size} height={size} aria-label={`letter #${id}`} />
    </button>
  );
};


const Letters = ({ data }: { data: LetterProps[] }) => {
  const [selectedLetter, setSelectedLetter] = useState<string>('');

  const handleButtonClick = (letter: string) => {
    setSelectedLetter(letter);
  };

  return (
    <div>
      {data.map((letter) => (
        <div key={letter.id} className="flex m-[-10px] p-2.5 justify-center items-center">
          <RandomComp
            id={letter.id}
            size={Math.floor(Math.random() * (350 - 270 + 1)) + 270}
            color={gradientColors[Math.floor(Math.random() * gradientColors.length)]}
            onClick={() => handleButtonClick(letter.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default Letters;
