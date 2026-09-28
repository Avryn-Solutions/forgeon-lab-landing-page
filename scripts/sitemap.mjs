import { readFileSync, writeFileSync } from 'node:fs';

const domain = process.env.SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL;
if (!domain) {
  console.log('Sitemap: defina SITE_URL para gerar URLs canônicas.');
  process.exit(0);
}

const base = new URL(/^https?:\/\//.test(domain) ? domain : `https://${domain}`);
const source = readFileSync('src/app/data/products.ts', 'utf8');
const slugs = [...source.matchAll(/\bslug:\s*'([^']+)'/g)].map(match => match[1]);
const paths = ['', 'loja', 'orcamento', 'portfolio', 'sobre', ...slugs.map(slug => `produto/${slug}`)];
const entries = paths.map(path => `  <url><loc>${new URL(path, base).href}</loc></url>`).join('\n');
writeFileSync('dist/forgeonlab/browser/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`);
writeFileSync('dist/forgeonlab/browser/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${new URL('sitemap.xml', base).href}\n`);
console.log(`Sitemap: ${paths.length} URLs geradas para ${base.origin}`);
