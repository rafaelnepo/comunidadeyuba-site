/* Quando vir — o calendário e a escolha entre dia comum e dia de festa.
   Fonte: research/new-yuba-website-plan.txt L27–45 (meses) + L239–245 (eventos)

   MERGE: eram duas seções. Festa Junina e Bon Odori apareciam nas duas.

   REDESENHO (15 ago 2026): a seção passou a ter um ponto de vista. A pergunta
   de verdade não é "que mês?", é "cheio ou vazio?" — e a recomendação da
   comunidade é o dia comum, não a festa.

   ⚠️ CORRIGIDO pelo Rafael, 15 ago 2026: a fonte marca Festa Junina em junho.
      Na prática ela quase sempre cai em julho, junto com as férias escolares.
      Há também um calendário móvel (baseball, rodeios da região) que a fonte
      não menciona.

   O agrupamento por estação é o da fonte (trimestres redondos), não o
   calendário astronômico do hemisfério sul. Mantido fiel de propósito. */

YUBA.section({
  id: 'quando-vir',
  eyebrow: 'Quando vir',
  title: 'Quando é melhor vir?',
  teaser: 'Um dia comum ou um dia de festa. A gente recomenda o dia comum, ' +
          'e explica por quê.',
  lead: 'A pergunta não é bem qual mês. É se você quer encontrar a comunidade no ' +
        'ritmo de sempre, ou no meio de uma festa.',
  source: 'plan.txt L27–45, L239–245',
  blocks: [

    {
      type: 'split',
      label: 'Dia comum ou dia de festa',
      left: {
        title: 'Um dia comum',
        intro: 'É o que a gente recomenda.',
        items: [
          'Sem festa e sem multidão: a comunidade no ritmo de sempre. A horta de manhã ' +
          'cedo, o ateliê à tarde, o ensaio de dança à noite. Dá tempo de conversar, de ' +
          'aprender a fazer alguma coisa com as mãos, de não ter pressa.',
          'É também quando há mais quarto livre e mais gente disponível para receber ' +
          'você de verdade.'
        ]
      },
      right: {
        title: 'Um dia de festa',
        tone: 'warn',
        intro: 'Mais bonito, mais cheio, e as vagas acabam rápido.',
        items: [
          'Na Festa Junina, no Bon Odori e no Natal a comunidade inteira se mobiliza e ' +
          'vem muita gente de fora. É bonito de ver, e é também quando temos menos ' +
          'quartos livres e menos tempo para ficar com cada visitante.',
          'Se for essa a sua escolha, escreva com bastante antecedência.'
        ]
      }
    },

    {
      type: 'months',
      label: 'Calendário por estação',
      title: 'O ano, mês a mês',
      intro: 'Os meses sem nota são os mais tranquilos. Costumam ser os melhores.',
      seasons: [
        {
          name: 'Verão',
          months: [
            { name: 'Janeiro', note: 'Após o dia 10' },
            { name: 'Fevereiro' },
            { name: 'Março' }
          ]
        },
        {
          name: 'Outono',
          months: [
            { name: 'Abril' },
            { name: 'Maio' },
            { name: 'Junho' }
          ]
        },
        {
          name: 'Inverno',
          months: [
            { name: 'Julho', note: 'Festa Junina e férias escolares' },
            { name: 'Agosto' },
            { name: 'Setembro', note: 'Bon Odori' }
          ]
        },
        {
          name: 'Primavera',
          months: [
            { name: 'Outubro' },
            { name: 'Novembro', note: 'Ensaios de teatro e dança' },
            { name: 'Dezembro', note: 'Natal · até o dia 16' }
          ]
        }
      ],
      flag: 'mês do natal inferido'
    },

    {
      type: 'split',
      label: 'Datas fixas e calendário móvel',
      left: {
        title: 'O que tem data',
        intro: 'Volta todo ano, mais ou menos na mesma época.',
        defs: [
          { t: 'Festa Junina', d: 'quase sempre em julho, junto com as férias escolares' },
          { t: 'Bon Odori', d: 'setembro' },
          { t: 'Natal e Ano Novo', d: 'dezembro, a grande apresentação do ano' }
        ]
      },
      right: {
        title: 'O que muda de ano para ano',
        intro: 'Vale perguntar quando estiver escolhendo a data.',
        items: [
          'Os campeonatos de baseball não têm data fixa: o calendário muda a cada ' +
          'temporada, e às vezes o jogo acontece aqui mesmo, no campo da comunidade.',
          'A região também tem a sua própria agenda, com rodeios e festas nas cidades ' +
          'vizinhas ao longo do ano. Se quiser emendar a visita com alguma coisa dessas, ' +
          'pergunte para a gente.'
        ]
      },
      flag: 'calendário móvel a detalhar'
    },

    {
      type: 'callout',
      label: 'Janela fechada',
      tone: 'warn',
      title: 'Duas semanas sem hospedagem',
      intro: 'A casa de hóspedes fecha, mas a apresentação de Natal é aberta.',
      wide: true,
      items: [
        'Entre <strong>17 de dezembro e 10 de janeiro</strong> não recebemos hóspedes ' +
        'nem visitas guiadas. A comunidade inteira está no Natal, a apresentação de ' +
        'teatro e dança que se ensaia desde novembro, e depois dela vem o descanso.',
        'O espetáculo em si é aberto a quem quiser assistir. Dá para vir, ver a ' +
        'apresentação e se hospedar em Mirandópolis ou em outra cidade da região.'
      ],
      // A fonte diz "Janeiro: após dia 10" e "Dezembro: até dia 16". O intervalo
      // fechado entre os dois é leitura nossa, não está escrito. Confirmar.
      flag: 'inferido'
    }

  ]
});
