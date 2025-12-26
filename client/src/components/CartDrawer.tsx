import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ShoppingBag, Plus, Minus, Trash2, X } from 'lucide-react';
import { useState } from 'react';
import {
  IconButton,
  Badge,
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  Chip
} from '@mui/material';
import { ShoppingCart, Delete, Add, Remove } from '@mui/icons-material';

export function CartDrawer() {
  const { state, removeFromCart, updateQuantity, clearCart, getTotalItems, getTotalPrice, generateWhatsAppMessage } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppOrder = () => {
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/5511983247434?text=${message}`;
    window.open(whatsappUrl, '_blank');
    clearCart();
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative text-foreground hover:text-primary transition-colors">
          <ShoppingBag className="h-5 w-5" />
          {getTotalItems() > 0 && (
            <span className="absolute -top-1 -right-1 h-5 w-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
              {getTotalItems()}
            </span>
          )}
          <span className="sr-only">Carrinho</span>
        </Button>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart color="primary" />
            Carrinho de Compras
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {state.items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <Box textAlign="center" sx={{ color: 'text.secondary' }}>
                <ShoppingCart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <Typography variant="h6" gutterBottom>
                  Seu carrinho está vazio
                </Typography>
                <Typography variant="body2">
                  Adicione alguns produtos!
                </Typography>
              </Box>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto py-4">
                <div className="space-y-4">
                  {state.items.map((item) => (
                    <Card key={item.product.id} elevation={1}>
                      <CardContent sx={{ p: 3 }}>
                        <Box display="flex" alignItems="center" gap={2}>
                          <Box
                            sx={{
                              width: 64,
                              height: 64,
                              bgcolor: 'grey.100',
                              borderRadius: 2,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            <ShoppingBag className="h-6 w-6 text-gray-500" />
                          </Box>

                          <Box flex={1} minWidth={0}>
                            <Typography variant="subtitle1" fontWeight="bold" noWrap>
                              {item.product.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              R$ {item.product.price.toFixed(2)}
                            </Typography>
                          </Box>

                          <Box display="flex" alignItems="center" gap={1}>
                            <IconButton
                              size="small"
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              sx={{ bgcolor: 'grey.100', '&:hover': { bgcolor: 'grey.200' } }}
                            >
                              <Remove fontSize="small" />
                            </IconButton>

                            <Typography variant="body1" sx={{ minWidth: 32, textAlign: 'center' }}>
                              {item.quantity}
                            </Typography>

                            <IconButton
                              size="small"
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              sx={{ bgcolor: 'grey.100', '&:hover': { bgcolor: 'grey.200' } }}
                            >
                              <Add fontSize="small" />
                            </IconButton>

                            <IconButton
                              size="small"
                              onClick={() => removeFromCart(item.product.id)}
                              color="error"
                              sx={{ ml: 1 }}
                            >
                              <Delete fontSize="small" />
                            </IconButton>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Divider sx={{ my: 2 }} />

              <Box sx={{ p: 2 }}>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                  <Typography variant="h6">
                    Total:
                  </Typography>
                  <Typography variant="h6" color="primary" fontWeight="bold">
                    R$ {getTotalPrice().toFixed(2)}
                  </Typography>
                </Box>

                <Box display="flex" gap={2}>
                  <Button
                    variant="outline"
                    className="flex-1 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50"
                    onClick={clearCart}
                  >
                    Limpar Carrinho
                  </Button>
                  <Button
                    className="flex-1 bg-primary hover:bg-primary/90 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg transition-all duration-200"
                    onClick={handleWhatsAppOrder}
                  >
                    Finalizar Pedido
                  </Button>
                </Box>

                <Typography variant="caption" color="text.secondary" textAlign="center" sx={{ mt: 2, display: 'block' }}>
                  Ao finalizar, você será redirecionado para o WhatsApp
                </Typography>
              </Box>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}