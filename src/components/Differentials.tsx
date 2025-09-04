import { Lock, Heart, Zap, BookOpen } from "lucide-react";

const differentials = [
  {
    icon: Lock,
    title: "Confidencialidade",
    description: "Total sigilo e respeito à privacidade de cada cliente, garantindo segurança em todas as etapas."
  },
  {
    icon: Heart,
    title: "Empatia e Humanização",
    description: "Atendimento empático e humanizado, compreendendo as necessidades e preocupações de cada cliente."
  },
  {
    icon: Zap,
    title: "Defesa Estratégica",
    description: "Estratégias jurídicas personalizadas e inovadoras para cada caso, buscando os melhores resultados."
  },
  {
    icon: BookOpen,
    title: "Atualização Contínua",
    description: "Compromisso com a atualização constante das leis e jurisprudências para uma defesa eficaz."
  }
];

export default function Differentials() {
  return (
    <section className="py-20 bg-cor-neutra">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-serif text-4xl font-bold mb-6 text-cor-primaria" data-testid="text-differentials-title">
            Nossos Diferenciais
          </h2>
          <p className="text-xl text-cor-texto max-w-3xl mx-auto" data-testid="text-differentials-description">
            O que nos torna únicos na prestação de serviços jurídicos criminais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((differential, index) => {
            const IconComponent = differential.icon;
            return (
              <div
                key={differential.title}
                className="text-center group animate-slide-up"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                data-testid={`card-differential-${index}`}
              >
                <div className="w-20 h-20 bg-cor-primaria/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-cor-primaria/20 group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="w-10 h-10 text-cor-primaria" />
                </div>
                
                <h3 className="font-serif text-xl font-bold mb-3 text-cor-texto" data-testid={`text-differential-title-${index}`}>
                  {differential.title}
                </h3>
                
                <p className="text-cor-texto" data-testid={`text-differential-description-${index}`}>
                  {differential.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}