import { Shield, Users, FileText, DollarSign, Scale, Gavel, Laptop, Building } from "lucide-react";

const practiceAreas = [
  {
    icon: Shield,
    title: "Defesa Penal",
    description: "Atuação em todas as esferas do Direito Penal, desde a fase investigatória até os recursos.",
    services: [
      "Defesa em inquéritos policiais",
      "Defesa em processos criminais",
      "Recursos e habeas corpus"
    ]
  },
  {
    icon: Gavel,
    title: "Tribunal do Júri",
    description: "Especialização em defesas complexas no Tribunal do Júri, com foco em liberdade e absolvição.",
    services: [
      "Defesa em crimes dolosos contra a vida",
      "Acompanhamento processual completo",
      "Preparação de testemunhas"
    ]
  },
  {
    icon: Building,
    title: "Crimes contra o Patrimônio",
    description: "Defesa especializada em crimes contra o patrimônio, como furto, roubo e estelionato.",
    services: [
      "Defesa em crimes de furto e roubo",
      "Defesa em estelionato e fraudes",
      "Negociação de transações penais"
    ]
  },
  {
    icon: Users,
    title: "Crimes contra a Pessoa",
    description: "Atuação em crimes contra a pessoa, incluindo lesões corporais, ameaça e injúria.",
    services: [
      "Defesa em crimes de lesão corporal",
      "Defesa em crimes de ameaça e injúria",
      "Mediação e conciliação"
    ]
  },
  {
    icon: DollarSign,
    title: "Crimes Econômicos e Empresariais",
    description: "Defesa em crimes financeiros, sonegação fiscal, lavagem de dinheiro e crimes empresariais.",
    services: [
      "Crimes contra a ordem tributária",
      "Lavagem de dinheiro e crimes financeiros",
      "Crimes empresariais e societários"
    ]
  },
  {
    icon: Laptop,
    title: "Crimes Cibernéticos",
    description: "Especialização em crimes digitais, como invasão de sistemas, crimes na internet e LGPD.",
    services: [
      "Invasão de sistemas e dispositivos",
      "Crimes na internet e redes sociais",
      "Proteção de dados (LGPD)"
    ]
  },
  {
    icon: Scale,
    title: "Tráfico de Drogas",
    title: "Tráfico de Drogas",
    description: "Defesa especializada em crimes relacionados ao tráfico e posse de drogas.",
    services: [
      "Defesa em crimes de tráfico de drogas",
      "Defesa em posse para consumo pessoal",
      "Negociação de colaboração premiada"
    ]
  },
  {
    icon: FileText,
    title: "Execução Penal",
    description: "Acompanhamento e defesa em processos de execução penal, livramento condicional e progressão.",
    services: [
      "Progressão de regime prisional",
      "Livramento condicional e remição",
      "Defesa em crimes hediondos"
    ]
  }
];

export default function PracticeAreas() {
  return (
    <section id="areas" className="py-20 bg-cor-neutra">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-serif text-4xl font-bold mb-6 text-cor-primaria" data-testid="text-areas-title">
            Áreas de Atuação
          </h2>
          <p className="text-xl text-cor-texto max-w-3xl mx-auto" data-testid="text-areas-description">
            Especialização completa em Direito Penal para atender todas as demandas de defesa criminal
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div
                key={area.title}
                className="bg-cor-secundaria p-8 rounded-xl border border-cor-primaria/20 hover:border-cor-primaria hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                data-testid={`card-area-${index}`}
              >
                <div className="w-16 h-16 bg-cor-primaria/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cor-primaria/20 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-cor-texto-inverso" />
                </div>
                
                <h3 className="font-serif text-2xl font-bold mb-4 text-cor-texto group-hover:text-cor-primaria transition-colors duration-300">
                  {area.title}
                </h3>
                
                <p className="text-cor-texto leading-relaxed mb-4">
                  {area.description}
                </p>
                
                <ul className="text-cor-texto space-y-2">
                  {area.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center" data-testid={`service-${index}-${serviceIndex}`}>
                      <svg className="w-4 h-4 text-cor-primaria mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}