import { addDoc, collection } from 'firebase/firestore';
import { useCallback, useRef, useState } from 'react';

import { firestore } from './../firebase/firebaseConfig';

interface FormContentProps {
  onClose: () => void;
  image: File | null;
  letterContent: string;
  setLetterContent: (letterContent: string) => void;
  contact: string;
  setContact: (contact: string) => void;
}

const FormContent = ({
  onClose,
  image,
  letterContent,
  setLetterContent,
  contact,
  setContact,
}: FormContentProps) => {
  const [error, setError] = useState(false);
  const textRef = useRef<HTMLTextAreaElement>(null);

  const handleResizeHeight = useCallback(() => {
    if (textRef.current) {
      textRef.current.style.height = 'auto';
      textRef.current.style.height = `${textRef.current.scrollHeight}px`;
    }
  }, []);

  const uploadToCloudinary = async (file: File) => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', import.meta.env.VITE_APP_CLOUD_UPLOAD_PRESET);

    const cloudName = import.meta.env.VITE_APP_CLOUD_NAME;

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: 'POST',
          body: data,
        },
      );

      if (!res.ok) throw new Error('Failed to upload image');

      const result = await res.json();
      return result.secure_url;
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!letterContent.trim()) {
      setError(true);
      return;
    }

    let imageUrl = null;
    if (image) {
      try {
        imageUrl = await uploadToCloudinary(image);
      } catch (error) {
        console.error('Error uploading image:', error);
        alert('이미지 업로드 중 오류가 발생했습니다.');
        return;
      }
    }

    const createdDate = new Date();

    try {
      // Firestore에 데이터 저장
      await addDoc(collection(firestore, 'letters'), {
        letterContent,
        contact,
        imageUrl,
        createdDate,
      });

      alert(
        '수정/삭제는 인스타그램 DM으로 문의 바랍니다. 참여해주셔서 정말 감사합니다!',
      );
      onClose();
      window.location.reload();
    } catch (error) {
      console.error('Error saving document:', error);
      console.log(imageUrl);
      alert('오류가 발생했습니다. 다시 시도해 주세요.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label
          htmlFor="letterContent"
          className="text-font font-semibold text-lg"
        >
          전하고 싶은 내용
        </label>
        {error && (
          <span className="text-pink ml-2 text-sm">
            * 필수 입력 사항입니다.
          </span>
        )}
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

      <label htmlFor="contact" className="text-font font-semibold mt-3 text-lg">
        빠른 확인이 가능한 연락처
      </label>
      <p className="text-neutral-400 mt-[-14px] text-sm">
        남겨주실 경우 추첨을 통해 아이의 예쁜 모습을 그린 굿즈를 드립니다.
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
        className="mt-4 px-12 py-3 bg-pink text-white rounded-3xl w-fit m-auto"
      >
        편지 보내기
      </button>
    </form>
  );
};

export default FormContent;
