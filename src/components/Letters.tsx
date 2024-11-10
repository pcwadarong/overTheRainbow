import { LetterProps } from "../types";

const Letters = ({ data }: { data: LetterProps[] }) => {
  return (
    <div>
      {data.map((letter) => (
        <div key={letter.id}>
          {letter.id}
        </div>
      ))}
    </div>
  );
};

export default Letters;
