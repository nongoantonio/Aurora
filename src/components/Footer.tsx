export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <span className="navbar__logo-mark" />
          <p>Aurora Cloud — hospedagem, segurança e análise para o seu negócio digital.</p>
        </div>

        <div className="footer__columns">
          <div>
            <h4>Produto</h4>
            <a href="#recursos">Recursos</a>
            <a href="#planos">Planos</a>
            <a href="#faq">FAQ</a>
          </div>
          <div>
            <h4>Empresa</h4>
            <a href="#">Sobre nós</a>
            <a href="#">Carreiras</a>
            <a href="#">Contacto</a>
          </div>
          <div>
            <h4>Suporte</h4>
            <a href="#">Central de ajuda</a>
            <a href="#">Estado do sistema</a>
            <a href="#">Documentação</a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Aurora Cloud. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}
