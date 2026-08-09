# Aurora Cloud

Landing page de um produto SaaS de hospedagem, segurança e análise de tráfego — construída com React, TypeScript e Vite. Inclui modo claro/escuro, formulário de captação de leads, integração com WhatsApp, páginas legais e SEO completo.

![Preview do site Aurora Cloud](./public/preview.png)

---

## ✨ Funcionalidades

- **Design responsivo** com modo claro/escuro (persistido e sincronizado com a preferência do sistema)
- **Animações on-scroll**, gráfico animado, marquee de logótipos e mockup de painel interativo
- **Modal de inscrição** com validação de formulário, estado de carregamento e feedback de sucesso
- **Integração com WhatsApp** (botão flutuante + links de contacto pré-preenchidos)
- **Captação de leads** pronta a ligar ao [Formspree](https://formspree.io) (ou a qualquer backend próprio)
- **Google Analytics 4** opcional, carregado apenas se configurado
- **Páginas legais** (Termos de Serviço e Política de Privacidade) com routing próprio via `react-router-dom`
- **SEO completo**: meta tags, Open Graph, Twitter Card, `sitemap.xml`, `robots.txt`
- **Acessibilidade**: link "saltar para conteúdo", foco preso no modal, navegação por teclado

## 🛠️ Stack

| Camada | Tecnologia |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite |
| Routing | React Router DOM |
| Estilos | CSS puro (variáveis nativas, sem framework) |
| Ícones | SVG próprios (`src/components/Icons.tsx`) |

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

Em modo de desenvolvimento, a consola do browser avisa se algum destes valores ainda estiver por preencher.

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

- `src/content.ts` — estatísticas e depoimentos são **placeholders de design**, não factos reais
- `src/pages/TermsPage.tsx` / `PrivacyPage.tsx` — modelo legal genérico, sinalizado na própria página; não substitui aconselhamento jurídico
- `index.html`, `public/robots.txt`, `public/sitemap.xml` — trocar `https://www.aurora.co.ao` pelo domínio real assim que o tiver

## 🌐 Deploy

O routing exige redirecionar todos os caminhos para `index.html`:

- **Netlify** → já incluído em `public/_redirects`
- **Vercel** → já incluído em `vercel.json`
- Outro host estático → configurar um *rewrite* equivalente para SPA

## Limitações conhecidas

- O painel mostrado no hero é uma maquete visual, não um produto funcional
- Site apenas em português (sem suporte multi-idioma)
- Testado em Chromium automatizado; recomenda-se confirmação manual em Safari/Firefox e dispositivos físicos antes do lançamento
