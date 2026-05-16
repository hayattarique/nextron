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

export default function Logo({ className = '', variant = 'full', size = 'md', priority = false }: LogoProps) {
  const sizes = {
    sm: { width: variant === 'full' ? 160 : 40, height: 52 },
    md: { width: variant === 'full' ? 220 : 55, height: 56 },
    lg: { width: variant === 'full' ? 340 : 80, height: 100 },
  };

  const { width, height } = sizes[size];

  return (
    <Image
      src={logoImage}
      alt="NEXTRON - Electrical & Instrumentation"
      width={width}
      height={height}
      className={className}
      priority={priority}
      style={{ objectFit: 'contain' }}
    />
  );
}
