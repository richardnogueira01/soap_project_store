import { Link } from "wouter";
import { Product } from "@/lib/products";
import { AddToCartButton } from "@/components/AddToCartButton";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { state } = useCart();
  const cartItem = state.items.find(item => item.product.id === product.id);
  const isInCart = !!cartItem;

  return (
    <Link href={`/produto/${product.id}`}>
      <div className="group relative bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg flex flex-col h-full cursor-pointer">
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
          {isInCart && (
            <div className="absolute top-3 right-3">
              <Badge
                badgeContent={cartItem.quantity}
                color="primary"
                sx={{
                  '& .MuiBadge-badge': {
                    backgroundColor: '#8FAF7C',
                    color: 'white',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                  },
                }}
              >
                <ShoppingCart className="h-5 w-5 text-green-600" />
              </Badge>
            </div>
          )}
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

          <div className="mt-auto flex flex-col gap-3 pt-4 border-t border-border/50">
            <span className="font-serif text-lg font-semibold text-foreground">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>

            <AddToCartButton
              product={product}
              variant="default"
              size="sm"
              className="w-full"
              onClick={(e) => e.stopPropagation()} // Impede que o clique no botão navegue para a página do produto
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
