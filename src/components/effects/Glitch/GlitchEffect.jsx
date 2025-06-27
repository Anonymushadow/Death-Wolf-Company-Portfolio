import './GlitchEffect.css';
import { useThemeTransition } from '@contexts/TransitionThemeContext';

export const GlitchEffect = () => {
  const { glitch } = useThemeTransition();
  
  return (
    <div className="glitch__effect__container" ref={glitch}></div>
  );
};
