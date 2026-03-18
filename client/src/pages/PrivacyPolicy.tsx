import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function PrivacyPolicy() {
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
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Política de Privacidade
            </h1>
            <p className="text-lg text-muted-foreground">
              Última atualização: 18 de março de 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-20">
        <div className="container max-w-4xl space-y-12">
          {/* Introduction */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">1. Introdução</h2>
            <p className="text-muted-foreground leading-relaxed">
              A Vulcan Defense ("Nós", "Nossa", "Empresa") está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e salvaguardamos suas informações quando você visita nosso site vulcandefense.com.br e utiliza nossos serviços de segurança cibernética.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Leia esta política de privacidade cuidadosamente. Se você não concordar com nossas políticas e práticas, por favor, não use nossos serviços. Ao acessar e usar nosso site, você aceita estar vinculado aos termos desta Política de Privacidade.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">2. Informações que Coletamos</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">2.1 Informações Fornecidas Diretamente por Você</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Coletamos informações que você nos fornece voluntariamente, incluindo:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                  <li>Nome completo e informações de contato (email, telefone, endereço)</li>
                  <li>Informações da empresa (nome, CNPJ, setor, tamanho)</li>
                  <li>Dados de autenticação (nome de usuário, senha, tokens de segurança)</li>
                  <li>Informações de pagamento (dados de cartão, fatura, histórico de transações)</li>
                  <li>Conteúdo de comunicações (emails, mensagens de suporte, feedback)</li>
                  <li>Preferências e configurações de conta</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">2.2 Informações Coletadas Automaticamente</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Quando você acessa nosso site, coletamos automaticamente:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                  <li>Dados de navegação (páginas visitadas, tempo gasto, cliques)</li>
                  <li>Informações do dispositivo (tipo, sistema operacional, navegador, IP)</li>
                  <li>Localização aproximada (baseada em IP)</li>
                  <li>Cookies e tecnologias similares</li>
                  <li>Dados de performance e uso do site</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">2.3 Informações de Terceiros</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Podemos receber informações sobre você de terceiros, incluindo provedores de dados, parceiros comerciais e fontes de dados públicas para fins de verificação e validação.
                </p>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">3. Como Usamos Suas Informações</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Usamos as informações coletadas para:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
              <li>Fornecer, manter e melhorar nossos serviços</li>
              <li>Processar transações e enviar informações relacionadas</li>
              <li>Enviar comunicações de marketing e atualizações (com consentimento)</li>
              <li>Responder a suas perguntas e fornecer suporte ao cliente</li>
              <li>Monitorar e analisar tendências, uso e atividades</li>
              <li>Detectar, prevenir e resolver problemas técnicos e fraudes</li>
              <li>Cumprir obrigações legais e regulatórias</li>
              <li>Personalizar sua experiência e conteúdo</li>
              <li>Conduzir pesquisas e análises para melhorar nossos serviços</li>
            </ul>
          </div>

          {/* Data Sharing */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">4. Compartilhamento de Dados</h2>
            
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de marketing direto. Podemos compartilhar informações em situações limitadas:
              </p>
              
              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-card border border-border">
                  <h4 className="font-semibold mb-2">Prestadores de Serviços</h4>
                  <p className="text-sm text-muted-foreground">
                    Compartilhamos dados com fornecedores que prestam serviços em nosso nome (hospedagem, processamento de pagamentos, suporte, análise).
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-card border border-border">
                  <h4 className="font-semibold mb-2">Conformidade Legal</h4>
                  <p className="text-sm text-muted-foreground">
                    Podemos divulgar informações quando exigido por lei, ordem judicial, ou para proteger direitos, privacidade, segurança ou propriedade.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-card border border-border">
                  <h4 className="font-semibold mb-2">Parceiros Comerciais</h4>
                  <p className="text-sm text-muted-foreground">
                    Com seu consentimento, podemos compartilhar informações com parceiros para oferecer serviços complementares.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-card border border-border">
                  <h4 className="font-semibold mb-2">Transferência de Negócio</h4>
                  <p className="text-sm text-muted-foreground">
                    Em caso de fusão, aquisição ou venda de ativos, suas informações podem ser transferidas como parte dessa transação.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Data Security */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">5. Segurança de Dados</h2>
            <p className="text-muted-foreground leading-relaxed">
              Implementamos medidas técnicas, administrativas e físicas apropriadas para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição. Essas medidas incluem:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2 mt-3">
              <li>Criptografia SSL/TLS para transmissão de dados</li>
              <li>Controle de acesso baseado em funções</li>
              <li>Firewalls e sistemas de detecção de intrusão</li>
              <li>Monitoramento contínuo de segurança</li>
              <li>Testes regulares de penetração e vulnerabilidades</li>
              <li>Conformidade com padrões de segurança internacionais (ISO 27001)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Embora implementemos medidas de segurança robustas, nenhum sistema é completamente seguro. Você é responsável por manter a confidencialidade de suas credenciais de acesso.
            </p>
          </div>

          {/* Your Rights */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">6. Seus Direitos</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              De acordo com a Lei Geral de Proteção de Dados (LGPD) e outras legislações aplicáveis, você tem os seguintes direitos:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
              <li><strong>Direito de Acesso:</strong> Solicitar acesso aos dados pessoais que mantemos sobre você</li>
              <li><strong>Direito de Retificação:</strong> Corrigir dados imprecisos ou incompletos</li>
              <li><strong>Direito de Exclusão:</strong> Solicitar a exclusão de seus dados (direito ao esquecimento)</li>
              <li><strong>Direito de Portabilidade:</strong> Receber seus dados em formato estruturado</li>
              <li><strong>Direito de Oposição:</strong> Opor-se ao processamento de seus dados</li>
              <li><strong>Direito de Não Ser Perfilado:</strong> Opor-se a decisões automatizadas</li>
              <li><strong>Direito de Revogar Consentimento:</strong> Retirar consentimento a qualquer momento</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Para exercer qualquer desses direitos, entre em contato conosco através do email contato@vulcandefense.com.br.
            </p>
          </div>

          {/* Cookies */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">7. Cookies e Tecnologias Similares</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nosso site usa cookies para melhorar sua experiência. Cookies são pequenos arquivos armazenados em seu dispositivo que nos ajudam a:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2 mt-3">
              <li>Lembrar suas preferências</li>
              <li>Entender como você usa nosso site</li>
              <li>Personalizar conteúdo e anúncios</li>
              <li>Melhorar a segurança</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Você pode controlar cookies através das configurações do seu navegador. A desativação de cookies pode afetar a funcionalidade do site.
            </p>
          </div>

          {/* Data Retention */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">8. Retenção de Dados</h2>
            <p className="text-muted-foreground leading-relaxed">
              Retemos suas informações pessoais pelo tempo necessário para fornecer nossos serviços, cumprir obrigações legais e resolver disputas. O período de retenção varia dependendo do tipo de informação e contexto de uso. Quando suas informações não forem mais necessárias, as excluiremos ou anonimizaremos de forma segura.
            </p>
          </div>

          {/* Third Party Links */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">9. Links de Terceiros</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nosso site pode conter links para sites de terceiros. Não somos responsáveis pelas práticas de privacidade desses sites. Recomendamos que você revise as políticas de privacidade de qualquer site de terceiros antes de fornecer suas informações pessoais.
            </p>
          </div>

          {/* Children's Privacy */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">10. Privacidade de Menores</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nossos serviços não são direcionados a menores de 18 anos. Não coletamos intencionalmente informações pessoais de menores. Se descobrirmos que coletamos dados de um menor, excluiremos essas informações imediatamente.
            </p>
          </div>

          {/* International Transfers */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">11. Transferências Internacionais</h2>
            <p className="text-muted-foreground leading-relaxed">
              Suas informações podem ser transferidas, armazenadas e processadas em países diferentes do seu país de residência. Ao usar nossos serviços, você consente com essa transferência. Implementamos salvaguardas apropriadas para proteger suas informações durante transferências internacionais.
            </p>
          </div>

          {/* Policy Changes */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">12. Alterações nesta Política</h2>
            <p className="text-muted-foreground leading-relaxed">
              Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas, tecnologia, legislação ou outros fatores. Notificaremos você sobre alterações materiais por email ou publicando a política revisada em nosso site. Sua continuação no uso de nossos serviços após as alterações constitui aceitação da política revisada.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">13. Entre em Contato Conosco</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Se você tiver dúvidas sobre esta Política de Privacidade ou nossas práticas de privacidade, entre em contato conosco:
            </p>
            <div className="p-6 rounded-lg bg-card border border-border space-y-3">
              <div>
                <h4 className="font-semibold text-white mb-1">Vulcan Defense</h4>
                <p className="text-muted-foreground text-sm">Segurança Cibernética e Conformidade</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  <strong>Email:</strong> contato@vulcandefense.com.br
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  <strong>Telefone:</strong> (21) 9665-8464 6
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  <strong>Encarregado de Proteção de Dados (DPO):</strong> dpo@vulcandefense.com.br
                </p>
              </div>
            </div>
          </div>

          {/* LGPD Compliance */}
          <div className="space-y-4 p-6 rounded-lg bg-blue-500/10 border border-blue-500/30">
            <h2 className="text-2xl font-bold">14. Conformidade com LGPD</h2>
            <p className="text-muted-foreground leading-relaxed">
              Esta Política de Privacidade foi desenvolvida em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) e outras legislações de proteção de dados aplicáveis. Estamos comprometidos em proteger seus direitos como titular de dados e em manter a mais alta qualidade de segurança de informações.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-blue-500/10 to-transparent border-t border-border">
        <div className="container max-w-4xl text-center space-y-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Dúvidas sobre Privacidade?
            </h2>
            <p className="text-lg text-muted-foreground">
              Nossa equipe está pronta para esclarecer qualquer dúvida sobre proteção de dados.
            </p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
            Fale com Nosso DPO
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
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
