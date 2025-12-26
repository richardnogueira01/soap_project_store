import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { CartProvider } from "./contexts/CartContext";
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { muiTheme } from './themes/muiTheme';
import { PageTransition } from './components/animations/PageTransition';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import PlaceholderPage from "./pages/PlaceholderPage";
import Collections from "./pages/Collections";
import ProductDetail from "./pages/ProductDetail";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />

        {/* Catálogo de Produtos */}
        <Route path="/colecoes" component={Collections} />
        <Route path="/produto/:id" component={ProductDetail} />

        <Route path="/presentes">
          <PlaceholderPage
            title="Kits & Presentes"
            description="Opções encantadoras para presentear quem você ama com o melhor do cuidado natural."
          />
        </Route>

        <Route path="/sobre">
          <PlaceholderPage
            title="Nossa História"
            description="Saiba mais sobre a origem da nossa marca e o processo artesanal por trás de cada barra."
          />
        </Route>

        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        <ThemeProvider defaultTheme="light">
          <CartProvider>
            <TooltipProvider>
              <Toaster />
              <PageTransition>
                <Router />
              </PageTransition>
            </TooltipProvider>
          </CartProvider>
        </ThemeProvider>
      </MuiThemeProvider>
    </ErrorBoundary>
  );
}export default App;
