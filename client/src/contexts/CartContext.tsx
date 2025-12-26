import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Product } from '@/lib/products';

export interface CartItem {
  product: Product;
  quantity: number;
  variant?: string;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type CartAction =
  | { type: 'ADD_ITEM'; product: Product; variant?: string }
  | { type: 'REMOVE_ITEM'; productId: string; variant?: string }
  | { type: 'UPDATE_QUANTITY'; productId: string; quantity: number; variant?: string }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_CART' }
  | { type: 'OPEN_CART' }
  | { type: 'CLOSE_CART' };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  addToCart: (product: Product, variant?: string) => void;
  removeFromCart: (productId: string, variant?: string) => void;
  updateQuantity: (productId: string, quantity: number, variant?: string) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  generateWhatsAppMessage: () => string;
} | null>(null);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.product.id === action.product.id && item.variant === action.variant);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.product.id === action.product.id && item.variant === action.variant
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { product: action.product, quantity: 1, variant: action.variant }],
      };
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => !(item.product.id === action.productId && item.variant === action.variant)),
      };
    case 'UPDATE_QUANTITY':
      if (action.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(item => !(item.product.id === action.productId && item.variant === action.variant)),
        };
      }
      return {
        ...state,
        items: state.items.map(item =>
          item.product.id === action.productId && item.variant === action.variant
            ? { ...item, quantity: action.quantity }
            : item
        ),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
      };
    case 'TOGGLE_CART':
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case 'OPEN_CART':
      return {
        ...state,
        isOpen: true,
      };
    case 'CLOSE_CART':
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    isOpen: false,
  });

  const addToCart = (product: Product, variant?: string) => {
    dispatch({ type: 'ADD_ITEM', product, variant });
    dispatch({ type: 'OPEN_CART' });
  };

  const removeFromCart = (productId: string, variant?: string) => {
    dispatch({ type: 'REMOVE_ITEM', productId, variant });
  };

  const updateQuantity = (productId: string, quantity: number, variant?: string) => {
    dispatch({ type: 'UPDATE_QUANTITY', productId, quantity, variant });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const getTotalItems = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return state.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };

  const generateWhatsAppMessage = () => {
    if (state.items.length === 0) return '';

    const itemsText = state.items
      .map(item => {
        const variantText = item.variant ? ` - ${item.variant}` : '';
        return `• ${item.product.name}${variantText} (x${item.quantity}) - R$ ${(item.product.price * item.quantity).toFixed(2)}`;
      })
      .join('\n');

    const total = getTotalPrice();
    const message = `Olá! Gostaria de fazer um pedido:

${itemsText}

*Total: R$ ${total.toFixed(2)}*

Poderia me ajudar com o pedido?`;

    return encodeURIComponent(message);
  };

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
        generateWhatsAppMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};