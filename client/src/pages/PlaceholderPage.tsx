import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Construction, ArrowLeft } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-secondary/10">
      <div className="h-24 w-24 bg-primary/10 rounded-full flex items-center justify-center mb-8 animate-pulse">
        <Construction className="h-10 w-10 text-primary" />
      </div>
      
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
        {title}
      </h1>
      
      <p className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
        {description}
      </p>
      
      <div className="p-6 bg-background rounded-xl border border-border shadow-sm max-w-md w-full mb-10">
        <h3 className="font-semibold text-foreground mb-2">Em Breve</h3>
        <p className="text-sm text-muted-foreground">
          Estamos preparando algo especial para esta seção. 
          O sistema de compras online e catálogo completo estarão disponíveis em breve.
        </p>
      </div>

      <Link href="/">
        <Button size="lg" className="rounded-full px-8 gap-2">
          <ArrowLeft className="h-4 w-4" /> Voltar para Início
        </Button>
      </Link>
    </div>
  );
}
