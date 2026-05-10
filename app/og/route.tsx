import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title    = searchParams.get('title')    ?? 'Dominik Steinacher';
  const subtitle = searchParams.get('subtitle') ?? 'Pole Vault Champion · Coach · Digital Solutions Expert';

  return new ImageResponse(
    (
      <div
        style={{
          background: '#111111',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          padding: '64px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Crimson atmosphere blob */}
        <div
          style={{
            position: 'absolute',
            top: -200,
            left: -200,
            width: 700,
            height: 700,
            borderRadius: '50%',
            background: 'rgba(193,18,31,0.12)',
            filter: 'blur(120px)',
          }}
        />

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, position: 'relative', zIndex: 1, maxWidth: 960 }}>
          {/* Gradient divider */}
          <div
            style={{
              width: 80,
              height: 3,
              background: 'linear-gradient(90deg, #C1121F 0%, #FF6B35 60%, transparent 100%)',
              borderRadius: 2,
            }}
          />

          {/* Title */}
          <div
            style={{
              fontSize: title.length > 50 ? 52 : 68,
              fontWeight: 700,
              color: '#F2EFE9',
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
            }}
          >
            {title}
          </div>

          {/* Subtitle */}
          <div style={{ fontSize: 26, color: '#8A8A8A', letterSpacing: '0.01em' }}>
            {subtitle}
          </div>

          {/* Domain */}
          <div
            style={{
              marginTop: 8,
              fontSize: 20,
              fontWeight: 700,
              color: '#C1121F',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
            }}
          >
            domisteinacher.me
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
