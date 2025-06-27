export const playLiquidTransition = ({ bar, circle, footer, body, setDarkMode, finish, bodyBlackout, audio }) => {
  if (!bar || !circle || !footer || !body) return;

  bodyBlackout = bodyBlackout.current;
  bar = bar.current;
  circle = circle.current;
  footer = footer.current;
  const video = body.current;
  if (!video) return;

  const startAnimation = () => {
    audio.currentTime = 0;
    audio.play();

    video.currentTime = 0;
    video.classList.add("liquid__transition__effect__active");
    video.playbackRate = video.duration / 3;
    video.play();

    bar.classList.remove('navbar__transition__bar__fade__out');
    bar.classList.add('navbar__transition__bar__changing');
    circle.classList.add('navbar__bar__image__container__showed');
    footer.classList.add('footer__transition');

    setTimeout(() => {
      audio.pause();
      audio.currentTime = 0;

      bodyBlackout.classList.add("liquid__transition__effect__final__frame__active");
      setDarkMode(false);
      circle.classList.remove('navbar__bar__image__container__showed');
      bar.classList.add('navbar__transition__bar__fade__out');
      footer.classList.add('footer__fade__out');
      video.classList.remove("liquid__transition__effect__active");
      // Forzar al navegador a aplicar el "display: block" antes del fade
      requestAnimationFrame(() => {
        bodyBlackout.classList.add("liquid__transition__effect__final__frame__fade__out");
      });
      video.pause();

      setTimeout(() => {
        bar.classList.remove('navbar__transition__bar__changing');
        footer.classList.remove('footer__fade__out');
        footer.classList.remove('footer__transition');
        bodyBlackout.classList.remove("liquid__transition__effect__final__frame__active");
        bodyBlackout.classList.remove("liquid__transition__effect__final__frame__fade__out");
        finish();
      }, 3000);
    }, 3000);
  };

  if (isFinite(video.duration)) {
    startAnimation();
  } else {
    const onLoaded = () => {
      video.removeEventListener('loadedmetadata', onLoaded);
      startAnimation();
    };
    video.addEventListener('loadedmetadata', onLoaded);
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
  audioStart.play();

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
    
    audioEnd.currentTime = 0;
    audioEnd.play();

    glitch.classList.remove('glitch__effect__container__transition');
    glitch.classList.add('glitch__effect__container__blackout');
    setDarkMode(true);
  }, 2000);

  setTimeout(() => {

    glitch.classList.remove('glitch__effect__container__blackout');
    glitch.classList.add('glitch__effect__container__fade__out');
  }, 4000);

  setTimeout(() => {
    glitch.classList.remove('glitch__effect__container__fade__out');
    finish();
  }, 7000);
};
