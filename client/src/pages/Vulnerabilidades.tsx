import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Zap, TrendingDown, CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function Vulnerabilidades() {
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
              Gestão de Vulnerabilidades
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Identificação, priorização e remediação contínua de vulnerabilidades em sua infraestrutura com plano de melhoria integrado.
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
              <Target className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Descoberta Incompleta</h3>
              <p className="text-muted-foreground">
                Vulnerabilidades não identificadas viram portas abertas para ataques.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border">
              <Zap className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Falta de Priorização</h3>
              <p className="text-muted-foreground">
                Sem contexto, é difícil saber quais vulnerabilidades corrigir primeiro.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border">
              <TrendingDown className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Remediação Lenta</h3>
              <p className="text-muted-foreground">
                Processo manual de correção deixa janelas de exposição muito longas.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border">
              <CheckCircle className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Falta de Visibilidade</h3>
              <p className="text-muted-foreground">
                Sem rastreamento, não há como medir progresso de remediação.
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
                  <h3 className="text-lg font-semibold mb-2">Scanning Contínuo</h3>
                  <p className="text-muted-foreground">
                    Varredura automática de toda infraestrutura com ferramentas especializadas.
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
                  <h3 className="text-lg font-semibold mb-2">Análise e Priorização</h3>
                  <p className="text-muted-foreground">
                    Classificação por criticidade, exploitabilidade e contexto de negócio.
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
                  <h3 className="text-lg font-semibold mb-2">Plano de Remediação</h3>
                  <p className="text-muted-foreground">
                    Roadmap claro com prazos realistas e coordenação com sua equipe.
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
                  <h3 className="text-lg font-semibold mb-2">Validação e Rastreamento</h3>
                  <p className="text-muted-foreground">
                    Verificação de correções e dashboard de progresso em tempo real.
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
              "Scanning de vulnerabilidades contínuo",
              "Análise de aplicações web",
              "Scanning de infraestrutura",
              "Análise de configurações",
              "Testes de penetração",
              "Priorização por risco",
              "Plano de remediação",
              "Validação de correções",
              "Dashboard de progresso",
              "Relatórios executivos",
              "Treinamento de equipe",
              "Suporte técnico especializado"
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
              <strong className="text-white">Reduz Superfície de Ataque:</strong> Menos vulnerabilidades = menos oportunidades para hackers.
            </p>
            <p>
              <strong className="text-white">Conformidade Regulatória:</strong> Atenda requisitos de PCI-DSS, LGPD, ISO 27001 e outras normas.
            </p>
            <p>
              <strong className="text-white">Planejamento Eficiente:</strong> Saiba exatamente o que corrigir e em qual ordem.
            </p>
            <p>
              <strong className="text-white">Redução de Riscos:</strong> Diminua probabilidade de breaches e incidentes.
            </p>
            <p>
              <strong className="text-white">Melhoria Contínua:</strong> Processo cíclico que mantém sua segurança sempre atualizada.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-500/10 to-transparent">
        <div className="container max-w-4xl text-center space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Elimine Vulnerabilidades Antes que Virem Problemas
            </h2>
            <p className="text-lg text-muted-foreground">
              Solicite uma avaliação gratuita e descubra quantas vulnerabilidades sua infraestrutura pode ter.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
              Solicitar Diagnóstico
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button className="bg-transparent border border-blue-500/50 text-blue-300 hover:bg-blue-500/10 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
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
    </div>
  );
}
