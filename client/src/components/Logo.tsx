import React from 'react';
import logoImage from './serdearomalogo.jpg';

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Logo({ size = "md", className = "" }: LogoProps) {
  const sizeMap = {
    sm: "h-12 w-12",      // Mobile: 48px
    md: "h-16 w-16",      // Tablet: 64px
    lg: "h-24 w-24",      // Desktop: 96px
  };

  return (
    <img
      src={logoImage}
      alt="Ser de Aroma Logo"
      className={`${sizeMap[size]} object-contain rounded-lg ${className}`}
    />
  );
}