import { Link } from "wouter";
import { Product } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-secondary/10">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 text-xs font-bold tracking-wider uppercase bg-white/90 backdrop-blur-sm text-primary rounded-full shadow-sm">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-border/50">
          <span className="font-serif text-lg font-semibold text-foreground">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
          
          <Link href={`/produto/${product.id}`} asChild>
            <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 hover:bg-primary/5 p-0 font-semibold group/btn">
              Ver Detalhes <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
