/** Static texture for placement inside ink-colored sections. */
export default function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="site-grain"
    >
      <svg className="w-full h-full">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  );
}
