import { useLang } from "@contexts/LanguageContext";
import { useThemeTransition } from "@contexts/TransitionThemeContext";

export const useModeText = (section, section2) => {
  const { texts } = useLang();
  const { darkMode } = useThemeTransition();

  return darkMode 
    ? (section2 ? texts[section].wolf[section2] : texts[section].wolf)
    : (section2 ? texts[section].sheep[section2] : texts[section].sheep);
};