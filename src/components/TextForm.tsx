import { useRef } from 'react';

interface TextFormProps {
  onSubmit: () => void;
  isSubmitting: boolean;
  letterContent: string;
  setLetterContent: (letterContent: string) => void;
  contact: string;
  setContact: (contact: string) => void;
}

const TextForm = ({
  onSubmit,
  isSubmitting,
  letterContent,
  setLetterContent,
  contact,
  setContact,
}: TextFormProps) => {
  const textRef = useRef<HTMLTextAreaElement>(null);

  const handleResizeHeight = () => {
    if (textRef.current) {
      textRef.current.style.height = 'auto';
      textRef.current.style.height = `${textRef.current.scrollHeight}px`;
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="flex flex-col gap-4 w-full max-w-[500px]"
    >
      <div>
        <label
          htmlFor="letterContent"
          className="text-font font-semibold text-lg"
        >
          전하고 싶은 내용
        </label>
      </div>
      <textarea
        id="letterContent"
        ref={textRef}
        placeholder="전하고 싶은 내용을 적어주세요."
        value={letterContent}
        onChange={(e) => setLetterContent(e.target.value)}
        onInput={handleResizeHeight}
        required
        className="whitespace-pre-wrap overflow-hidden resize-none p-3 border-2 rounded-2xl bg-transparent border-neutral-300"
      ></textarea>

      <label htmlFor="contact" className="text-font font-semibold mt-3 text-lg">
        빠른 확인이 가능한 연락처
      </label>
      <p className="text-neutral-400 mt-[-14px] text-sm">
        남겨주실 경우 추첨을 통해 굿즈를 제작해드립니다.
      </p>
      <input
        id="contact"
        placeholder="인스타그램/ X DM, 전화번호, 이메일 주소 등"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        className="p-3 border-2 rounded-2xl bg-transparent border-neutral-300"
      ></input>

      <button
        type="submit"
        className="mt-4 px-12 py-3 bg-pink text-white rounded-3xl w-fit m-auto cursor-pointer transition-transform ease-in-out hover:scale-110 focus:scale-90"
        disabled={isSubmitting}
      >
        편지 보내기
      </button>
    </form>
  );
};

export default TextForm;
