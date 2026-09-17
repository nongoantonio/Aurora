<div align="center">

# Aurora Cloud

**Landing page de uma plataforma fictícia de hospedagem, segurança e análise de tráfego.**

[![Deploy](https://github.com/nongoantonio/Aurora/actions/workflows/deploy.yml/badge.svg)](https://github.com/nongoantonio/Aurora/actions/workflows/deploy.yml)
![License](https://img.shields.io/badge/license-proprietary-lightgrey)

[**🔗 Ver o site publicado**](https://nongoantonio.github.io/Aurora/)

![Preview do site Aurora Cloud](./public/preview.png)

</div>

---

## Sobre o projeto

A Aurora Cloud é a landing page de um produto imaginário de hospedagem e análise de negócio — pensada para responder a uma pergunta simples: *"o que faz alguém confiar o suficiente numa plataforma para lhe entregar o site do seu negócio?"*

O objetivo nunca foi só "ter uma página bonita". Foi construir algo que se comportasse como um produto real: com identidade visual própria, um percurso de utilizador que faz sentido do topo ao rodapé, e botões que realmente fazem alguma coisa quando se clica neles — não apenas um mockup estático.

## Como o site foi desenvolvido

O projeto nasceu de um pedido simples — uma landing page inspirada num layout de referência — e foi crescendo por iteração, camada a camada:

1. **Estrutura e primeira versão** — hero, secção de recursos, planos e FAQ, montados em React + TypeScript sobre Vite, com CSS próprio (sem frameworks de UI) para manter controlo total sobre o visual.
2. **Identidade visual** — o logótipo "A" em gradiente violeta→ciano foi desenhado a partir de uma referência visual dada, depois simplificado para se manter legível a 16px (o tamanho de um separador de browser) e aplicado de forma consistente no favicon, navbar e rodapé.
3. **Animações e sensação de "vivo"** — scroll reveals, um mockup de painel com gráfico a desenhar-se, badges flutuantes, e um botão de tema claro/escuro com transição suave em vez de um simples toggle binário.
4. **De maquete a produto funcional** — foi aqui que o projeto mudou de figura: o botão "Começar agora" passou a abrir um modal real com validação de formulário; o WhatsApp ficou ligado a um número configurável; os links do rodapé deixaram de ser `#` mortos e passaram a fazer scroll, abrir o email, ou mostrar um aviso honesto de "ainda não disponível" em vez de fingir que funcionam.
5. **Preparação para produção** — SEO (meta tags, Open Graph, sitemap), páginas legais de Termos e Privacidade, analytics opcional, e acessibilidade básica (navegação por teclado, foco preso no modal).
6. **Deploy automatizado** — um pipeline de CI/CD via GitHub Actions publica o site no GitHub Pages a cada alteração enviada para `main`, incluindo o tratamento das rotas internas (um detalhe que o GitHub Pages não resolve sozinho, por não ser pensado para aplicações de página única).

## O que já está pronto

- Modo claro/escuro persistido, sincronizado com a preferência do sistema
- Modal de inscrição com validação, estado de carregamento e confirmação de sucesso
- Botão de WhatsApp e links de contacto reais, prontos a configurar
- Captação de leads pronta a ligar a um serviço real (Formspree ou backend próprio)
- Páginas de Termos de Serviço e Política de Privacidade
- SEO completo e imagem de pré-visualização para partilha em redes sociais
- Deploy automático a cada `push`

## O que vamos melhorar

Nem tudo está fechado — há decisões conscientes de deixar para depois:

- **Dados reais** — as estatísticas ("12.000 empresas", "99.9% uptime") e os depoimentos são placeholders de design; precisam de ser substituídos por números e citações verdadeiras antes de qualquer lançamento a sério.
- **Backend de verdade** — hoje os pedidos de conta ficam guardados no navegador de quem visita; falta ligar isto a um serviço real (Formspree resolve em minutos) para os leads chegarem a algum lado.
- **Revisão jurídica** — os Termos de Serviço e a Política de Privacidade são um ponto de partida, não um documento validado por um advogado.
- **Produto por trás do formulário** — o painel mostrado no hero é uma maquete visual; não existe, ainda, uma aplicação real a processar contas.
- **Alcance** — o site está só em português; não há estrutura preparada para outros idiomas.
- **Testes manuais** — foi validado sobretudo com Chromium automatizado; vale a pena confirmar à mão em Safari, Firefox e num telemóvel físico antes de publicar a sério.

## Stack técnica

React 19 + TypeScript, Vite, React Router, CSS puro. Deploy contínuo via GitHub Actions para o GitHub Pages.

## Licença

Projeto privado — todos os direitos reservados.

