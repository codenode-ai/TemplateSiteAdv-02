export default function LawyerProfile() {
  return (
    <section id="advogada" className="py-20 bg-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="font-serif text-4xl font-bold mb-6 text-golden" data-testid="text-lawyer-title">
              A Advogada
            </h2>
            
            <h3 className="font-serif text-2xl font-semibold mb-4 text-white" data-testid="text-lawyer-name">
              Dra. Camila Lopes da Silva
            </h3>
            
            <p className="text-lg text-light-gray mb-6 leading-relaxed" data-testid="text-lawyer-bio-1">
              Advogada penal com mais de 10 anos de atuação. Formação na UFSC e especializações em Penal, Processo Penal e Compliance.
            </p>
            
            <p className="text-lg text-light-gray mb-6 leading-relaxed" data-testid="text-lawyer-bio-2">
              Reconhecida por sua atuação estratégica e humanizada na defesa dos direitos de seus clientes, Dra. Camila combina conhecimento técnico profundo com uma abordagem empática no atendimento.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-graphite p-6 rounded-lg" data-testid="card-education">
                <h4 className="font-semibold text-golden mb-2">Formação Acadêmica</h4>
                <ul className="text-light-gray space-y-1 text-sm">
                  <li>• Graduação em Direito - UFSC</li>
                  <li>• Pós-graduação em Direito Penal e Processual Penal</li>
                </ul>
              </div>
              
              <div className="bg-graphite p-6 rounded-lg" data-testid="card-specializations">
                <h4 className="font-semibold text-golden mb-2">Especializações</h4>
                <ul className="text-light-gray space-y-1 text-sm">
                  <li>• Tribunal do Júri</li>
                  <li>• Crimes Econômicos</li>
                  <li>• Crimes Cibernéticos</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <span className="px-4 py-2 bg-golden/10 text-golden rounded-full text-sm border border-golden/20" data-testid="badge-oab">
                OAB/SC 67890
              </span>
              <span className="px-4 py-2 bg-golden/10 text-golden rounded-full text-sm border border-golden/20" data-testid="badge-experience">
                10+ Anos de Experiência
              </span>
              <span className="px-4 py-2 bg-golden/10 text-golden rounded-full text-sm border border-golden/20" data-testid="badge-cases">
                150+ Casos Bem-sucedidos
              </span>
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative group mb-8">
              <img
                src="/Dra. Camila Lopes.jpg"
                alt="Dra. Camila Lopes da Silva - Advogada"
                className="rounded-xl shadow-2xl w-full h-auto group-hover:scale-105 transition-transform duration-500"
                data-testid="img-lawyer-portrait"
              />
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-golden transition-all duration-500"></div>
              
              {/* Achievements Badge - positioned on the image */}
              <div className="absolute -bottom-4 -right-4 bg-dark-gray p-4 rounded-xl border border-golden/20 shadow-2xl" data-testid="card-achievement">
                <div className="text-center">
                  <div className="text-2xl font-bold text-golden">10+</div>
                  <div className="text-xs text-light-gray">Anos de</div>
                  <div className="text-xs text-light-gray">Experiência</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}