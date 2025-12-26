import { Link, useLocation } from "wouter";
import { ShoppingBag, Menu, Instagram, Mail } from "lucide-react";
import { TikTokIcon } from "@/components/TikTokIcon";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BrandHeader } from "@/components/BrandHeader";
import { CartDrawer } from "@/components/CartDrawer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fechar menu ao navegar
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Produtos", path: "/colecoes" },
    { name: "Presentes", path: "/presentes" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      {/* Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container flex items-center justify-between gap-4">
          {/* Menu - Esquerda */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] bg-background border-r border-border">
              <nav className="flex flex-col gap-6 mt-10 px-4">
                <BrandHeader 
                  href="/" 
                  logoSize="sm"
                  className="mb-4"
                />
                {navLinks.map((link) => (
                  <Link 
                    key={link.path} 
                    href={link.path}
                    className={`text-lg font-medium transition-colors hover:text-primary ${
                      location === link.path ? "text-primary" : "text-foreground/80"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo Centralizado */}
          <div className="flex-1 flex justify-center">
            <BrandHeader 
              href="/" 
              logoSize="sm"
            />
          </div>

          {/* Desktop Nav + Cart - Direita */}
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  href={link.path}
                  className={`text-sm font-medium uppercase tracking-widest transition-colors hover:text-primary ${
                    location === link.path ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <CartDrawer />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-secondary/30 pt-16 pb-8 mt-auto">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-primary">Sobre Nós</h3>
              <p className="text-muted-foreground leading-relaxed">
                Criamos sabonetes artesanais, esfoliantes para pele, perfumes capilares com ingredientes naturais, essências importadas e com muito carinho. 
                Cada barra é uma experiência sensorial única, feita para cuidar de você e da natureza.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-primary">Links Rápidos</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link 
                      href={link.path}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link 
                    href="/sobre"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Nossa História
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-primary">Contatos</h3>
              <div className="flex flex-col gap-2 text-muted-foreground">
                <a href="mailto:serdearoma@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2">
                  <Mail className="h-4 w-4" /> serdearoma@gmail.com
                </a>
                <div className="flex gap-4 mt-4">
                  <a href="https://www.instagram.com/serdearoma/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="https://www.tiktok.com/@serdearoma" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    <TikTokIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Ser de Aroma. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
