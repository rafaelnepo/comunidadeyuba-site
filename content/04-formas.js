/* Formas de vir e ficar.
   Fonte: research/new-yuba-website-plan.txt L137–141 (visitas guiadas),
          L143–216 (hospedagem), L218–224 (comodidades), L227–237 (mochileiros)

   MERGE: eram quatro seções. São três respostas para a mesma pergunta —
   "de que jeito eu venho?" — mais as praticidades de quem dorme aqui.
   O conceito das três formas já existe no site publicado ("os três caminhos").

   SIMPLIFICADO: preço, duração e tamanho de grupo eram três blocos separados;
   viraram um só. "Considerações" (terra) e "Cuidados" (bichos) viraram um
   aviso único sobre o campo. */

YUBA.section({
  id: 'formas',
  eyebrow: 'Como vir',
  title: 'Como funciona para visitar?',
  lead: 'Passar o dia, ficar hospedado, ou vir trabalhar com a gente. ' +
        'Cada uma pede um combinado diferente.',
  source: 'plan.txt L137–141, L143–216, L218–224, L227–237',
  blocks: [

    {
      type: 'cards',
      label: 'As três formas',
      intro: 'Cada um chega de um jeito, e todos cabem. Tem quem venha passar um dia, quem ' +
             'fique uns dias e entre no ritmo da casa, e quem chegue com vontade de pôr a ' +
             'mão na terra e aprender fazendo. Veja qual se parece com você. O combinado ' +
             'a gente acerta depois.',
      columns: 3,
      items: [
        {
          meta: 'Sem dormir',
          title: 'Passar o dia',
          price: 'Sob disponibilidade',
          body: [
            'Visitas guiadas e excursões escolares, agendadas conforme a disponibilidade ' +
            'da comunidade.',
            'A visita costuma incluir o museu, a biblioteca e os ateliês, além do que ' +
            'estiver acontecendo na comunidade naquele dia: a colheita, o forno de ' +
            'cerâmica aceso, um ensaio.'
          ],
          // Corrigido pelo Rafael, 15 ago 2026: a fonte dizia "8 pessoas" e
          // "30 pessoas / 1 turma". O número da excursão inclui professores
          // e acompanhantes, não só alunos.
          defs: [
            { t: 'Grupo recomendado', d: 'de 6 a 8 pessoas' },
            { t: 'Excursão escolar', d: 'até 30, com acompanhantes' }
          ],
          note: 'Agende com antecedência.'
        },
        {
          meta: 'Hóspede',
          title: 'Ficar hospedado',
          // Disponibilidade primeiro; os valores ficam na lista abaixo.
          price: 'Sob disponibilidade',
          body: [
            'Para visitantes de curta duração. Quarto na casa de hóspedes, com as refeições ' +
            'da comunidade incluídas.',
            'A acomodação é simples, como convém a uma fazenda: camas individuais, ' +
            'banheiro privativo e ventilador. Sem luxo, e sem faltar nada.'
          ],
          defs: [
            { t: 'A partir de 13 anos', d: 'R$ 150 / dia / pessoa' },
            { t: 'Crianças até 12 anos', d: 'R$ 100 / dia' }
          ],
          note: 'Valores de janeiro de 2026.'
        },
        {
          meta: 'Mochileiros · WWOOF',
          title: 'Viver e aprender',
          price: 'Sob disponibilidade',
          body: [
            'Para quem quer aprender fazendo, entrando na rotina do campo com quem ' +
            'faz isso há décadas.',
            'O trabalho acompanha o que a estação pede: plantio, colheita, cuidado. ' +
            'Em troca, oferecemos estadia, alimentação e treinamento.'
          ],
          defs: [
            { t: 'Acomodação', d: 'coletiva, separada por gênero' },
            { t: 'Quem procuramos', d: 'mochileiros e aventureiros' }
          ],
          note: 'Sem custo, e sem despesas.'
        }
      ],
      // A fonte escreve "World Wide Organization Organic Farming"; o nome correto
      // da rede é "World Wide Opportunities on Organic Farms".
      flag: 'nome WWOOF corrigido'
    },

    /* ---------------------------------------------- o essencial de hospedar */

    {
      type: 'cards',
      label: 'O essencial da hospedagem',
      title: 'Como funciona a hospedagem',
      intro: 'O que você precisa saber antes de escrever pedindo uma data.',
      columns: 3,
      items: [
        {
          title: 'Quanto tempo ficar',
          body: ['<strong>2 dias / 1 noite</strong> para uma visita de final de semana. ' +
                 '<strong>7 dias / 6 noites</strong> para imersão, quando a rotina da ' +
                 'comunidade deixa de ser paisagem e vira convivência.']
        },
        {
          title: 'Quantas pessoas',
          body: ['De 3 a 4 é o ideal. Descobrimos que é a quantidade que melhor aproveita ' +
                 'a comunidade. Reúna seus amigos.']
        },
        {
          title: 'Famílias',
          body: ['Muito bem-vindas. Tem espaço para correr, bicho para ver de perto e horta ' +
                 'para colher, e as crianças costumam entrar no ritmo daqui mais rápido que ' +
                 'os adultos.']
        },
        {
          // Sem "check-in" e "check-out": aqui ninguém opera uma recepção.
          title: 'Chegada e saída',
          body: ['Não temos horário de portaria. O quarto costuma ficar pronto até as 10h, ' +
                 'e a saída se combina conforme a sua viagem.']
        },
        {
          // Corrigido pelo Rafael, 15 ago 2026: a fonte lista só dinheiro, Pix e
          // transferência. Há maquininha, e ela também atende as compras.
          title: 'Pagamento',
          body: ['Dinheiro, Pix, transferência ou cartão de crédito. Temos maquininha, ' +
                 'que também atende as compras dentro da comunidade.']
        },
        {
          title: 'Reserva',
          body: ['20% do valor total. É o que nos permite guardar as datas e saber quantas ' +
                 'pessoas vamos receber.']
        }
      ]
    },

    {
      type: 'callout',
      label: 'Cancelamento',
      tone: 'warn',
      title: 'Política de cancelamento',
      intro: 'Planos mudam. Estas são as regras, ditas antes e não depois.',
      wide: true,
      items: [
        'Não conseguimos reembolsar o valor da reserva, então pedimos que cancelamentos ' +
        'sejam confirmados com 2 a 3 dias de antecedência. Se ninguém aparecer na data ' +
        'combinada, pedimos o pagamento de uma diária completa por pessoa cancelada, para ' +
        'cobrir o que já foi preparado para receber vocês.'
      ]
    },

    /* ------------------------------------------------------ quarto e bagagem */

    {
      type: 'split',
      label: 'O quarto e a mala',
      left: {
        title: 'Como são os quartos',
        // Puxado do último parágrafo, que abria com esta mesma ideia.
        intro: 'Simples, e feitos para você passar pouco tempo neles.',
        items: [
          'Na casa de hóspedes, de 2 a 3 pessoas por quarto, com camas individuais ' +
          'preparadas na véspera ou no dia da sua chegada, banheiro privativo com ' +
          'chuveiro e ventilador de mesa ou de teto. Ar-condicionado não temos.',
          'É que tem muito o que fazer lá fora: a horta de manhã cedo, os ateliês, a ' +
          'caminhada até a plantação, a conversa que ' +
          'começa depois do jantar e não tem hora para acabar. O quarto é para dormir bem ' +
          'e acordar com vontade de voltar para o lado de fora.'
        ]
      },
      right: {
        title: 'O que trazer',
        intro: 'A lista curta do que cabe na mala. O essencial é a primeira linha.',
        list: [
          '<strong>Toalhas</strong>: travesseiro e roupa de cama são nossos, a toalha é sua',
          'Repelente, chapéu e protetor solar',
          'Uma necessaire com mini shampoo e sabonete líquido',
          'Roupas leves, porém resistentes aos elementos',
          'Camisas de manga comprida, para proteger do sol',
          'Botas, para dias de chuva e caminhadas no mato'
        ]
      }
    },

    /* --------------------------------------------- o campo e as praticidades */

    {
      type: 'split',
      label: 'O campo e as praticidades',
      left: {
        title: 'Isto aqui é fazenda',
        tone: 'warn',
        intro: 'Duas coisas que surpreendem quem nunca ficou no interior.',
        items: [
          'É normal sujar bastante a roupa de terra. Traga roupas fáceis de limpar e ' +
          'resistentes, e que possam ser danificadas durante a estadia.',
          'No interior há mais vida natural: muitos pássaros e animais, mas também insetos, ' +
          'moscas, pernilongos, sapos e lagartixas. Com crianças, o cuidado é não explorar ' +
          'sem acompanhamento e não revirar pedras e madeiras: são esconderijos de cobras ' +
          'e escorpiões.'
        ]
      },
      right: {
        title: 'Internet e pets',
        intro: 'As duas perguntas que mais recebemos.',
        defs: [
          { t: 'Internet', d: 'WiFi rápido em toda a comunidade. Para reuniões online há ' +
               'espaço no Museu Kitahara Wako e na Biblioteca, com fibra ótica por cabo e ' +
               'satélite como backup. Dá para trabalhar enquanto se aproveita a comunidade.' },
          { t: 'Pets', d: 'Não recomendamos trazer. Temos cachorros e gatos soltos, não ' +
               'podemos nos responsabilizar por acidentes, e há risco de pulgas e ' +
               'carrapatos no campo.' }
        ]
      }
    }

  ]
});
