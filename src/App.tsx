import { useState } from 'react'

function App() {
  // ---------------- ESTADOS DO COMPONENTE ----------------
  // Estado para controlar o texto digitado no campo de email da newsletter
  const [email, setEmail] = useState<string>('')
  
  // Estado para sabermos se o usuário submeteu com sucesso (exibe mensagem de feedback)
  const [subscribed, setSubscribed] = useState<boolean>(false)
  
  // Estado para abrir ou fechar o menu de navegação em telemóveis/dispositivos móveis
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  
  // Estado para controlar qual item da FAQ está aberto (armazena o índice numérico ou null se nenhum estiver aberto)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // ---------------- FUNÇÕES DE INTERATIVIDADE ----------------
  
  // Função executada ao enviar o formulário de newsletter
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault() // Evita que a página recarregue ao submeter o formulário
    if (email.trim() !== '') {
      setSubscribed(true) // Ativa a mensagem de sucesso
      setEmail('') // Limpa o input
      // Esconde automaticamente a mensagem de sucesso após 4 segundos (4000 milissegundos)
      setTimeout(() => setSubscribed(false), 4000)
    }
  }

  // Função para alternar a abertura e fecho das perguntas frequentes (FAQ)
  const toggleFaq = (index: number) => {
    // Se o item clicado já estiver aberto, fecha-o (define como null); caso contrário, abre-o
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="landing-container">
      
      {/* ---------------- 1. NAVBAR / CABEÇALHO ---------------- */}
      <header className="navbar">
        <div className="logo">
          Nex<span>Scale</span>
        </div>
        
        {/* Links de navegação: a classe 'active' é adicionada condicionalmente se o menu mobile estiver aberto */}
        <nav className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#features" onClick={() => setMobileMenuOpen(false)}>Recursos</a>
          <a href="#stats" onClick={() => setMobileMenuOpen(false)}>Estatísticas</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Preços</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
        </nav>

        <div className="nav-actions">
          <button className="btn-secondary">Entrar</button>
        </div>

        {/* Ícone do menu hambúrguer para telemóveis (muda entre '☰' e '✕') */}
        <div className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? '✕' : '☰'}
        </div>
      </header>

      {/* ---------------- 2. HERO SECTION (DESTAQUE PRINCIPAL) ---------------- */}
      <section className="hero">
        <div className="hero-content">
          <span className="badge">✨ Nova Versão 3.0 Disponível</span>
          <h1>Evolua a sua presença digital com inteligência</h1>
          <p>
            Plataforma modular desenvolvida para otimizar processos, acelerar entregas 
            e escalar o seu negócio para o próximo nível com alta performance.
          </p>

          {/* Formulário ligado à função handleSubscribe */}
          <form onSubmit={handleSubscribe} className="cta-form">
            <input 
              type="email" 
              placeholder="Digite o seu melhor e-mail..." 
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Atualiza o estado 'email' a cada tecla digitada
              required
            />
            <button type="submit" className="btn-primary">Testar Grátis</button>
          </form>

          {/* Feedback visual condicional: só aparece se 'subscribed' for verdadeiro */}
          {subscribed && (
            <div className="success-message">
              🎉 Sucesso! Verifique a sua caixa de entrada para começar.
            </div>
          )}
        </div>
      </section>

      {/* ---------------- 3. STATS SECTION (ESTATÍSTICAS) ---------------- */}
      <section id="stats" className="stats-section">
        <div className="stat-box">
          <h2>99.9%</h2>
          <p>Uptime Garantido</p>
        </div>
        <div className="stat-box">
          <h2>+45k</h2>
          <p>Utilizadores Ativos</p>
        </div>
        <div className="stat-box">
          <h2>2.4x</h2>
          <p>Aumento de Produtividade</p>
        </div>
      </section>

      {/* ---------------- 4. FEATURES SECTION (RECURSOS) ---------------- */}
      <section id="features" className="features">
        <div className="section-title">
          <h2>Recursos Poderosos</h2>
          <p>Tudo o que você precisa para gerenciar e expandir o seu projeto.</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="icon">⚡</div>
            <h3>Alta Performance</h3>
            <p>Otimizado para carregar em milissegundos, garantindo uma excelente experiência de usuário.</p>
          </div>
          <div className="feature-card">
            <div className="icon">🛡️</div>
            <h3>Segurança Avançada</h3>
            <p>Criptografia de ponta a ponta e conformidade com os mais altos padrões de segurança de dados.</p>
          </div>
          <div className="feature-card">
            <div className="icon">📊</div>
            <h3>Análises em Tempo Real</h3>
            <p>Monitore métricas vitais e tome decisões assertivas baseadas em dados atualizados instantaneamente.</p>
          </div>
        </div>
      </section>

      {/* ---------------- 5. PRICING SECTION (PLANOS DE PREÇOS) ---------------- */}
      <section id="pricing" className="pricing">
        <div className="section-title">
          <h2>Planos Transparentes</h2>
          <p>Escolha a opção ideal para o tamanho do seu projeto.</p>
        </div>

        <div className="pricing-grid">
          {/* Plano Gratuito */}
          <div className="pricing-card">
            <h3>Starter</h3>
            <div className="price">Grátis</div>
            <p>Ideal para testes e projetos pessoais iniciais.</p>
            <ul>
              <li>✓ 1 Projeto Ativo</li>
              <li>✓ Comunidade de Apoio</li>
              <li>✓ Recursos Básicos</li>
            </ul>
            <button className="btn-secondary">Começar Agora</button>
          </div>

          {/* Plano Profissional (Destaque) */}
          <div className="pricing-card popular">
            <span className="popular-badge">Mais Popular</span>
            <h3>Pro</h3>
            <div className="price">15.000 Kz<span>/mês</span></div>
            <p>Para profissionais e equipas em crescimento.</p>
            <ul>
              <li>✓ Projetos Ilimitados</li>
              <li>✓ Suporte Prioritário 24/7</li>
              <li>✓ Relatórios Avançados</li>
            </ul>
            <button className="btn-primary">Assinar Pro</button>
          </div>
        </div>
      </section>

      {/* ---------------- 6. FAQ SECTION (PERGUNTAS FREQUENTES) ---------------- */}
      <section id="faq" className="faq-section">
        <div className="section-title">
          <h2>Perguntas Frequentes</h2>
          <p>Tire as suas dúvidas sobre a nossa plataforma.</p>
        </div>

        <div className="faq-container">
          {/* Array de perguntas mapeado dinamicamente para gerar os elementos HTML */}
          {[
            { q: "Como faço para começar a usar?", a: "Basta inserir o seu e-mail no topo da página ou criar uma conta gratuita no botão 'Entrar'." },
            { q: "Posso cancelar a subscrição a qualquer momento?", a: "Sim, não há contratos de fidelização. Pode cancelar diretamente no seu painel de controlo." },
            { q: "Existe suporte técnico disponível?", a: "Sim, oferecemos suporte via chat e e-mail para todos os planos ativos." }
          ].map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${openFaq === index ? 'open' : ''}`}
              onClick={() => toggleFaq(index)} // Aciona a função de expandir/recolher ao clicar
            >
              <div className="faq-question">
                <span>{item.q}</span>
                {/* Mostra sinal de menos se estiver aberto, ou sinal de mais se estiver fechado */}
                <span className="faq-arrow">{openFaq === index ? '−' : '+'}</span>
              </div>
              {/* Renderização condicional da resposta: só aparece se o índice corresponder ao openFaq */}
              {openFaq === index && <div className="faq-answer">{item.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- 7. FOOTER (RODAPÉ) ---------------- */}
      <footer className="footer">
        <p>&copy; 2026 NexScale. Todos os direitos reservados. Feito com React e Vite.</p>
      </footer>

    </div>
  )
}

export default App