import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim() !== '') {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 4000)
    }
  }

  return (
    <div className="landing-container">
      {/* Header / Navbar */}
      <header className="navbar">
        <div className="logo">
          <span>Nex</span>Scale
        </div>
        <nav className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#features" onClick={() => setMobileMenuOpen(false)}>Recursos</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>Sobre</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contato</a>
        </nav>
        <div className="nav-actions">
          <button className="btn-secondary">Entrar</button>
        </div>
        <div className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          ☰
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="badge">🚀 Novo lançamento v2.0</span>
          <h1>Acelere o seu negócio com tecnologia de ponta</h1>
          <p>
            Plataforma moderna, rápida e altamente escalável para transformar a 
            maneira como você gerencia os seus projetos e clientes.
          </p>

          <form onSubmit={handleSubscribe} className="cta-form">
            <input 
              type="email" 
              placeholder="Digite o seu melhor e-mail" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn-primary">Começar Agora</button>
          </form>

          {subscribed && (
            <div className="success-message">
              🎉 Obrigado por se inscrever! Verifique sua caixa de entrada.
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Por que escolher a nossa solução?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="icon">⚡</div>
            <h3>Ultra Rápido</h3>
            <p>Construído com ferramentas modernas para garantir máxima performance e velocidade.</p>
          </div>
          <div className="feature-card">
            <div className="icon">🔒</div>
            <h3>Segurança Total</h3>
            <p>Proteção de dados de ponta a ponta com criptografia avançada e confiável.</p>
          </div>
          <div className="feature-card">
            <div className="icon">📈</div>
            <h3>Escalabilidade</h3>
            <p>Cresça sem limites com uma infraestrutura preparada para grandes demandas.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 NexScale. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default App