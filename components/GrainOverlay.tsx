/** A single, site-wide film-grain texture layer. Unifies the visual feel
 * across photos of very different source quality (phone shots, professional
 * headshots, gym photos) without touching each image individually. Static
 * (no per-frame animation) to stay performance-first — pure CSS/SVG, no JS. */
export default function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[999] pointer-events-none opacity-[4%] mix-blend-overlay"
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
