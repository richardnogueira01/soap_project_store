import { useRoute, Link } from "wouter";
import { useState } from "react";
import { products } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingBag, Check, Star } from "lucide-react";
import { AddToCartButton } from "@/components/AddToCartButton";
import NotFound from "@/pages/NotFound";

export default function ProductDetail() {
  const [, params] = useRoute("/produto/:id");
  const product = products.find(p => p.id === params?.id);
  const [selectedVariant, setSelectedVariant] = useState<string | undefined>(undefined);

  if (!product) return <NotFound />;

  return (
    <div className="min-h-screen bg-background pb-20 pt-10">
      <div className="container">
        {/* Breadcrumb / Back */}
        <div className="mb-8">
          <Link href="/colecoes" asChild>
            <Button variant="ghost" className="pl-0 text-muted-foreground hover:text-primary gap-2">
              <ArrowLeft className="h-4 w-4" /> Voltar para Coleções
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Section */}
          <div className="space-y-6">
            <div className="aspect-square rounded-2xl overflow-hidden bg-secondary/10 border border-border shadow-sm relative group">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="px-4 py-2 text-sm font-bold tracking-wider uppercase bg-white/90 backdrop-blur-sm text-primary rounded-full shadow-sm">
                  {product.category}
                </span>
              </div>
            </div>
            
            {/* Thumbnail - Single Image */}
            <div className="flex gap-4">
              <div className="aspect-square rounded-lg overflow-hidden bg-secondary/10 border border-border cursor-pointer hover:border-primary transition-colors w-20 h-20">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-semibold text-primary">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </span>
            </div>

            <div className="prose prose-stone max-w-none mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.fullDescription}
              </p>
            </div>

            {/* Variants */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-8">
                <h3 className="font-serif text-lg font-semibold mb-4">Escolha o Aroma</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant.id)}
                      className={`p-4 rounded-lg border-2 transition-all font-medium ${
                        selectedVariant === variant.id
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border bg-background hover:border-primary/50'
                      }`}
                    >
                      {variant.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Benefits */}
            <div className="mb-8">
              <h3 className="font-serif text-lg font-semibold mb-4">Benefícios</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/80">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Check className="h-3 w-3" />
                    </div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Ingredients */}
            <div className="mb-10 p-6 bg-secondary/20 rounded-xl border border-border/50">
              <h3 className="font-serif text-lg font-semibold mb-3">Ingredientes Chave</h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ing, i) => (
                  <span key={i} className="px-3 py-1 bg-white/50 border border-border rounded-full text-sm text-muted-foreground">
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-auto pt-6 border-t border-border">
              <AddToCartButton
                product={product}
                variant="default"
                size="lg"
                showQuantity={true}
                className="w-full h-14 rounded-full text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
