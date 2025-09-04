import { MessageCircle } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with modern office building at night */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.ibb.co/cHnr2cV/brenton-pearce-Sc85c-QWwi-P8-unsplash.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-cor-primaria/80 via-transparent to-cor-primaria/80"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-cor-primaria via-cor-secundaria to-cor-primaria opacity-90"></div>

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-2 h-2 bg-cor-secundaria/30 rounded-full animate-pulse-slow" style={{ top: "20%", left: "10%" }}></div>
        <div className="absolute w-1 h-1 bg-cor-secundaria/20 rounded-full animate-pulse-slow" style={{ top: "40%", left: "80%", animationDelay: "1s" }}></div>
        <div className="absolute w-3 h-3 bg-cor-secundaria/20 rounded-full animate-pulse-slow" style={{ top: "70%", left: "20%", animationDelay: "2s" }}></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          <span className="text-cor-texto-inverso">Advocacia Criminal</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-cor-texto-inverso mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: "0.3s" }}>
          Defesa dos seus direitos com respeito, competência e resultados comprovados.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <button
            onClick={() => scrollToSection("contato")}
            className="inline-flex items-center px-8 py-4 bg-cor-primaria text-cor-texto-inverso font-semibold rounded-lg hover:bg-cor-primaria/80 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            data-testid="button-contact"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Fale com a Advogada
          </button>
          
          <button
            onClick={() => scrollToSection("sobre")}
            className="inline-flex items-center px-8 py-4 border-2 border-cor-primaria text-cor-primaria font-semibold rounded-lg hover:bg-cor-primaria hover:text-cor-texto-inverso transition-all duration-300"
            data-testid="button-about"
          >
            Conheça o Escritório
          </button>
        </div>

        <p className="text-xs text-cor-texto-inverso/60 mt-6 animate-slide-up" style={{ animationDelay: "0.9s" }}>
          * Conteúdo do site é fictício e criado apenas para fins demonstrativos
        </p>
      </div>
    </section>
  );
}
