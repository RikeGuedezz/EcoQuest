
// ===== CONTEÚDOS (cards) =====
// Para adicionar ou editar conteúdos, altere somente este arquivo.
//
// Estrutura de cada card:
// apresentacao: texto introdutório.
// video: titulo, videoId, fonte e descricao.
// leitura: titulo, secoes, subtitulos, paragrafos e fonte.
//
// Para vídeos do YouTube, use somente o código que aparece depois de "v=".
// Exemplo: https://www.youtube.com/watch?v=o8N_apERY9g
// videoId: 'o8N_apERY9g'

export const cards = [

  // ===== CARD 1 =====
  {
    id: 1,
    tema: 'oceano',
    icone: '🌊',
    titulo: 'Conhecendo os Oceanos',
    descricao: 'Como os mares funcionam e quem vive neles.',

    apresentacao: 'Os oceanos cobrem cerca de 70% do planeta, regulam o clima e abrigam uma enorme variedade de vida.',

    video: {
      titulo: 'Conhecendo os Oceanos',
      videoId: 'nmvpiHEDlQE',
      fonte: '',
      descricao: ''
    },

    leitura: {
      titulo: 'Conhecendo os Oceanos',

      secoes: [
        {
          subtitulo: '',
          paragrafos: [
            'Os oceanos produzem grande parte do oxigênio que respiramos e absorvem calor e gás carbônico da atmosfera.',
            'Poluição, pesca excessiva e aquecimento da água ameaçam recifes de coral, tartarugas, peixes e aves marinhas.'
          ]
        }
      ],

      observacao: '',
      fonte: '',
      url: ''
    }
  },

  // ===== CARD 2 =====
  {
    id: 2,
    tema: 'mata',
    icone: '🌳',
    titulo: 'A importância das Florestas',
    descricao: 'O que as florestas fazem por nós e pelo clima.',

    apresentacao: 'As florestas guardam água, regulam a chuva, protegem o solo e abrigam milhares de espécies.',

    video: {
      titulo: '',
      videoId: '',
      fonte: '',
      descricao: ''
    },

    leitura: {
      titulo: 'A importância das Florestas',

      secoes: [
        {
          subtitulo: '',
          paragrafos: [
            'Árvores retiram gás carbônico do ar e ajudam a controlar a temperatura local.',
            'Quando a floresta é derrubada ou queimada, o carbono volta à atmosfera e os animais perdem seu habitat.'
          ]
        }
      ],

      observacao: '',
      fonte: '',
      url: ''
    }
  },

  // ===== CARD 3 =====
  {
    id: 3,
    tema: 'urbano',
    icone: '🏙️',
    titulo: 'Sustentabilidade Urbana',
    descricao: 'Cidades que cuidam das pessoas e do ambiente.',

    apresentacao: 'Uma cidade sustentável usa bem água, energia e espaço, e garante qualidade de vida a quem mora nela.',

    video: {
      titulo: '',
      videoId: '',
      fonte: '',
      descricao: ''
    },

    leitura: {
      titulo: 'Sustentabilidade Urbana',

      secoes: [
        {
          subtitulo: '',
          paragrafos: [
            'Transporte coletivo, ciclovias, áreas verdes e saneamento reduzem a poluição e melhoram a saúde.',
            'Pequenas atitudes, como separar o lixo e economizar água, somadas, mudam a cidade inteira.'
          ]
        }
      ],

      observacao: '',
      fonte: '',
      url: ''
    }
  },

  // ===== CARD 4 =====
  {
    id: 4,
    tema: 'urbano',
    icone: '🏭',
    titulo: 'Poluição e seus impactos',
    descricao: 'Tipos de poluição e como afetam a vida.',

    apresentacao: 'Poluição é a presença de substâncias que prejudicam o ar, a água, o solo e os seres vivos.',

    video: {
      titulo: '',
      videoId: '',
      fonte: '',
      descricao: ''
    },

    leitura: {
      titulo: 'Poluição e seus impactos',

      secoes: [
        {
          subtitulo: '',
          paragrafos: [
            'A poluição do ar causa problemas respiratórios; a da água contamina rios e mares; a do solo afeta a produção de alimentos.',
            'Reduzir o consumo, tratar esgoto e usar energia limpa são caminhos para diminuir esses impactos.'
          ]
        }
      ],

      observacao: '',
      fonte: '',
      url: ''
    }
  },

  // ===== CARD 5 =====
  {
    id: 5,
    tema: 'urbano',
    icone: '♻️',
    titulo: 'Reciclagem e coleta seletiva',
    descricao: 'Separar o lixo do jeito certo.',

    apresentacao: 'Reciclar transforma resíduos em novos produtos, poupa recursos naturais e gera renda.',

    video: {
      titulo: '',
      videoId: '',
      fonte: '',
      descricao: ''
    },

    leitura: {
      titulo: 'Reciclagem e coleta seletiva',

      secoes: [
        {
          subtitulo: '',
          paragrafos: [
            'Na coleta seletiva, papel, plástico, vidro e metal são separados do lixo orgânico e dos rejeitos.',
            'Antes de reciclar, vale seguir os três Rs: reduzir, reutilizar e só depois reciclar.'
          ]
        }
      ],

      observacao: '',
      fonte: '',
      url: ''
    }
  },

  // ===== CARD 6 =====
  {
    id: 6,
    tema: 'mata',
    icone: '🦜',
    titulo: 'Preservação da biodiversidade',
    descricao: 'Por que cada espécie importa.',

    apresentacao: 'A biodiversidade é a variedade de formas de vida existentes na Terra, que abrange desde a diversidade genética dentro de uma mesma espécie até a complexidade de ecossistemas inteiros, como florestas, rios e oceanos. Preservar significa proteger o equilíbrio natural que sustenta a vida no planeta, seja regulando o clima, purificando a água e o ar, polinizando alimentos e mantendo os solos férteis. Quando as florestas são conservadas, os ecossistemas marinhos e costeiros permanecem íntegros e as cidades integram áreas verdes à sua estrutura, a natureza continua oferecendo recursos vitais e proteção contra eventos climáticos extremos.',

    video: {
      titulo: 'O que é biodiversidade?',
      videoId: 'o8N_apERY9g',
      fonte: 'CREA-RJ — canal oficial WebTV CREA-RJ no YouTube.',
      descricao: 'Apresenta de forma objetiva o conceito de biodiversidade, mostra como a variedade de espécies sustenta o equilíbrio das florestas e dos oceanos e destaca por que a preservação ambiental é essencial para a qualidade de vida humana.'
    },

    leitura: {
      titulo: 'Como a Natureza Protege o Clima e a Nossa Vida',

      secoes: [
        {
          subtitulo: '1. Carbono e Natureza',

          paragrafos: [
            'O carbono é um dos elementos encontrados em abundância em todo o ecossistema da Terra. Os solos e os oceanos funcionam como esponjas naturais de carbono e, juntos, absorvem mais da metade dos gases de efeito estufa emitidos no planeta. O problema é que, quando interferimos negativamente nos ecossistemas, atrapalhamos essa absorção e o carbono armazenado volta para a atmosfera, acelerando o aquecimento global, que é um dos principais problemas ambientais do nosso planeta.',

            'A partir dessas interferências que prejudicam o meio ambiente, foram criadas as Soluções Baseadas na Natureza. Segundo a ONU, elas são ações que visam proteger, recuperar e usar os ecossistemas de forma sustentável para resolver problemas reais da sociedade, como enchentes, calor extremo e perda de biodiversidade. Os impactos dessas ações, por meio de planejamento e investimentos adequados, podem cortar até 18 gigatoneladas de dióxido de carbono por ano até 2050.'
          ]
        },

        {
          subtitulo: '2. Os 5 ecossistemas que fazem a diferença',

          paragrafos: [
            'Conheça cinco ecossistemas que desempenham papéis importantes na proteção do clima, na conservação da biodiversidade e na qualidade de vida das pessoas.'
          ]
        },

        {
          subtitulo: 'Florestas',

          paragrafos: [
            'Mesmo sofrendo perdas constantes, as florestas cobrem mais de 30% da Terra e concentram boa parte (dois terços) de todo o potencial das Soluções Baseadas na Natureza contra o aquecimento global. Em regiões montanhosas, funcionam como barreiras naturais que protegem moradores contra inundações, deslizamentos e avalanches.',

            'Sabendo da importância que as florestas têm, não só em nossas vidas, mas também no bem-estar do planeta, nosso papel fundamental é preservar. Podemos fazer isso de várias formas: financiar áreas protegidas, incentivar o manejo comunitário e a colheita sustentável, recuperar terras degradadas com reflorestamento de árvores nativas e reduzir o desperdício de alimentos para diminuir a pressão por desmatamento.'
          ]
        },

        {
          subtitulo: 'Oceanos',

          paragrafos: [
            'No encontro entre a terra e o mar, os ecossistemas costeiros, como manguezais, marismas e gramas marinhas, retêm matéria orgânica em seus solos alagados, impedindo que esse carbono escape para o ar e agrave o aquecimento global.',

            'Atuam como barreiras naturais que reduzem o impacto de tempestades e do avanço do nível do mar sobre moradores e estruturas. Essas zonas úmidas também funcionam como áreas de reprodução de peixes e abrigo para a biodiversidade marinha, assegurando a renda de comunidades pesqueiras e a segurança alimentar mundial.'
          ]
        },

        {
          subtitulo: 'Cidades',

          paragrafos: [
            'Como a maioria da população mundial vive e trabalha hoje em áreas urbanas, muitos municípios estão substituindo a tradicional infraestrutura "cinza" pela infraestrutura "verde". Na prática, essa transformação ocorre por meio da criação de parques, da recuperação de lagos e córregos e do plantio de árvores em ruas.',

            'Substituir ou diminuir o consumo e a utilização de insumos com alta emissão de carbono são iniciativas que reduzem o risco de alagamentos, amenizam ondas de calor, previnem doenças e elevam o bem-estar coletivo.'
          ]
        },

        {
          subtitulo: 'Turfeiras',

          paragrafos: [
            'Embora ocupem apenas 3% da superfície terrestre, as turfeiras armazenam cerca de 30% de todo o carbono retido nos solos do planeta. Para preservar e recuperar esses ecossistemas de forma simples e econômica, o essencial é mantê-los naturalmente encharcados.',

            'Quando drenados para dar lugar à mineração, obras ou lavouras, o carbono escapa para a atmosfera e o terreno seco fica vulnerável a incêndios devastadores e difíceis de conter. Além de abrigarem diversas espécies animais e vegetais, essas áreas úmidas regulam a oferta de água doce, previnem enchentes e garantem alimento e energia às populações locais.'
          ]
        },

        {
          subtitulo: 'Terras Agrícolas',

          paragrafos: [
            'Solos com alto teor de matéria orgânica garantem colheitas mais fartas enquanto ajudam a equilibrar o clima ao guardar carbono. A adoção de práticas como o cultivo mínimo, a rotação de culturas e o manejo responsável das pastagens diminui a necessidade de fertilizantes sintéticos e corta a emissão de metano na atividade pecuária.'
          ]
        }
      ],

      observacao: 'Adaptado para fins educacionais a partir do artigo "Cinco ecossistemas nos quais soluções baseadas na natureza proporcionam enormes benefícios" (ONU Brasil / PNUMA).',

      fonte: 'ONU Brasil / PNUMA',

      url: 'https://brasil.un.org/pt-br/159057-cinco-ecossistemas-nos-quais-solu%C3%A7%C3%B5es-baseadas-na-natureza-proporcionam-enormes-benef%C3%ADcios'
    }
  },

  // ===== CARD 7 =====
  {
    id: 7,
    tema: 'mata',
    icone: '🌡️',
    titulo: 'Mudanças climáticas',
    descricao: 'O aquecimento global e o que podemos fazer.',

    apresentacao: 'O planeta está esquentando por causa do excesso de gases de efeito estufa emitidos pelas atividades humanas.',

    video: {
      titulo: '',
      videoId: '',
      fonte: '',
      descricao: ''
    },

    leitura: {
      titulo: 'Mudanças climáticas',

      secoes: [
        {
          subtitulo: '',
          paragrafos: [
            'Queimar combustíveis fósseis e desmatar são as principais fontes desses gases.',
            'Entre os efeitos estão secas, enchentes, ondas de calor e a elevação do nível do mar.'
          ]
        }
      ],

      observacao: '',
      fonte: '',
      url: ''
    }
  },

  // ===== CARD 8 =====
  {
    id: 8,
    tema: 'urbano',
    icone: '🛒',
    titulo: 'Consumo consciente',
    descricao: 'Comprar menos, melhor e com propósito.',

    apresentacao: 'Consumir com consciência é pensar nos impactos de cada compra para o ambiente e para a sociedade.',

    video: {
      titulo: '',
      videoId: '',
      fonte: '',
      descricao: ''
    },

    leitura: {
      titulo: 'Consumo consciente',

      secoes: [
        {
          subtitulo: '',
          paragrafos: [
            'Antes de comprar, pergunte: eu preciso disso? Dá para consertar, emprestar ou comprar usado?',
            'Prefira produtos duráveis, com menos embalagem, e evite o desperdício de alimentos, água e energia.'
          ]
        }
      ],

      observacao: '',
      fonte: '',
      url: ''
    }
  }

];


