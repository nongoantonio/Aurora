<div align="center">

# Aurora Cloud

**Landing page para uma plataforma SaaS de hospedagem, segurança e análise de tráfego.**

[![Deploy](https://github.com/nongoantonio/Aurora/actions/workflows/deploy.yml/badge.svg)](https://github.com/nongoantonio/Aurora/actions/workflows/deploy.yml)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/license-proprietary-lightgrey)

[**🔗 Ver o site publicado**](https://nongoantonio.github.io/Aurora/)

![Preview do site Aurora Cloud](./public/preview.png)

</div>

---

## Índice

- [Funcionalidades](#-funcionalidades)
- [Stack técnica](#️-stack-técnica)
- [Começar](#-começar)
- [Configuração antes de publicar](#️-configuração-antes-de-publicar)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Conteúdo a rever antes de publicar](#-conteúdo-a-rever-antes-de-publicar)
- [Deploy](#-deploy)
- [Limitações conhecidas](#limitações-conhecidas)
- [Licença](#licença)

## ✨ Funcionalidades

- **Design responsivo** com modo claro/escuro, persistido e sincronizado com a preferência do sistema
- **Animações on-scroll**, gráfico animado, marquee de logótipos e mockup de painel interativo
- **Modal de inscrição** com validação de formulário, estado de carregamento e feedback de sucesso
- **Integração com WhatsApp** — botão flutuante e links de contacto pré-preenchidos
- **Captação de leads** pronta a ligar ao [Formspree](https://formspree.io) ou a qualquer backend próprio
- **Google Analytics 4** opcional, carregado apenas se configurado
- **Páginas legais** (Termos de Serviço e Política de Privacidade) com routing próprio
- **SEO completo** — meta tags, Open Graph, Twitter Card, `sitemap.xml`, `robots.txt`
- **Acessibilidade** — link "saltar para conteúdo", foco preso no modal, navegação por teclado
- **CI/CD** — deploy automático para o GitHub Pages a cada `push` para `main`

## 🛠️ Stack técnica

| Camada | Tecnologia |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite |
| Routing | React Router DOM |
| Estilos | CSS puro (variáveis nativas, sem framework) |
| Ícones | SVG próprios (`src/components/Icons.tsx`) |
| CI/CD | GitHub Actions → GitHub Pages |

## 🚀 Começar

```bash
npm install
npm run dev
```

O site fica disponível em `http://localhost:5173`.

```bash
npm run build      # gera a pasta dist/ pronta para produção
npm run preview    # pré-visualiza o build de produção localmente
```

## ⚙️ Configuração antes de publicar

Toda a configuração do negócio está centralizada em **`src/config.ts`**:

```ts
export const WHATSAPP_NUMBER = '244900000000';   // trocar pelo número real
export const CONTACT_EMAIL = 'contacto@aurora.co.ao';
export const FORMSPREE_ENDPOINT = '';             // colar o endpoint do Formspree
```

Em desenvolvimento, a consola do browser avisa se algum destes valores ainda estiver por preencher.

Para o Google Analytics 4 (opcional):

```bash
cp .env.example .env
# preencher VITE_GA_MEASUREMENT_ID no .env
```

## 📁 Estrutura do projeto

```
src/
├── pages/            # LandingPage, TermsPage, PrivacyPage (rotas)
├── components/        # Componentes de UI (Hero, Pricing, FAQ, Footer, ...)
├── context/            # Providers de Toast e do modal de inscrição
├── lib/                # Envio de leads e analytics
├── hooks/              # useScrollReveal (animações on-scroll)
├── config.ts           # Dados de contacto e integrações — editar antes de publicar
└── content.ts           # Estatísticas e depoimentos — substituir por dados reais
```

## 📝 Conteúdo a rever antes de publicar

| Ficheiro | Motivo |
|---|---|
| `src/content.ts` | Estatísticas e depoimentos são placeholders de design, não factos reais |
| `src/pages/TermsPage.tsx` / `PrivacyPage.tsx` | Modelo legal genérico — não substitui aconselhamento jurídico |
| `index.html`, `robots.txt`, `sitemap.xml` | Trocar `https://www.aurora.co.ao` pelo domínio real |

## 🌐 Deploy

O routing da aplicação exige redirecionar todos os caminhos para `index.html`:

| Plataforma | Configuração |
|---|---|
| **GitHub Pages** | Já automatizado via `.github/workflows/deploy.yml` — basta ativar em *Settings → Pages → Source → GitHub Actions* |
| **Netlify** | Já incluído em `public/_redirects` |
| **Vercel** | Já incluído em `vercel.json` |

Detalhes do fluxo de deploy no GitHub Pages, incluindo como ligar um domínio próprio, estão comentados diretamente em `.github/workflows/deploy.yml`.

## Limitações conhecidas

- O painel mostrado no hero é uma maquete visual, não um produto funcional
- Site apenas em português, sem suporte multi-idioma
- Testado sobretudo em Chromium; recomenda-se confirmação manual em Safari/Firefox e dispositivos físicos

## Licença

Projeto privado — todos os direitos reservados. Não licenciado para reutilização pública.

---

<div align="center">
<sub>Construído com React, TypeScript e Vite.</sub>
</div>
