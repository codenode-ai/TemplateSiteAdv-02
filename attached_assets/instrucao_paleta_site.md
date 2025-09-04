# Instruções para Aplicação da Paleta de Cores no Site

## Paleta de Cores
- **#2A364C** → Azul escuro (cor de destaque/acento)
- **#A17D6D** → Bege médio (cor secundária)
- **#D2BEB0** → Bege claro (cor base/neutra)

---

## 1. Regra 60-30-10
Seguindo a regra de design **60-30-10**:
- **60% (cor dominante):** #D2BEB0 — fundo principal do site, áreas extensas de conteúdo, seções de texto.
- **30% (cor secundária):** #A17D6D — cartões de serviço, blocos de seção, barras intermediárias, elementos de apoio.
- **10% (cor de destaque):** #2A364C — botões de CTA, links, cabeçalho, rodapé e títulos importantes.

---

## 2. Aplicação no Layout
- **Cabeçalho e rodapé:** fundo em #2A364C, texto em branco ou #D2BEB0.
- **Plano de fundo geral:** #D2BEB0 para reduzir fadiga visual.
- **Seções e cartões:** #A17D6D para criar contraste e hierarquia visual.
- **Botões e CTAs:** usar #2A364C com texto em #D2BEB0 (principal). Versão secundária: fundo #A17D6D e texto #2A364C.
- **Texto:** corpo em #2A364C ou cinza escuro; textos sobre fundo escuro devem usar #D2BEB0 ou branco.
- **Hover em botões:** tons mais claros ou escuros das cores base para indicar interatividade.
- **Campos de formulário:** fundo #D2BEB0 ou branco, borda em #A17D6D, botão de envio seguindo padrão de CTA.

---

## 3. Implementação em CSS
```css
:root {
  --cor-primaria: #2A364C;      /* destaque/cta */
  --cor-secundaria: #A17D6D;    /* blocos e seções */
  --cor-neutra: #D2BEB0;        /* fundo base */
  --cor-texto: #2A364C;
  --cor-texto-inverso: #FFFFFF;
}

body {
  background-color: var(--cor-neutra);
  color: var(--cor-texto);
  font-family: 'Inter', sans-serif;
}

header, footer {
  background-color: var(--cor-primaria);
  color: var(--cor-neutra);
}

.section--alternada {
  background-color: var(--cor-secundaria);
  color: var(--cor-primaria);
}

.btn-primary {
  background-color: var(--cor-primaria);
  color: var(--cor-neutra);
  border: none;
}
.btn-primary:hover {
  background-color: #1f293a; /* tom mais escuro */
}

.btn-secondary {
  background-color: var(--cor-secundaria);
  color: var(--cor-primaria);
  border: none;
}
.btn-secondary:hover {
  background-color: #8a6a5d; /* tom mais escuro */
}
```

---

## 4. Harmonia e Contraste
- Manter a proporção 60-30-10 para equilíbrio visual.
- Usar #3A465C em elementos de foco para guiar o olhar.
- Garantir contraste mínimo 4,5:1 entre texto e fundo conforme WCAG.
