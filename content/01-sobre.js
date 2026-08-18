/* Sobre Yuba — a primeira barra da sanfona.
   Fonte: research/new-yuba-website-plan.txt L8–9 (clima)
          + a seção "O que é Yuba" do site publicado
            <https://comunidadeyuba.framer.website>, recolhida em 15 ago 2026
          + docs/knowledge/community-overview.md

   O texto do site publicado entra quase inteiro aqui, quebrado em cartões:
   o teatro, o balé, o Natal e a vida daqui. É a parte que conta quem somos,
   e não cabia num parágrafo só.

   ⚠️ O site publicado diz "mais de mil apresentações" do balé; o README da
      raiz ainda diz "860+". O número do site é mais recente. Confirmar. */

YUBA.section({
  id: 'sobre',
  eyebrow: 'O que é Yuba',
  title: 'O que é a Comunidade Yuba?',
  lead: 'Uma vida em que trabalho, oração e arte não se separam.',
  teaser: 'Sessenta pessoas, quatro gerações, no interior de São Paulo desde 1935. ' +
          'O teatro, o balé, o Natal e a vida daqui.',
  source: 'plan.txt L8–9 · site publicado · knowledge/community-overview.md',
  blocks: [

    {
      type: 'prose',
      label: 'Abertura',
      items: [
        'Somos cerca de sessenta pessoas, de quatro gerações, vivendo e trabalhando juntas ' +
        'no interior de São Paulo desde 1935. Plantamos, rezamos e fazemos arte. Há ' +
        'noventa anos essas três coisas não se separam.'
      ]
    },

    {
      type: 'quote',
      label: 'O fundador',
      items: [
        'Fazer arte, praticar a religião, cultivar a terra. Uma vida em que estas três ' +
        'coisas estão em harmonia é o modo de viver essencial que o ser humano busca.'
      ],
      cite: 'Isamu Yuba, fundador'
    },

    {
      type: 'prose',
      label: 'A arte não é a terceira coisa',
      items: [
        'A arte não é uma terceira atividade ao lado do trabalho e da oração. É o modo ' +
        'como as duas são feitas.'
      ]
    },

    {
      type: 'cards',
      label: 'O teatro, o balé, o Natal e a vida daqui',
      // Dois por linha: quatro cartões fecham duas linhas cheias, sem órfão.
      // Quando as fotos chegarem, cada cartão recebe a sua no alto.
      columns: 2,
      items: [
        {
          meta: 'Desde 1961',
          title: 'O teatro',
          body: [
            'O Teatro Yuba foi construído em uma semana, no meio de um cafezal, em dezembro ' +
            'de 1961, para que houvesse Natal naquele ano. Trabalharam nele todos, de ' +
            'crianças a adultos.',
            'Os refletores são feitos à mão. A luz da plateia usa tampas de panelão. O ' +
            'guincho da cortina veio de um poço do tempo dos pioneiros. O chão é de areia.'
          ],
          note: 'Nossos avós aprenderam a criar onde não havia recurso. É disso que a ' +
                'nossa arte é feita.'
        },
        {
          meta: 'Desde 1961',
          title: 'O balé',
          body: [
            'O Balé Yuba começou quando chegaram de Tóquio o escultor Hisao Ohara e a ' +
            'bailarina Akiko Ohara.',
            'Já são mais de mil apresentações, no Brasil e no exterior. Hoje, quatro ' +
            'gerações sobem juntas ao palco.'
          ],
          flag: 'número de apresentações a confirmar'
        },
        {
          meta: 'Aberto ao público desde 1948',
          title: 'O Natal',
          body: [
            'Todos os anos, em 25 e 30 de dezembro, apresentamos no Teatro Yuba o resultado ' +
            'de um ano: música, balé e teatro.',
            'O trabalho do ano, uma ocasião sagrada e a arte do ano, na mesma noite.'
          ]
        },
        {
          meta: 'Nipo-brasileira caipira',
          title: 'A vida daqui',
          body: [
            'Dentro da comunidade fala-se japonês. As crianças aprendem português quando ' +
            'começam a ir à escola.',
            'Cerca de 80% do que se come aqui é produzido aqui: arroz, verduras, frutas, ' +
            'carne, pão, queijo, e também missô, shoyu e tofu. Plantamos goiaba, manga, ' +
            'quiabo e shiitake, e vendemos para a região.'
          ]
        }
      ]
    },

    {
      type: 'prose',
      label: 'Clima',
      items: [
        'É um lugar tranquilo. O outono e o inverno são quentes e secos; a primavera e o ' +
        'verão, mais húmidos e frescos.'
      ]
    }

    // Removido em 15 ago 2026: o aviso "Yuba não é um hotel". A ressalva não
    // se perdeu — ela reaparece onde de fato importa, em "Chegada e saída"
    // (#04) e no aviso sobre restrições alimentares (#03).

  ]
});
