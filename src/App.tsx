import AuroraBackground from './components/AuroraBackground';
import Navigation from './components/Navigation';
import Sparkles from './components/shapes/Sparkles';
// import { Suspense } from 'react';

const App = () => {
  return (
    <section className='relative'>
      <Navigation />
      <div className='noise-overlay'></div>
      <Sparkles />
      <AuroraBackground>
        <h1>일렁이는 배경과 함께하는 페이지</h1>
      </AuroraBackground>
    </section>
    
  )
}

export default App;
