import React from 'react';

interface LogoProps {
  size?: "sm" | "md" | "lg";
  brandName?: string;
}

export function Logo({ size = "md", brandName = "SUA MARCA" }: LogoProps) {
  const sizeMap = {
    // Ajustei ligeiramente os tamanhos de fonte para ficarem melhores dentro do círculo
    sm: { width: 80, height: 80, fontSize: 14 },
    md: { width: 120, height: 120, fontSize: 20 },
    lg: { width: 300, height: 300, fontSize: 28 },
  };

  const dimensions = sizeMap[size];
  // Calcula uma fonte menor para o subtítulo "NATURAL" baseada na fonte principal
  const subFontSize = Math.max(9, dimensions.fontSize * 0.7);

  return (
    <svg
      width={dimensions.width}
      height={dimensions.height}
      viewBox="0 0 300 300" // Mantém 300x300 pois este design é quadrado
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Círculo pontilhado da coroa */}
      <path
        d="M150 50 C 200 50, 250 100, 250 150 C 250 200, 200 250, 150 250 C 100 250, 50 200, 50 150 C 50 100, 100 50, 150 50"
        stroke="#8FAF7C"
        strokeWidth="2"
        strokeDasharray="5 5"
      />

      {/* Elementos decorativos (folhas e circulos) */}
      <path
        d="M70 100 Q 50 130 70 160"
        stroke="#8FAF7C"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M230 100 Q 250 130 230 160"
        stroke="#8FAF7C"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="150" cy="60" r="8" fill="#8FAF7C" />
      <circle cx="150" cy="240" r="8" fill="#8FAF7C" />
      <path
        d="M80 150 L 60 150 M 220 150 L 240 150"
        stroke="#8FAF7C"
        strokeWidth="3"
      />

      {/* Texto Subtítulo Fixo */}
      <text
        x="150"
        y="155"
        fontFamily="Arial, sans-serif"
        fontSize={subFontSize}
        fill="#4A5547"
        textAnchor="middle"
        letterSpacing="2"
      >
        NATURAL
      </text>

      {/* Texto Principal da Marca */}
      <text
        x="150"
        y="185"
        fontFamily="Arial, sans-serif"
        fontSize={dimensions.fontSize}
        fontWeight="bold"
        fill="#4A5547"
        textAnchor="middle"
      >
        {brandName.toUpperCase()}
      </text>
    </svg>
  );
}