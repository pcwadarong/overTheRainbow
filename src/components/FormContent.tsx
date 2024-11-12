import { useState, useRef, useCallback } from "react";

interface FormContentProps {
  onClose: () => void;
  image: string | null;
  letterContent: string;
  setLetterContent: (letterContent: string) => void;
  contact: string;
  setContact: (contact: string) => void;
}

const FormContent = ({ onClose, image, letterContent, setLetterContent, contact, setContact }: FormContentProps) => {
  const [error, setError] = useState(false);
  const textRef = useRef<HTMLTextAreaElement>(null);

  const handleResizeHeight = useCallback(() => {
    if (textRef.current) {
      textRef.current.style.height = "auto";
      textRef.current.style.height = `${textRef.current.scrollHeight}px`;
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!letterContent.trim()) {
      setError(true);
    } else {
      setError(false);
      alert('수정/삭제는 인스타그램 DM으로 문의 바랍니다. 참여해주셔서 정말 감사합니다!');
      onClose();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
      <div>
        <label htmlFor="letterContent" className="text-font font-semibold text-lg">전하고 싶은 내용</label>
        {error && <span className="text-pink ml-2 text-sm">* 필수 입력 사항입니다.</span>}
      </div>
      <textarea
        id="letterContent"
        ref={textRef}
        placeholder="전하고 싶은 내용을 적어주세요."
        value={letterContent}
        onChange={(e) => setLetterContent(e.target.value)}
        onInput={handleResizeHeight}
        className="whitespace-pre-wrap overflow-hidden resize-none p-3 border-2 rounded-2xl bg-transparent border-neutral-300"
      ></textarea>

      <label htmlFor="contact" className="text-font font-semibold mt-3 text-lg">빠른 확인이 가능한 연락처</label>
      <p className="text-neutral-400 mt-[-14px] text-sm">남겨주실 경우 추첨을 통해 아이의 예쁜 모습을 그린 굿즈를 드립니다.</p>
      <input
        id="contact"
        placeholder="인스타그램/ X DM, 전화번호, 이메일 주소 등"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        className="p-3 border-2 rounded-2xl bg-transparent border-neutral-300"
      ></input>

      <button type="submit" className="mt-4 px-12 py-3 bg-pink text-white rounded-3xl w-fit m-auto">
        편지 보내기
      </button>
    </form>
  );
};

export default FormContent;
