import './Home.css';
import {
  Header,
  About,
  Portfolio,
  Contact,
  Pack
} from '@components/features/Home/Home';
import { useThemeTransition } from '@contexts/TransitionThemeContext';


export const Home = () => {
  const { darkMode } = useThemeTransition();
  
  return (
    <div className="home__container">
      <Header />
      <About />
      { darkMode ? <Pack /> : <Portfolio /> }
      <Contact />
    </div>
  );
};
