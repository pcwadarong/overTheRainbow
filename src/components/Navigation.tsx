import CloudIcon  from '../assets/Cloud.svg'
import CodeIcon  from '../assets/Code.svg'
import InstagramIcon  from '../assets/Instagram.svg'
import SearchIcon  from '../assets/Magnifer.svg'
import WriteIcon  from '../assets/Write.svg'

const Navigation = () => {
    return (
      <nav className="bg-white bg-opacity-50 p-6 absolute top-8 start-8 z-50 rounded-3xl backdrop-blur-2xl">
        <button className='mb-4'><img src={CloudIcon} /></button>
        <ul className='flex flex-col gap-6'>
          <li className='border-b-2 border-blue-300'></li>
          <li><button><img src={WriteIcon} /></button></li>
          <li><button><img src={SearchIcon} /></button></li>
          <li><a href="https://www.instagram.com/chaendraw/" target="_blank" rel="noopener noreferrer"><img src={InstagramIcon} /></a></li>
          <li><a href="https://www.hidcgs2024.com" target="_blank" rel="noopener noreferrer"><img src={CodeIcon} /></a></li>
        </ul>
      </nav>
    );
  };
  
  export default Navigation;