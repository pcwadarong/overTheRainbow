import Navigation from './components/Navigation';
import Letters from './components/Letters';
import Sparkles from './components/shapes/Sparkles';
import AuroraBackground from './components/AuroraBackground';
import { useState, useEffect } from 'react';
// import { Suspense } from 'react';

const mockData = [
  {
    id: '1',
    image: 'https://picsum.photos/300/300',
    content: '사랑하는 우리 콩알이 안녕? 나 하람이야. 오늘 하루는 어때? 나는 오늘 네가 나오는 꿈을 꿨어. 매일 매일 꿈에 나오기를 기도했는데 오늘 정말 오랜만에 너를 봐서 기뻤어. 편지 내용이 뒤로 이어집니다....',
  },
  {
    id: '2',
    image: 'https://picsum.photos/300/300',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt eos illum nobis quas commodi explicabo, error sed ex accusamus assumenda. Porro expedita, consequatur natus maxime minus inventore a nihil.'
  },
  {
    id: '3',
    image: 'https://picsum.photos/300/300',
    content: '33333333333333333333333333333333333333333333333333333333333333333333333333333',
  },
  {
    id: '4',
    image: 'https://picsum.photos/300/300',
    content: '4444444444444444444444444444444444444444444444444',
  },
  {
    id: '5',
    image: null,
    content: '5555555555555555555555555555555555555555555',
  },
  {
    id: '6',
    image: null,
    content: '66666666666666',
  },
  {
    id: '7',
    image: null,
    content: '777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777',
  },
  {
    id: '8',
    image: 'https://picsum.photos/300/300',
    content: '88888888 88888888888888888888888 888888888888888888888 88888888888 88888',
  },
  {
    id: '9',
    image: null,
    content: '9999999 9999999999999 9999999 9999999999 9999999999 999999999 999999',
  },
];

const App = () => {
  const [selectedLetter, setSelectedLetter] = useState<string>('');

  useEffect(()=> {console.log(selectedLetter)}, [selectedLetter, setSelectedLetter])

  return (
    <section>
      <Navigation />
      <div className='noise-overlay'></div>
      <Sparkles />
      <Letters data={mockData} onClick={setSelectedLetter}/>
      <AuroraBackground />
    </section>
    
  )
}

export default App;
