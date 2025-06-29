export const playLiquidTransition = async ({
  bar,
  circle,
  footer,
  body,
  setDarkMode,
  bodyBlackout,
  audio,
  finish
}) => {
  if (!bar || !circle || !footer || !body || !bodyBlackout) return;

  bodyBlackout = bodyBlackout.current;
  bar = bar.current;
  circle = circle.current;
  footer = footer.current;
  const video = body.current;
  if (!video || !audio) return;

  // Delay util
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  // Asegurar que el video esté cargado
  video.preload = 'auto';
  video.load();
  await new Promise((resolve) => {
    if (video.readyState >= 1) resolve();
    else video.onloadedmetadata = resolve;
  });

  // Asegurar que el audio esté listo
  audio.pause();
  audio.currentTime = 0;
  audio.load();
  await new Promise((resolve) => {
    const onCanPlay = () => {
      audio.removeEventListener('canplaythrough', onCanPlay);
      resolve();
    };
    audio.addEventListener('canplaythrough', onCanPlay);
  });

  // Configurar velocidad del video
  video.currentTime = 0;
  video.playbackRate = (video.duration || 3) / 3;

  // Reproducir video y audio sincronizados
  try {
    await Promise.all([
      video.play(),
      audio.play()
    ]);
  } catch (e) {
    console.warn('Error al reproducir video/audio', e);
  }

  video.classList.add("liquid__transition__effect__active");

  // Transición visual de nav/footer
  bar.classList.add('navbar__transition__bar__changing');
  circle.classList.add('navbar__bar__image__container__showed');
  footer.classList.add('footer__transition');

  // Esperar que transcurra la animación
  await sleep(2500);

  // Forzamos que quede negro aunque el video se reinicie
  video.classList.add('liquid__force__blackout');

  // Forzamos repaint antes de blackout
  bodyBlackout.offsetHeight;
  bodyBlackout.classList.add("liquid__transition__effect__container__blackout");

  // Cambiar tema a light
  setDarkMode(false);

  // Detener audio
  try {
    audio.pause();
    audio.currentTime = 0;
  } catch (e) {
    console.warn('Error al pausar audio', e);
  }

  video.classList.remove("liquid__transition__effect__active");

  // Esperar un segundo de suspenso
  await sleep(1000);

  // Fadeout visual
  circle.classList.remove('navbar__bar__image__container__showed');
  bar.classList.add('navbar__transition__bar__fade__out');
  footer.classList.add('footer__fade__out');
  bodyBlackout.classList.add("liquid__transition__effect__container__fade__out");

  // Esperar fadeout
  await sleep(3000);

  // Limpiar clases
  bodyBlackout.classList.remove("liquid__transition__effect__container__blackout");
  bar.classList.remove('navbar__transition__bar__changing');
  footer.classList.remove('navbar__bar__image__container__showed');
  footer.classList.remove("footer__transition");
  bar.classList.remove('navbar__transition__bar__fade__out');
  footer.classList.remove('footer__fade__out');
  bodyBlackout.classList.remove("liquid__transition__effect__container__fade__out");
  video.classList.remove('liquid__force__blackout');

  // Terminar
  finish();
  
  // Pausar el video
  video.pause();
  video.currentTime = 0;
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











