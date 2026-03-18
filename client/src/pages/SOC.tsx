import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Eye, Zap, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import ContactFormModal from "@/components/ContactFormModal";

export default function SOC() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

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
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container max-w-4xl">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 rounded-lg border border-blue-500/50 bg-blue-500/10">
              <span className="text-sm font-semibold text-blue-300">SERVIÇO ESPECIALIZADO</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              SOC as a Service
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Centro de Operações de Segurança gerenciado, com monitoramento 24x7x365, detecção avançada de ameaças e resposta em tempo real para proteger sua infraestrutura crítica.
            </p>
          </div>
        </div>
      </section>

      {/* Dor do Cliente */}
      <section className="py-16 md:py-20 border-b border-border">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">O Desafio</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-card border border-border">
              <Eye className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Falta de Visibilidade</h3>
              <p className="text-muted-foreground">
                Sem monitoramento contínuo, ameaças passam despercebidas por horas ou dias.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border">
              <Zap className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Resposta Lenta</h3>
              <p className="text-muted-foreground">
                Tempo de resposta elevado aumenta o impacto de incidentes de segurança.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border">
              <Shield className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Recursos Limitados</h3>
              <p className="text-muted-foreground">
                Equipes internas pequenas não conseguem cobrir 24x7 e manter expertise atualizada.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border">
              <CheckCircle className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Conformidade</h3>
              <p className="text-muted-foreground">
                Regulamentações exigem monitoramento contínuo e documentação de incidentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Atuamos */}
      <section className="py-16 md:py-20 border-b border-border">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Como a Vulcan Defense Atua</h2>
          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-card border border-blue-500/30 hover:border-blue-500/60 transition">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <span className="font-bold text-blue-400">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Coleta Contínua de Dados</h3>
                  <p className="text-muted-foreground">
                    Integração com seus sistemas de logs, firewalls, servidores e endpoints para visibilidade total.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-lg bg-card border border-blue-500/30 hover:border-blue-500/60 transition">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <span className="font-bold text-blue-400">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Análise Avançada com IA</h3>
                  <p className="text-muted-foreground">
                    Machine Learning e correlação de eventos para identificar padrões de ataque complexos.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-lg bg-card border border-blue-500/30 hover:border-blue-500/60 transition">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <span className="font-bold text-blue-400">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Resposta Imediata</h3>
                  <p className="text-muted-foreground">
                    Alertas em tempo real, investigação forense e ações de contenção automáticas.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-lg bg-card border border-blue-500/30 hover:border-blue-500/60 transition">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <span className="font-bold text-blue-400">4</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Relatórios e Conformidade</h3>
                  <p className="text-muted-foreground">
                    Documentação completa de incidentes, métricas de segurança e relatórios regulatórios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que Está Incluído */}
      <section className="py-16 md:py-20 border-b border-border">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">O que Está Incluído</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Monitoramento 24x7x365",
              "SIEM avançado (Splunk, ELK, etc)",
              "Análise de comportamento de usuários (UEBA)",
              "Threat Intelligence integrada",
              "Alertas em tempo real",
              "Investigação forense",
              "Playbooks de resposta",
              "Relatórios mensais de segurança",
              "Treinamento da equipe",
              "Suporte técnico dedicado",
              "Integração com ferramentas existentes",
              "Conformidade com regulamentações"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover:border-blue-500/50 transition">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por Que É Essencial */}
      <section className="py-16 md:py-20 border-b border-border">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Por Que É Essencial</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              <strong className="text-white">Detecção Precoce:</strong> Identificar ameaças nos primeiros minutos reduz drasticamente o impacto de ataques.
            </p>
            <p>
              <strong className="text-white">Resposta Rápida:</strong> Tempo é crítico. Nossa equipe age em minutos, não horas.
            </p>
            <p>
              <strong className="text-white">Conformidade Garantida:</strong> Atenda regulamentações como LGPD, ISO 27001 e PCI-DSS com documentação completa.
            </p>
            <p>
              <strong className="text-white">Redução de Custos:</strong> Evite investimentos em infraestrutura e pessoal especializado.
            </p>
            <p>
              <strong className="text-white">Tranquilidade:</strong> Deixe a segurança com especialistas enquanto você foca no negócio.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-500/10 to-transparent">
        <div className="container max-w-4xl text-center space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proteja Sua Infraestrutura Crítica
            </h2>
            <p className="text-lg text-muted-foreground">
              Solicite uma avaliação gratuita e descubra como o SOC as a Service da Vulcan Defense pode proteger seu negócio.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => setContactModalOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
              Solicitar Diagnóstico
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button onClick={() => setContactModalOpen(true)} className="bg-transparent border border-blue-500/50 text-blue-300 hover:bg-blue-500/10 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
              Falar com Especialista
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

      {/* Contact Form Modal */}
      <ContactFormModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        title="Solicitar Diagnóstico - SOC as a Service"
        subtitle="Preencha o formulário abaixo e entraremos em contato em breve."
      />
    </div>
  );
}
