export const Waves = ({
  colorWaves = [
    'rgba(255,255,255,0.7',
    'rgba(255,255,255,0.5)',
    'rgba(255,255,255,0.3)',
    '#fff',
  ],
}) => {
  return (
    <div>
      <svg
        className="waves__effect"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="waves__parallax">
          <use href="#gentle-wave" x="48" y="0" fill={colorWaves[0]} />
          <use href="#gentle-wave" x="48" y="3" fill={colorWaves[1]} />
          <use href="#gentle-wave" x="48" y="5" fill={colorWaves[2]} />
          <use href="#gentle-wave" x="48" y="7" fill={colorWaves[3]} />
        </g>
      </svg>
    </div>
  );
};
