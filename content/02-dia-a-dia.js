/* Dia a dia — o que tem pra fazer.
   Fonte: research/new-yuba-website-plan.txt L11–25
          + docs/knowledge/community-overview.md §"How the community works"

   REDESENHO (15 ago 2026): abre pelo trabalho e pela divisão de tarefas, que
   é o que de fato ocupa o dia. Os horários fixos ficam no fim. Os lugares
   viraram cartões de duas colunas, prontos para receber foto: basta
   acrescentar `img` e `imgAlt` ao cartão.

   ✅ RESOLVIDO (Rafael, 15 ago 2026): são dois museus, não um. O **Osamu Sato**
      está descontinuado e não entra no site. O **Kitahara Wako**, em outro
      prédio, está ativo — é este que aparece aqui.
      Ver docs/knowledge/library-and-museum.md. */

YUBA.section({
  id: 'dia-a-dia',
  eyebrow: 'Dia a dia',
  title: 'O que se faz por aqui?',
  teaser: 'Todo mundo tem tarefas, e ninguém tem só uma. Lavoura, ateliês, cozinha, ' +
          'biblioteca — e ballet três vezes por semana.',
  lead: 'O dia aqui é feito de trabalho. Nada disso é programação para visitante: são ' +
        'coisas que alguém faz todo dia, e quem está aqui participa.',
  source: 'plan.txt L11–25 · knowledge/community-overview.md',
  blocks: [

    {
      type: 'prose',
      label: 'Como o trabalho se divide',
      items: [
        'Todo mundo aqui tem tarefas: a lavoura, o refeitório, a criação de animais, a ' +
        'administração, os arquivos, o estudo de japonês, as artes. Mas a função de cada ' +
        'um é deliberadamente flexível. Quem tem várias habilidades usa todas elas, e ' +
        'quando aparece uma demanda maior, todo mundo entra junto para dar conta.',
        'Uma mesma pessoa pode ser cenógrafa, cozinheira, diretora de teatro e bailarina. ' +
        'Isso não é exceção, é como a comunidade funciona. A renda é comum, sob o conceito ' +
        'de uma grande família, e volta para a saúde, a educação, a cultura e o lazer de ' +
        'todos.'
      ]
    },

    {
      type: 'cards',
      label: 'Onde o dia acontece',
      title: 'Onde o dia acontece',
      intro: 'Cada lugar tem alguém responsável, e todos ficam abertos a quem está aqui.',
      columns: 2,
      items: [
        {
          title: 'Horta e lavoura',
          body: ['Shiitake, goiaba, quiabo, manga e as hortaliças do dia. Colhe-se de manhã ' +
                 'o que vai para o almoço, e o excedente vai para os mercados da região.']
        },
        {
          title: 'Refeitório',
          body: ['O coração da comunidade. Além das refeições, é onde acontecem as reuniões, ' +
                 'as palestras, os concertos e as festas.']
        },
        {
          title: 'Fábrica de missô e shoyu',
          body: ['Fermentação lenta, em tonéis que ficam meses parados. É de onde sai boa ' +
                 'parte do que a comunidade vende.']
        },
        {
          title: 'Galeria de cerâmica',
          body: ['As peças feitas aqui e o forno noborigama, aceso de tempos em tempos.']
        },
        {
          title: 'Atelier de couro e luthier',
          body: ['Trabalho de couro de um lado, instrumentos de corda do outro, na mesma ' +
                 'oficina.']
        },
        {
          title: 'Atelier de costura',
          body: ['Roupa de trabalho, remendo, e os figurinos das apresentações de dança ' +
                 'e teatro.']
        },
        {
          title: 'Biblioteca japonesa',
          body: ['Quase toda em japonês, com uma coleção grande de mangás. É o que mantém ' +
                 'a língua viva entre as gerações.']
        },
        {
          title: 'Museu Kitahara Wako',
          body: ['Livros e documentos sobre a história da imigração japonesa, da comunidade ' +
                 'e da Aliança.']
        },
        {
          title: 'Jardim de esculturas',
          body: ['Esculturas de pedra ao ar livre, espalhadas pelo caminho entre as casas.']
        },
        {
          title: 'Campo de baseball',
          body: ['Jogos da comunidade, e de vez em quando campeonatos que trazem times ' +
                 'da região.']
        }
      ]
    },

    {
      type: 'cards',
      label: 'Com hora marcada',
      title: 'Com hora marcada',
      intro: 'Quase tudo se organiza sozinho. Só duas coisas têm dia e hora.',
      columns: 2,
      items: [
        {
          meta: 'Segunda, quarta e sexta',
          title: 'Aula de dança e ballet',
          body: ['Das 20:30 às 22:00, depois do jantar. É de onde saem as apresentações ' +
                 'que a comunidade faz desde 1961.']
        },
        {
          meta: 'Sextas-feiras, a partir das 17h',
          title: 'Feira de gastronomia',
          body: ['No bairro Primeira Aliança, do lado de fora da comunidade. Vale combinar ' +
                 'a visita com uma sexta.'],
          flag: 'confirmar horário de encerramento'
        }
      ]
    }

  ]
});
