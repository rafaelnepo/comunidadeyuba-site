/* A mesa — refeições.
   Fonte: research/new-yuba-website-plan.txt L184–202

   SEPARADO da hospedagem de propósito: a comida de Yuba é atração, não
   logística. Arroz e feijão com legumes colhidos no mesmo dia é metade do
   motivo de alguém vir passar uma semana aqui. */

YUBA.section({
  id: 'comer',
  eyebrow: 'A mesa',
  title: 'O que comemos em Yuba?',
  teaser: 'Quatro refeições por dia, caseiras e japonesas, com hortaliças colhidas de manhã.',
  source: 'plan.txt L184–202',
  blocks: [

    {
      type: 'schedule',
      label: 'Horários',
      title: 'Horário das refeições',
      intro: 'São quatro refeições por dia, servidas em horário combinado. A comunidade ' +
             'come junta.',
      items: [
        { name: 'Café da manhã', time: '6h às 8h' },
        { name: 'Almoço', time: '11h às 12h' },
        { name: 'Lanche', time: '13h às 15h' },
        { name: 'Jantar', time: '18h às 19h' }
      ]
    },

    {
      type: 'cards',
      label: 'O que se come',
      title: 'O que se come',
      intro: 'Comida caseira, entre a cozinha japonesa e a brasileira, com o que a horta ' +
             'deu no dia.',
      columns: 3,
      items: [
        {
          // O rótulo era "caseiro / japonês" nos três, o que a intro já diz.
          meta: 'Pão ou arroz',
          title: 'Café da manhã',
          body: [
            'Pão com manteiga e geleia, ovos, e as opções japonesas de sempre: arroz ' +
            'branco e conservas.',
            'A refeição mais calma do dia, antes de todo mundo ir trabalhar.'
          ]
        },
        {
          meta: 'Colhido no dia',
          title: 'Almoço',
          body: [
            'Sempre arroz e feijão, com uma seleção de legumes colhidos na horta naquela ' +
            'mesma manhã.',
            'Variado e saudável. Vegetarianos têm bastante opção para escolher.'
          ]
        },
        {
          meta: 'Prato do dia',
          title: 'Jantar',
          body: [
            'Todo dia um prato diferente, conforme a especialidade da equipe que está ' +
            'na cozinha.',
            'Ramen, karê, feijoada, espaguete, tempurá, mapo tofu.'
          ]
        }
      ]
    },

    {
      type: 'callout',
      label: 'Restrições alimentares',
      tone: 'warn',
      title: 'Sobre restrições alimentares',
      wide: true,
      intro: 'Uma resposta honesta para quem tem restrição alimentar, antes de decidir vir.',
      items: [
        'Como Yuba não é um hotel, fica difícil atender restrições para vegetarianos, ' +
        'veganos ou pessoas com intolerâncias. Não conseguimos fazer pratos especiais.',
        'Mas temos uma boa seleção variada no dia a dia, e podemos tirar dúvidas sobre o ' +
        'preparo e os temperos. Nunca tivemos ninguém que passasse por dificuldade ou ' +
        'ficasse com fome durante a estadia.'
      ]
    }

  ]
});
