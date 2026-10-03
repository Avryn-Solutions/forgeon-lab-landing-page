# ForgeonLab

Site oficial da ForgeonLab em Angular 21, TypeScript, componentes standalone e Signals. Catálogo e portfólio demonstrativos, carrinho local e pedidos por WhatsApp. Leia [PLANEJAMENTO.md](./PLANEJAMENTO.md) para o escopo e as decisões de conteúdo e [Identidade visual](./docs/identidade-visual/README.md) para a paleta da marca.

## Rodar localmente

Requer uma versão de Node.js compatível com Angular 21 (20.19+, 22.12+ ou 24.x) e pnpm 11.19.0. O ambiente usado na criação tem Node 24.12; por isso foi usada a linha Angular 21, compatível com essa versão.

```bash
pnpm install
pnpm start
```

Acesse `http://localhost:4200`. Para gerar a versão estática, use `pnpm build`. Os arquivos saem em `dist/forgeonlab/browser`.

## Conteúdo antes de publicar

- Substituir as imagens conceituais em `public/products/` por fotos autorizadas de produtos reais.
- Confirmar nomes, preços, prazos e opções em `src/app/data/products.ts`.
- Acrescentar projetos realizados ao portfólio quando houver fotos e histórias verificadas.
- Definir `SITE_URL` com o domínio final para gerar `sitemap.xml` e a referência no `robots.txt` durante o build.

## Vercel

`vercel.json` configura build, pasta de saída e fallback de rotas da SPA. A variável `SITE_URL=https://seu-dominio` permite gerar um sitemap com o domínio oficial. Se ela não estiver definida, o script tenta usar `VERCEL_PROJECT_PRODUCTION_URL`; se ambas estiverem ausentes, o build continua sem sitemap.

## Arquitetura

`CatalogService` isola os dados locais da interface. `CartService` usa Signals e persiste na chave `forgeonlab_cart` do `localStorage`. `WhatsAppService` monta os links do pedido e do orçamento, sem backend e sem upload automático. Para trocar o catálogo por uma API no futuro, substitua a implementação do serviço e adapte o carregamento de dados.
