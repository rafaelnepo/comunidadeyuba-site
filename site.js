/* ==========================================================================
   Comunidade Yuba — site estático (protótipo GitHub, 18 ago 2026)

   Fork de produção do playground/playground.js: mesmo registro de seções e
   mesmos 16 tipos de bloco, SEM o painel, sem localStorage e sem o stub de
   envio. O que muda:

     · formulários enviam de verdade, via Formspree (FORM_ENDPOINT abaixo);
     · campos têm name legível (slug do rótulo, sem truncar) e as caixas de
       múltipla escolha têm value — no e-mail chega o texto, não "on";
     · cada formulário manda os campos ocultos `formulario` e `_subject`
       (a dupla identificação que o form-setup.md estabeleceu) e `_next`
       redireciona para /obrigado;
     · sanfona sempre ligada; abrir um de cada vez desligado (como o site
       publicado na Framer).

   i18n: se window.YUBA_I18N existir (www/i18n/{en,ja}.js, gerados pelo
   scripts/build-www.mjs a partir de content/translations/), todo texto do
   conteúdo é traduzido por correspondência exata antes de renderizar.
   String sem tradução fica em português — nunca some.
   ========================================================================== */
(function () {
  'use strict';

  // Formspree "Site da Comunidade Yuba" → contato@comunidadeyuba.org
  // (criado pelo Rafael em 18 ago 2026; um endpoint para os seis formulários,
  // distinguidos pelo campo oculto `formulario` e pelo `_subject`).
  var FORM_ENDPOINT = 'https://formspree.io/f/maewllkj';

  var SECTIONS = [];
  var I18N = window.YUBA_I18N || null;

  function t(s) {
    if (!I18N || s == null) return s;
    var key = String(s);
    if (Object.prototype.hasOwnProperty.call(I18N, key)) return I18N[key];
    var trimmed = key.trim();
    if (Object.prototype.hasOwnProperty.call(I18N, trimmed)) return I18N[trimmed];
    return s;
  }

  // Chaves que não são texto do visitante: identidade, tipo, tom, bandeira
  // de confirmação, fonte. Não passam pelo dicionário.
  var META_KEYS = { type: 1, tone: 1, id: 1, _id: 1, flag: 1, source: 1,
    width: 1, columns: 1, noteTone: 1, copy: 1, src: 1, href: 1, img: 1 };

  // Traduz toda string de um def de seção, em qualquer profundidade.
  function deepT(v) {
    if (typeof v === 'string') return t(v);
    if (Array.isArray(v)) return v.map(deepT);
    if (v && typeof v === 'object') {
      var out = {};
      for (var k in v) {
        if (!Object.prototype.hasOwnProperty.call(v, k)) continue;
        out[k] = META_KEYS[k] ? v[k] : deepT(v[k]);
      }
      // O original fica guardado: o name dos campos e o assunto do e-mail
      // são sempre os do português, para a caixa de entrada ser uma só.
      if (typeof v.label === 'string') out._ptLabel = v.label;
      if (typeof v.title === 'string') out._ptTitle = v.title;
      return out;
    }
    return v;
  }

  window.YUBA = {
    section: function (def) {
      (def.blocks || []).forEach(function (b, i) {
        if (!b._id) b._id = b.id || (b.type + '-' + i);
      });
      SECTIONS.push(I18N ? deepT(def) : def);
    },
    _sections: SECTIONS
  };

  /* ----------------------------------------------------------------- util */

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function rich(s) { return String(s); }
  function slug(s) {
    return String(s).toLowerCase()
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }
  function pad2(n) { return (n < 10 ? '0' : '') + n; }

  function copyText(text, done) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text)
        .then(function () { done(true); })
        .catch(function () { done(legacyCopy(text)); });
      return;
    }
    done(legacyCopy(text));
  }
  function legacyCopy(text) {
    try {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.cssText = 'position:fixed;top:-1000px;opacity:0';
      document.body.appendChild(ta);
      ta.select();
      var ok = document.execCommand('copy');
      document.body.removeChild(ta);
      return ok;
    } catch (e) { return false; }
  }

  /* --------------------------------------------------------- block render */

  var RENDER = {

    prose: function (b) {
      var w = el('div', 'b-prose');
      if (b.title) w.appendChild(el('h3', null, esc(b.title)));
      (b.items || []).forEach(function (p) { w.appendChild(el('p', null, rich(p))); });
      return w;
    },

    quote: function (b) {
      var w = el('blockquote', 'b-quote');
      (b.items || []).forEach(function (q) { w.appendChild(el('p', null, rich(q))); });
      if (b.cite) w.appendChild(el('cite', null, rich(b.cite)));
      return w;
    },

    list: function (b) {
      var w = el('div', 'b-list');
      if (b.title) w.appendChild(el('h3', null, esc(b.title)));
      var ul = el('ul', b.columns ? 'cols' : null);
      (b.items || []).forEach(function (it) {
        if (typeof it === 'string') {
          ul.appendChild(el('li', null, rich(it)));
        } else {
          ul.appendChild(el('li', null,
            '<strong>' + rich(it.t) + '</strong>' + (it.d ? ' <span class="d">' + rich(it.d) + '</span>' : '')));
        }
      });
      w.appendChild(ul);
      if (b.note) w.appendChild(el('p', 'note', rich(b.note)));
      return w;
    },

    defs: function (b) {
      var w = el('div', 'b-defs');
      if (b.title) w.appendChild(el('h3', null, esc(b.title)));
      var dl = el('dl');
      (b.items || []).forEach(function (it) {
        dl.appendChild(el('dt', null, rich(it.t)));
        dl.appendChild(el('dd', null, rich(it.d)));
      });
      w.appendChild(dl);
      if (b.note) w.appendChild(el('p', 'note', rich(b.note)));
      return w;
    },

    cards: function (b) {
      var w = el('div', 'b-cards');
      if (b.title) w.appendChild(el('h3', null, esc(b.title)));
      var grid = el('div', 'grid cols-' + (b.columns || 3));
      (b.items || []).forEach(function (c) {
        var card = el('article', 'card');
        if (c.img) {
          var fig = el('div', 'card-img');
          var im = document.createElement('img');
          im.src = c.img;
          im.alt = c.imgAlt || '';
          im.loading = 'lazy';
          fig.appendChild(im);
          card.appendChild(fig);
        }
        var body = el('div', 'card-text');
        card.appendChild(body);
        if (c.meta) body.appendChild(el('div', 'meta', rich(c.meta)));
        if (c.title) body.appendChild(el('h4', null, rich(c.title)));
        if (c.price) body.appendChild(el('div', 'price', rich(c.price)));
        (c.body || []).forEach(function (p) { body.appendChild(el('p', null, rich(p))); });
        if (c.defs) {
          var dl = el('dl', 'mini');
          c.defs.forEach(function (d) {
            dl.appendChild(el('dt', null, rich(d.t)));
            dl.appendChild(el('dd', null, rich(d.d)));
          });
          body.appendChild(dl);
        }
        if (c.links) {
          var p = el('p', 'links');
          p.innerHTML = c.links.map(function (l) {
            return '<a href="' + esc(l.href) + '" rel="noopener">' + rich(l.label) + '</a>';
          }).join(' · ');
          body.appendChild(p);
        }
        if (c.note) {
          body.appendChild(el('p', 'note' + (c.noteTone ? ' note-' + c.noteTone : ''),
            rich(c.note)));
        }
        grid.appendChild(card);
      });
      w.appendChild(grid);
      if (b.note) w.appendChild(el('p', 'note', rich(b.note)));
      return w;
    },

    schedule: function (b) {
      var w = el('div', 'b-schedule');
      if (b.title) w.appendChild(el('h3', null, esc(b.title)));
      var ol = el('ol', 'sched');
      (b.items || []).forEach(function (it) {
        var li = el('li', 'sched-item');
        li.appendChild(el('span', 'sched-name', rich(it.name)));
        li.appendChild(el('span', 'sched-time', rich(it.time)));
        if (it.note) li.appendChild(el('span', 'sched-note', rich(it.note)));
        ol.appendChild(li);
      });
      w.appendChild(ol);
      if (b.note) w.appendChild(el('p', 'note', rich(b.note)));
      return w;
    },

    split: function (b) {
      var w = el('div', 'b-split');
      if (b.title) w.appendChild(el('h3', null, esc(b.title)));
      var grid = el('div', 'split-grid');
      [b.left, b.right].forEach(function (side) {
        if (!side) return;
        var col = el('div', 'sp-col' + (side.tone ? ' tone-' + side.tone : ''));
        if (side.title) col.appendChild(el('h4', null, rich(side.title)));
        if (side.intro) col.appendChild(el('p', 'sp-intro', rich(side.intro)));
        if (side.list) {
          var ul = el('ul');
          side.list.forEach(function (it) { ul.appendChild(el('li', null, rich(it))); });
          col.appendChild(ul);
        }
        if (side.defs) {
          var dl = el('dl', 'mini');
          side.defs.forEach(function (d) {
            dl.appendChild(el('dt', null, rich(d.t)));
            dl.appendChild(el('dd', null, rich(d.d)));
          });
          col.appendChild(dl);
        }
        (side.items || []).forEach(function (p) { col.appendChild(el('p', null, rich(p))); });
        if (side.note) col.appendChild(el('p', 'note', rich(side.note)));
        grid.appendChild(col);
      });
      w.appendChild(grid);
      return w;
    },

    callout: function (b) {
      var w = el('aside', 'b-callout' + (b.tone ? ' tone-' + b.tone : '') +
        (b.wide ? ' is-wide' : ''));
      if (b.title) w.appendChild(el('strong', null, rich(b.title)));
      (b.items || []).forEach(function (p) { w.appendChild(el('p', null, rich(p))); });
      return w;
    },

    table: function (b) {
      var w = el('div', 'b-table');
      if (b.title) w.appendChild(el('h3', null, esc(b.title)));
      var scroll = el('div', 'scroll');
      var tb2 = el('table');
      if (b.head) {
        var thead = el('thead');
        var tr = el('tr');
        b.head.forEach(function (h) { tr.appendChild(el('th', null, rich(h))); });
        thead.appendChild(tr); tb2.appendChild(thead);
      }
      var tbody = el('tbody');
      (b.rows || []).forEach(function (r) {
        var tr2 = el('tr');
        r.forEach(function (c) { tr2.appendChild(el('td', null, rich(c))); });
        tbody.appendChild(tr2);
      });
      tb2.appendChild(tbody);
      scroll.appendChild(tb2);
      w.appendChild(scroll);
      if (b.note) w.appendChild(el('p', 'note', rich(b.note)));
      return w;
    },

    months: function (b) {
      var w = el('div', 'b-months');
      if (b.title) w.appendChild(el('h3', null, esc(b.title)));
      var grid = el('div', 'seasons');
      (b.seasons || []).forEach(function (s) {
        var box = el('div', 'season');
        box.appendChild(el('div', 'sname', rich(s.name)));
        var ul = el('ul');
        s.months.forEach(function (m) {
          ul.appendChild(el('li', m.note ? 'has-note' : null,
            '<span class="m">' + rich(m.name) + '</span>' +
            (m.note ? '<span class="mn">' + rich(m.note) + '</span>' : '')));
        });
        box.appendChild(ul);
        grid.appendChild(box);
      });
      w.appendChild(grid);
      if (b.note) w.appendChild(el('p', 'note', rich(b.note)));
      return w;
    },

    address: function (b) {
      var w = el('div', 'b-address');
      if (b.title) w.appendChild(el('h3', null, esc(b.title)));
      var row = el('div', 'addr-row');
      var box = el('address');
      box.innerHTML = (b.lines || []).map(rich).join('<br>');
      row.appendChild(box);
      if (b.copy !== false) {
        var text = b.copyText || (b.lines || []).join('\n');
        var btn = el('button', 'addr-copy');
        btn.type = 'button';
        btn.innerHTML =
          '<svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true">' +
          '<rect x="5.5" y="5.5" width="8" height="8" rx="1.5" fill="none" ' +
          'stroke="currentColor" stroke-width="1.4"/>' +
          '<path d="M10.5 3.5H3.5a1 1 0 0 0-1 1v7" fill="none" stroke="currentColor" ' +
          'stroke-width="1.4" stroke-linecap="round"/></svg>' +
          '<span class="ac-label">' + rich(b.copyLabel || t('Copiar endereço')) + '</span>';
        var label = btn.querySelector('.ac-label');
        var reset = null;
        btn.addEventListener('click', function () {
          copyText(text, function (ok) {
            btn.classList.toggle('is-done', ok);
            label.textContent = ok ? t('Copiado') + '!' : t('Não deu — copie à mão');
            clearTimeout(reset);
            reset = setTimeout(function () {
              btn.classList.remove('is-done');
              label.textContent = b.copyLabel || t('Copiar endereço');
            }, 2200);
          });
        });
        row.appendChild(btn);
      }
      w.appendChild(row);
      if (b.link) {
        w.appendChild(el('p', null,
          '<a href="' + esc(b.link.href) + '" rel="noopener">' + rich(b.link.label) + '</a>'));
      }
      return w;
    },

    subject: function (b) {
      var w = el('div', 'b-subject');
      if (b.title) w.appendChild(el('h3', null, esc(b.title)));
      (b.items || []).forEach(function (line) {
        var box = el('div', 'subject-box');
        box.appendChild(el('span', 'sf-label', rich(b.field || t('Assunto'))));
        box.appendChild(el('span', 'sf-value', rich(line)));
        w.appendChild(box);
      });
      if (b.note) w.appendChild(el('p', 'note', rich(b.note)));
      return w;
    },

    map: function (b) {
      var w = el('div', 'b-map');
      if (b.title) w.appendChild(el('h3', null, esc(b.title)));
      var frame = el('div', 'frame');
      var f = document.createElement('iframe');
      f.src = b.src;
      f.title = b.alt || 'Mapa';
      f.loading = 'lazy';
      f.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
      f.setAttribute('allowfullscreen', '');
      frame.appendChild(f);
      w.appendChild(frame);
      if (b.link) {
        w.appendChild(el('p', 'links',
          '<a href="' + esc(b.link.href) + '" rel="noopener">' + rich(b.link.label) + '</a>'));
      }
      if (b.note) w.appendChild(el('p', 'note', rich(b.note)));
      return w;
    },

    contacts: function (b) {
      var w = el('div', 'b-contacts');
      if (b.title) w.appendChild(el('h3', null, esc(b.title)));
      var grid = el('div', 'grid cols-2');
      (b.people || []).forEach(function (p) {
        var card = el('article', 'card person');
        var body = el('div', 'card-text');
        card.appendChild(body);
        body.appendChild(el('h4', null, rich(p.name)));
        if (p.role) body.appendChild(el('div', 'meta', rich(p.role)));
        if (p.langs) body.appendChild(el('div', 'langs', rich(p.langs)));
        if (p.tel) {
          body.appendChild(el('p', 'tel', '<a href="tel:' +
            esc(p.tel.replace(/[^\d+]/g, '')) + '">' + rich(p.tel) + '</a>'));
        }
        grid.appendChild(card);
      });
      w.appendChild(grid);
      return w;
    },

    forms: function (b) {
      var w = el('div', 'b-forms');
      if (b.title) w.appendChild(el('h3', null, esc(b.title)));
      var tabs = el('div', 'form-tabs');
      tabs.setAttribute('role', 'tablist');
      var panels = el('div', 'form-panels');
      var btns = [];

      (b.items || []).forEach(function (f, i) {
        var base = 'frm-' + slug(f.label) + '-' + i;
        var btn = el('button', 'form-tab');
        btn.type = 'button';
        btn.id = base + '-tab';
        btn.setAttribute('role', 'tab');
        btn.setAttribute('aria-controls', base);
        btn.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
        btn.tabIndex = i === 0 ? 0 : -1;
        btn.innerHTML = '<span class="ft-label">' + rich(f.label) + '</span>' +
          (f.hint ? '<span class="ft-hint">' + rich(f.hint) + '</span>' : '');
        tabs.appendChild(btn);
        btns.push(btn);

        var panel = el('div', 'form-panel');
        panel.id = base;
        panel.setAttribute('role', 'tabpanel');
        panel.setAttribute('aria-labelledby', btn.id);
        if (i !== 0) panel.hidden = true;
        panel.appendChild(RENDER.form(f, i));
        panels.appendChild(panel);

        btn.addEventListener('click', function () { select(i); });
      });

      function select(n) {
        btns.forEach(function (b2, k) {
          b2.setAttribute('aria-selected', k === n ? 'true' : 'false');
          b2.tabIndex = k === n ? 0 : -1;
          panels.children[k].hidden = k !== n;
        });
        btns[n].focus({ preventScroll: true });
      }

      tabs.addEventListener('keydown', function (e) {
        var i = btns.indexOf(document.activeElement);
        if (i < 0) return;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault(); select((i + 1) % btns.length);
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault(); select((i - 1 + btns.length) % btns.length);
        }
      });

      w.appendChild(tabs);
      w.appendChild(panels);
      if (b.note) w.appendChild(el('p', 'note', rich(b.note)));
      return w;
    },

    form: function (b, seq) {
      var w = el('div', 'b-form');
      if (b.title) w.appendChild(el('h3', null, esc(b.title)));
      if (b.intro) w.appendChild(el('p', null, rich(b.intro)));

      var form = el('form');
      form.setAttribute('action', FORM_ENDPOINT);
      form.setAttribute('method', 'POST');

      // A dupla identificação do form-setup.md: o campo oculto E o assunto.
      // Sempre em português, mesmo nas páginas EN/JA — a caixa é uma só e os
      // filtros do Gmail já esperam estes assuntos.
      var ptName = b._ptTitle || b._ptLabel || b.title || b.label || '';
      var num = pad2((seq == null ? 0 : seq) + 1);
      var hidden = el('input');
      hidden.type = 'hidden'; hidden.name = 'formulario';
      hidden.value = num + ' · ' + ptName;
      form.appendChild(hidden);
      var subj = el('input');
      subj.type = 'hidden'; subj.name = '_subject';
      subj.value = 'Site — ' + num + ' ' + ptName;
      form.appendChild(subj);
      var next = el('input');
      next.type = 'hidden'; next.name = '_next';
      next.value = new URL(
        (document.documentElement.getAttribute('data-base') || '') + 'obrigado/',
        window.location.href
      ).href;
      form.appendChild(next);

      (b.groups || []).forEach(function (g) {
        var fs = el('fieldset');
        if (g.title) fs.appendChild(el('legend', null, rich(g.title)));
        if (g.note) fs.appendChild(el('p', 'note', rich(g.note)));
        (g.fields || []).forEach(function (f) {
          fs.appendChild(field(f, g));
        });
        form.appendChild(fs);
      });

      var submit = el('button', 'submit', rich(b.submit || t('Enviar')));
      submit.setAttribute('type', 'submit');
      form.appendChild(submit);
      if (b.after) form.appendChild(el('p', 'note', rich(b.after)));

      // Envio em segundo plano: o plano gratuito do Formspree ignora o
      // redirect `_next`, então o POST vai por fetch e o redirecionamento
      // para /obrigado é nosso. Se o fetch falhar (rede, adblock), o fallback
      // é o envio normal do navegador — a mensagem chega igual, só aterrissa
      // na página do Formspree.
      var submitLabel = submit.textContent;
      form.addEventListener('submit', function (e) {
        if (!window.fetch || !window.FormData) return; // fallback nativo
        e.preventDefault();
        submit.disabled = true;
        submit.textContent = t('Enviando…');
        var destino = next.value;
        fetch(FORM_ENDPOINT, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' }
        }).then(function (r) {
          if (!r.ok) throw new Error('HTTP ' + r.status);
          window.location.assign(destino);
        }).catch(function () {
          submit.disabled = false;
          submit.textContent = submitLabel;
          var err = form.querySelector('.form-err');
          if (!err) {
            err = el('p', 'note note-warn form-err',
              rich(t('Não deu certo — tente de novo')));
            form.appendChild(err);
          }
        });
      });

      w.appendChild(form);
      return w;
    }
  };

  var FIELD_SEQ = 0;

  function field(f, g) {
    // id com sequência (seis formulários no mesmo DOM); name legível pelo
    // rótulo, sem truncar — é o que aparece no e-mail.
    var id = 'f' + (++FIELD_SEQ) + '-' + slug(f._ptLabel || f.label);
    var name = slug(f._ptLabel || f.label);
    var wrap = el('div', 'field' + (f.width ? ' w-' + f.width : ''));
    var req = f.required ? ' <span class="req" aria-hidden="true">*</span>' : '';

    if (f.type === 'checkbox' || f.type === 'radio') {
      var group = el('fieldset', 'choice');
      group.appendChild(el('legend', null, rich(f.label) + req));
      if (f.hint) group.appendChild(el('span', 'hint', rich(f.hint)));
      (f.options || []).forEach(function (o, i) {
        var oid = id + '-' + i;
        var row = el('label', 'opt');
        row.setAttribute('for', oid);
        var input = document.createElement('input');
        input.type = f.type;
        input.id = oid;
        input.name = name;
        input.value = o;
        if (f.required && f.type === 'radio') input.required = true;
        row.appendChild(input);
        row.appendChild(el('span', null, rich(o)));
        group.appendChild(row);
      });
      return group;
    }

    var lab = el('label', null, rich(f.label) + req);
    lab.setAttribute('for', id);
    wrap.appendChild(lab);
    if (f.hint) wrap.appendChild(el('span', 'hint', rich(f.hint)));

    var input;
    if (f.type === 'textarea') {
      input = el('textarea');
    } else if (f.type === 'select') {
      input = el('select');
      input.appendChild(el('option', null, ''));
      (f.options || []).forEach(function (o) {
        var opt = el('option', null, rich(o));
        opt.value = o;
        input.appendChild(opt);
      });
    } else {
      input = el('input');
      input.setAttribute('type', f.type || 'text');
    }
    input.id = id;
    input.name = name;
    if (f.placeholder) input.setAttribute('placeholder', f.placeholder);
    if (f.required) input.setAttribute('required', 'required');
    wrap.appendChild(input);
    return wrap;
  }

  /* -------------------------------------------------------- page renderer */

  function renderBlocks(s) {
    var frag = document.createDocumentFragment();
    (s.blocks || []).forEach(function (b) {
      var fn = RENDER[b.type];
      if (!fn) return;
      var node = fn(b);
      if (b.intro) {
        var p = el('p', 'b-intro', rich(b.intro));
        var h = node.querySelector(':scope > h3, :scope > strong');
        if (h) { h.insertAdjacentElement('afterend', p); }
        else { node.insertBefore(p, node.firstChild); }
      }
      if (b.noteTone) {
        var notes = node.querySelectorAll('.note');
        for (var n = 0; n < notes.length; n++) {
          notes[n].classList.add('note-' + b.noteTone);
        }
      }
      frag.appendChild(node);
    });
    return frag;
  }

  var openBars = {};

  function accordionItem(s, num) {
    var open = !!openBars[s.id];
    var item = el('div', 'acc-item' + (open ? ' is-open' : '') +
      (s.tone ? ' tone-' + s.tone : ''));
    item.id = 'sec-' + s.id;

    var bodyId = 'body-' + s.id;
    var btnId = 'btn-' + s.id;

    var h = el('h2', 'acc-head');
    var btn = el('button', 'acc-btn');
    btn.type = 'button';
    btn.id = btnId;
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-controls', bodyId);

    var text = el('span', 'acc-text');
    text.appendChild(el('span', 'acc-eyebrow',
      '<span class="num">#' + num + '</span>' + (s.eyebrow ? rich(s.eyebrow) : '')));
    text.appendChild(el('span', 'acc-title', rich(s.title || s.id)));
    var teaser = s.teaser || s.lead;
    if (teaser) text.appendChild(el('span', 'acc-teaser', rich(teaser)));
    btn.appendChild(text);
    btn.appendChild(el('span', 'acc-mark', '<svg viewBox="0 0 16 16" aria-hidden="true" ' +
      'width="16" height="16"><path d="M3 6l5 5 5-5" fill="none" stroke="currentColor" ' +
      'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'));

    btn.addEventListener('click', function () { toggleBar(s.id); });
    h.appendChild(btn);
    item.appendChild(h);

    var body = el('div', 'acc-body');
    body.id = bodyId;
    body.setAttribute('role', 'region');
    body.setAttribute('aria-labelledby', btnId);
    var inner = el('div', 'acc-inner');
    var wrap = el('div', 'wrap');
    wrap.appendChild(renderBlocks(s));
    inner.appendChild(wrap);
    body.appendChild(inner);
    item.appendChild(body);

    return item;
  }

  function toggleBar(id) {
    var now = !openBars[id];
    if (now) { openBars[id] = 1; } else { delete openBars[id]; }
    render();
    if (now) {
      var node = document.getElementById('sec-' + id);
      if (node) {
        var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        var top = node.getBoundingClientRect().top;
        if (top < 0 || top > window.innerHeight * 0.6) {
          node.scrollIntoView({ block: 'start', behavior: reduce ? 'auto' : 'smooth' });
        }
        var btn = document.getElementById('btn-' + id);
        if (btn) btn.focus({ preventScroll: true });
      }
    }
  }

  function render() {
    var main = document.getElementById('page');
    if (!main) return;
    main.innerHTML = '';
    FIELD_SEQ = 0;

    var group = el('div', 'acc');
    SECTIONS.forEach(function (s, i) {
      group.appendChild(accordionItem(s, pad2(i + 1)));
    });
    main.appendChild(group);

    // Links absolutos no conteúdo (href="/privacidade") viram relativos à
    // raiz do site — no GitHub Pages a raiz pode ser um subdiretório.
    var base = document.documentElement.getAttribute('data-base') || '';
    var links = main.querySelectorAll('a[href^="/"]');
    for (var li = 0; li < links.length; li++) {
      var href = links[li].getAttribute('href');
      links[li].setAttribute('href', base + href.slice(1) + (href === '/' || /\/$/.test(href) ? '' : '/'));
    }
  }

  // Abre a barra pedida no hash (#sec-formulario) ao carregar.
  function openFromHash() {
    var m = (window.location.hash || '').match(/^#sec-(.+)$/);
    if (m) { openBars[m[1]] = 1; }
  }

  window.addEventListener('DOMContentLoaded', function () {
    openFromHash();
    render();
    if (window.location.hash) {
      var node = document.querySelector(window.location.hash);
      if (node) node.scrollIntoView();
    }
  });
})();
