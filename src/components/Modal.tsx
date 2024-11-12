import { LetterProps } from "../types";
import CancelBtn from './../assets/Cancel.svg'
import ImageBtn from './../assets/image.svg'
import { useState } from "react";

interface ModalProps {
  type: 'LETTER' | 'FORM';
  data: LetterProps[];
  id: string | null;
  onClose: () => void;
}

const Modals = ({ type, data, id, onClose }: ModalProps) => {
  const letter = data.find((letter) => letter.id === id);
  const [image, setImage] = useState<string | null>(null); 
  const [letterContent, setLetterContent] = useState('');
  const [contact, setContact] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!letterContent.trim()) {
      setError(true);
    } else {
      setError(false);
      onClose();
    }
  };

  const handleClose = () => {
    if (letterContent.trim() || contact.trim() || image) {
      if (!confirm('작성하신 내용이 삭제됩니다. 나가시겠습니까?')){
        return;
      }
    }
    onClose();
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-8">
      <div className="fixed inset-0 bg-black/40" onClick={handleClose}></div>
      <div className="relative p-8 h-fit bg-gradient-to-b from-gr1 to-gr2 max-w-[790px] rounded-2xl shadow-2xl" role='dialog' aria-modal='true'>
        <button onClick={onClose} className="absolute right-8 top-8 text-3xl text-gray hover:text-dark p-4 -m-4" aria-label="닫기">
          <img src={CancelBtn} alt="x"/>
        </button>
        
        <div className="mt-10 w-full flex flex-col items-center justify-center overflow-y-auto gap-8">
          {type === 'LETTER' && letter ? (
            <>
              {letter.image && (
                <div className="w-56 h-56 border-2 overflow-hidden border-neutral-100 rounded-full">
                  <img src={letter.image} alt={`Letter #${id} image`} />
                </div>
              )}
              <p className="text-font">{letter.content}</p>
            </>
          ) : (
            <>
              <div className="relative w-56 h-56">
                <label htmlFor="image-upload" className="w-full h-full cursor-pointer bg-neutral-200 rounded-full flex items-center justify-center overflow-hidden">
                  {image ? (
                    <img src={image} alt="Uploaded preview" className="w-full h-full object-cover" />
                  ) : (
                    <img src={ImageBtn} alt="이미지를 첨부하세요." />
                  )}
                </label>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>

              <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                <div>
                <label className="text-font font-semibold text-lg" htmlFor="letterContent">{'전하고 싶은 내용'}</label>
                {error && <span className="text-pink ml-2 text-sm">* 필수 입력 사항입니다.</span>}
                </div>
                <textarea
                  id="letterContent"
                  placeholder="전하고 싶은 내용을 적어주세요."
                  value={letterContent}
                  onChange={(e) => setLetterContent(e.target.value)}
                  className="whitespace-pre-wrap p-3 border-2 rounded-2xl bg-transparent border-neutral-300"
                ></textarea>
                
                <label className="text-font font-semibold mt-3 text-lg" htmlFor="contact">{'빠른 확인이 가능한 연락처'}</label>
                <p className="text-neutral-400 mt-[-14px] text-sm">{'남겨주실 경우 추첨을 통해 아이의 예쁜 모습을 그린 굿즈를 드립니다.'}</p>
                <input
                  id="contact"
                  placeholder="인스타그램/ X DM, 전화번호, 이메일 주소 등"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="whitespace-pre-wrap p-3 border-2 rounded-2xl bg-transparent border-neutral-300"
                ></input>

                <button type="submit" className="mt-4 px-12 py-3 bg-pink text-white rounded-3xl w-fit m-auto">
                  편지 보내기
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modals;
