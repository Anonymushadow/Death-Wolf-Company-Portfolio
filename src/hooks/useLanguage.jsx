import { useState, useEffect, useMemo } from 'react';
import * as texts from '@data/texts';

// Obtener el lenguaje del sistema o definir uno por defecto
const getLangFromStorageOrSystem = () => {
  const saved = localStorage.getItem('lang');
  if (saved) return saved;

  // Obtenemos los primeros dos caracteres del idioma (es, en, etc)
  const systemLang = navigator.language.slice(0, 2);
  const supported = ['en', 'es'];
  return supported.includes(systemLang) ? systemLang : 'en';
};

export const useLanguage = () => {
  const [lang, setLang] = useState(getLangFromStorageOrSystem());

  // Si cambia el lang entonces se guarda en el localStorage
  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  // Retornamos los textos traducidos al lenguaje de lang (texts[lang])
  const translatedTexts = useMemo(() => {
    return Object.fromEntries(
      Object.entries(texts).map(([key, val]) => [key, val[lang]])
    );
  }, [lang]); // cuando cambia el idioma se vuelve a recrear el objeto
  // Explicacion:
  /*
    1) Object.entries(texts)
     - Convierte el objeto 'texts' en un array de pares [clave, valor].
     - Ejemplo:
       [
         ['navbar', { en: {...}, es: {...} }],
         ['home', { en: {...}, es: {...} }]
       ]

    2) .map(([key, val]) => [key, val[lang]])
     - Recorre cada par y reemplaza el valor general por el del idioma seleccionado.
     - Si lang === 'en', queda:
       [
         ['navbar', {...contenido en inglés...}],
         ['home', {...contenido en inglés...}]
       ]

    3) Object.fromEntries(...)
     - Reconstruye ese array de pares en un objeto plano con los textos del idioma elegido.
     - Resultado:
       {
         navbar: {...contenido en inglés...},
         home: {...contenido en inglés...}
       }
  */

  return { lang, setLang, texts: translatedTexts };
};
