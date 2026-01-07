import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'ShapyFit - Performance Tracking App';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#111111',
          backgroundImage: 'radial-gradient(circle at 25% 25%, #1a1a1a 0%, #111111 50%)',
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M8 12C8 10.8954 8.89543 10 10 10H14C15.1046 10 16 10.8954 16 12V14H10C8.89543 14 8 13.1046 8 12Z"
              fill="#22C55E"
            />
            <path
              d="M16 18C16 16.8954 16.8954 16 18 16H22C23.1046 16 24 16.8954 24 18V20C24 21.1046 23.1046 22 22 22H18C16.8954 22 16 21.1046 16 20V18Z"
              fill="#22C55E"
            />
            <rect x="14" y="10" width="4" height="12" rx="1" fill="#22C55E" />
          </svg>
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            fontSize: 72,
            fontWeight: 700,
            color: 'white',
            marginBottom: 16,
            letterSpacing: '-0.02em',
          }}
        >
          ShapyFit
        </div>

        {/* Subtitle */}
        <div
          style={{
            display: 'flex',
            fontSize: 32,
            color: '#22C55E',
            marginBottom: 48,
            fontWeight: 500,
          }}
        >
          Performance Tracking App
        </div>

        {/* Features */}
        <div
          style={{
            display: 'flex',
            gap: 48,
            color: '#a1a1aa',
            fontSize: 22,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span>GPT Import</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span>Multi-Sport</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span>Free to Use</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
