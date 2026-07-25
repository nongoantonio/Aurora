import "./App.css";

export default function App() {
  return (
    <div className="app">
      <header className="hero">
        <h1>Bem-vindo à Nossa Landing Page 🚀</h1>
        <p>Uma experiência moderna e interativa feita com React + Vite.</p>
        <button className="cta">Começar Agora</button>
      </header>

      <section className="features">
        <div className="card">
          <h2>⚡ Rápido</h2>
          <p>Construído com Vite para máxima performance.</p>
        </div>
        <div className="card">
          <h2>🎨 Moderno</h2>
          <p>Design responsivo e estilizado com CSS.</p>
        </div>
        <div className="card">
          <h2>🛠️ Interativo</h2>
          <p>Componentes React dinâmicos e reutilizáveis.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Minha Landing Page. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
