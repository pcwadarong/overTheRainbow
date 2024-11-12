import { collection, getDocs } from 'firebase/firestore';
import { useCallback, useEffect, useState } from 'react';

import AuroraBackground from './components/AuroraBackground';
import Letters from './components/Letters';
import Modals from './components/Modal';
import Navigation from './components/Navigation';
import Sparkles from './components/shapes/Sparkles';
import { firestore } from './firebase/firebaseConfig';
import { LetterProps } from './types';

const App = () => {
  const [data, setData] = useState<LetterProps[]>([]);
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [isOpened, setIsOpened] = useState<boolean>(false);

  // Firebase에서 데이터를 불러오는 함수
  const fetchData = async () => {
    const lettersCollection = collection(firestore, 'letters');
    const snapshot = await getDocs(lettersCollection);
    const lettersData = snapshot.docs.map((doc) => {
      const { imageUrl, letterContent } = doc.data();
      return {
        id: doc.id,
        imageURL: imageUrl || null,
        content: letterContent,
      };
    });
    setData(lettersData);
  };

  // 컴포넌트가 마운트될 때 데이터를 한 번만 불러옴
  useEffect(() => {
    fetchData();
  }, []);

  // 모달이 열리면 body 스크롤을 막고, 닫히면 스크롤을 복구
  useEffect(() => {
    if (isOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpened]);

  // 모달을 열고 닫는 함수
  const toggleModal = useCallback((letterId: string | null = null) => {
    setIsOpened((prev) => !prev);
    setSelectedLetter(letterId);
  }, []);

  return (
    <section>
      <Navigation onOpen={() => toggleModal(null)} />
      <div className="noise-overlay"></div>
      <Sparkles />
      <Letters data={data} onClick={(id) => toggleModal(id)} />
      <AuroraBackground />

      {isOpened && (
        <Modals
          type={selectedLetter ? 'LETTER' : 'FORM'}
          data={data}
          id={selectedLetter}
          onClose={() => toggleModal(null)}
        />
      )}
    </section>
  );
};

export default App;
