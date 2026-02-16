'use client';

import Image from 'next/image';
import logoImage from '@/logo/logo.png';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon';
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', variant = 'full', size = 'md' }: LogoProps) {
  const sizes = {
    sm: { width: variant === 'full' ? 200 : 50, height: 60 },
    md: { width: variant === 'full' ? 280 : 70, height: 70 },
    lg: { width: variant === 'full' ? 350 : 90, height: 90 },
  };

  const { width, height } = sizes[size];

  return (
    <Image
      src={logoImage}
      alt="NEXTRON - Electrical & Instrumentation"
      width={width}
      height={height}
      className={className}
      priority
      style={{ objectFit: 'contain' }}
    />
  );
}
