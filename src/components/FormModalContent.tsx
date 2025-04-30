import { addDoc, collection } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useEffect, useState } from 'react';

import ImageForm from './ImageForm';
import TextForm from './TextForm';
import { firestore, storage } from '../firebase/firebaseConfig';

interface FormModalContentProps {
  onClose: () => void;
  setIsDirty: (dirty: boolean) => void;
}

const FormModalContent = ({ onClose, setIsDirty }: FormModalContentProps) => {
  const [image, setImage] = useState<File | null>(null);
  const [letterContent, setLetterContent] = useState('');
  const [contact, setContact] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!letterContent && !contact && !image) {
      setIsDirty(false);
    } else {
      setIsDirty(true);
    }
  }, [letterContent, contact, image, setIsDirty]);

  const handleSubmit = async () => {
    if (!letterContent.trim()) {
      alert('내용을 입력해주세요.');
      return;
    }

    setIsSubmitting(true);

    let imageUrl = null;
    if (image) {
      try {
        const storageRef = ref(storage, `letters/${Date.now()}_${image.name}`);
        const snapshot = await uploadBytes(storageRef, image);
        imageUrl = await getDownloadURL(snapshot.ref);
      } catch (error) {
        console.error('Error uploading image:', error);
        alert('이미지 업로드 중 오류가 발생했습니다.');
        setIsSubmitting(false);
        return;
      }
    }

    try {
      await addDoc(collection(firestore, 'letters'), {
        letterContent,
        contact,
        imageUrl,
        createdDate: new Date(),
      });

      alert('참여해주셔서 감사합니다!');
      setImage(null);
      setLetterContent('');
      setContact('');
      onClose();
      window.location.reload();
    } catch (error) {
      console.error('Error saving document:', error);
      alert('문서를 저장하는 데 실패했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ImageForm image={image} setImage={setImage} />
      <TextForm
        letterContent={letterContent}
        setLetterContent={setLetterContent}
        contact={contact}
        setContact={setContact}
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />
    </>
  );
};
export default FormModalContent;
