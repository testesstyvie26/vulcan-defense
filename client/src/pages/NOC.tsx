import { useState } from "react";
import ContactFormModal from "@/components/ContactFormModal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, TrendingUp, AlertCircle, CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function NOC() {
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
              NOC + Observabilidade
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Centro de Operações de Rede gerenciado com observabilidade completa, monitoramento de performance e garantia de disponibilidade 24x7.
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
              <Activity className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Falta de Observabilidade</h3>
              <p className="text-muted-foreground">
                Sem visibilidade completa, problemas de performance passam despercebidos.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border">
              <TrendingUp className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Downtime Inesperado</h3>
              <p className="text-muted-foreground">
                Falhas de infraestrutura causam impacto direto no negócio e receita.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border">
              <AlertCircle className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Alertas Desorganizados</h3>
              <p className="text-muted-foreground">
                Muitos alertas falsos causam "alert fatigue" e perda de foco nos reais problemas.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border">
              <CheckCircle className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Escalabilidade</h3>
              <p className="text-muted-foreground">
                Infraestrutura cresce, mas monitoramento não acompanha a complexidade.
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
                  <h3 className="text-lg font-semibold mb-2">Instrumentação Completa</h3>
                  <p className="text-muted-foreground">
                    Implementamos coleta de métricas, logs e traces de toda sua infraestrutura.
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
                  <h3 className="text-lg font-semibold mb-2">Dashboards Inteligentes</h3>
                  <p className="text-muted-foreground">
                    Visualização em tempo real com alertas contextualizados e correlação de eventos.
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
                  <h3 className="text-lg font-semibold mb-2">Resposta Proativa</h3>
                  <p className="text-muted-foreground">
                    Identificamos problemas antes que afetem usuários finais.
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
                  <h3 className="text-lg font-semibold mb-2">Otimização Contínua</h3>
                  <p className="text-muted-foreground">
                    Análise de performance e recomendações para melhorar eficiência.
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
              "Monitoramento de infraestrutura 24x7",
              "Coleta de métricas (CPU, memória, disco, rede)",
              "Monitoramento de aplicações (APM)",
              "Logs centralizados e análise",
              "Distributed tracing",
              "Alertas inteligentes e correlacionados",
              "Dashboards customizados",
              "Relatórios de performance",
              "Análise de capacidade",
              "Planejamento de crescimento",
              "Integração com ferramentas existentes",
              "Suporte técnico 24x7"
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
              <strong className="text-white">Disponibilidade Garantida:</strong> Monitoramento proativo previne downtime e garante SLAs.
            </p>
            <p>
              <strong className="text-white">Performance Otimizada:</strong> Identificar gargalos melhora experiência do usuário e conversão.
            </p>
            <p>
              <strong className="text-white">Redução de Custos:</strong> Evite desperdício de recursos e otimize infraestrutura.
            </p>
            <p>
              <strong className="text-white">Escalabilidade Planejada:</strong> Crescimento sem surpresas ou crises de capacidade.
            </p>
            <p>
              <strong className="text-white">Decisões Baseadas em Dados:</strong> Métricas reais para planejamento estratégico de TI.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-500/10 to-transparent">
        <div className="container max-w-4xl text-center space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Garanta Disponibilidade e Performance
            </h2>
            <p className="text-lg text-muted-foreground">
              Solicite uma avaliação gratuita e descubra como o NOC + Observabilidade pode transformar sua infraestrutura.
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
        title="Solicitar Diagnóstico"
        subtitle="Preencha o formulário abaixo e entraremos em contato em breve."
      />
    </div>
  );
}
