import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from './firebase/firebaseConfig';
import Navigation from './components/Navigation';
import Letters from './components/Letters';
import Sparkles from './components/shapes/Sparkles';
import AuroraBackground from './components/AuroraBackground';
import Modals from './components/Modal';
import { LetterProps } from './types';

// import { Suspense } from 'react';

const App = () => {
  const [data, setData] = useState<LetterProps[]>([]);
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [isOpened, setIsOpened] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const lettersCollection = collection(firestore, 'letters');; // firestore 인스턴스를 사용합니다.
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

    fetchData();
  }, []);
  
  const toggleModal = (letterId: string | null = null) => {
    setIsOpened(prev => !prev);
    setSelectedLetter(letterId);
  };
    
  return (
    <section>
      <Navigation onOpen={() => toggleModal(null)} />
      <div className='noise-overlay'></div>
      <Sparkles />
      {data && <Letters data={data} onClick={(id) => toggleModal(id)} />}
      <AuroraBackground />

      {isOpened && (
        <>
          <Modals 
            type={selectedLetter ? 'LETTER' : 'FORM'} 
            data={data} 
            id={selectedLetter} 
            onClose={() => toggleModal(null)} 
          />
          
        </>
      )}
    </section>
  )
}

export default App;