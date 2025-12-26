import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AnimatedList, AnimatedItem } from "@/components/animations/PageTransition";

export default function Collections() {
  const [filter, setFilter] = useState<string>("Todos");
  
  const categories = ["Todos", ...Array.from(new Set(products.map(p => p.category)))];
  
  const filteredProducts = filter === "Todos" 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-secondary/20 py-20 mb-12">
        <div className="container text-center max-w-3xl">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
            Catálogo Completo
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
            Nossas Coleções
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explore nossa seleção de sabonetes artesanais, perfumes capilares e esfoliantes de pele! cada um formulado para proporcionar 
            uma experiência única de cuidado e bem-estar.
          </p>
        </div>
      </div>

      <div className="container">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? "default" : "outline"}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-6 ${
                filter === cat 
                  ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                  : "bg-transparent border-border text-muted-foreground hover:text-primary hover:border-primary/50"
              }`}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Grid */}
        <AnimatedList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <AnimatedItem key={product.id} index={index}>
              <ProductCard product={product} />
            </AnimatedItem>
          ))}
        </AnimatedList>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">Nenhum produto encontrado nesta categoria.</p>
            <Button 
              variant="link" 
              onClick={() => setFilter("Todos")}
              className="text-primary mt-2"
            >
              Ver todos os produtos
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
