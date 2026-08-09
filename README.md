# Aurora Cloud — landing page

Site estático (React + Vite), pronto a publicar. Antes de ir ao ar, siga esta lista.

## 1. Configuração obrigatória — `src/config.ts`

| Valor | O que fazer |
|---|---|
| `WHATSAPP_NUMBER` | Troque pelo número real, formato internacional sem "+" (ex: `244923000000`). |
| `CONTACT_EMAIL` | Email real para onde o botão "Contacto" do rodapé escreve. |
| `FORMSPREE_ENDPOINT` | Crie uma conta grátis em [formspree.io](https://formspree.io), crie um formulário e cole o endpoint aqui. Sem isto, os pedidos de conta ficam só guardados no navegador do visitante (modo demonstração). |

Em desenvolvimento (`npm run dev`), a consola do browser avisa se algum destes ainda estiver por preencher.

## 2. Analytics (opcional) — `.env`

```bash
cp .env.example .env
```

Preencha `VITE_GA_MEASUREMENT_ID` com o ID do Google Analytics 4 (`G-XXXXXXXXXX`). Sem isto, o site funciona normalmente sem analytics — nada é carregado.

## 3. Conteúdo a rever antes de publicar — `src/content.ts`

As estatísticas ("12.000 empresas", "99.9% uptime") e os 3 depoimentos são **placeholders de design**, não factos reais. Troque por números e citações verdadeiras (com autorização de quem for citado) — ou remova as secções `Stats`/`Testimonials` da `src/pages/LandingPage.tsx` até ter dados reais.

## 4. Termos de Serviço e Política de Privacidade

`src/pages/TermsPage.tsx` e `PrivacyPage.tsx` contêm um modelo genérico, sinalizado com um aviso amarelo na própria página. **Não substitui aconselhamento jurídico** — peça a um advogado para rever antes de publicar, e preencha os campos entre `[colchetes]` (nome legal da empresa, morada, NIF).

## 5. Domínio real — SEO

Depois de ter o domínio definitivo, troque `https://www.aurora.co.ao` pelo domínio real em:
- `index.html` (tags `canonical`, `og:*`, `twitter:*`)
- `public/robots.txt`
- `public/sitemap.xml`

O `public/og-image.png` (1200×630) já está pronto para a pré-visualização ao partilhar o link no WhatsApp/Facebook/LinkedIn.

## 6. Deploy

O site usa rotas reais (`/termos-de-servico`, `/politica-de-privacidade`), por isso o servidor precisa de redirecionar tudo para `index.html`:

- **Netlify**: já incluído em `public/_redirects`.
- **Vercel**: já incluído em `vercel.json`.
- Outro host estático: configure um *rewrite* equivalente para SPA.

```bash
npm install
npm run build   # gera a pasta dist/
```

## O que ainda não está incluído

- **Produto real por trás do formulário** — o painel "painel-aurora.com" no hero é uma maquete visual, não um produto funcional.
- **Multi-idioma** — o site está só em português.
- **Testes em Safari/Firefox reais e em dispositivos físicos** — foi testado em Chromium automatizado; vale a pena confirmar manualmente antes de publicar.
