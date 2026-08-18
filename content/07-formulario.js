/* GERADO de content/site/07-formulario.json por scripts/build-content.mjs — NÃO EDITE.
   Fontes e decisões desta seção: content/site/FONTES.md */
YUBA.section({
  "id": "formulario",
  "eyebrow": "Reserva",
  "title": "Quero vir. E agora?",
  "teaser": "Seis formulários, um para cada jeito de se aproximar. O primeiro é só uma pergunta.",
  "lead": "Escolha o formulário que combina com o que você quer. Nenhum deles é um compromisso: são pedidos, e a gente responde combinando os detalhes.",
  "source": "plan.txt L276–368 · estrutura de #04",
  "blocks": [
    {
      "type": "prose",
      "label": "Qual formulário é o seu",
      "items": [
        "Cada jeito de estar aqui pede um combinado diferente, e por isso pede um formulário diferente. Quem só quer tirar uma dúvida não precisa preencher datas e documentos; quem vai dormir aqui precisa que a gente saiba quantas camas preparar.",
        "Se estiver em dúvida, comece pelo primeiro. Ele serve para qualquer coisa, e a gente indica o caminho depois."
      ]
    },
    {
      "type": "forms",
      "label": "Os seis formulários",
      "items": [
        {
          "label": "Só uma pergunta",
          "hint": "Para qualquer dúvida. Três campos.",
          "title": "Primeiro contato",
          "intro": "Não precisa saber ainda se vai vir, nem quando. Pergunte.",
          "submit": "Enviar pergunta",
          "after": "Respondemos em poucos dias, no mesmo canal.",
          "groups": [
            {
              "fields": [
                {
                  "label": "Seu nome",
                  "type": "text",
                  "required": true
                },
                {
                  "label": "E-mail ou WhatsApp",
                  "type": "text",
                  "required": true,
                  "hint": "O que for mais fácil para você."
                },
                {
                  "label": "O que você quer saber?",
                  "type": "textarea",
                  "required": true
                }
              ]
            }
          ]
        },
        {
          "label": "Passar o dia",
          "hint": "Visita guiada ou excursão escolar, sem dormir.",
          "title": "Visita de um dia",
          "intro": "Visitas e excursões são agendadas conforme a disponibilidade da comunidade, então quanto mais cedo melhor.",
          "submit": "Pedir uma data",
          "after": "A data só está guardada depois da nossa confirmação.",
          "groups": [
            {
              "title": "Quem está pedindo",
              "fields": [
                {
                  "label": "Seu nome",
                  "type": "text",
                  "required": true
                },
                {
                  "label": "E-mail",
                  "type": "email",
                  "required": true
                },
                {
                  "label": "Telefone / WhatsApp",
                  "type": "tel",
                  "required": true
                },
                {
                  "label": "Instituição ou escola",
                  "type": "text",
                  "hint": "Se for excursão escolar."
                }
              ]
            },
            {
              "title": "A visita",
              "note": "Grupo recomendado: de 6 a 8 pessoas. Excursão escolar: até 30, contando acompanhantes.",
              "fields": [
                {
                  "label": "Tipo de visita",
                  "type": "radio",
                  "required": true,
                  "options": [
                    "Visita guiada",
                    "Excursão escolar"
                  ]
                },
                {
                  "label": "Data pretendida",
                  "type": "date",
                  "required": true
                },
                {
                  "label": "Data alternativa",
                  "type": "date"
                },
                {
                  "label": "Quantas pessoas",
                  "type": "number",
                  "required": true,
                  "hint": "Até cerca de 30 pessoas por visita."
                },
                {
                  "label": "Alguma coisa que vocês querem muito ver?",
                  "type": "textarea",
                  "hint": "A horta, os ateliês, a fábrica de missô, o teatro."
                }
              ]
            }
          ]
        },
        {
          "label": "Ficar hospedado",
          "hint": "Dormir aqui, com as refeições da comunidade.",
          "title": "Pedido de hospedagem",
          "intro": "É o formulário mais longo, porque é o que exige mais preparo do nosso lado: quarto, cama e comida para os dias que você ficar.",
          "submit": "Solicitar hospedagem",
          "after": "A reserva é confirmada depois do nosso retorno, com o pagamento de 20% do valor total.",
          "groups": [
            {
              "title": "Quem responde pela reserva",
              "fields": [
                {
                  "label": "Nome completo",
                  "type": "text",
                  "required": true
                },
                {
                  "label": "CPF",
                  "type": "text",
                  "hint": "Para brasileiros."
                },
                {
                  "label": "Passaporte nº",
                  "type": "text",
                  "hint": "Para estrangeiros."
                },
                {
                  "label": "Data de nascimento",
                  "type": "date",
                  "required": true
                },
                {
                  "label": "Telefone / WhatsApp / Line",
                  "type": "tel",
                  "required": true
                },
                {
                  "label": "E-mail",
                  "type": "email",
                  "required": true
                },
                {
                  "label": "Cidade / Estado",
                  "type": "text",
                  "required": true
                },
                {
                  "label": "País",
                  "type": "text",
                  "hint": "Se estrangeiro."
                }
              ]
            },
            {
              "title": "As datas",
              "note": "2 dias / 1 noite para uma visita de fim de semana. 7 dias / 6 noites para imersão.",
              "fields": [
                {
                  "label": "Chegada",
                  "type": "date",
                  "required": true
                },
                {
                  "label": "Saída",
                  "type": "date",
                  "required": true
                },
                {
                  "label": "Horário estimado de chegada",
                  "type": "select",
                  "required": true,
                  "options": [
                    "Manhã, 6h às 10h",
                    "Almoço, 11h às 14h",
                    "Tarde, 15h às 18h",
                    "Noite, 19h às 23h"
                  ]
                }
              ]
            },
            {
              "title": "Quem vem",
              "note": "De 3 a 4 pessoas é a quantidade que melhor aproveita a comunidade.",
              "fields": [
                {
                  "label": "Total de pessoas",
                  "type": "number",
                  "required": true
                },
                {
                  "label": "Adultos e adolescentes, a partir de 13 anos",
                  "type": "number",
                  "required": true
                },
                {
                  "label": "Crianças até 12 anos",
                  "type": "number"
                },
                {
                  "label": "Idade das crianças",
                  "type": "text",
                  "hint": "Ex.: 4, 7 e 11 anos."
                },
                {
                  "label": "Precisa de berço?",
                  "type": "radio",
                  "options": [
                    "Sim",
                    "Não"
                  ]
                }
              ]
            },
            {
              "title": "Alimentação",
              "note": "Yuba não é um hotel, então não conseguimos fazer pratos especiais. Perguntamos para poder conversar sobre o preparo e os temperos.",
              "fields": [
                {
                  "label": "Restrições alimentares",
                  "type": "checkbox",
                  "options": [
                    "Nenhuma",
                    "Vegetariano / vegano",
                    "Intolerância ou alergia"
                  ]
                },
                {
                  "label": "Se houver, especifique",
                  "type": "textarea"
                }
              ]
            },
            {
              "title": "Chegada",
              "fields": [
                {
                  "label": "Como pretende chegar",
                  "type": "radio",
                  "options": [
                    "Carro próprio",
                    "Avião até Araçatuba",
                    "Ônibus até Mirandópolis",
                    "Ainda não sei"
                  ]
                },
                {
                  "label": "Precisa de informações de acesso?",
                  "type": "radio",
                  "options": [
                    "Sim",
                    "Não"
                  ]
                }
              ]
            },
            {
              "title": "Pagamento",
              "note": "A reserva é de 20% do valor total. Dinheiro, Pix, transferência ou cartão.",
              "fields": [
                {
                  "label": "Forma de pagamento preferida",
                  "type": "radio",
                  "options": [
                    "Pix",
                    "Transferência",
                    "Cartão de crédito",
                    "Dinheiro"
                  ]
                },
                {
                  "label": "Está ciente da política de pagamento antecipado?",
                  "type": "checkbox",
                  "options": [
                    "Sim"
                  ],
                  "required": true
                },
                {
                  "label": "Está ciente da política de cancelamento?",
                  "type": "checkbox",
                  "options": [
                    "Sim"
                  ],
                  "required": true
                }
              ]
            },
            {
              "title": "Mais alguma coisa",
              "fields": [
                {
                  "label": "Observações",
                  "type": "textarea",
                  "hint": "Comemoração, mobilidade reduzida, qualquer coisa que ajude."
                },
                {
                  "label": "Autorizo contato por WhatsApp ou e-mail para confirmação",
                  "type": "checkbox",
                  "options": [
                    "Sim"
                  ],
                  "required": true
                }
              ]
            }
          ]
        },
        {
          "label": "Viver e aprender",
          "hint": "Mochileiros, no modelo WWOOF. Trabalho no campo em troca de estadia.",
          "title": "Mochileiro / WWOOF",
          "intro": "Estadia, alimentação e treinamento em troca de ajuda nas tarefas do campo. Conte um pouco de você.",
          "submit": "Enviar candidatura",
          "after": "A acomodação é coletiva, separada em dois ambientes.",
          "groups": [
            {
              "title": "Quem é você",
              "fields": [
                {
                  "label": "Nome completo",
                  "type": "text",
                  "required": true
                },
                {
                  "label": "E-mail",
                  "type": "email",
                  "required": true
                },
                {
                  "label": "Telefone / WhatsApp",
                  "type": "tel",
                  "required": true
                },
                {
                  "label": "De onde você vem",
                  "type": "text",
                  "required": true
                },
                {
                  "label": "Idiomas que você fala",
                  "type": "text",
                  "hint": "Português, japonês, inglês, outros."
                },
                {
                  "label": "Idade",
                  "type": "number",
                  "required": true
                }
              ]
            },
            {
              "title": "A estadia",
              "fields": [
                {
                  "label": "A partir de quando",
                  "type": "date",
                  "required": true
                },
                {
                  "label": "Quanto tempo pretende ficar",
                  "type": "text",
                  "required": true,
                  "hint": "Uma semana, um mês, o que fizer sentido para você."
                },
                {
                  "label": "Já trabalhou no campo antes?",
                  "type": "radio",
                  "options": [
                    "Sim",
                    "Não",
                    "Um pouco"
                  ]
                },
                {
                  "label": "Conte um pouco dessa experiência",
                  "type": "textarea"
                }
              ]
            },
            {
              "title": "Para a gente se organizar",
              "fields": [
                {
                  "label": "Alguma limitação física ou de saúde que devemos saber?",
                  "type": "textarea",
                  "hint": "O trabalho é ao ar livre, com sol, terra e esforço físico."
                },
                {
                  "label": "Por que Yuba?",
                  "type": "textarea",
                  "required": true
                }
              ]
            }
          ]
        },
        {
          "label": "Residência artística",
          "hint": "Três meses trocando ofício. Estamos procurando gente.",
          "title": "Residência artística",
          "intro": "Estamos sempre procurando artistas e professores para passar cerca de três meses aqui, ensinando o seu ofício e aprendendo o nosso. Piano, língua japonesa, ilustração, dança, cerâmica, marcenaria, e o que mais você trouxer.",
          "submit": "Propor uma residência",
          "after": "Respondemos todas as propostas, mesmo quando a data não fecha.",
          "groups": [
            {
              "title": "Quem é você",
              "fields": [
                {
                  "label": "Nome completo",
                  "type": "text",
                  "required": true
                },
                {
                  "label": "E-mail",
                  "type": "email",
                  "required": true
                },
                {
                  "label": "Telefone / WhatsApp",
                  "type": "tel",
                  "required": true
                },
                {
                  "label": "Cidade e país",
                  "type": "text",
                  "required": true
                },
                {
                  "label": "Idiomas que você fala",
                  "type": "text",
                  "required": true,
                  "hint": "Aqui dentro se fala japonês e português."
                }
              ]
            },
            {
              "title": "O seu ofício",
              "note": "Esta lista não é fechada. Se o seu ofício não está aí, conte para a gente mesmo assim.",
              "fields": [
                {
                  "label": "Área principal",
                  "type": "select",
                  "required": true,
                  "options": [
                    "Piano ou música",
                    "Língua japonesa",
                    "Ilustração e desenho",
                    "Dança",
                    "Cerâmica",
                    "Marcenaria",
                    "Teatro",
                    "Fotografia ou vídeo",
                    "Têxtil e costura",
                    "Outra"
                  ]
                },
                {
                  "label": "Descreva a sua prática",
                  "type": "textarea",
                  "required": true
                },
                {
                  "label": "Já ensinou antes?",
                  "type": "radio",
                  "options": [
                    "Sim, com regularidade",
                    "Algumas vezes",
                    "Ainda não"
                  ]
                }
              ]
            },
            {
              "title": "O seu portfólio",
              "note": "Não precisa ser nada formal. Se o seu trabalho vive num perfil do Instagram ou num canal do YouTube, é o suficiente. Se preferir mandar arquivos, responda o nosso e-mail depois com eles anexados.",
              "fields": [
                {
                  "label": "Link principal",
                  "type": "url",
                  "placeholder": "https://",
                  "hint": "Site, YouTube, Vimeo, Instagram, Behance, SoundCloud, o que for."
                },
                {
                  "label": "Outros links",
                  "type": "textarea",
                  "hint": "Um por linha, se tiver mais de um."
                }
              ]
            },
            {
              "title": "A troca",
              "fields": [
                {
                  "label": "O que você gostaria de ensinar aqui?",
                  "type": "textarea",
                  "required": true,
                  "hint": "Para quem: crianças, jovens, adultos, a comunidade toda."
                },
                {
                  "label": "O que você gostaria de aprender com a gente?",
                  "type": "textarea",
                  "hint": "Lavoura, cerâmica no noborigama, missô, japonês, teatro, o dia a dia."
                }
              ]
            },
            {
              "title": "Quando",
              "note": "A referência são três meses, mas conversamos sobre períodos diferentes. Entre 17 de dezembro e 10 de janeiro a comunidade para.",
              "fields": [
                {
                  "label": "A partir de quando",
                  "type": "date",
                  "required": true
                },
                {
                  "label": "Por quanto tempo",
                  "type": "select",
                  "required": true,
                  "options": [
                    "Cerca de 1 mês",
                    "Cerca de 2 meses",
                    "Cerca de 3 meses",
                    "Mais de 3 meses",
                    "A combinar"
                  ]
                },
                {
                  "label": "Mais alguma coisa que a gente deva saber?",
                  "type": "textarea"
                }
              ]
            }
          ]
        },
        {
          "label": "Governo e instituições",
          "hint": "Órgãos públicos, universidades, editais, imprensa institucional.",
          "title": "Contato institucional",
          "intro": "A Associação Comunidade Yuba existe desde 1935 e opera continuamente desde então. Temos CNPJ, documentação e histórico à disposição de quem precisar avaliá-los.",
          "submit": "Enviar contato institucional",
          "after": "Encaminhamos para a presidência e a tesouraria. Documentação formal é enviada mediante solicitação.",
          "groups": [
            {
              "title": "A instituição",
              "fields": [
                {
                  "label": "Nome da instituição ou órgão",
                  "type": "text",
                  "required": true
                },
                {
                  "label": "Natureza",
                  "type": "select",
                  "required": true,
                  "options": [
                    "Governo municipal",
                    "Governo estadual",
                    "Governo federal",
                    "Universidade ou centro de pesquisa",
                    "Instituto, fundação ou ONG",
                    "Consulado ou embaixada",
                    "Imprensa institucional",
                    "Outra"
                  ]
                },
                {
                  "label": "CNPJ ou equivalente",
                  "type": "text"
                },
                {
                  "label": "Site",
                  "type": "url",
                  "placeholder": "https://"
                }
              ]
            },
            {
              "title": "Quem está falando",
              "fields": [
                {
                  "label": "Nome",
                  "type": "text",
                  "required": true
                },
                {
                  "label": "Cargo ou função",
                  "type": "text",
                  "required": true
                },
                {
                  "label": "E-mail institucional",
                  "type": "email",
                  "required": true
                },
                {
                  "label": "Telefone",
                  "type": "tel"
                }
              ]
            },
            {
              "title": "O motivo do contato",
              "fields": [
                {
                  "label": "Natureza do contato",
                  "type": "radio",
                  "required": true,
                  "options": [
                    "Visita oficial ou comitiva",
                    "Pesquisa acadêmica",
                    "Edital, fomento ou projeto",
                    "Parceria cultural",
                    "Registro, documentação ou reportagem",
                    "Patrimônio e preservação",
                    "Outro"
                  ]
                },
                {
                  "label": "Descreva o que está sendo proposto",
                  "type": "textarea",
                  "required": true
                },
                {
                  "label": "Prazo ou data de referência",
                  "type": "date",
                  "hint": "Data da visita, prazo do edital, prazo da publicação."
                },
                {
                  "label": "Quantas pessoas, se for visita",
                  "type": "number"
                }
              ]
            },
            {
              "title": "Documentação",
              "note": "Diga o que precisa e enviamos. Não publicamos esses documentos no site, mas eles existem e estão organizados.",
              "fields": [
                {
                  "label": "Precisa de alguma documentação nossa?",
                  "type": "checkbox",
                  "options": [
                    "CNPJ e dados cadastrais",
                    "Estatuto da associação",
                    "Histórico e registro de atividades",
                    "Declarações ou certidões",
                    "Nada por enquanto"
                  ]
                },
                {
                  "label": "Link para o edital, ofício ou termo de referência",
                  "type": "url",
                  "placeholder": "https://",
                  "hint": "Se o documento não tiver link, responda o nosso e-mail com o anexo."
                }
              ]
            }
          ]
        }
      ],
      "flag": "residência e institucional: condições a definir"
    }
  ]
});
