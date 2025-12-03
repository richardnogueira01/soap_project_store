import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
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
        
        <Route path="/ingredientes">
          <PlaceholderPage 
            title="Ingredientes Naturais" 
            description="Conheça em detalhes cada óleo, manteiga e extrato botânico que utilizamos em nossas formulações."
          />
        </Route>
        
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
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
