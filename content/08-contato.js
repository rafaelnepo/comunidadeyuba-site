/* Contato / suporte / dúvidas.
   Fonte: research/new-yuba-website-plan.txt L1–6 + L247–259

   As pessoas ficam — é bom saber quem cuida do quê antes de escrever.
   Mas sem telefone e sem e-mail individual: tudo entra pelo formulário ou
   pelo endereço da comunidade, e a gente encaminha internamente. */

YUBA.section({
  id: 'contato',
  eyebrow: 'Contato',
  title: 'Com quem eu falo?',
  lead: 'Preencha o formulário de reserva ou escreva um e-mail. A gente encaminha para a ' +
        'pessoa certa aqui dentro. Você não precisa saber com quem falar.',
  source: 'plan.txt L1–6, L247–259',
  blocks: [

    {
      type: 'prose',
      label: 'Como funciona',
      items: [
        'Para visitas, o formulário é o caminho mais rápido: ele já traz as datas e quantas ' +
        'pessoas, que é o que precisamos para responder de uma vez. Para todo o resto, ' +
        'escreva para <a href="mailto:contato@comunidadeyuba.org">contato@comunidadeyuba.org</a>. ' +
        'Somos uma comunidade pequena e lemos tudo, e a resposta costuma sair em poucos dias.'
      ]
    },

    {
      type: 'subject',
      label: 'Exemplo de assunto',
      intro: 'No assunto, escreva <strong>seu nome + o assunto que procura</strong>. ' +
             'Assim a mensagem chega direto em quem cuida do tema.',
      field: 'Assunto',
      items: [
        'Maria Silva + Hospedagem',
        'João Tanaka + Visitas e Passeios'
      ]
    },

    {
      type: 'contacts',
      label: 'Quem cuida do quê',
      people: [
        // Ordem: a diretoria em cima, quem atende hospedagem embaixo.
        // A grade é de duas colunas: Issamu | Daigo, depois Hitomi | Rafael.
        { name: 'Issamu Yazaki', role: 'Presidente · Governos',
          langs: 'Português · Inglês · 日本語' },
        { name: 'Daigo Yuba', role: 'Tesoureiro', langs: 'Português · Inglês · 日本語' },
        { name: 'Hitomi Yuba', role: 'Hospedagem · Visitas do Japão',
          langs: '日本語 · Japonês' },
        { name: 'Rafael Nepô', role: 'Diretor Cultural · Visitas e Passeios',
          langs: 'Português · Inglês' }
      ]
    }

  ]
});
