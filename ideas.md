# Brainstorm de Design - Vulcan Defense

## Abordagem Selecionada: Cybersecurity Fortress - Minimalismo Técnico com Poder Visual

### Design Movement
**Cyberpunk Corporativo** - Inspirado em interfaces de SOC (Security Operations Center), combinando a estética futurista de dashboards de segurança com elegância corporativa. Referência: Vortex Security, Clavis, IT4Us e RedBelt.

### Core Principles
1. **Confiança através da Clareza**: Tipografia limpa e hierarquia visual forte para comunicar expertise
2. **Profundidade Técnica Visual**: Uso estratégico de cores neon (azul/verde) em fundo escuro para evocar monitoramento em tempo real
3. **Minimalismo Funcional**: Espaço em branco generoso, sem distrações, focado em mensagem de valor
4. **Modernidade Sóbria**: Sem excessos, mas com detalhes sofisticados que demonstram atenção ao detalhe

### Color Philosophy
- **Fundo Principal**: `#0F1419` (Preto profundo com toque de azul) - evoca segurança, confiança, ambiente de SOC
- **Primário Ativo**: `#0066FF` (Azul vibrante) - energia, tecnologia, ação - usado em CTAs e destaques
- **Secundário Técnico**: `#00D9FF` (Ciano/Turquesa) - monitoramento, vigilância, tecnologia avançada
- **Destaque de Sucesso**: `#00FF88` (Verde neon) - operações bem-sucedidas, status positivo
- **Texto Principal**: `#F5F7FA` (Branco com toque de azul) - legibilidade sem dureza
- **Texto Secundário**: `#A0AEC0` (Cinza azulado) - informações complementares

**Intenção Emocional**: Transmitir segurança, expertise técnica, vigilância constante e confiabilidade através de uma paleta que remete a centros de operações de segurança profissionais.

### Layout Paradigm
- **Hero Assimétrico**: Texto grande e impactante à esquerda, visual técnico/ilustração à direita
- **Seções em Blocos**: Cada serviço/funcionalidade em card com ícone, título e descrição
- **Gradientes Direcionais**: Uso sutil de gradientes para guiar o olhar (de cima para baixo, esquerda para direita)
- **Divisores Técnicos**: Linhas e formas geométricas para separar seções, remetendo a interfaces técnicas

### Signature Elements
1. **Badge de Operação**: Pequeno elemento com ícone + texto em canto superior (ex: "Operação ativa", "24x7x365")
2. **Ícones Técnicos**: Símbolos de escudo, radar, engrenagem, rede - minimalistas e geométricos
3. **Linhas Decorativas**: Linhas finas em cores neon que conectam elementos, criando sensação de rede/fluxo

### Interaction Philosophy
- **Hover Elevado**: Botões e cards ganham sombra azul/ciano ao passar o mouse
- **Transições Suaves**: Animações de fade-in e slide-up ao carregar seções
- **Feedback Visual**: Cores neon piscam levemente em elementos interativos
- **Responsividade**: Tudo funciona perfeitamente em mobile, com navegação colapsável

### Animation
- **Entrada de Página**: Fade-in suave do hero (300ms)
- **Cards de Serviços**: Slide-up com delay escalonado (100ms entre cada)
- **Hover de Botões**: Mudança de cor + sombra azul (150ms)
- **Scroll Reveal**: Elementos aparecem conforme usuário faz scroll (usando Intersection Observer)
- **Pulsação Sutil**: Ícones técnicos pulsam levemente para evocar monitoramento ativo

### Typography System
- **Display/Headings**: `Poppins Bold` (700) ou `Outfit Bold` - moderno, técnico, impactante
  - H1: 48px (desktop), 32px (mobile)
  - H2: 36px (desktop), 24px (mobile)
  - H3: 24px (desktop), 18px (mobile)
- **Body/Descrições**: `Inter Regular` (400) - legibilidade excelente
  - Tamanho: 16px (desktop), 14px (mobile)
  - Line-height: 1.6
- **Pequenos Textos/Badges**: `Inter Medium` (500) - 12px
- **CTA/Botões**: `Poppins SemiBold` (600) - 14px

**Hierarquia**: Bold headings em Poppins criam impacto; Inter body garante leitura confortável. Contraste entre fontes reforça estrutura.

---

## Estrutura de Páginas

### Home (Landing Page)
1. **Header/Navbar**: Logo + Menu (Início, Quem Somos, O Que Fazemos, Clientes, Contato) + CTA "Solicitar Diagnóstico"
2. **Hero Section**: Título grande + Subtítulo + Dois botões (Conheça os serviços / Ver plataforma) + Visão da Operação (card com 3 pilares: Detecção, Resposta, Resiliência)
3. **Stats Section**: 4 métricas (24x7x365, NOC+SOC, MDR/XDR, GRC)
4. **Serviços**: Grid com 6+ serviços (Monitoramento, Resposta a Incidentes, etc.)
5. **Pilares de Atuação**: Seção descritiva com abordagem consultiva
6. **Clientes/Parceiros**: Logo carousel
7. **Casos de Sucesso**: Cards com histórias de clientes
8. **CTA Final**: "Vamos cuidar da segurança de sua empresa"
9. **Footer**: Links, contato, redes sociais

### Páginas Secundárias (Placeholders)
- Quem Somos
- Serviços (detalhado)
- Contato