// ===== PERGUNTAS DO QUIZ =====
// c = posição da resposta certa (0 a 3)


// ===== PERGUNTAS DO QUIZ =====
// Para adicionar ou editar perguntas, altere somente o tema correspondente.
//
// Estrutura:
// p = enunciado da pergunta
// o = alternativas
// c = índice da alternativa correta (0 a 3)
// explicacao = comentário exibido após a resposta

export const perguntas = {

  // ===== QUIZ DE FLORESTAS =====
  // As seis questões ficam neste desafio.

  Mata: [
    {
      p: 'De acordo com o texto do capítulo, qual é o peso das florestas nas soluções baseadas na natureza e como elas protegem diretamente populações que vivem em encostas e montanhas?',
      o: [
        'Ocupam menos de 10% do planeta e atuam exclusivamente no resfriamento das águas costeiras.',
        'Concentram cerca de dois terços do potencial total contra o aquecimento global e funcionam como barreiras naturais contra enchentes, deslizamentos e avalanches.',
        'Representam metade da mitigação climática, mas exigem a drenagem de áreas úmidas vizinhas para evitar incêndios.',
        'Substituem integralmente a necessidade de áreas protegidas financiadas por meio do corte raso de espécies nativas.'
      ],
      c: 1,
      explicacao: 'As florestas ocupam mais de 30% da superfície terrestre, concentram cerca de dois terços do potencial das soluções baseadas na natureza contra o aquecimento global e protegem populações em encostas e montanhas contra enchentes, deslizamentos e avalanches.'
    },
    {
      p: 'Uma região rural busca frear o avanço do desmatamento sobre suas florestas nativas e recuperar áreas degradadas. Com base nos conteúdos sobre florestas e terras agrícolas do capítulo, qual conjunto de ações deve ser adotado?',
      o: [
        'Derrubar áreas florestais para expandir pastagens intensivas e aumentar o uso de fertilizantes sintéticos.',
        'Drenar solos encharcados (como turfeiras) para facilitar a mineração e substituir a vegetação nativa por monoculturas.',
        'Reflorestar terras degradadas com espécies nativas, incentivar o manejo comunitário e adotar práticas como rotação de culturas, cultivo mínimo e pastagem sustentável.',
        'Isolar completamente as comunidades locais das áreas florestais e descartar excedentes agrícolas para manter os preços estáveis.'
      ],
      c: 2,
      explicacao: 'O reflorestamento com espécies nativas e o manejo comunitário conservam as florestas, enquanto técnicas agrícolas como rotação de culturas, cultivo mínimo e pastagem sustentável mantêm o solo rico em matéria orgânica, cortam emissões de metano e evitam a conversão de novas florestas em pasto.'
    },
    {
      p: 'Segundo o texto adaptado sobre oceanos e litorais, qual é a dupla função exercida pelos manguezais, marismas e gramas marinhas em relação ao clima e à vida marinha?',
      o: [
        'Retêm matéria orgânica em seus solos alagados (evitando o escape de carbono) e servem de área de reprodução de peixes, garantindo renda pesqueira e segurança alimentar.',
        'Liberam carbono na atmosfera para aquecer o litoral e concentram a reprodução de peixes exclusivamente em águas profundas.',
        'Eliminam a necessidade de zonas úmidas costeiras ao substituí-las por barreiras artificiais de concreto.',
        'Aceleram a erosão costeira para renovar os nutrientes das águas rasas e aumentar o nível do mar.'
      ],
      c: 0,
      explicacao: 'Manguezais, marismas e gramas marinhas retêm matéria orgânica em seus solos alagados, impedindo o escape de carbono para o ar, e funcionam como áreas de reprodução de peixes, sustentando comunidades pesqueiras e a segurança alimentar mundial.'
    },
    {
      p: 'Um município litorâneo enfrenta o avanço do nível do mar, danos causados por tempestades e queda na renda dos pescadores locais. Aplicando as soluções descritas no capítulo, qual medida deve ser priorizada?',
      o: [
        'Aterrar marismas para construir avenidas à beira-mar e ampliar o uso de concreto na faixa de areia.',
        'Drenar os solos alagados da costa para impedir o acúmulo de matéria orgânica.',
        'Conservar as zonas úmidas existentes, manejá-las de forma responsável e promover o replantio de mangues e gramas marinhas.',
        'Substituir os manguezais nativos por espécies terrestres de rápido crescimento para conter o vento.'
      ],
      c: 2,
      explicacao: 'Conservar essas zonas úmidas, manejá-las de forma responsável e replantar mangues e gramas marinhas fortalece as barreiras naturais contra tempestades e o avanço do mar, além de recuperar habitats essenciais para a fauna pesqueira.'
    },
    {
      p: 'No tópico dedicado às cidades, o texto destaca a transição da infraestrutura "cinza" para a infraestrutura "verde". Quais intervenções representam essa mudança na paisagem urbana?',
      o: [
        'Canalização fechada de córregos e ampliação de vias asfaltadas com excesso de concreto.',
        'Criação de parques, recuperação de lagos e córregos urbanos, uso de materiais construtivos sustentáveis e plantio de árvores em ruas e telhados.',
        'Remoção da arborização das calçadas para facilitar o escoamento rápido da água da chuva.',
        'Substituição de áreas verdes públicas por estacionamentos pavimentados com insumos de alta emissão de carbono.'
      ],
      c: 1,
      explicacao: 'Substituir a infraestrutura cinza pela verde envolve criar parques, recuperar lagos e córregos urbanos, adotar materiais construtivos sustentáveis e plantar árvores em ruas e telhados.'
    },
    {
      p: 'Além de reduzir o emprego de insumos com alta emissão de carbono, quais benefícios diretos a adoção da infraestrutura verde traz para o cotidiano dos moradores das cidades, conforme o texto?',
      o: [
        'Aumenta as ondas de calor e reduz a necessidade de deslocamentos ativos pela cidade.',
        'Diminui a absorção de água pelo solo, concentrando as chuvas nos rios canalizados.',
        'Reduz o risco de alagamentos, ameniza ondas de calor, previne doenças, eleva o bem-estar coletivo e estimula caminhar e pedalar.',
        'Elimina a necessidade de parques públicos ao concentrar toda a vegetação apenas nos telhados.'
      ],
      c: 2,
      explicacao: 'Essas iniciativas reduzem o risco de alagamentos, amenizam ondas de calor, previnem doenças, elevam o bem-estar coletivo e estimulam os moradores a caminhar e pedalar pela cidade.'
    }
  ],

  
// ===== QUIZ DE OCEANOS =====
// As 12 perguntas pertencem exclusivamente ao Desafio dos Oceanos.

Oceano: [
  {
    p: 'Como a falta de saneamento básico e de sustentabilidade nas áreas urbanas impacta diretamente os oceanos?',
    o: [
      'Aumenta a quantidade de peixes nas áreas costeiras.',
      'Despeja esgoto sem tratamento nos rios, que desaguam e poluem severamente os oceanos.',
      'Diminui o nível do mar devido à captação de água.',
      'Melhora a qualidade das praias com o acúmulo de matéria orgânica.'
    ],
    c: 1,
    explicacao: 'O esgoto sem tratamento pode chegar aos rios e, posteriormente, aos oceanos, transportando poluentes e prejudicando os ecossistemas marinhos.',
    fonte: 'Mundo Educação / UOL'
  },
  {
    p: 'Qual é a principal consequência do descarte incorreto de lixo (especialmente plásticos) nas cidades para os ecossistemas marinhos?',
    o: [
      'Formação de ilhas de plástico que sufocam e matam a vida marinha.',
      'Aumento da biodiversidade de recifes de corais.',
      'Purificação natural das águas oceânicas com a degradação rápida do plástico.',
      'Geração de energia renovável pelas ondas batendo no lixo.'
    ],
    c: 0,
    explicacao: 'O plástico descartado incorretamente pode chegar ao mar, acumular-se no ambiente e ameaçar animais marinhos por ingestão ou aprisionamento.',
    fonte: 'Brasil Escola'
  },
  {
    p: 'As florestas costeiras, como os manguezais, desempenham qual papel fundamental na proteção dos oceanos?',
    o: [
      'Aumentam a temperatura da água da costa.',
      'Servem como berçário para a vida marinha e filtram poluentes antes de chegarem ao mar.',
      'Reduzem a quantidade de sal na água prejudicando os peixes.',
      'Impedem a oxigenação da água marinha.'
    ],
    c: 1,
    explicacao: 'Os manguezais são importantes áreas de reprodução e desenvolvimento de diversas espécies marinhas, além de ajudarem a reter sedimentos e poluentes.',
    fonte: 'IBGE Explica'
  },
  {
    p: 'De que forma o desmatamento excessivo das florestas afeta os oceanos do mundo?',
    o: [
      'O desmatamento esfria a Terra, congelando as águas oceânicas.',
      'Aumenta os gases de efeito estufa, acelerando o aquecimento global, o derretimento das calotas polares e o aumento do nível do mar.',
      'Não há relação, pois as florestas e os oceanos não dividem a mesma atmosfera.',
      'Aumenta a evaporação, secando os mares.'
    ],
    c: 1,
    explicacao: 'A destruição das florestas reduz a capacidade de absorção de carbono e contribui para o agravamento das mudanças climáticas, que também afetam os oceanos.',
    fonte: 'Brasil Escola / Mundo Educação'
  },
  {
    p: 'Qual é a principal função das florestas na regulação do clima global?',
    o: [
      'Refletir a luz solar de volta para o espaço sideral.',
      'Absorver gás carbônico (CO2) da atmosfera e liberar oxigênio, controlando a temperatura da Terra.',
      'Produzir combustíveis fósseis nas suas raízes.',
      'Aquecer as massas de ar polar.'
    ],
    c: 1,
    explicacao: 'As florestas absorvem gás carbônico durante a fotossíntese e armazenam carbono, contribuindo para a regulação do clima.',
    fonte: 'Brasil Escola / UOL'
  },
  {
    p: 'Por que a preservação das florestas é essencial para a biodiversidade?',
    o: [
      'Porque elas abrigam grande parte das espécies de animais e plantas terrestres do mundo.',
      'Porque eliminam espécies invasoras de forma automática.',
      'Porque as árvores facilitam a caça predatória controlada.',
      'Porque reduzem a quantidade de polinizadores no mundo.'
    ],
    c: 0,
    explicacao: 'As florestas oferecem alimento, abrigo e condições de reprodução para inúmeras espécies de animais, plantas e outros organismos.',
    fonte: 'IBGE Explica'
  },
  {
    p: 'Como o crescimento desordenado das cidades (expansão urbana sem sustentabilidade) afeta as florestas próximas?',
    o: [
      'Aumenta a área de conservação natural.',
      'Gera fragmentação de habitats e desmatamento em massa para a construção de bairros e rodovias.',
      'Melhora a qualidade e os nutrientes do solo florestal.',
      'Aumenta a umidade e as chuvas dentro das florestas nativas.'
    ],
    c: 1,
    explicacao: 'A expansão urbana sem planejamento pode destruir áreas naturais e dividir habitats, dificultando a sobrevivência e o deslocamento das espécies.',
    fonte: 'Mundo Educação'
  },
  {
    p: 'O que uma cidade sustentável pode fazer para ajudar a preservar as florestas nativas?',
    o: [
      'Promover a reciclagem de papel e o uso de madeira certificada/reflorestamento, reduzindo a extração ilegal.',
      'Expandir as suas áreas asfaltadas para perto das reservas ecológicas.',
      'Queimar resíduos sólidos ao ar livre para não usar aterros.',
      'Incentivar o uso exclusivo de embalagens plásticas descartáveis.'
    ],
    c: 0,
    explicacao: 'A reciclagem de papel e o consumo de madeira de origem responsável ajudam a diminuir a pressão sobre as florestas nativas.',
    fonte: 'Brasil Escola'
  },
  {
    p: 'O que caracteriza principalmente uma cidade focada na "Sustentabilidade Urbana"?',
    o: [
      'Crescimento econômico focado em indústrias altamente poluentes.',
      'O equilíbrio perfeito entre o desenvolvimento econômico, proteção ambiental e a qualidade de vida dos cidadãos.',
      'A ausência total de veículos, sendo proibido morar no centro da cidade.',
      'O uso exclusivo de combustíveis fósseis para gerar energia barata.'
    ],
    c: 1,
    explicacao: 'A sustentabilidade urbana busca conciliar desenvolvimento econômico, proteção ambiental e qualidade de vida para a população.',
    fonte: 'Mundo Educação / UOL'
  },
  {
    p: 'Qual destas medidas é fundamental para melhorar a mobilidade e o trânsito de forma sustentável nas cidades?',
    o: [
      'Construir cada vez mais vias exclusivas e viadutos apenas para carros particulares.',
      'Incentivar o uso de transporte público de qualidade e a criação de ciclovias seguras.',
      'Reduzir os impostos sobre veículos movidos a diesel.',
      'Acabar com as calçadas de pedestres para alargar as ruas.'
    ],
    c: 1,
    explicacao: 'O transporte público de qualidade e as ciclovias oferecem alternativas ao uso de carros particulares e contribuem para uma mobilidade mais sustentável.',
    fonte: 'IBGE Explica'
  },
  {
    p: 'Qual é o grande benefício de integrar áreas verdes, árvores e parques (florestas urbanas) dentro das grandes cidades?',
    o: [
      'Elas reduzem as ilhas de calor, melhoram a qualidade do ar e ajudam a evitar enchentes absorvendo a água da chuva.',
      'Elas aumentam a poluição sonora retendo o som.',
      'Elas dificultam o escoamento da água da chuva, causando mais inundações.',
      'Elas aumentam a temperatura do asfalto, prejudicando os pneus.'
    ],
    c: 0,
    explicacao: 'A vegetação urbana ajuda a amenizar as temperaturas, melhora a qualidade do ar e permite maior infiltração da água da chuva no solo.',
    fonte: 'Brasil Escola'
  },
  {
    p: 'Qual é a relação entre a preservação das florestas e o abastecimento de água na vida urbana?',
    o: [
      'As florestas consomem toda a água potável, deixando as cidades secas.',
      'As raízes das árvores poluem os lençóis freáticos usados pelo saneamento básico.',
      'As florestas protegem as nascentes dos rios e ajudam a infiltrar a água no solo, garantindo o volume de água dos reservatórios que abastecem as cidades.',
      'Não existe nenhuma relação entre a natureza e a água que chega nas torneiras urbanas.'
    ],
    c: 2,
    explicacao: 'A vegetação protege nascentes, contribui para a infiltração da água no solo e ajuda a manter os recursos hídricos que abastecem as cidades.',
    fonte: 'Mundo Educação / UOL'
  }
],


  // ===== QUIZ DE VIDA URBANA =====
  // As perguntas atuais foram mantidas.
  // Para adicionar novas, basta inserir outro objeto nesta lista.

  Urbano: [
    {
      p: 'Na coleta seletiva, qual cor de lixeira é destinada ao papel?',
      o: [
        'Azul',
        'Verde',
        'Amarela',
        'Vermelha'
      ],
      c: 0
    },
    {
      p: 'O que significa a regra dos 3 Rs?',
      o: [
        'Recusar, reclamar e remover',
        'Reduzir, reutilizar e reciclar',
        'Rasgar, reunir e reformar',
        'Rever, repetir e render'
      ],
      c: 1
    },
    {
      p: 'Qual destes resíduos é adequado para a compostagem?',
      o: [
        'Pilhas',
        'Vidro quebrado',
        'Cascas de frutas e restos de vegetais',
        'Embalagens de isopor'
      ],
      c: 2
    },
    {
      p: 'O que é consumo consciente?',
      o: [
        'Comprar o máximo em promoções',
        'Trocar de celular todo ano',
        'Escolher sempre o produto mais barato',
        'Comprar o necessário, pensando nos impactos ambientais e sociais'
      ],
      c: 3
    }
  ]

};
