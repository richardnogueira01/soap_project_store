import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Heart, Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-soap.png" 
            alt="Sabonetes artesanais empilhados com lavanda" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        
        <div className="container relative z-10 text-center max-w-3xl px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <span className="inline-block py-1 px-3 rounded-full bg-white/80 backdrop-blur-sm text-primary text-xs font-bold tracking-widest uppercase mb-6 border border-white/50">
            100% Natural & Artesanal
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-sm leading-tight">
            A Arte do Banho <br/> em Sua Forma Mais Pura
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 font-light leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
            Sabonetes feitos à mão com ingredientes botânicos selecionados para nutrir sua pele e acalmar sua mente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/colecoes">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 rounded-full h-14 text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                Ver Coleção
              </Button>
            </Link>
            <Link href="/sobre">
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/20 font-semibold px-8 rounded-full h-14 text-lg backdrop-blur-sm">
                Nossa História
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="py-12 bg-primary/5 border-b border-border/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-3 p-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                <Leaf className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground">Ingredientes Naturais</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                Livres de parabenos e sulfatos. Apenas óleos vegetais puros e manteigas nobres.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 p-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground">Feito com Amor</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                Produzidos em pequenos lotes pelo método cold process para preservar as propriedades.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 p-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground">Aromas Exclusivos</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                Fragrâncias desenvolvidas com óleos essenciais que despertam memórias e sensações.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary/30 rounded-full blur-3xl opacity-50" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-50" />
              <img 
                src="/images/about-craft.png" 
                alt="Mãos artesãs cortando sabonete" 
                className="relative z-10 rounded-2xl shadow-2xl w-full object-cover aspect-[4/3] hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs hidden md:block border border-border/50">
                <p className="font-serif text-2xl text-primary italic">"Cada barra conta uma história de cuidado e paciência."</p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-4">
                <span className="text-primary font-bold tracking-widest uppercase text-sm">Nossa Essência</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                  Artesanal, do Início ao Fim
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nossa jornada começou com a busca por um produto que fosse gentil com a pele e com o planeta. 
                Em nosso atelier, resgatamos a saboaria ancestral, onde o tempo é o ingrediente principal.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cada sabonete passa por um processo de cura de 4 a 6 semanas, garantindo uma barra suave, 
                duradoura e rica em glicerina natural. Não vendemos apenas limpeza, vendemos um momento de pausa no seu dia.
              </p>
              <div className="pt-4">
                <Link href="/sobre">
                  <Button variant="link" className="text-primary p-0 text-lg font-semibold hover:text-primary/80 group">
                    Conheça nosso processo <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-24 bg-secondary/20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-primary font-bold tracking-widest uppercase text-sm">Matéria-Prima</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                  O Poder da Natureza
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Acreditamos que o que você coloca na sua pele é tão importante quanto o que você come. 
                Por isso, selecionamos rigorosamente cada ingrediente.
              </p>
              <ul className="space-y-4 mt-6">
                {[
                  "Azeite de Oliva Extra Virgem para hidratação profunda",
                  "Manteiga de Karité para proteção e emoliência",
                  "Óleos Essenciais Puros para aromaterapia real",
                  "Argilas Naturais para desintoxicação suave"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/80">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-6">
                <Link href="/ingredientes">
                  <Button className="rounded-full px-8 py-6 text-lg">
                    Ver Todos os Ingredientes
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/images/ingredient-olive.png" 
                  alt="Ingredientes naturais" 
                  className="rounded-2xl shadow-lg w-full h-full object-cover aspect-square translate-y-8"
                />
                <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col justify-center items-center text-center border border-border/50 aspect-square">
                  <span className="text-6xl mb-4">🌿</span>
                  <h4 className="font-serif text-2xl font-bold text-primary mb-2">100% Vegano</h4>
                  <p className="text-muted-foreground">Sem crueldade animal, apenas bondade vegetal.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Preview */}
      <section className="py-24 bg-background">
        <div className="container text-center max-w-4xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Nossos Produtos</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
            Coleções em Destaque
          </h2>
          <p className="text-muted-foreground text-lg">
            Descubra nossas linhas exclusivas, criadas para diferentes necessidades e momentos.
          </p>
        </div>

        <div className="container">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/images/collection-display.png" 
              alt="Coleção de sabonetes" 
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10 md:p-16 text-white">
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">Lançamentos da Estação</h3>
              <p className="text-white/80 text-lg max-w-xl mb-8">
                Novos aromas inspirados no frescor da manhã e na tranquilidade do entardecer.
                Edição limitada disponível em breve.
              </p>
              <div>
                <Link href="/colecoes">
                  <Button size="lg" variant="secondary" className="rounded-full px-8 font-semibold text-primary bg-white hover:bg-white/90 border-none">
                    Explorar Loja
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / Contact CTA */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Fique por dentro das novidades
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10">
            Inscreva-se para receber ofertas exclusivas, dicas de autocuidado e ser o primeiro a saber sobre novos lançamentos.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 font-bold px-8">
              Inscrever
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
