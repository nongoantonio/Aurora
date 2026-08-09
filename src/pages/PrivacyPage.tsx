import LegalPage from '../components/LegalPage';

export default function PrivacyPage() {
  return (
    <LegalPage title="Política de Privacidade" updatedAt="6 de agosto de 2026">
      <div className="legal-page__notice">
        <strong>Nota para o proprietário do site:</strong> este é um modelo genérico, alinhado
        com princípios comuns de proteção de dados (RGPD e legislação angolana de proteção de
        dados pessoais), pensado como ponto de partida — não substitui aconselhamento jurídico.
        Reveja com um advogado e preencha os campos entre [colchetes] antes de publicar.
      </div>

      <p>
        Esta Política de Privacidade explica como a Aurora Cloud ("nós") recolhe, utiliza e
        protege os dados pessoais dos visitantes e clientes do nosso website e plataforma
        (o "Serviço").
      </p>

      <h2>1. Que dados recolhemos</h2>
      <p>Recolhemos os seguintes tipos de dados:</p>
      <ul>
        <li><strong>Dados fornecidos por si:</strong> nome, email e, quando aplicável, dados de faturação, ao criar uma conta ou entrar em contacto connosco.</li>
        <li><strong>Dados de utilização:</strong> páginas visitadas, ações realizadas no site e informação técnica básica (tipo de dispositivo, navegador), recolhidos automaticamente através de ferramentas de análise, quando ativas.</li>
        <li><strong>Comunicações:</strong> o conteúdo de mensagens trocadas connosco por email, WhatsApp ou formulários de contacto.</li>
      </ul>

      <h2>2. Para que usamos os seus dados</h2>
      <ul>
        <li>Criar e gerir a sua conta e prestar o Serviço contratado;</li>
        <li>Responder a pedidos de contacto e suporte;</li>
        <li>Enviar comunicações relacionadas com o Serviço (ex: confirmações, alterações de plano);</li>
        <li>Melhorar o site e o Serviço com base em dados agregados de utilização;</li>
        <li>Cumprir obrigações legais e fiscais.</li>
      </ul>
      <p>
        Não vendemos os seus dados pessoais a terceiros. Só partilhamos dados com prestadores de
        serviços estritamente necessários ao funcionamento da plataforma (por exemplo,
        processamento de pagamentos ou envio de email), sujeitos a obrigações de confidencialidade.
      </p>

      <h2>3. Onde ficam guardados os seus dados</h2>
      <p>
        Os dados recolhidos através dos formulários deste site são atualmente processados através
        de [nome do serviço/fornecedor, ex.: Formspree ou base de dados própria]. Ao contratar um
        plano, os dados da sua conta ficam guardados nos nossos servidores ou nos dos nossos
        fornecedores de infraestrutura, com medidas de segurança adequadas.
      </p>

      <h2>4. Cookies e ferramentas de análise</h2>
      <p>
        Este site pode usar cookies ou tecnologias semelhantes para lembrar a sua preferência de
        tema (claro/escuro) e, quando ativas, ferramentas de análise para perceber como o site é
        utilizado. Estas ferramentas não identificam diretamente o visitante sem o seu
        consentimento, quando exigido por lei.
      </p>

      <h2>5. Os seus direitos</h2>
      <p>Tem o direito de, a qualquer momento:</p>
      <ul>
        <li>Aceder aos dados pessoais que temos sobre si;</li>
        <li>Solicitar a correção de dados incorretos ou desatualizados;</li>
        <li>Solicitar a eliminação dos seus dados, salvo quando a lei exija a sua conservação;</li>
        <li>Opor-se ao tratamento dos seus dados para fins de marketing.</li>
      </ul>
      <p>
        Para exercer qualquer um destes direitos, contacte-nos através de [email de contacto].
        Responderemos dentro do prazo legal aplicável.
      </p>

      <h2>6. Conservação de dados</h2>
      <p>
        Conservamos os seus dados pessoais apenas durante o tempo necessário para os fins
        descritos nesta política, ou durante o período exigido por lei (por exemplo, obrigações
        fiscais).
      </p>

      <h2>7. Segurança</h2>
      <p>
        Adotamos medidas técnicas e organizativas razoáveis para proteger os seus dados contra
        acesso não autorizado, perda ou alteração. Nenhum sistema é, no entanto, 100% seguro, e
        não podemos garantir segurança absoluta.
      </p>

      <h2>8. Alterações a esta política</h2>
      <p>
        Podemos atualizar esta Política de Privacidade periodicamente. A data da última
        atualização está indicada no topo desta página. Alterações significativas serão
        comunicadas de forma visível no site.
      </p>

      <h2>9. Contacto</h2>
      <p>
        Para questões sobre esta política ou sobre os seus dados pessoais, contacte-nos através de
        [email de contacto] ou pelo WhatsApp disponível no site.
      </p>
    </LegalPage>
  );
}
