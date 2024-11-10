import CloudIcon  from '../assets/Cloud.svg'
import CodeIcon  from '../assets/Code.svg'
import InstagramIcon  from '../assets/Instagram.svg'
import SearchIcon  from '../assets/Magnifer.svg'
import WriteIcon  from '../assets/Write.svg'

const Navigation = () => {
    return (
      <nav className={
        'relative flex flex-col h-dvh items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg'
    }><button><img src={CloudIcon} /></button>
        <ul>
          <li><button><img src={WriteIcon} /></button></li>
          <li><button><img src={SearchIcon} /></button></li>
          <li><a href="https://www.instagram.com/chaendraw/" target="_blank" rel="noopener noreferrer"><img src={InstagramIcon} /></a></li>
          <li><a href="https://www.hidcgs2024.com" target="_blank" rel="noopener noreferrer"><img src={CodeIcon} /></a></li>
        </ul>
      </nav>
    );
  };
  
  export default Navigation;