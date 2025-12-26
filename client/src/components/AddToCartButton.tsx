import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { Product } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Plus, Minus } from 'lucide-react';

interface AddToCartButtonProps {
  product: Product;
  variant?: 'default' | 'outline' | 'secondary';
  size?: 'default' | 'sm' | 'lg';
  showQuantity?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export function AddToCartButton({
  product,
  variant = 'default',
  size = 'default',
  showQuantity = false,
  className = '',
  onClick,
}: AddToCartButtonProps) {
  const { addToCart, state } = useCart();
  const [quantity, setQuantity] = useState(1);

  const cartItem = state.items.find(item => item.product.id === product.id);
  const currentQuantity = cartItem?.quantity || 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    onClick?.(e);
  };

  if (showQuantity) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div className="flex items-center border rounded-md">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="w-12 text-center text-sm">{quantity}</span>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
            onClick={() => setQuantity(quantity + 1)}
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
        <Button
          variant={variant}
          size={size}
          onClick={handleAddToCart}
          className="flex items-center gap-2"
        >
          <ShoppingBag className="h-4 w-4" />
          Adicionar
        </Button>
      </div>
    );
  }

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleAddToCart}
      className={`flex items-center gap-2 ${className}`}
    >
      <ShoppingBag className="h-4 w-4" />
      {currentQuantity > 0 ? `Adicionar (${currentQuantity})` : 'Adicionar ao Carrinho'}
    </Button>
  );
}