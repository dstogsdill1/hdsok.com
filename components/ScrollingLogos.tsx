'use client';

import Image from 'next/image';

interface Logo {
  id: string;
  name: string;
  imagePath: string;
  height: number;
}

interface ScrollingLogosProps {
  speed?: 'slow' | 'normal' | 'fast';
  direction?: 'left' | 'right';
}

const logos: Logo[] = [
  {
    id: '1',
    name: 'HDS Live',
    imagePath: '/images/HDS_Live_logo.jpg',
    height: 60,
  },
  {
    id: '2',
    name: 'HDS Logo Inverted',
    imagePath: '/images/HDS_Logo_Inverted_HighRes.png',
    height: 60,
  },
  {
    id: '3',
    name: 'HDS Logo Lime Shadow',
    imagePath: '/images/hds_logo_lime_shadow_vibrant.png',
    height: 60,
  },
  {
    id: '4',
    name: 'HDS Watermark',
    imagePath: '/images/HDS_Watermark.png',
    height: 60,
  },
  {
    id: '5',
    name: 'HDS Page Logo',
    imagePath: '/images/pagelogo.png',
    height: 60,
  },
];

export function ScrollingLogos({ 
  speed = 'normal', 
  direction = 'left' 
}: ScrollingLogosProps) {
  const animationDuration = speed === 'slow' ? '60s' : speed === 'fast' ? '20s' : '40s';
  const animationDirection = direction === 'right' ? 'reverse' : 'normal';

  return (
    <section className="py-12 bg-gradient-to-b from-black via-slate-900/50 to-black overflow-hidden relative">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      
      <div className="relative">
        <div 
          className="flex gap-16 items-center logo-scroll-container"
          data-speed={speed}
          data-direction={direction}
        >
          {/* Render three sets of logos for seamless loop */}
          {[...Array(3)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-16 items-center shrink-0">
              {logos.map((logo) => (
                <div
                  key={`${setIndex}-${logo.id}`}
                  className="flex items-center justify-center shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 h-[60px]"
                >
                  <Image
                    src={logo.imagePath}
                    alt={logo.name}
                    width={200}
                    height={logo.height}
                    className="object-contain max-h-full w-auto"
                    priority={setIndex === 0}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .logo-scroll-container {
          animation: scroll linear infinite;
        }
        
        .logo-scroll-container[data-speed='slow'] {
          animation-duration: 60s;
        }
        
        .logo-scroll-container[data-speed='normal'] {
          animation-duration: 40s;
        }
        
        .logo-scroll-container[data-speed='fast'] {
          animation-duration: 20s;
        }
        
        .logo-scroll-container[data-direction='right'] {
          animation-direction: reverse;
        }
      `}</style>
    </section>
  );
}
