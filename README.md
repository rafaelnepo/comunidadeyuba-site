# www/ — o site estático (protótipo do caminho GitHub)

**Criado:** 18 de agosto de 2026 · **Estado:** protótipo aprovado para avaliação
**Plano completo:** artefato "O Caminho GitHub" + `docs/next-session.md`

O site inteiro, em três idiomas, deployável em qualquer hospedagem estática
(Cloudflare Pages, GitHub Pages). Sem framework e sem dependências: os mesmos
arquivos de conteúdo do playground, o mesmo CSS, e um renderer de produção.

## Como funciona

```bash
node scripts/build-www.mjs        # regenera tudo a partir das fontes
python3 -m http.server -d www     # prévia local em http://localhost:8000
```

| Arquivo | Papel | Fonte ou gerado? |
|---|---|---|
| `site.js` | Renderer de produção — fork do `playground/playground.js` sem o painel, com Formspree, i18n e sanfona | **Fonte** (edite aqui) |
| `site.css` | Ajustes de produção sobre o CSS do playground | **Fonte** |
| `index.html` · `en/` · `ja/` | A página, por idioma | Gerado |
| `privacidade/` · `obrigado/` | Páginas de apoio, por idioma | Gerado |
| `base.css` · `content/` · `img/` | Copiados do playground no build | Gerado |
| `i18n/{en,ja}.js` | Dicionários PT→idioma | Gerado de `content/translations/` |
| `i18n-report.txt` | Strings sem tradução (ficam em PT) | Gerado |

**Nunca edite os gerados** — o build sobrescreve. Texto muda no
`playground/content/`; tradução muda em `content/translations/` (o
`supplement.json` de cada idioma cobre as strings que só existem no playground).

## ⚠️ Antes de ir ao ar

1. **O endpoint do Formspree** é placeholder — `site.js`, `FORM_ENDPOINT`.
   Sem ele os formulários não enviam.
2. **`noindex` está ligado** em todas as páginas (é protótipo). Tirar no
   lançamento, junto com a decisão de domínio.
3. O visual é o do playground — próximo do Estágio 2, não idêntico ao site da
   Framer. O passe fino vem depois da decisão de caminho.
4. A revisão nativa do japonês continua pendente (prioridades em
   `content/translations/README.md`).

## O que os formulários enviam

Idêntico ao combinado do `docs/form-setup.md`: campo oculto `formulario`
(`0N · nome`) + `_subject` (`Site — 0N nome`), **sempre em português** em todos
os idiomas — a caixa `contato@comunidadeyuba.org` e os filtros do Gmail não
mudam. `_next` redireciona para `/obrigado` do idioma. Nomes de campo são o
slug completo do rótulo (sem o truncamento de 40 caracteres da Framer) e
caixas de seleção enviam o texto da opção.
