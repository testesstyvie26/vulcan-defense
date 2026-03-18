import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, BarChart3, Lock, AlertCircle, CheckCircle2, Eye, Cpu, Network } from "lucide-react";
import { Link } from "wouter";

export default function Platform() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/">
            <a className="font-bold text-lg hover:text-blue-300 transition">
              <span className="text-white">VULCAN</span>
              <span className="text-blue-400"> DEFENSE</span>
            </a>
          </Link>
          <Link href="/">
            <a className="text-sm font-medium hover:text-blue-300 transition">← Voltar</a>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 border-b border-border bg-gradient-to-b from-blue-500/5 to-transparent">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30">
                <span className="text-sm font-semibold text-blue-300">PLATAFORMA SAAS</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Proteção Inteligente de Endpoints
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Detecção em tempo real, resposta automática e visibilidade completa de vulnerabilidades. A plataforma Vulcan Defense oferece proteção de enterprise para organizações de qualquer tamanho.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
                  Solicitar Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" className="border-blue-500/50 text-blue-300 hover:bg-blue-500/10 font-semibold py-3 px-8 rounded-lg">
                  Documentação
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-lg p-8 border border-blue-500/30 backdrop-blur">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded bg-blue-500/10 border border-blue-500/20">
                    <Shield className="w-5 h-5 text-blue-400" />
                    <span className="text-sm">Proteção em Tempo Real</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded bg-blue-500/10 border border-blue-500/20">
                    <AlertCircle className="w-5 h-5 text-blue-400" />
                    <span className="text-sm">Detecção de Vulnerabilidades</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded bg-blue-500/10 border border-blue-500/20">
                    <Zap className="w-5 h-5 text-blue-400" />
                    <span className="text-sm">Resposta Automática</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded bg-blue-500/10 border border-blue-500/20">
                    <BarChart3 className="w-5 h-5 text-blue-400" />
                    <span className="text-sm">Dashboard Avançado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 md:py-24 border-b border-border">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Recursos Principais</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tudo que você precisa para proteger sua infraestrutura de endpoints
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 rounded-lg bg-card border border-border hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <Eye className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Visibilidade Completa</h3>
              <p className="text-muted-foreground">
                Monitore todos os endpoints em tempo real com agentes leves que não impactam performance. Visibilidade de processos, conexões de rede e atividades suspeitas.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-lg bg-card border border-border hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <AlertCircle className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Detecção de Vulnerabilidades</h3>
              <p className="text-muted-foreground">
                Identifique automaticamente vulnerabilidades em sistemas operacionais, aplicações e configurações. Priorização por risco e exploitabilidade.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-lg bg-card border border-border hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <Zap className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Resposta Automática</h3>
              <p className="text-muted-foreground">
                Responda automaticamente a ameaças com playbooks customizáveis. Isole endpoints, bloqueie processos e remova malware em segundos.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 rounded-lg bg-card border border-border hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <BarChart3 className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Dashboard Inteligente</h3>
              <p className="text-muted-foreground">
                Analise dados com dashboards customizáveis. Relatórios em tempo real, alertas inteligentes e insights acionáveis para sua equipe.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-6 rounded-lg bg-card border border-border hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <Lock className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Conformidade Regulatória</h3>
              <p className="text-muted-foreground">
                Atenda requisitos de LGPD, ISO 27001, PCI-DSS e outras normas. Logs de auditoria completos e rastreabilidade de todas as ações.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-6 rounded-lg bg-card border border-border hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <Network className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Integração Nativa</h3>
              <p className="text-muted-foreground">
                Integre com suas ferramentas existentes: SIEM, SOC, plataformas de cloud e sistemas de ticketing. APIs abertas e webhooks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-24 border-b border-border bg-gradient-to-b from-blue-500/5 to-transparent">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Como Funciona</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Arquitetura simples e poderosa para proteção de endpoints
            </p>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-lg p-8 border border-blue-500/30">
                  <Cpu className="w-16 h-16 text-blue-400 mb-4" />
                  <p className="text-muted-foreground">
                    Agentes leves instalados em cada endpoint coletam dados de segurança em tempo real
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="space-y-4">
                  <div className="inline-block px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30">
                    <span className="text-sm font-semibold text-blue-300">PASSO 1</span>
                  </div>
                  <h3 className="text-2xl font-bold">Coleta de Dados</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Nossos agentes monitoram processos, conexões de rede, arquivos, registros do sistema e atividades de usuários. Coleta leve e eficiente sem impacto em performance.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="space-y-4">
                  <div className="inline-block px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30">
                    <span className="text-sm font-semibold text-blue-300">PASSO 2</span>
                  </div>
                  <h3 className="text-2xl font-bold">Análise Inteligente</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Machine Learning e análise comportamental identificam anomalias e ameaças. Correlação de eventos para detectar padrões de ataque sofisticados.
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-lg p-8 border border-blue-500/30">
                  <AlertCircle className="w-16 h-16 text-blue-400 mb-4" />
                  <p className="text-muted-foreground">
                    Análise em tempo real com inteligência artificial para detecção de ameaças zero-day
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-lg p-8 border border-blue-500/30">
                  <Zap className="w-16 h-16 text-blue-400 mb-4" />
                  <p className="text-muted-foreground">
                    Resposta automática em segundos com playbooks customizáveis
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="space-y-4">
                  <div className="inline-block px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30">
                    <span className="text-sm font-semibold text-blue-300">PASSO 3</span>
                  </div>
                  <h3 className="text-2xl font-bold">Resposta Automática</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ao detectar uma ameaça, a plataforma executa automaticamente ações de remediação: isolar endpoint, bloquear processo, remover malware ou alertar equipe.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="space-y-4">
                  <div className="inline-block px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30">
                    <span className="text-sm font-semibold text-blue-300">PASSO 4</span>
                  </div>
                  <h3 className="text-2xl font-bold">Visibilidade & Relatórios</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Dashboard centralizado mostra status de todos os endpoints, vulnerabilidades, alertas e histórico de incidentes. Relatórios para compliance e auditoria.
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-lg p-8 border border-blue-500/30">
                  <BarChart3 className="w-16 h-16 text-blue-400 mb-4" />
                  <p className="text-muted-foreground">
                    Visualize tudo em um único dashboard com relatórios customizáveis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="py-20 md:py-24 border-b border-border">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Plataformas Suportadas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Compatível com os principais sistemas operacionais e ambientes
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Windows", versions: "10, 11, Server 2016+" },
              { name: "Linux", versions: "Ubuntu, CentOS, Debian, RHEL" },
              { name: "macOS", versions: "10.15+" },
              { name: "Cloud", versions: "AWS, Azure, GCP" },
            ].map((platform, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-card border border-border text-center hover:border-blue-500/50 transition-all">
                <h3 className="text-lg font-bold mb-2">{platform.name}</h3>
                <p className="text-sm text-muted-foreground">{platform.versions}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 md:py-24 border-b border-border bg-gradient-to-b from-blue-500/5 to-transparent">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Planos de Preço</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Escolha o plano ideal para sua organização
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="p-8 rounded-lg bg-card border border-border hover:border-blue-500/50 transition-all">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <p className="text-muted-foreground mb-6">Para pequenas equipes</p>
              <div className="text-3xl font-bold mb-6">
                A partir de <span className="text-blue-400">R$ 299</span>/mês
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  <span>Até 50 endpoints</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  <span>Detecção básica</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  <span>Dashboard</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  <span>Suporte por email</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full border-blue-500/50 text-blue-300 hover:bg-blue-500/10">
                Começar Agora
              </Button>
            </div>

            {/* Professional */}
            <div className="p-8 rounded-lg bg-card border-2 border-blue-500/50 hover:border-blue-500 transition-all relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full bg-blue-600 text-white text-sm font-semibold">
                Mais Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <p className="text-muted-foreground mb-6">Para empresas em crescimento</p>
              <div className="text-3xl font-bold mb-6">
                A partir de <span className="text-blue-400">R$ 999</span>/mês
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  <span>Até 500 endpoints</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  <span>Detecção avançada com IA</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  <span>Resposta automática</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  <span>Suporte 24/7</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  <span>Integração com SIEM</span>
                </li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                Começar Agora
              </Button>
            </div>

            {/* Enterprise */}
            <div className="p-8 rounded-lg bg-card border border-border hover:border-blue-500/50 transition-all">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-muted-foreground mb-6">Para grandes organizações</p>
              <div className="text-3xl font-bold mb-6">
                <span className="text-blue-400">Customizado</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  <span>Endpoints ilimitados</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  <span>Detecção enterprise</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  <span>Resposta automática avançada</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  <span>Suporte dedicado</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  <span>On-premise ou cloud</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full border-blue-500/50 text-blue-300 hover:bg-blue-500/10">
                Falar com Vendas
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 border-b border-border">
        <div className="container max-w-4xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Comece a Proteger Seus Endpoints Hoje
          </h2>
          <p className="text-lg text-muted-foreground">
            Solicite uma demo gratuita e veja como a Vulcan Defense pode transformar sua segurança
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
              Solicitar Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" className="border-blue-500/50 text-blue-300 hover:bg-blue-500/10 font-semibold py-3 px-8 rounded-lg">
              Documentação
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-12">
        <div className="container">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2026 Vulcan Defense. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
