'use client';

import Image from 'next/image';
import logoImage from '@/logo/logo.png';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  /** Set true only for above-the-fold logos (e.g. header). Wastes preload budget in footer. */
  priority?: boolean;
}

const logoWidths = {
  sm: 130,
  md: 170,
  lg: 240,
};

export default function Logo({ className = '', size = 'md', priority = false }: LogoProps) {
  const w = logoWidths[size];

  return (
    <div className={`inline-flex items-center flex-shrink-0 ${className}`}>
      <Image
        src={logoImage}
        alt="NEXTRON - Electrical & Instrumentation"
        width={logoImage.width}
        height={logoImage.height}
        sizes={`(max-width: 768px) ${logoWidths.sm}px, ${w}px`}
        priority={priority}
        style={{ width: w, height: 'auto' }}
      />
    </div>
  );
}
