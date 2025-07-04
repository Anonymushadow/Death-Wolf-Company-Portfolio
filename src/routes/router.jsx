import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Navbar, Footer } from '@components/layout/Components.layout';
import { Home, About, Portfolio, Contact, Pack, ErrorPage, Dark } from '@pages/pages.js';
import { GlitchEffect } from '@components/effects/Glitch/GlitchEffect';
import { Liquid } from '@components/effects/Liquid/Liquid';
import { useThemeTransition } from '@contexts/TransitionThemeContext';
import { Work } from '@components/features/Portfolio/Work/Work';
import { Projects } from '@components/features/Portfolio/Projects/Projects';
import { ScrollToTop } from '@components/effects/ScrollToTop/ScrollToTop';
import { useEffect } from 'react';

const redirectPairs = [
  { light: '/', dark: '/slaughterhouse', element: <Home /> },
  { light: '/about', dark: '/entrails', element: <About /> },
  { light: '/portfolio', dark: '/pack', element: <Pack /> },
  { light: '/contact', dark: '/join', element: <Contact /> },
];

export const RouterComponent = () => {
  const { darkMode } = useThemeTransition();

  const renderConditionalRoutes = () => {
    // Recorre el array y arma 2 rutas por objeto
    // una rua para light y una ruta para dark
    // despues unifica todas las rutas en un solo array
    return redirectPairs.flatMap(({ light, dark, element }) => {
      const from = darkMode ? light : dark;
      const to = darkMode ? dark : light;
      const routeElement = typeof element === "function" ? element(darkMode) : element;

      return [
        <Route key={`redir-${from}`} path={from} element={<Navigate to={to} replace />} />,
        <Route key={`route-${to}`} path={to} element={routeElement} />
      ];
    });
  };

  useEffect(() => {
    const unlockAudios = () => {
      const audios = [
        document.getElementById("glitch-start"),
        document.getElementById("glitch-end"),
        document.getElementById("liquid")
      ];

      audios.forEach(audio => {
        if (audio) {
          audio.volume = 0;
          audio.play().then(() => {
            audio.pause();
            audio.currentTime = 0;
            audio.volume = 1;
          }).catch(() => { });
        }
      });

      window.removeEventListener("scroll", unlockAudios);
      window.removeEventListener("click", unlockAudios);
    };

    window.addEventListener("scroll", unlockAudios, { once: true });
    window.addEventListener("click", unlockAudios, { once: true });
  }, []);


  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <GlitchEffect />
      <div style={{ opacity: 0, pointerEvents: "none", position: "absolute" }}>
        <audio id="glitch-start" src="/audios/exorcism voices.mp3" preload="auto" />
        <audio id="glitch-end" src="/audios/meat hit.mp3" preload="auto" />
        <audio id="liquid" src="/audios/blood.mp3" preload="auto" />
      </div>
      <div className="content__container">
        <Liquid />
        <Routes>
          {/* Rutas dinámicas por tema */}
          {renderConditionalRoutes()}

          {/* Portfolio subrutas SOLO en light mode */}
          {!darkMode ? (
            <Route path="/portfolio" element={<Portfolio />}>
              <Route index element={<Navigate to="projects" replace />} />
              <Route path="work" element={<Work />} />
              <Route path="projects" element={<Projects />} />
            </Route>
          ) : (
            // Si intenta acceder a /portfolio/* en darkMode → redirect a /pack
            <Route path="/portfolio/*" element={<Navigate to="/pack" replace />} />
          )}

          {/* Ruta especial de modo oscuro */}
          {darkMode ? (
            <Route path="/dark" element={<Dark />} />
          ) : (
            <Route path="/dark" element={<Navigate to="/" replace />} />
          )}

          {/* Pack */}
          {darkMode && <Route path="/pack" element={<Pack />} />}

          {/* Error 404 */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};
