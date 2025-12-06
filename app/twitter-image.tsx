import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Homeland Development Services - Commercial Facility Management'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

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
          backgroundColor: '#0a0a0a',
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(198, 255, 0, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(34, 211, 238, 0.1) 0%, transparent 50%)',
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, #c6ff00, #22d3ee)',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 60px',
          }}
        >
          {/* HDS Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '30px',
            }}
          >
            <div
              style={{
                fontSize: '80px',
                fontWeight: 'bold',
                color: '#c6ff00',
                letterSpacing: '-2px',
              }}
            >
              HDS
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: '52px',
              fontWeight: 'bold',
              color: '#ffffff',
              textAlign: 'center',
              marginBottom: '20px',
              lineHeight: 1.2,
            }}
          >
            Homeland Development Services
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: '28px',
              color: '#94a3b8',
              textAlign: 'center',
              marginBottom: '40px',
              maxWidth: '900px',
            }}
          >
            Commercial Facility Management & CMMS Platform
          </div>

          {/* Stats row */}
          <div
            style={{
              display: 'flex',
              gap: '60px',
              marginTop: '20px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#c6ff00' }}>
                365+
              </div>
              <div style={{ fontSize: '18px', color: '#64748b' }}>
                Sites Managed
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#22d3ee' }}>
                24/7
              </div>
              <div style={{ fontSize: '18px', color: '#64748b' }}>
                Dispatch
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#c6ff00' }}>
                $68M+
              </div>
              <div style={{ fontSize: '18px', color: '#64748b' }}>
                Portfolio Spend
              </div>
            </div>
          </div>
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <div
            style={{
              fontSize: '24px',
              color: '#c6ff00',
              fontWeight: '600',
            }}
          >
            www.hdsok.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
