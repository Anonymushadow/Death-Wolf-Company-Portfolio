export const playLiquidTransition = ({ bar, circle, footer, body, setDarkMode, finish, bodyBlackout, audio }) => {
  if (!bar || !circle || !footer || !body || !bodyBlackout) return;

  bodyBlackout = bodyBlackout.current;
  bar = bar.current;
  circle = circle.current;
  footer = footer.current;
  const video = body.current;
  if (!video) return;

  const startAnimation = async () => {
    try {
      // RESET
      bar.classList.remove('navbar__transition__bar__fade__out');
      bar.classList.add('navbar__transition__bar__changing');
      circle.classList.add('navbar__bar__image__container__showed');
      footer.classList.add('footer__transition');

      // Reproducir audio y video
      audio.currentTime = 0;
      await audio.play();

      video.currentTime = 0;
      video.classList.add("liquid__transition__effect__active");
      video.playbackRate = video.duration / 3 || 1;
      await video.play();

      // ⚠️ Esperar a que el video termine para cubrir bien
      video.onended = () => {
        // Mostrar blackout
        bodyBlackout.classList.add("liquid__transition__effect__container__blackout");

        // Esperamos 1 frame para asegurar que se pintó el blackout antes de cambiar tema
        requestAnimationFrame(() => {
          // CAMBIO DE TEMA recién cuando el blackout cubre todo
          setDarkMode(false);

          // Limpiar cosas viejas
          circle.classList.remove('navbar__bar__image__container__showed');
          bar.classList.add('navbar__transition__bar__fade__out');
          footer.classList.add('footer__fade__out');

          video.classList.remove("liquid__transition__effect__active");
          video.pause();

          // FADE OUT DEL BLACKOUT
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              bodyBlackout.classList.remove("liquid__transition__effect__container__blackout");
              bodyBlackout.classList.add("liquid__transition__effect__container__fade__out");
            });
          });

          bodyBlackout.addEventListener("animationend", () => {
            bodyBlackout.classList.remove("liquid__transition__effect__container__fade__out");
            bar.classList.remove('navbar__transition__bar__changing');
            footer.classList.remove('footer__fade__out');
            footer.classList.remove('footer__transition');
            finish();
          }, { once: true });
        });
      };
    } catch (err) {
      console.error("Error en animación liquid:", err);
    }
  };

  // Esperar a que el video esté cargado
  if (video.readyState >= 2) {
    startAnimation();
  } else {
    video.addEventListener("loadeddata", startAnimation, { once: true });
  }
};





export const playGlitchTransition = ({ glitch, setDarkMode, finish, audioStart, audioEnd }) => {
  if (!glitch) return;

  glitch.classList.remove(
    'glitch__effect__container__transition',
    'glitch__effect__container__blackout',
    'glitch__effect__container__fade__out',
  );

  glitch.classList.add('glitch__effect__container__transition');

  audioStart.currentTime = 0;
  audioStart.play().catch(() => { });

  const flashInterval = setInterval(() => {
    const flash = document.createElement('div');
    flash.className = 'glitch__effect__container glitch__effect__flash';
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 100);
  }, Math.random() * 200 + 100);

  setTimeout(() => {
    clearInterval(flashInterval);

    audioStart.pause();
    audioStart.currentTime = 0;

    // Mostrar pantalla negra (blackout)
    glitch.classList.remove('glitch__effect__container__transition');
    glitch.classList.add('glitch__effect__container__blackout');

    // Reproducir sonido meat hit al aparecer pantalla negra
    audioEnd.currentTime = 0;
    audioEnd.play().catch(() => { });

    setDarkMode(true);
  }, 2000);

  // Fadeout pantalla negra a partir de 3s (1 segundo después del blackout)
  setTimeout(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        glitch.classList.remove('glitch__effect__container__blackout');
        glitch.classList.add('glitch__effect__container__fade__out');
      });
    });
  }, 3000);

  // Al terminar fadeout (4s), limpieza y callback finish
  glitch.addEventListener('animationend', () => {
    if (glitch.classList.contains('glitch__effect__container__fade__out')) {
      glitch.classList.remove('glitch__effect__container__fade__out');
      finish();
    }
  }, { once: true });
};
