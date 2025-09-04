import { Shield, Users } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-cor-neutra">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <img
              src="/Fachada Dra. Camila.jpg"
              alt="Escritório moderno de advocacia"
              className="rounded-xl shadow-2xl w-full h-auto"
              data-testid="img-office"
            />
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="font-serif text-4xl font-bold mb-6 text-cor-primaria" data-testid="text-about-title">
              Sobre o Escritório
            </h2>
            
            <p className="text-lg text-cor-texto mb-6 leading-relaxed" data-testid="text-about-description">
              Escritório com mais de 10 anos de experiência, especializado em Direito Penal. Atua com estratégias eficazes e humanizadas.
            </p>
            
            <p className="text-lg text-cor-texto mb-6 leading-relaxed">
              Nossa missão é oferecer defesa estratégica e humanizada, protegendo os direitos e a liberdade de nossos clientes com excelência e comprometimento.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-center" data-testid="card-expertise">
                <div className="w-12 h-12 bg-cor-primaria/10 rounded-lg flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-cor-primaria" />
                </div>
                <div>
                  <h3 className="font-semibold text-cor-texto">Experiência Consolidada</h3>
                  <p className="text-cor-texto text-sm">Mais de 10 anos de experiência</p>
                </div>
              </div>
              
              <div className="flex items-center" data-testid="card-service">
                <div className="w-12 h-12 bg-cor-primaria/10 rounded-lg flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-cor-primaria" />
                </div>
                <div>
                  <h3 className="font-semibold text-cor-texto">Atendimento Humanizado</h3>
                  <p className="text-cor-texto text-sm">Foco nas necessidades do cliente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
