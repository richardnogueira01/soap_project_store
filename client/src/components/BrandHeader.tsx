import { Link } from "wouter";
import { Logo } from "./Logo";

interface BrandHeaderProps {
  href?: string;
  title?: string;
  showLogo?: boolean;
  logoSize?: "sm" | "md" | "lg";
  className?: string;
}

export function BrandHeader({
  href = "/",
  title = "Ser de Aroma",
  showLogo = true,
  logoSize = "md",
  className = "",
}: BrandHeaderProps) {
  return (
    <Link href={href}>
      <div className={`flex items-center gap-3 cursor-pointer ${className}`}>
        {showLogo && <Logo size={logoSize} brandName="AROMA" />}
        <span className="text-2xl md:text-3xl font-serif font-bold text-primary tracking-tight">
          {title}
        </span>
      </div>
    </Link>
  );
}
