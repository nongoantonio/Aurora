import LegalPage from '../components/LegalPage';

export default function TermsPage() {
  return (
    <LegalPage title="Termos de Serviço" updatedAt="6 de agosto de 2026">
      <div className="legal-page__notice">
        <strong>Nota para o proprietário do site:</strong> este é um modelo genérico de
        Termos de Serviço, pensado para lhe dar uma estrutura completa e um ponto de partida
        honesto — não substitui aconselhamento jurídico. Reveja com um advogado antes de
        publicar, e preencha os campos entre [colchetes] com os dados reais da empresa.
      </div>

      <p>
        Bem-vindo(a) à Aurora Cloud. Estes Termos de Serviço ("Termos") regulam o acesso e a
        utilização da plataforma, do website e dos serviços associados (em conjunto, o
        "Serviço"), disponibilizados por [Nome legal da empresa], com sede em [morada], número
        de identificação fiscal [NIF] ("Aurora", "nós").
      </p>
      <p>
        Ao criar uma conta ou utilizar o Serviço, está a aceitar estes Termos na íntegra. Se
        não concordar com alguma parte, não deverá utilizar o Serviço.
      </p>

      <h2>1. A quem se destina o Serviço</h2>
      <p>
        O Serviço destina-se a pessoas com capacidade legal para celebrar contratos vinculativos
        e a empresas devidamente constituídas. Ao aceitar estes Termos, declara que cumpre este
        requisito.
      </p>

      <h2>2. Contas e responsabilidade</h2>
      <p>
        É responsável por manter a confidencialidade das credenciais da sua conta e por toda a
        atividade realizada através dela. Deve notificar-nos imediatamente em caso de uso não
        autorizado ou suspeita de violação de segurança, através do email de suporte.
      </p>

      <h2>3. Planos, preços e faturação</h2>
      <p>
        Os preços atuais de cada plano estão indicados na página de Planos. Os planos pagos são
        cobrados de forma [mensal/anual, conforme a opção escolhida], antecipadamente. Reservamo-nos
        o direito de alterar os preços mediante aviso prévio de pelo menos 30 dias, o qual não
        afetará o período já pago.
      </p>

      <h2>4. Cancelamento e reembolsos</h2>
      <p>
        Pode cancelar o seu plano a qualquer momento a partir do painel de controlo. Salvo
        indicação em contrário na página de Planos ou por lei aplicável, os valores já pagos não
        são reembolsáveis, mas o acesso ao plano pago mantém-se até ao final do período já
        faturado.
      </p>

      <h2>5. Uso aceitável</h2>
      <p>Ao utilizar o Serviço, compromete-se a não:</p>
      <ul>
        <li>Alojar ou distribuir conteúdo ilegal, difamatório ou que viole direitos de terceiros;</li>
        <li>Tentar aceder sem autorização a sistemas, contas ou dados de outros utilizadores;</li>
        <li>Utilizar o Serviço para enviar spam, malware ou realizar ataques a terceiros;</li>
        <li>Sobrecarregar deliberadamente a infraestrutura de forma a prejudicar outros clientes.</li>
      </ul>
      <p>
        A violação destas regras pode resultar na suspensão ou encerramento da conta, com ou sem
        aviso prévio, consoante a gravidade.
      </p>

      <h2>6. Disponibilidade do Serviço</h2>
      <p>
        Envidamos esforços comerciais razoáveis para manter o Serviço disponível de acordo com o
        SLA indicado no seu plano, mas não garantimos disponibilidade ininterrupta. Poderão
        ocorrer períodos de manutenção programada, previamente comunicados sempre que possível.
      </p>

      <h2>7. Propriedade intelectual</h2>
      <p>
        O Serviço, incluindo o seu código, design e marca, é propriedade da Aurora Cloud ou dos
        seus licenciadores. O conteúdo que aloja através do Serviço mantém-se da sua propriedade;
        concede-nos apenas a licença estritamente necessária para o alojar e apresentar.
      </p>

      <h2>8. Limitação de responsabilidade</h2>
      <p>
        Na máxima medida permitida por lei, a Aurora Cloud não será responsável por danos
        indiretos, lucros cessantes ou perda de dados resultantes da utilização ou impossibilidade
        de utilização do Serviço.
      </p>

      <h2>9. Alterações a estes Termos</h2>
      <p>
        Podemos atualizar estes Termos periodicamente. Alterações materiais serão comunicadas com
        antecedência razoável por email ou através do próprio Serviço. A utilização continuada
        após a entrada em vigor das alterações constitui aceitação das mesmas.
      </p>

      <h2>10. Contacto</h2>
      <p>
        Para questões sobre estes Termos, contacte-nos através de [email de contacto] ou pelo
        WhatsApp disponível no site.
      </p>
    </LegalPage>
  );
}
