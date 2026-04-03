import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: 'linear-gradient(135deg, #0F172A 0%, #0C1929 60%, #071422 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background wave circles */}
        <div style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          border: '1px solid rgba(6,182,212,0.08)',
          top: '-200px',
          right: '-200px',
          display: 'flex',
        }} />
        <div style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          border: '1px solid rgba(6,182,212,0.06)',
          bottom: '-150px',
          left: '-100px',
          display: 'flex',
        }} />

        {/* Top teal line */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          height: '4px',
          background: 'linear-gradient(90deg, #06B6D4, #0EA5E9, #06B6D4)',
          display: 'flex',
        }} />

        {/* Content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0 80px',
          textAlign: 'center',
          gap: '0px',
        }}>
          {/* Wave emoji */}
          <div style={{ fontSize: '72px', marginBottom: '24px', display: 'flex' }}>🌊</div>

          {/* Title */}
          <div style={{
            fontSize: '72px',
            fontWeight: '800',
            color: '#F8FAFC',
            letterSpacing: '-2px',
            lineHeight: '1.1',
            display: 'flex',
            marginBottom: '8px',
          }}>
            Ride the Wave AI
          </div>

          {/* Tagline */}
          <div style={{
            fontSize: '28px',
            fontWeight: '600',
            color: '#06B6D4',
            marginBottom: '32px',
            display: 'flex',
          }}>
            Where community meets competitive advantage.
          </div>

          {/* Divider */}
          <div style={{
            width: '60px',
            height: '2px',
            background: 'rgba(6,182,212,0.4)',
            marginBottom: '32px',
            display: 'flex',
          }} />

          {/* Neighborhoods */}
          <div style={{
            fontSize: '20px',
            color: '#94A3B8',
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: '32px',
          }}>
            <span style={{ color: '#CBD5E1', fontWeight: '600' }}>Steiner Ranch</span>
            <span style={{ color: '#334155' }}>|</span>
            <span style={{ color: '#CBD5E1', fontWeight: '600' }}>Lakeway</span>
            <span style={{ color: '#334155' }}>|</span>
            <span style={{ color: '#CBD5E1', fontWeight: '600' }}>River Place</span>
            <span style={{ color: '#334155' }}>|</span>
            <span style={{ color: '#CBD5E1', fontWeight: '600' }}>Four Points</span>
            <span style={{ color: '#334155' }}>|</span>
            <span style={{ color: '#CBD5E1', fontWeight: '600' }}>Bee Caves</span>
          </div>

          {/* Badge */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(6,182,212,0.1)',
            border: '1px solid rgba(6,182,212,0.3)',
            borderRadius: '999px',
            padding: '10px 24px',
            color: '#06B6D4',
            fontSize: '16px',
            fontWeight: '600',
            letterSpacing: '0.05em',
          }}>
            Community • Free • Monthly
          </div>
        </div>

        {/* Bottom URL */}
        <div style={{
          position: 'absolute',
          bottom: '28px',
          color: '#334155',
          fontSize: '16px',
          display: 'flex',
          letterSpacing: '0.05em',
        }}>
          ridethewaveai.com
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
