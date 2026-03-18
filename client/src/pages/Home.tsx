import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Shield,
  Radar,
  Zap,
  Lock,
  Eye,
  AlertTriangle,
  CheckCircle,
  Cpu,
  Network,
  BarChart3,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

/**
 * Vulcan Defense - Home Page
 * 
 * Design Philosophy: Cybersecurity Fortress - Minimalismo Técnico com Poder Visual
 * - Tema escuro profissional (#0F1419) com ouro (#FFD700) como cor primária
 * - Tipografia: Poppins Bold para headings, Inter para body
 * - Layout assimétrico com hero impactante
 * - Animações suaves e efeitos de glow para elementos técnicos
 */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const logoUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663453062847/HMVD65vEkJhyp67D4pXp6P/WhatsAppImage2026-03-18at12.21.18_a91a77ba.jpeg';

  const services = [
    {
      icon: Radar,
      title: "Monitoramento 24x7x365",
      description: "Vigilância contínua com SIEM avançado e análise de comportamento de usuários",
    },
    {
      icon: Zap,
      title: "Resposta a Incidentes",
      description: "Ações rápidas, playbooks automatizados e contenção em tempo real",
    },
    {
      icon: Cpu,
      title: "Orquestração e Automação",
      description: "SOAR integrado para remediar, bloquear e parar ataques validados",
    },
    {
      icon: Eye,
      title: "Inteligência de IA",
      description: "Machine Learning, UEBA e IA para enriquecer detecção e resposta",
    },
    {
      icon: Lock,
      title: "Gestão de Vulnerabilidades",
      description: "Identificação, análise e plano de melhoria contínua",
    },
    {
      icon: AlertTriangle,
      title: "Threat Intelligence",
      description: "Monitoramento de Dark/Deep Web e integração de ameaças",
    },
  ];

  const pillars = [
    {
      title: "Detecção",
      description:
        "Coleta, correlação e visibilidade técnica para identificar sinais reais de ameaça em tempo hábil.",
      icon: Eye,
    },
    {
      title: "Resposta",
      description:
        "Ações rápidas, playbooks, automação e contenção para reduzir impacto operacional e reputacional.",
      icon: Zap,
    },
    {
      title: "Resiliência",
      description:
        "Governança, processos e melhoria contínua para fortalecer a capacidade de reação do negócio.",
      icon: Shield,
    },
  ];

  const stats = [
    { label: "Monitoramento", value: "24x7x365" },
    { label: "Operação", value: "NOC + SOC" },
    { label: "Resposta", value: "MDR / XDR" },
    { label: "Governança", value: "GRC" },
  ];

  const clients = [
    "Claro",
    "TIM",
    "Livraria Saraiva",
    "Banco XYZ",
    "Empresa Tech",
    "Indústria ABC",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header/Navbar */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="Vulcan Defense" className="w-10 h-10 object-contain" />
            <div className="font-bold text-lg">
              <span className="text-white">VULCAN</span>
              <span className="text-blue-400"> DEFENSE</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-sm font-medium hover:text-blue-300 transition">
              Início
            </a>
            <a href="#quem-somos" className="text-sm font-medium hover:text-blue-300 transition">
              Quem Somos
            </a>
            <a href="#servicos" className="text-sm font-medium hover:text-blue-300 transition">
              Serviços
            </a>
            <a href="#plataforma" className="text-sm font-medium hover:text-blue-300 transition">
              Plataforma
            </a>
            <a href="#clientes" className="text-sm font-medium hover:text-blue-300 transition">
              Clientes
            </a>
            <a href="#contato" className="text-sm font-medium hover:text-blue-300 transition">
              Contato
            </a>
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
              Solicitar diagnóstico
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-card rounded-lg transition"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-card">
            <nav className="container py-4 flex flex-col gap-4">
                  <a href="#inicio" className="text-sm font-medium hover:text-blue-300">
                Início
              </a>
              <a href="#quem-somos" className="text-sm font-medium hover:text-blue-300">
                Quem Somos
              </a>
              <a href="#servicos" className="text-sm font-medium hover:text-blue-300">
                Serviços
              </a>
              <a href="#plataforma" className="text-sm font-medium hover:text-blue-300">
                Plataforma
              </a>
              <a href="#clientes" className="text-sm font-medium hover:text-blue-300">
                Clientes
              </a>
              <a href="#contato" className="text-sm font-medium hover:text-blue-300">
                Contato
              </a>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-300">Solicitar diagnóstico</Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative py-20 md:py-32 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, #FFD700 0%, transparent 50%), radial-gradient(circle at 80% 80%, #FFC700 0%, transparent 50%)",
            }}
          />
        </div>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              {/* Badge */}
              <div className="badge-operation w-fit">
                <Zap className="w-3 h-3" />
                SEGURANÇA OPERACIONAL COM RESPOSTA REAL
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                A Vulcan Defense protege ambientes críticos com foco em{" "}
                <span className="text-blue-300">detecção, resposta e resiliência</span>.
              </h1>

              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed">
                Entregamos uma operação integrada de NOC, SOC, MDR e governança para empresas que
                precisam de visibilidade, controle e capacidade real de reação diante de ameaças e
                falhas operacionais.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
                Conheça os serviços
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button className="bg-transparent border border-blue-500/50 text-blue-300 hover:bg-blue-500/10 font-semibold py-2.5 px-6 rounded-lg transition-all duration-300">
                Ver plataforma
              </Button>
              </div>
            </div>

            {/* Right - Visão da Operação Card */}
            <div className="relative animate-slide-up">
              <div className="card-tech space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  <h3 className="text-sm font-semibold text-blue-300">VISÃO DA OPERAÇÃO</h3>
                </div>

                <h2 className="text-2xl font-bold">Cyber Defense Center</h2>

                {/* Pillars */}
                <div className="space-y-4">
                  {pillars.map((pillar, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <pillar.icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{pillar.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{pillar.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border bg-card/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 md:py-32">
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça as soluções que temos para a sua empresa
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="card-tech group"
                style={{
                  animationDelay: `${idx * 100}ms`,
                }}
              >
                <service.icon className="w-8 h-8 text-blue-400 mb-4 group-hover:text-blue-300 transition" />
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="tech-divider" />

      {/* Pillars Section */}
      <section id="quem-somos" className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Pilares de Atuação</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Antes de tudo, realizamos um diagnóstico, buscando conhecer a fundo a sua empresa,
              sua Tecnologia da Informação, os processos nela adotados, pontos fortes e fracos,
              necessidades e objetivos. A partir daí é que encaixamos nossa área de Operação,
              buscando atender a seus objetivos de maneira integrada com a sua equipe,
              transformando-nos parte do seu time.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {pillars.map((pillar, idx) => (
                <Card key={idx} className="bg-card border-border p-6">
                  <pillar.icon className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-3">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground">{pillar.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="tech-divider" />

      {/* Clients Section */}
      <section id="clientes" className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Nossos Clientes e Parceiros
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clients.map((client, idx) => (
              <div
                key={idx}
                className="card-tech flex items-center justify-center h-24 text-center"
              >
                <p className="font-semibold text-sm">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="tech-divider" />

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-yellow-950/20 to-background">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vamos cuidar da segurança de sua empresa.
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato com nossos especialistas para uma avaliação personalizada
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
            Solicitar diagnóstico
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Vulcan Defense</h4>
              <p className="text-sm text-muted-foreground">
                Segurança operacional com resposta real
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-blue-300 transition">
                    Monitoramento 24x7
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300 transition">
                    Resposta a Incidentes
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300 transition">
                    Gestão de Vulnerabilidades
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-blue-300 transition">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300 transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300 transition">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="tel:+5521966584646" className="hover:text-blue-300 transition">
                    (21) 9665-8464 6
                  </a>
                </li>
                <li>
                  <a href="mailto:contato@vulcandefense.com.br" className="hover:text-blue-300 transition">
                    contato@vulcandefense.com.br
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="tech-divider mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2026 Vulcan Defense. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-300 transition">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-blue-300 transition">
                Termos de Serviço
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
