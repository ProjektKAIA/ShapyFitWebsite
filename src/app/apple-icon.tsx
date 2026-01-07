import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 180,
  height: 180,
};

export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#111111',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 40,
        }}
      >
        <svg
          width="120"
          height="120"
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
    ),
    {
      ...size,
    }
  );
}
