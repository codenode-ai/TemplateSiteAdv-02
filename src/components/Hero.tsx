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
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-graphite/80 via-transparent to-graphite/80"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-graphite via-dark-gray to-graphite opacity-90"></div>

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-2 h-2 bg-golden/30 rounded-full animate-pulse-slow" style={{ top: "20%", left: "10%" }}></div>
        <div className="absolute w-1 h-1 bg-golden/20 rounded-full animate-pulse-slow" style={{ top: "40%", left: "80%", animationDelay: "1s" }}></div>
        <div className="absolute w-3 h-3 bg-golden/20 rounded-full animate-pulse-slow" style={{ top: "70%", left: "20%", animationDelay: "2s" }}></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          <span className="text-golden">Advocacia Criminal</span>
          <br />
          <span className="text-white">de Excelência</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-light-gray mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: "0.3s" }}>
          Defesa dos seus direitos com respeito, competência e resultados comprovados.
          <br />
          Estratégias jurídicas personalizadas para proteger a sua liberdade e reputação.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <button
            onClick={() => scrollToSection("contato")}
            className="inline-flex items-center px-8 py-4 bg-golden text-graphite font-semibold rounded-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            data-testid="button-contact"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Fale com a Advogada
          </button>
          
          <button
            onClick={() => scrollToSection("sobre")}
            className="inline-flex items-center px-8 py-4 border-2 border-golden text-golden font-semibold rounded-lg hover:bg-golden hover:text-graphite transition-all duration-300"
            data-testid="button-about"
          >
            Conheça o Escritório
          </button>
        </div>

        <p className="text-xs text-light-gray/60 mt-6 animate-slide-up" style={{ animationDelay: "0.9s" }}>
          * Conteúdo do site é fictício e criado apenas para fins demonstrativos
        </p>
      </div>
    </section>
  );
}
