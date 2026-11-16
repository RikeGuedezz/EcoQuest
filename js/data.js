
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
    descricao: 'Como os mares funcionam, sua importância e os desafios para sua preservação.',

    apresentacao: 'Os oceanos são imensos corpos de água salgada. Constituem mais de 97% de toda a água do planeta e ocupam aproximadamente 70% de sua superfície, sendo essenciais para regular o clima e manter o equilíbrio da vida. A água oceânica possui cerca de 3,5% de sal. Os oceanos ajudam a absorver o calor do Sol e a distribuí-lo pela atmosfera e pelo mundo por meio das correntes marítimas.',

    video: {
      titulo: '15 curiosidades sobre o fundo do mar',
      videoId: '8Yf5MLY3hyM',
      fonte: 'Você Sabia? — canal oficial no YouTube.',
      descricao: 'Vídeo que apresenta 15 curiosidades sobre o fundo do mar, explorando características, fenômenos e aspectos surpreendentes dos oceanos.'
    },

    leitura: {
      titulo: 'Os Oceanos do Planeta e a Importância de sua Preservação',

      secoes: [

        {
          subtitulo: '1. Os cinco oceanos do planeta',

          paragrafos: [
            'Existem cinco oceanos no nosso planeta: Oceano Pacífico, Oceano Atlântico, Oceano Índico, Oceano Antártico e Oceano Glacial Ártico. Cada um possui características próprias, localização e importância ambiental e econômica.',

            'Oceano Pacífico: localizado entre a Ásia e a Oceania e a porção oeste do continente americano, é o maior oceano do planeta. Possui aproximadamente 50% de toda a água salgada dos oceanos e apresenta uma grande concentração de placas tectônicas.',

            'Oceano Atlântico: localizado entre o continente americano e a costa oeste da Europa e da África, é o segundo maior oceano do planeta. É uma das principais vias de navegação do mundo, pois conecta regiões importantes para o transporte e a economia. Também é uma importante fonte de recursos naturais, como pescado e petróleo.',

            'Oceano Índico: localizado entre a África, a Ásia, a Oceania e a Antártida, é o terceiro maior oceano. Possui reservas de recursos minerais, como petróleo, apresentando grande importância econômica. Também abriga diversas ilhas, entre elas Madagascar e as Maldivas.',

            'Oceano Antártico: localizado no extremo sul do planeta, é conhecido por suas águas muito frias e por banhar a Antártida. Possui bases destinadas ao desenvolvimento de pesquisas científicas e apresenta conexão direta com os oceanos Pacífico, Atlântico e Índico.',

            'Oceano Glacial Ártico: é o menor dos cinco oceanos e também é marcado pelas baixas temperaturas. Está localizado no Hemisfério Norte e banha regiões da Europa, Ásia e América. Em sua região encontram-se ilhas importantes, como a Groenlândia. Nesse oceano ocorre o famoso fenômeno da aurora boreal, caracterizado pela formação de luzes coloridas no céu.'
          ]
        },

        {
          subtitulo: '2. A importância dos oceanos para o planeta',

          paragrafos: [
            'Os oceanos cobrem cerca de 70% da superfície terrestre. Entretanto, enfrentam ameaças como a poluição marinha, a elevação do nível do mar e a pesca excessiva, que representam grandes problemas para o equilíbrio ambiental e para a vida humana.',

            'Cerca de 2,4 bilhões de pessoas vivem a menos de 100 quilômetros do mar. Toda a humanidade depende do oxigênio e da água limpa proporcionados pelos oceanos. Eles fornecem alimentos, medicamentos e recursos minerais, além de funcionarem como importantes rotas de transporte e conexão entre as economias do mundo.',

            'Os oceanos também desempenham um papel fundamental na regulação do clima, armazenando cerca de 90% do excesso de calor associado às mudanças climáticas provocadas pelas atividades humanas.',

            'Estima-se que aproximadamente 80% do oceano continue inexplorado e que cerca de 91% das espécies marinhas ainda não tenham sido identificadas. Os habitats do fundo do mar podem abrigar milhões de espécies, demonstrando o quanto ainda precisamos conhecer sobre a vida marinha.'
          ]
        },

        {
          subtitulo: '3. Ameaças aos oceanos',

          paragrafos: [
            'Os oceanos enfrentam diferentes ameaças provocadas pelas atividades humanas. Entre as principais estão o aquecimento global, a poluição causada por resíduos, os derramamentos de petróleo, a poluição por plástico e a pesca excessiva.'
          ]
        },

        {
          subtitulo: 'Aquecimento global e mudanças climáticas',

          paragrafos: [
            'A queima de combustíveis fósseis, como carvão e petróleo, aumenta a concentração de gases de efeito estufa na atmosfera e contribui para o aquecimento global. Esse processo também eleva a temperatura dos oceanos e provoca o derretimento de geleiras, contribuindo para o aumento do nível do mar.'
          ]
        },

        {
          subtitulo: 'Resíduos e poluição da água',

          paragrafos: [
            'O descarte de esgoto, produtos tóxicos e lixo industrial nos oceanos causa danos à vida marinha. Além disso, o dióxido de carbono presente na atmosfera é absorvido pelos oceanos, contribuindo para alterações na composição química da água.',

            'A água residual de algumas indústrias pode conter nitrogênio e fósforo em excesso. Quando esses nutrientes chegam aos ambientes aquáticos, podem favorecer a proliferação exagerada de algas, dificultando a passagem da luz solar e prejudicando as plantas marinhas.'
          ]
        },

        {
          subtitulo: 'Petróleo',

          paragrafos: [
            'Os grandes derramamentos de petróleo podem provocar desastres ambientais com consequências negativas que permanecem por anos nos oceanos. O petróleo prejudica os animais marinhos, podendo causar intoxicação, sufocamento e problemas de saúde, além de contaminar a água e os habitats.'
          ]
        },

        {
          subtitulo: 'Poluição causada pelo plástico',

          paragrafos: [
            'A produção de plástico atingiu níveis muito elevados, tornando a poluição plástica uma das questões ambientais mais urgentes para os oceanos.',

            'Estima-se que cerca de 8 milhões de toneladas de plástico cheguem aos oceanos todos os anos. Esses resíduos prejudicam milhares de espécies marinhas, que podem morrer após ingerir plástico ou ficar presas em embalagens, redes e outros materiais descartados.'
          ]
        },

        {
          subtitulo: 'Pesca excessiva',

          paragrafos: [
            'Um dos primeiros grandes registros históricos de exploração excessiva de animais marinhos ocorreu no século XIX, quando milhares de baleias foram caçadas em busca de gordura utilizada na produção de óleo para iluminação.',

            'A redução das populações de grandes peixes faz com que frotas comerciais avancem para regiões cada vez mais profundas do oceano. A pesca em níveis excessivos e a captura de espécies em diferentes posições da cadeia alimentar provocam desequilíbrios ecológicos e diversas consequências para o sistema marinho.'
          ]
        }

      ],

      observacao: 'Conteúdo organizado para fins educacionais. Os dados e informações apresentados foram mantidos conforme o material fornecido.',

      fonte: 'National geographic',

      url: 'https://www.nationalgeographicbrasil.com/perpetual-planet/2018/06/tudo-o-que-voce-precisa-saber-sobre-os-oceanos'
    }
  },


  // ===== CARD 2 =====
  {
   id: 2,
  tema: 'mata',
  icone: '🌳',
  titulo: 'A importância das Florestas',
  descricao: 'O que as florestas fazem por nós e pelo clima.',

  apresentacao: 'As florestas cobrem cerca de 30% da superfície terrestre e são ecossistemas complexos que desempenham um papel vital na manutenção da vida na Terra. Elas guardam e purificam a água, regulam o ciclo de chuvas, protegem o solo contra a erosão e abrigam a maior parte da biodiversidade terrestre do nosso planeta, sendo fundamentais para o equilíbrio ambiental.',

  video: {
    titulo: 'A Importância das Florestas',
    videoId: 'wCH0i23_Vew', 
    fonte: 'YouTube',
    descricao: 'Apresenta a importância vital das florestas para o meio ambiente, regulação do clima e preservação da biodiversidade na Terra.'
  },

  leitura: {
    titulo: 'A Importância das Florestas para o Meio Ambiente',
    secoes: [
      {
        subtitulo: '1. O papel na regulação climática',
        paragrafos: [
          'As florestas são frequentemente chamadas de "pulmões do mundo", mas sua função vai muito além de produzir oxigênio. Elas funcionam como enormes sumidouros de carbono, absorvendo o dióxido de carbono (CO2) da atmosfera durante o processo de fotossíntese.',
          'Ao armazenar esse carbono em seus troncos, folhas e no solo, as florestas ajudam a controlar a temperatura global e mitigam os efeitos severos das mudanças climáticas. O desmatamento, por outro lado, libera esse carbono de volta, acelerando o aquecimento do planeta.'
        ]
      },
      {
        subtitulo: '2. Preservação da Biodiversidade e Ciclo da Água',
        paragrafos: [
          'Além do clima, as matas são o lar de mais de 80% das espécies terrestres de animais, plantas e insetos. Proteger as florestas significa garantir a sobrevivência de milhares de espécies que dependem desses habitats naturais.',
          'Elas também são essenciais para o ciclo hidrológico. As árvores absorvem a água do solo e a liberam na atmosfera através da transpiração, formando os chamados "rios voadores", que distribuem chuvas para diversas regiões, garantindo o abastecimento de água para as cidades e para a agricultura.'
        ]
      }
    ],
    observacao: '',
    fonte: 'Brasil Escola (UOL) e WWF.',
    url: 'https://brasilescola.uol.com.br/geografia/o-desmatamento.htm'
  }
  },

  // ===== CARD 3 =====
  {
   id: 3,
  tema: 'urbano',
  icone: '🏙️',
  titulo: 'Sustentabilidade Urbana',
  descricao: 'Cidades que cuidam das pessoas e do ambiente.',

  apresentacao: 'A sustentabilidade urbana é o planejamento de cidades que buscam harmonizar o desenvolvimento econômico com a preservação ambiental. Uma cidade sustentável utiliza os recursos naturais, como água e energia, de forma inteligente, garante espaços verdes e infraestrutura adequada, promovendo saúde e qualidade de vida para todos os seus habitantes atuais e futuros.',

  video: {
    titulo: 'Cidades Sustentáveis',
    videoId: 'am2WOYu4iFc',
    fonte: 'IBGE Explica',
    descricao: 'Explica de forma didática o conceito de cidades sustentáveis e como o planejamento urbano afeta a nossa vida, a natureza e o futuro do planeta.'
  },

  leitura: {
    titulo: 'Sustentabilidade Urbana e o Futuro das Cidades',
    secoes: [
      {
        subtitulo: '1. O que é o Desenvolvimento Urbano Sustentável?',
        paragrafos: [
          'Com o rápido crescimento populacional e a expansão desenfreada das cidades, a sustentabilidade urbana tornou-se uma urgência. Ela foca em criar espaços urbanos que ofereçam excelente qualidade de vida sem esgotar os recursos naturais disponíveis ou prejudicar o meio ambiente.',
          'O objetivo principal é transformar o espaço urbano em um ambiente onde as atividades humanas causem o menor impacto ecológico possível, equilibrando consumo, crescimento econômico e conservação da natureza.'
        ]
      },
      {
        subtitulo: '2. Práticas e Soluções para Cidades Inteligentes',
        paragrafos: [
          'Para alcançar esse modelo, as cidades precisam adotar diversas medidas práticas. O investimento em transporte coletivo de qualidade e a criação de redes de ciclovias são essenciais para reduzir a emissão de gases poluentes por veículos particulares.',
          'Além disso, o saneamento básico eficiente, a coleta seletiva e a reciclagem de resíduos evitam a poluição de rios e oceanos. A expansão e manutenção de áreas verdes e parques dentro da malha urbana também são cruciais, pois ajudam a reduzir as "ilhas de calor", melhoram a qualidade do ar e facilitam a absorção da água das chuvas, prevenindo enchentes.'
        ]
      }
    ],
    observacao: '',
    fonte: 'Mundo Educação (UOL) e IBGE.',
    url: 'https://mundoeducacao.uol.com.br/geografia/desenvolvimento-sustentavel.htm'
  }
},

  
// ===== CARD 4 =====
{
  id: 4,
  tema: 'urbano',
  icone: '🏭',
  titulo: 'Poluição e seus impactos',
  descricao: 'Conheça os tipos de poluição, seus impactos ao meio ambiente e à saúde das pessoas.',

  apresentacao: 'Nesse tema você conseguirá entender mais sobre os tipos de poluição e seus impactos ao meio ambiente e à saúde das pessoas. Também aprenderá como combatê-las e proteger sua saúde diante desses problemas.',

  video: {
    titulo: 'Poluição e seus impactos',
    videoId: 'szR2M5QYPXk',
    fonte: 'YouTube',
    descricao: 'Veja e entenda os tipos de poluições existentes e como afetam o meio ambiente'
  },

  leitura: {
    titulo: 'Poluição e seus impactos',

    secoes: [
      {
        subtitulo: 'O que é poluição?',
        paragrafos: [
          'A poluição é a presença de algum agente que causa desequilíbrio ao ambiente, principalmente ao meio ecológico. Esse desequilíbrio pode afetar a saúde das pessoas ou causar desconforto, impactando diretamente a saúde pública e desafiando os sistemas de saúde de um ou vários países.'
        ]
      },

      {
        subtitulo: 'Poluição atmosférica',
        paragrafos: [
          'A poluição atmosférica é caracterizada pela contaminação do ar, causada pela emissão de gases poluentes, como dióxido de carbono (CO2), monóxido de carbono (CO), metano (CH4), dióxido de enxofre (SO2) e dióxido de nitrogênio (NO2). Grande parte dessas emissões é provocada pela ação humana, principalmente pelo uso de fontes de energia poluentes originadas de combustíveis fósseis, como carvão mineral, petróleo e gás natural.',

          'Essas emissões ocorrem por meio de usinas termoelétricas, meios de transporte movidos a combustíveis fósseis (aviões, carros, motos e trens), indústrias, geradores a combustão, queimadas e uso de fertilizantes nas atividades agrícolas.',

          'Como consequência, a qualidade do ar é prejudicada, podendo provocar alergias, irritação nos olhos e nas vias aéreas, tosse seca, bronquite e asma. Em casos mais graves, a poluição pode contribuir para o desenvolvimento de câncer ou agravar doenças já existentes, como a asma, podendo levar à morte.',

          'Outro fator importante é a camada de ozônio (O3), cuja função é filtrar e impedir a passagem de parte dos raios ultravioletas até a superfície da Terra. Ela funciona como uma espécie de protetor solar do planeta. Quando sua integridade é prejudicada, mais raios ultravioletas podem atingir a superfície, aumentando os riscos de catarata, câncer de pele e outras doenças relacionadas à exposição solar.',

          'Entretanto, o conhecido buraco na camada de ozônio não contribui significativamente para o aquecimento global. O efeito estufa ocorre quando a energia solar é absorvida pela Terra e parte da radiação que seria devolvida ao espaço fica retida na atmosfera devido à presença de gases de efeito estufa, contribuindo para o aumento da temperatura do planeta.',

          'Outro fator que impacta o equilíbrio ambiental é o desmatamento de florestas nativas para atividades agrícolas. Essa prática reduz a presença da flora e da fauna, diminui a umidade liberada pelas árvores por meio da transpiração e prejudica o equilíbrio ambiental local.',

          'De acordo com Nobre, Arieira e Brandão (2025), o ponto de não retorno, relacionado ao aquecimento do planeta em comparação com o período anterior à Primeira Revolução Industrial, superou o valor de 1,5 °C em 2024. Entre os fatores relacionados a esse cenário estão o desmatamento, a degradação florestal, as queimadas e o aquecimento global.',

          'Para combater esses problemas, é importante utilizar transportes elétricos ou que não dependam de combustíveis fósseis, ampliar o uso de fontes renováveis de energia, como solar, hídrica, eólica e biocombustíveis, combater as queimadas florestais, sejam criminosas ou naturais, e promover o reflorestamento com espécies nativas em áreas que foram severamente ou completamente desmatadas.'
        ]
      },

      {
        subtitulo: 'Poluição hídrica',
        paragrafos: [
          'A poluição hídrica é aquela que afeta as águas e sua qualidade por meio da degradação natural ou provocada pela ação humana, sendo esta última uma das principais fontes causadoras. Entre essas ações estão o descarte irregular de lixo no mar, o despejo de esgoto, o derramamento de combustíveis fósseis, principalmente petróleo, o descarte irregular de resíduos sólidos em nascentes utilizadas para consumo humano e o despejo de minerais ou metais pesados.',

          'A degradação das águas afeta diretamente a vida marinha. De acordo com Guitarrara (2026), estima-se que 8 milhões de toneladas de plástico entram nos oceanos por ano. Esses plásticos podem retornar à mesa do consumidor por meio dos microplásticos ingeridos pelos animais marinhos, que fazem parte da nossa cadeia alimentar.',

          'A poluição por rejeitos de mineração também merece destaque. Um exemplo foi o rompimento da barragem na cidade de Mariana, em Minas Gerais. Os metais pesados chegaram ao Rio Doce, afetando a vida marinha local e a cadeia alimentar, com impactos que chegaram até às baleias no litoral brasileiro.',

          'De acordo com Bassi e Nobres (2024), 40 milhões de metros cúbicos de rejeitos foram despejados e chegaram ao Oceano Atlântico. Os impactos na vida marinha começaram nos organismos da base da cadeia alimentar e foram avançando até os animais que ocupam posições mais altas. Os animais contaminados que sobreviveram também foram prejudicados, podendo apresentar deformações e outros problemas, como o desenvolvimento de câncer. Dessa forma, o despejo irregular de resíduos dificulta a sobrevivência da vida marinha e pode reduzir suas populações.',

          'Outra forma de degradação da qualidade da água é a poluição térmica, que pode provocar o branqueamento dos corais nos recifes. Com isso, ambientes marinhos antes ricos em vida podem se transformar em áreas degradadas, ameaçando espécies que dependem desses locais e afetando os demais níveis da cadeia alimentar.',

          'Para combater esses problemas, é necessário tratar o esgoto antes de devolvê-lo aos rios, mares e lagos, realizar a coleta e o descarte correto do lixo, incentivar a reciclagem e promover a conscientização ambiental. Também é importante o monitoramento por parte da ANM (Agência Nacional de Mineração), para evitar novos desastres, além da aplicação de multas às mineradoras que descartam resíduos ou dejetos de forma irregular nas águas.'
        ]
      },

      {
        subtitulo: 'Poluição do solo',
        paragrafos: [
          'A poluição do solo é causada pela contaminação provocada pelo despejo irregular de lixo e esgoto, além de atividades pecuárias e de mineração. Essas atividades podem gerar agentes nocivos, como bactérias provenientes do chorume do lixo, metais pesados presentes na poeira de minérios e protozoários associados à falta de tratamento do esgoto despejado irregularmente.',

          'Como consequência, o solo pode se tornar infértil, prejudicando o desenvolvimento e a reprodução da flora e da fauna. Isso pode ocorrer em aterros sanitários, regiões próximas a minerações, indústrias ou áreas de criação de gado.',

          'Assim como acontece na poluição hídrica, comunidades que dependem de solos contaminados ou vivem próximas a essas regiões podem sofrer consequências para a saúde, incluindo doenças causadas por protozoários e outros agentes contaminantes, que em situações graves podem levar à morte.',

          'Uma forma de melhorar esse cenário é reduzir o descarte inadequado de resíduos, promover a coleta seletiva e a reciclagem, tratar o esgoto e ampliar o acesso ao saneamento básico. Nas áreas utilizadas para a criação de gado, é importante permitir períodos de descanso do solo, sem a presença dos animais, para favorecer sua recuperação e evitar a perda de fertilidade.',

          'No caso das mineradoras, embora não seja possível impedir totalmente os impactos, é possível reduzi-los significativamente por meio do descarte e do manuseio correto dos rejeitos.'
        ]
      },

      {
        subtitulo: 'Poluição sonora',
        paragrafos: [
          'A poluição sonora é a perturbação do ambiente provocada pela presença excessiva de barulhos e ruídos que ultrapassam 65 decibéis (dB), causando incômodo às pessoas. Esse tipo de poluição é comum em locais movimentados, como áreas de trânsito intenso, construções, indústrias, minerações e regiões próximas a aeroportos.',

          'A exposição a esses ruídos pode provocar problemas como perda de audição, estresse, aumento da pressão arterial, crises de ansiedade e fadiga.',

          'Para reduzir os efeitos negativos, é importante que trabalhadores expostos a ambientes muito barulhentos utilizem abafadores de ruído. Também são necessárias medidas de controle do volume de sons em regiões residenciais, hospitalares e espaços públicos, como praças e praias, além de avaliações periódicas com um otorrinolaringologista para verificar a saúde auditiva.'
        ]
      },

      {
        subtitulo: 'Poluição visual',
        paragrafos: [
          'A poluição visual está relacionada ao excesso de estímulos visuais que causam desconforto e perturbação às pessoas. Ela é comum em cidades com grande quantidade de informações luminosas e propagandas.',

          'Esse tipo de poluição pode ser observado em telas grandes de publicidade nos centros urbanos, placas luminosas em ruas e avenidas, anúncios em estabelecimentos comerciais e até mesmo nas luzes dos automóveis.',

          'Para diminuir esses efeitos, podem ser estabelecidas regras para limitar o uso de placas luminosas de publicidade em regiões residenciais, além de incentivar fachadas comerciais com cores e iluminação equilibradas.'
        ]
      }
    ],

    observacao: 'A poluição pode afetar o meio ambiente e a saúde humana de diferentes maneiras. Conhecer suas causas e consequências é um passo importante para adotar hábitos mais responsáveis e contribuir para a preservação ambiental.',

    fonte: 'BASSI, Ana; NOBRES, Juirana (2024) — G1. GUITARRARA, Paloma (2026) — Brasil Escola. MENDONÇA, Gustavo Henrique (2026) — Brasil Escola. NOBRE, Carlos; ARIEIRA, Julia; BRANDÃO, Diego (2025) — SciELO. Referências completas e links no material original.',

    url: 'https://brasilescola.uol.com.br/geografia/tipos-poluicao.htm',
    
    linksFontes: [
      {
        titulo: 'G1 — Metais do desastre de Mariana chegam às baleias no litoral (2024)',
        url: 'https://g1.globo.com/es/espirito-santo/norte-noroeste-es/noticia/2024/09/11/apos-9-anos-metais-do-desastre-de-mariana-chegam-as-baleias-no-litoral-desastre-continua-acontecendo-diz-pesquisador.ghtml'
      },
      {
        titulo: 'Brasil Escola — Tipos de poluição (2026)',
        url: 'https://brasilescola.uol.com.br/geografia/tipos-poluicao.htm'
      },
      {
        titulo: 'Brasil Escola — Poluição do ar ou atmosférica (2026)',
        url: 'https://brasilescola.uol.com.br/biologia/poluicao-atmosferica.htm'
      },
      {
        titulo: 'Brasil Escola — Camada de ozônio (2026)',
        url: 'https://brasilescola.uol.com.br/geografia/camada-de-ozonio.htm'
      },
      {
        titulo: 'SciELO — Amazônia em risco e a COP30 (2025)',
        url: 'https://www.scielo.br/j/ea/a/XXhv84McGLwFnksQsTgMkrS/?format=html&lang=pt&ilang=pt_BR'
      }
],

  
  }
},


  
// ===== CARD 5 =====
{
  id: 5,
  tema: 'urbano',
  icone: '♻️',
  titulo: 'Reciclagem e coleta seletiva',
  descricao: 'Entenda como funciona a coleta seletiva e sua importância para o meio ambiente.',

  apresentacao: 'Nesse tópico você entenderá os processos da coleta seletiva e a importância dela para o meio ambiente.',

  video: {
    titulo: 'Como funciona o processo da coleta seletiva?',
    videoId: '1zJd9xcYl_o',
    fonte: 'YouTube',
    descricao: 'Entenda como funciona todo o processo da coleta seletiva.'
  },

  leitura: {
    titulo: 'Reciclagem e coleta seletiva',

    secoes: [
      {
        subtitulo: 'O que é coleta seletiva?',
        paragrafos: [
          'A coleta seletiva é o processo de separação dos resíduos sólidos de acordo com o seu material de origem, que pode ser papel, plástico, metal ou vidro.',

          'Essa prática deve ser realizada individualmente, em conjunto com o envolvimento dos municípios responsáveis pela coleta de resíduos de cada cidade. Para isso, é importante consultar o site da prefeitura do seu município e verificar como está definido o plano de coleta e separação dos resíduos.',

          'Uma das formas de organizar esse processo é por meio da implementação de lixeiras coloridas em espaços públicos. Cada cor representa um tipo de material: amarelo para metal, verde para vidro, azul para papel, vermelho para plástico, marrom para resíduos orgânicos, como cascas de banana, e branco para resíduos não recicláveis.'
        ]
      },

      {
        subtitulo: 'Separação e reaproveitamento dos resíduos',
        paragrafos: [
          'Depois da separação adequada, os resíduos são analisados para identificar quais materiais poderão ser reaproveitados e quais, infelizmente, não poderão ser reciclados, sendo destinados aos aterros sanitários.',

          'A coleta seletiva consegue reduzir o consumo e a retirada de recursos naturais, já que o reaproveitamento de materiais costuma ser mais viável em relação aos impactos ambientais.',

          'Porém, muitas empresas e indústrias não possuem um plano bem definido para o ciclo completo de seus produtos. Isso provoca falhas na destinação final dos resíduos, que acabam sendo descartados diretamente em aterros sanitários, sem a devida separação ou possibilidade de reaproveitamento.'
        ]
      },

      {
        subtitulo: 'Etapas da coleta seletiva',
        paragrafos: [
          'O processo de coleta seletiva ocorre por meio de diferentes etapas, desde a identificação dos resíduos até a fabricação de novos produtos.',

          '1. Identificação dos resíduos: reconhecimento dos materiais que serão descartados.',

          '2. Separação dos resíduos: organização dos materiais de acordo com sua origem, como papel, plástico, metal e vidro.',

          '3. Descontaminação: eliminação de agentes nocivos e preparação dos materiais para o reaproveitamento.',

          '4. Produção de matéria-prima: transformação dos materiais reciclados em matéria-prima que poderá ser utilizada novamente.',

          '5. Criação de novos produtos: utilização da matéria-prima reciclada na fabricação de novos produtos.'
        ]
      },

      {
        subtitulo: 'Os 3 Rs da sustentabilidade',
        paragrafos: [
          'Com a coleta seletiva e o reaproveitamento dos materiais, podemos colocar em prática o famoso princípio dos 3 Rs: reduzir, reutilizar e reciclar.',

          'Reduzir significa diminuir o consumo e a quantidade de resíduos produzidos. Reutilizar consiste em aproveitar novamente materiais e objetos, evitando seu descarte. Reciclar é transformar materiais descartados em matéria-prima para a fabricação de novos produtos.',

          'Essas práticas favorecem a preservação dos recursos naturais e ajudam a reduzir os impactos ambientais provocados pelo acúmulo e descarte inadequado do lixo.'
        ]
      }
    ],

    observacao: 'A coleta seletiva depende tanto da participação da população quanto da organização dos municípios e das empresas. Separar corretamente os resíduos é uma atitude importante para contribuir com a preservação ambiental.',

    fonte: 'GUITARRARA, Paloma. Coleta seletiva em casa. Brasil Escola.',

    url: 'https://brasilescola.uol.com.br/biologia/coleta-seletiva-casa.htm',

    linksFontes: [
      {
        titulo: 'Brasil Escola — Coleta seletiva em casa',
        url: 'https://brasilescola.uol.com.br/biologia/coleta-seletiva-casa.htm'
      }
    ]
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
  descricao: 'Entenda as causas das mudanças climáticas, suas consequências para o planeta e as atitudes que podem ajudar a combater esse problema.',

  apresentacao: 'De acordo com a Organização das Nações Unidas (ONU), as mudanças climáticas são alterações de longo prazo na temperatura e nos padrões do clima. Essas mudanças podem acontecer naturalmente, em diferentes escalas de tempo, mas também são intensificadas pelas atividades humanas, como a queima de combustíveis fósseis, o desmatamento e a poluição.',

  video: {
    titulo: 'Quais os riscos das mudanças climáticas para o planeta e para a vida das pessoas?',
    videoId: 'bB2cKi9mYE4',
    fonte: 'Jovem Pan News — YouTube',
    descricao: 'Entenda os riscos das mudanças climáticas para o planeta, os impactos sobre a sociedade e as consequências das alterações no clima.'
  },

  leitura: {
    titulo: 'Mudanças Climáticas: Causas, Consequências e Como Combater',

    secoes: [
      {
        subtitulo: '1. O que causa as mudanças climáticas?',
        paragrafos: [
          'Existem causas naturais e humanas para as mudanças climáticas. Entre as causas naturais estão as erupções vulcânicas, que liberam aerossóis na atmosfera capazes de bloquear parte da energia solar e influenciar temporariamente a temperatura do planeta.',
          'Entre as causas humanas, destaca-se a geração de eletricidade por meio da queima de carvão e gás. Essas atividades liberam gases como o dióxido de carbono e o óxido nitroso, que contribuem para o efeito estufa e para a retenção de calor na atmosfera.'
        ]
      },
      {
        subtitulo: '2. A influência das indústrias e dos transportes',
        paragrafos: [
          'Indústrias e fábricas utilizam combustíveis fósseis para gerar energia e fabricar produtos como cimento, eletrônicos e roupas. Essas atividades liberam gases que contribuem para as mudanças climáticas.',
          'Os meios de transporte também possuem participação nesse processo. Aviões, carros, caminhões e navios utilizam combustíveis fósseis, liberando gases de efeito estufa durante seu funcionamento.'
        ]
      },
      {
        subtitulo: '3. Desmatamento e hábitos de consumo',
        paragrafos: [
          'O desmatamento para a criação de fazendas e pastagens também contribui para as mudanças climáticas. Quando as árvores são cortadas, parte do carbono armazenado nelas é liberada, além de reduzir a capacidade da natureza de absorver o dióxido de carbono presente na atmosfera.',
          'Os hábitos de vida e consumo também influenciam esse cenário. O uso excessivo de energia, o consumo de produtos eletrônicos e a utilização de plásticos fazem parte das atividades que podem aumentar as emissões de gases de efeito estufa.',
          'Assim, tanto os processos naturais quanto as atividades humanas participam das alterações climáticas, embora as ações humanas tenham intensificado significativamente o aquecimento global.'
        ]
      },
      {
        subtitulo: '4. Consequências das mudanças climáticas',
        paragrafos: [
          'Os gases de efeito estufa atingiram concentrações muito elevadas na atmosfera e continuam aumentando. Segundo o material de referência, a temperatura média da Terra já estava aproximadamente 1,1 °C acima dos níveis do final do século XIX.',
          'O planeta funciona como um sistema em que diferentes elementos estão conectados. Por isso, uma alteração no clima pode provocar mudanças em diversos ambientes e afetar a vida das pessoas.',
          'Entre as principais consequências estão o derretimento das geleiras, a escassez de água, a elevação do nível do mar, os furacões e as tempestades intensas.',
          'Esses fenômenos podem provocar enchentes, destruir casas e comunidades, prejudicar a agricultura e colocar em risco a vida de muitas pessoas.'
        ]
      },
      {
        subtitulo: '5. Como combater as mudanças climáticas?',
        paragrafos: [
          'Uma das principais medidas é reduzir a dependência dos combustíveis fósseis e ampliar o uso de fontes de energia mais limpas e renováveis.',
          'Nos deslocamentos do dia a dia, caminhar ou utilizar a bicicleta em trajetos curtos são alternativas que ajudam a diminuir as emissões. Reduzir o uso do carro também pode contribuir significativamente para esse objetivo.',
          'Em casa, algumas atitudes ajudam a economizar energia, como substituir lâmpadas halógenas por lâmpadas LED, lavar roupas com água fria e deixá-las secar ao ar livre.',
          'Pequenas mudanças nos hábitos de consumo e no uso dos recursos naturais podem contribuir para reduzir os impactos ambientais. Quando adotadas por muitas pessoas, essas atitudes podem fazer uma grande diferença no combate às mudanças climáticas.'
        ]
      }
    ],

    observacao: 'Conteúdo organizado para fins educacionais, com base nas informações e nos materiais de referência indicados.',

    fonte: 'ONU / National Geographic Brasil',

    url: 'https://www.nationalgeographicbrasil.com/meio-ambiente/2022/10/mudanca-climatica-o-que-e-como-e-causada-e-o-que-voce-pode-fazer-para-reverte-la'
  }
},


  
// ===== CARD 8 =====
{
  id: 8,
  tema: 'urbano',
  icone: '🛒',
  titulo: 'Consumo consciente',
  descricao: 'Comprar menos, melhor e com propósito.',

  apresentacao: 'O consumo consciente é a prática de utilizar e descartar produtos levando em conta seus impactos ambientais, sociais e econômicos. Ao contrário do consumismo impulsivo, esse conceito propõe refletir sobre a real necessidade de cada compra, a origem das matérias-primas, as condições em que o item foi produzido e o destino dos resíduos gerados. Como tudo o que consumimos é retirado da natureza e depois retorna para ela na forma de descarte, nossas decisões do dia a dia têm impactos. Evitar o desperdício de alimentos, recusar plásticos de uso único e priorizar itens certificados são atitudes que reduzem diretamente a pressão sobre as florestas, a poluição dos oceanos e o acúmulo de lixo nas cidades.',

  video: {
    titulo: 'ODS #12: Consumo e Produção Responsáveis - IBGE Explica',
    videoId: 'tMtMphzAcK8',
    fonte: 'IBGE Explica — canal oficial do IBGE no YouTube.',
    descricao: 'Apresenta de forma didática a diferença entre consumo necessário e consumismo, explica os impactos da extração excessiva de recursos naturais e mostra como escolhas cotidianas ajudam a reduzir o desperdício e a poluição.'
  },

  leitura: {
    titulo: 'Como Nossas Escolhas Transformam o Planeta',

    secoes: [
      {
        subtitulo: '1. O que significa consumir com consciência',

        paragrafos: [
          'O que utilizamos no dia a dia, desde os alimentos no prato, as roupas, móveis e aparelhos eletrônicos, tudo isso depende de recursos naturais como água, solo, minérios e energia. O que preocupa é que o modelo de produção e consumo que conhecemos extrai matérias-primas em uma frequência muito alta e gera montanhas de resíduos, sobrecarregando os ecossistemas do planeta.',

          'Para ajudar a reduzir esse cenário, o Objetivo de Desenvolvimento Sustentável 12 da ONU propõe padrões de consumo e produção responsáveis, focados no uso eficiente dos recursos naturais e na redução do desperdício. Segundo a metodologia do Instituto Akatu, consumir com consciência exige refletir antes, durante e depois de cada compra.'
        ]
      },

      {
        subtitulo: '2. O consumo consciente e seus impactos',

        paragrafos: [
          'Nossas escolhas de consumo influenciam diretamente o meio ambiente. Os impactos podem ser percebidos nas florestas, nos oceanos e nas cidades.'
        ]
      },

      {
        subtitulo: 'Nas florestas',

        paragrafos: [
          'Os hábitos de compra nas cidades influenciam diretamente a conservação das áreas florestais. O desperdício de alimentos e a demanda por produtos agropecuários e madeireiros estão entre os principais fatores que impulsionam o desmatamento para a abertura de novas lavouras e pastagens.',

          'Podemos proteger as florestas ao planejar melhor as compras para evitar que alimentos estraguem, reduzir o desperdício na cadeia alimentar e exigir produtos com certificação de manejo florestal sustentável, além de priorizar papel reciclado e reutilizar materiais escolares ou móveis em bom estado.'
        ]
      },

      {
        subtitulo: 'Nos oceanos',

        paragrafos: [
          'Grande parte da poluição que ameaça a vida marinha tem origem em terra firme, chegando aos mares por meio de rios, bueiros e do descarte inadequado. Plásticos descartáveis se desfazem em microplásticos que contaminam toda a cadeia alimentar, enquanto o despejo de óleo de cozinha usado e produtos químicos na rede de esgoto comprometem a qualidade das águas e prejudicam severamente a nossa saúde.',

          'Para preservar os oceanos e os litorais, atitudes simples fazem diferença: recusar plásticos de uso único, separar embalagens para a reciclagem e logística reversa, descartar óleo e medicamentos em pontos de coleta específicos e consumir apenas pescados de origem certificada, respeitando o tamanho mínimo e o período de defeso (época de reprodução das espécies).'
        ]
      },

      {
        subtitulo: 'Nas cidades',

        paragrafos: [
          'Como a maior parte da população vive na área urbana, as cidades concentram tanto o maior volume de compras quanto os maiores desafios de gestão de lixo e emissões de carbono. O consumo por impulso e a troca frequente de eletrônicos e roupas sobrecarregam os aterros sanitários e o gasto energético da indústria.',

          'No ambiente urbano, o consumo consciente é planejar as refeições para evitar sobras, optar pelo conserto, troca ou doação de objetos antes de comprar novos, higienizar e separar os resíduos recicláveis para facilitar o trabalho das cooperativas de catadores e priorizar meios de deslocamento com menor impacto ambiental, como transporte público, bicicleta ou caminhada.'
        ]
      },

      {
        subtitulo: '3. Ciclo de Vida e Economia Circular',

        paragrafos: [
          'Enquanto o modelo linear segue a lógica de "extrair, produzir e descartar", o consumo consciente fortalece a economia circular, na qual os materiais permanecem em uso pelo maior tempo possível.',

          'Ao escolher empresas comprometidas com práticas sustentáveis, evitar embalagens excessivas e dar destino adequado a pilhas, baterias e eletrônicos por meio da logística reversa, o cidadão reduz sua pegada ecológica e transforma o ato de consumir em uma ferramenta de preservação ambiental.'
        ]
      }
    ],

    observacao: 'Adaptado para fins educacionais a partir das diretrizes do Objetivo de Desenvolvimento Sustentável 12 (ONU Brasil) e dos materiais educativos do Instituto Akatu.',

    fonte: 'ONU Brasil / Instituto Akatu',

    url: 'https://brasil.un.org/pt-br/sdgs/12'
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

  // ==========================================
  // QUIZ DE FLORESTAS
  // ==========================================

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
      explicacao: 'O reflorestamento com espécies nativas e o manejo comunitário conservam as florestas, enquanto técnicas agrícolas como rotação de culturas, cultivo mínimo e pastagem sustentável ajudam a evitar a conversão de novas florestas em pastagens.'
    },

    {
      p: 'De acordo com o texto do capítulo, de que maneira os hábitos de compra nas cidades influenciam diretamente a preservação das florestas?',
      o: [
        'O consumo urbano não interfere nas áreas florestais, pois o desmatamento ocorre apenas por fenômenos climáticos naturais.',
        'A redução do desperdício de alimentos e a escolha de produtos com certificação socioambiental diminuem a pressão pela abertura de novas áreas agrícolas e pela extração ilegal de madeira.',
        'A compra frequente de embalagens descartáveis de papel virgem estimula o plantio de florestas nativas intocadas.',
        'O aumento do consumo de carne e grãos sem rastreabilidade reduz automaticamente a necessidade de expansão agropecuária.'
      ],
      c: 1,
      explicacao: 'O desperdício de alimentos e a demanda por produtos agropecuários e madeireiros sem rastreabilidade impulsionam o desmatamento para novas lavouras e pastagens. Planejar compras e exigir certificação reduz essa pressão sobre as florestas.',
      fonte: 'Conteúdo Consumo Consciente — adaptado de ONU Brasil / Instituto Akatu'
    },

    {
      p: 'Uma escola deseja renovar seu mobiliário e adquirir materiais escolares seguindo critérios de consumo consciente voltados à proteção das florestas. Qual medida deve ser priorizada?',
      o: [
        'Comprar móveis de madeira nativa sem comprovação de origem, priorizando exclusivamente o menor preço de mercado.',
        'Substituir cadernos e papéis certificados por materiais plásticos descartáveis de uso único.',
        'Exigir certificação de manejo florestal sustentável (como o selo FSC), priorizar papel reciclado e estimular a reutilização de materiais em bom estado.',
        'Descartar móveis que precisam de pequenos reparos para incentivar a produção industrial contínua.'
      ],
      c: 2,
      explicacao: 'A certificação de manejo florestal sustentável, como o selo FSC, ajuda a identificar a origem responsável da madeira. O papel reciclado e a reutilização de móveis e materiais também diminuem a extração de recursos naturais.',
      fonte: 'Conteúdo Consumo Consciente — adaptado de ONU Brasil / Instituto Akatu'
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
      p: 'De acordo com o texto, o que são mudanças climáticas?',
      o: [
        'Alterações temporárias na temperatura durante as estações do ano.',
        'Mudanças a longo prazo na temperatura e nas condições do clima.',
        'Fenômenos que acontecem somente durante o inverno.',
        'Alterações causadas exclusivamente pelas atividades humanas.',
        'Mudanças que acontecem apenas por causas naturais.'
      ],
      c: 1,
      explicacao: 'As mudanças climáticas são alterações de longo prazo na temperatura e nas condições do clima, causadas por fatores naturais e humanos.',
      fonte: 'Conteúdo do card — Mudanças Climáticas'
    },

    {
      p: 'Qual das alternativas apresenta um exemplo de causa natural das mudanças climáticas?',
      o: [
        'Queima de combustíveis fósseis.',
        'Desmatamento para criação de pastagens.',
        'Emissão de gases por veículos.',
        'Erupções vulcânicas.',
        'Consumo excessivo de energia elétrica.'
      ],
      c: 3,
      explicacao: 'As erupções vulcânicas são causas naturais que liberam aerossóis capazes de bloquear parte da energia solar.',
      fonte: 'Conteúdo do card — Mudanças Climáticas'
    },

    {
      p: 'Como a queima de combustíveis fósseis afeta as mudanças climáticas?',
      o: [
        'Diminui a temperatura do planeta.',
        'Reduz a quantidade de gases na atmosfera.',
        'Produz gases que intensificam o efeito estufa e retêm o calor.',
        'Impede o derretimento das geleiras.',
        'Aumenta a capacidade das árvores de armazenar carbono.'
      ],
      c: 2,
      explicacao: 'A queima de combustíveis fósseis libera gases que intensificam o efeito estufa e retêm calor na atmosfera.',
      fonte: 'Conteúdo do card — Mudanças Climáticas'
    },

    {
      p: 'Segundo o texto, as consequências das mudanças climáticas afetam o quê?',
      o: [
        'Apenas a temperatura dos oceanos.',
        'Somente as áreas industriais.',
        'A vegetação, sem afetar a população.',
        'O meio ambiente e a vida das pessoas, causando enchentes, derretimento das geleiras e elevação do nível do mar.',
        'Apenas os animais que vivem nas regiões polares.'
      ],
      c: 3,
      explicacao: 'As mudanças climáticas afetam o meio ambiente e a população, provocando enchentes, derretimento das geleiras e elevação do nível do mar.',
      fonte: 'Conteúdo do card — Mudanças Climáticas'
    },

    {
      p: 'Como o desmatamento afeta as mudanças climáticas?',
      o: [
        'Aumenta a capacidade da natureza de absorver carbono.',
        'Libera o carbono armazenado nas árvores e reduz a capacidade da natureza de conter as emissões.',
        'Diminui a concentração de gases na atmosfera.',
        'Impede o aumento da temperatura terrestre.',
        'Reduz a quantidade de combustíveis fósseis utilizados.'
      ],
      c: 1,
      explicacao: 'O desmatamento libera o carbono armazenado nas árvores e diminui a capacidade da natureza de conter as emissões.',
      fonte: 'Conteúdo do card — Mudanças Climáticas'
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
    },

    {
      p: 'O desmatamento e a degradação florestal representam desafios ambientais que ultrapassam os limites dos ecossistemas locais, podendo contribuir para alterações climáticas em escala global. Considerando os mecanismos envolvidos nesse processo, assinale a alternativa que apresenta a relação ambiental mais adequada:',
      o: [
        'A retirada da cobertura vegetal reduz a evapotranspiração e a capacidade de armazenamento de carbono das florestas, podendo comprometer a regulação do clima e intensificar o aquecimento global.',
        'A degradação florestal interfere exclusivamente na absorção de dióxido de carbono, mas não provoca alterações nos ciclos hidrológicos, uma vez que a precipitação depende apenas das condições atmosféricas.',
        'As queimadas florestais contribuem para o equilíbrio climático a longo prazo, pois a liberação de carbono durante a combustão é compensada imediatamente pela regeneração da vegetação.',
        'A substituição de florestas nativas por áreas agrícolas mantém os serviços ecossistêmicos originais, desde que exista cobertura vegetal suficiente para evitar a exposição direta do solo.'
      ],
      c: 0,
      explicacao: 'A retirada da cobertura vegetal reduz a evapotranspiração e a capacidade das florestas de armazenar carbono, prejudicando a regulação climática e contribuindo para o aquecimento global.',
      fonte: 'Conteúdo do card — Poluição e seus impactos / Mudanças climáticas.'
    },
    {
      p: 'O enfrentamento das mudanças climáticas exige estratégias que considerem não apenas a redução das emissões de gases de efeito estufa, mas também a preservação dos ecossistemas responsáveis pela manutenção do equilíbrio ambiental. Nesse contexto, qual alternativa apresenta a estratégia mais consistente para enfrentar a degradação florestal?',
      o: [
        'Priorizar o reflorestamento com espécies de crescimento acelerado, independentemente de sua origem, pois a quantidade de árvores plantadas é suficiente para restabelecer integralmente as funções ecológicas de uma floresta nativa.',
        'Concentrar os esforços na redução das emissões industriais, uma vez que a concentração de carbono atmosférico deverá se reduzir. O reflorestamento deverá acontecer assim que essas emissões forem reduzidas.',
        'Combinar o combate ao desmatamento e às queimadas, a recuperação de áreas degradadas e o reflorestamento com espécies adequadas ao ecossistema local, preservando a biodiversidade e a capacidade de armazenamento de carbono.',
        'Adotar o manejo florestal sustentável como estratégia de conservação, permitindo a exploração seletiva de recursos naturais e priorizando a regeneração da vegetação nativa, de modo que a manutenção da cobertura vegetal seja suficiente para preservar o equilíbrio ecológico e compensar os impactos ambientais da atividade.'
      ],
      c: 2,
      explicacao: 'A estratégia mais completa combina prevenção do desmatamento, combate às queimadas, recuperação de áreas degradadas e reflorestamento com espécies adequadas ao ecossistema local.',
      fonte: 'Conteúdo do card — Poluição e seus impactos / Mudanças climáticas.'
    },

  ],


  // ==========================================
  // QUIZ DE OCEANOS
  // ==========================================

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
      p: 'Segundo o texto adaptado sobre oceanos e litorais, qual é a dupla função exercida pelos manguezais, marismas e gramas marinhas em relação ao clima e à vida marinha?',
      o: [
        'Retêm matéria orgânica em seus solos alagados (evitando o escape de carbono) e servem de área de reprodução de peixes, garantindo renda pesqueira e segurança alimentar.',
        'Liberam carbono na atmosfera para aquecer o litoral e concentram a reprodução de peixes exclusivamente em águas profundas.',
        'Eliminam a necessidade de zonas úmidas costeiras ao substituí-las por barreiras artificiais de concreto.',
        'Aceleram a erosão costeira para renovar os nutrientes das águas rasas e aumentar o nível do mar.'
      ],
      c: 0,
      explicacao: 'Manguezais, marismas e gramas marinhas retêm matéria orgânica em seus solos alagados, impedindo o escape de carbono para o ar, e funcionam como áreas de reprodução de peixes.',
      fonte: 'Conteúdo do capítulo — ONU Brasil / PNUMA'
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
      explicacao: 'Conservar essas zonas úmidas, manejá-las de forma responsável e replantar mangues e gramas marinhas fortalece as barreiras naturais contra tempestades e o avanço do mar.',
      fonte: 'Conteúdo do capítulo — ONU Brasil / PNUMA'
    },

    {
      p: 'Segundo o texto adaptado sobre oceanos, qual prática cotidiana do consumidor contribui diretamente para proteger a biodiversidade marinha?',
      o: [
        'Recusar plásticos de uso único e destinar corretamente os resíduos recicláveis para evitar que cheguem aos rios e mares.',
        'Descartar óleo de cozinha usado e medicamentos vencidos na rede de esgoto doméstico para diluição rápida.',
        'Priorizar o consumo de espécies marinhas capturadas durante o período de defeso.',
        'Substituir garrafas reutilizáveis por embalagens plásticas individuais de pequeno porte.'
      ],
      c: 0,
      explicacao: 'Grande parte da poluição marinha nasce em terra firme. Recusar plásticos descartáveis e destinar embalagens corretamente evita que esses resíduos cheguem aos mares e contaminem a cadeia alimentar.',
      fonte: 'Conteúdo Consumo Consciente — adaptado de ONU Brasil / Instituto Akatu'
    },

    {
      p: 'Um restaurante localizado em uma cidade litorânea decidiu adequar suas operações ao consumo consciente para reduzir seu impacto sobre os ecossistemas marinhos. Qual conjunto de ações está alinhado a esse objetivo?',
      o: [
        'Utilizar embalagens de isopor para entregas e descartar resíduos orgânicos diretamente na rede pluvial.',
        'Eliminar descartáveis plásticos, implementar a coleta seletiva com logística reversa e adquirir pescados apenas de fornecedores certificados e dentro do tamanho mínimo permitido.',
        'Aumentar a oferta de frutos do mar ameaçados de extinção para valorizar a gastronomia local.',
        'Lavar utensílios com detergentes ricos em fosfato sem tratamento de efluentes.'
      ],
      c: 1,
      explicacao: 'Eliminar descartáveis plásticos, aplicar a coleta seletiva com logística reversa e respeitar a certificação, o tamanho mínimo e o período de defeso dos pescados são medidas que ajudam a proteger a qualidade da água e a reprodução das espécies marinhas.',
      fonte: 'Conteúdo Consumo Consciente — adaptado de ONU Brasil / Instituto Akatu'
    },

    {
      p: 'Em qual região está localizado o oceano associado à ocorrência do fenômeno da aurora boreal?',
      o: [
        'No Oceano Pacífico, entre a Ásia e a Oceania.',
        'No Oceano Antártico, no hemisfério sul e no extremo sul do planeta.',
        'No Oceano Glacial Ártico, no extremo norte, ao redor do Polo Norte.',
        'No Oceano Atlântico, entre o continente americano e as costas oeste da Europa e da África.',
        'No Oceano Índico, localizado entre a Antártida, a África, a Ásia e a Oceania.'
      ],
      c: 2,
      explicacao: 'O Oceano Glacial Ártico está localizado no extremo norte do planeta, ao redor do Polo Norte. Essa região está associada à ocorrência da aurora boreal.',
      fonte: 'Conteúdo do capítulo — Oceanos'
    },

    {
      p: 'De acordo com o texto, qual é uma das principais causas do derretimento das geleiras?',
      o: [
        'A diminuição da temperatura dos oceanos.',
        'O aumento da temperatura dos oceanos e do globo terrestre.',
        'A redução da emissão de gases poluentes.',
        'A diminuição do efeito estufa.',
        'A redução da atividade industrial.'
      ],
      c: 1,
      explicacao: 'A queima de combustíveis fósseis, como carvão e petróleo, contribui para o aumento da temperatura do planeta e dos oceanos. Esse aquecimento provoca o derretimento das geleiras e contribui para a elevação do nível do mar.',
      fonte: 'Conteúdo do capítulo — Oceanos e mudanças climáticas'
    },

    {
      p: 'Como o descarte inadequado de resíduos industriais prejudica os oceanos?',
      o: [
        'Aumenta a quantidade de oxigênio na água.',
        'Melhora o desenvolvimento das plantas marinhas.',
        'Reduz a temperatura da água.',
        'Provoca a contaminação da água e a proliferação de algas.',
        'Impede o derretimento das geleiras.'
      ],
      c: 3,
      explicacao: 'Resíduos industriais, esgoto e produtos tóxicos podem contaminar os oceanos. Além disso, substâncias como nitrogênio e fósforo favorecem a proliferação excessiva de algas, dificultando a passagem da luz solar para as plantas marinhas.',
      fonte: 'Conteúdo do capítulo — Poluição dos oceanos'
    },

    {
      p: 'Qual é uma das consequências da pesca excessiva para o ecossistema marinho?',
      o: [
        'Aumento da população de grandes peixes.',
        'Equilíbrio da cadeia alimentar.',
        'Redução da exploração dos recursos naturais.',
        'Perturbação do equilíbrio do sistema marinho.',
        'Diminuição da atividade pesqueira.'
      ],
      c: 3,
      explicacao: 'A pesca excessiva provoca a redução das populações de peixes e pode alterar a cadeia alimentar. Como consequência, ocorre um desequilíbrio no ecossistema marinho.',
      fonte: 'Conteúdo do capítulo — Pesca excessiva'
    },

    {
      p: 'Estima-se que milhões de toneladas de plástico sejam despejadas nos oceanos anualmente. Além dos danos diretos aos animais marinhos, qual consequência desse tipo de poluição pode atingir os seres humanos?',
      o: [
        'A morte dos corais provocada pelo branqueamento causado pela presença dos microplásticos, afetando a reprodução da vida marinha.',
        'Apenas a dificuldade de locomoção em razão da presença de plásticos que se prendem nas nadadeiras das tartarugas, golfinhos e peixes, além de outros animais presentes na vida marinha.',
        'A ingestão de microplásticos por animais marinhos, que podem chegar aos seres humanos por meio da cadeia alimentar.',
        'O desenvolvimento de câncer nos animais marinhos que vivem nos oceanos.'
      ],
      c: 2,
      explicacao: 'Os microplásticos podem ser ingeridos por animais marinhos e entrar na cadeia alimentar, podendo chegar até os seres humanos por meio do consumo desses animais.',
      fonte: 'Conteúdo do card — Poluição e seus impactos.'
    },
    {
      p: 'Vimos que o aumento da temperatura da água tem causado vários impactos ao ecossistema marinho. Considerando seus efeitos sobre os recifes de corais, assinale a alternativa correta:',
      o: [
        'O aumento da temperatura da água estimula a reprodução dos corais, ampliando a biodiversidade e tornando os recifes propícios ao crescimento de mais algas e ao aumento da produção de oxigênio dos oceanos.',
        'A elevação da temperatura da água pode provocar o branqueamento dos corais, comprometendo sua sobrevivência e causando desequilíbrios nos ecossistemas que dependem desses ambientes.',
        'O aumento da temperatura reduz a concentração de sais minerais na água, impedindo exclusivamente o desenvolvimento de espécies de peixes de grande porte.',
        'O aumento da temperatura dos oceanos reforça os hábitos da vida marinha, estimulando sua reprodução e, consequentemente, o aumento da população, impedindo que a cadeia alimentar entre em crise por falta de alimentos aos predadores.'
      ],
      c: 1,
      explicacao: 'O aumento da temperatura da água pode provocar o branqueamento dos corais. Esse fenômeno compromete sua sobrevivência e prejudica os diversos organismos que dependem dos recifes.',
      fonte: 'Conteúdo do card — Poluição e seus impactos.'
    },


  ],


  // ==========================================
  // QUIZ DE VIDA URBANA
  // ==========================================

  Urbano: [

    {
      p: 'No tópico dedicado às cidades, o texto destaca a transição da infraestrutura "cinza" para a infraestrutura "verde". Quais intervenções representam essa mudança na paisagem urbana?',
      o: [
        'Canalização fechada de córregos e ampliação de vias asfaltadas com excesso de concreto.',
        'Criação de parques, recuperação de lagos e córregos urbanos, uso de materiais construtivos sustentáveis e plantio de árvores em ruas e telhados.',
        'Remoção da arborização das calçadas para facilitar o escoamento rápido da água da chuva.',
        'Substituição de áreas verdes públicas por estacionamentos pavimentados com insumos de alta emissão de carbono.'
      ],
      c: 1,
      explicacao: 'Substituir a infraestrutura cinza pela verde envolve criar parques, recuperar lagos e córregos urbanos, adotar materiais construtivos sustentáveis e plantar árvores em ruas e telhados.',
      fonte: 'Conteúdo do capítulo — ONU Brasil / PNUMA'
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
      explicacao: 'Essas iniciativas reduzem o risco de alagamentos, amenizam ondas de calor, previnem doenças, elevam o bem-estar coletivo e estimulam os moradores a caminhar e pedalar pela cidade.',
      fonte: 'Conteúdo do capítulo — ONU Brasil / PNUMA'
    },

    {
      p: 'Segundo a metodologia do Instituto Akatu apresentada na leitura, o consumidor consciente deve refletir antes, durante e depois de cada compra no ambiente urbano. Qual sequência representa corretamente essa prática?',
      o: [
        'Comprar por impulso, utilizar pelo menor tempo possível e descartar no lixo comum.',
        'Avaliar se há real necessidade de compra, pesquisar a origem socioambiental do produto, prolongar sua vida útil e planejar o reaproveitamento ou descarte correto.',
        'Priorizar produtos com troca semestral obrigatória para acompanhar as tendências tecnológicas.',
        'Ignorar informações sobre a cadeia produtiva do fabricante, focando apenas na embalagem mais atrativa.'
      ],
      c: 1,
      explicacao: 'A metodologia do Instituto Akatu propõe refletir antes, durante e depois da compra: avaliar a real necessidade, verificar a origem socioambiental, cuidar para prolongar a vida útil e planejar o reaproveitamento ou descarte adequado.',
      fonte: 'Instituto Akatu'
    },

    {
      p: 'Um morador de uma grande metrópole quer reduzir sua pegada ecológica e a geração de resíduos sólidos urbanos. Qual atitude cotidiana aplica corretamente o conceito de consumo consciente na cidade?',
      o: [
        'Fazer compras semanais sem planejamento, descartando alimentos próximos ao vencimento para manter a despensa renovada.',
        'Utilizar transporte individual motorizado em trajetos curtos e descartar eletrônicos antigos junto aos resíduos orgânicos.',
        'Planejar as refeições para evitar sobras, optar pelo conserto ou troca de objetos, separar resíduos recicláveis e priorizar transporte público, bicicleta ou caminhada.',
        'Acumular embalagens misturadas sem higienização para dificultar a triagem nas cooperativas de catadores.'
      ],
      c: 2,
      explicacao: 'Planejar refeições, consertar ou trocar objetos, higienizar e separar recicláveis e adotar transporte público, bicicleta ou caminhada reduzem a sobrecarga nos aterros sanitários e as emissões de carbono nas cidades.',
      fonte: 'Conteúdo Consumo Consciente — adaptado de ONU Brasil / Instituto Akatu'
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
    },

    {
      p: 'Qual das alternativas apresenta uma atitude que ajuda a combater as mudanças climáticas?',
      o: [
        'Utilizar o carro em todos os trajetos, independentemente da distância.',
        'Aumentar o consumo de energia elétrica.',
        'Substituir lâmpadas LED por lâmpadas halógenas.',
        'Utilizar bicicleta ou caminhar em trajetos curtos.',
        'Aumentar o consumo de produtos descartáveis.'
      ],
      c: 3,
      explicacao: 'Caminhar ou utilizar bicicletas em trajetos curtos ajuda a reduzir o uso de combustíveis fósseis e a emissão de gases poluentes.',
      fonte: 'Conteúdo do card — Mudanças Climáticas'
    },

    {
      p: 'O crescimento dos centros urbanos, associado à expansão industrial e ao aumento da circulação de veículos automotores, intensifica a emissão de poluentes atmosféricos. Esse cenário representa um desafio para a gestão das cidades, especialmente no que diz respeito à saúde pública e à qualidade ambiental. Considerando os efeitos da poluição atmosférica apresentados no texto, assinale a alternativa que estabelece corretamente a relação entre a atividade humana e suas consequências ambientais.',
      o: [
        'A emissão de dióxido de carbono, monóxido de carbono e dióxido de nitrogênio contribui para a deterioração da qualidade do ar. Entretanto, seus efeitos sobre a saúde humana são predominantemente restritos a irritações passageiras.',
        'A expansão dos transportes movidos a combustíveis fósseis intensifica a emissão de poluentes, podendo agravar doenças respiratórias e aumentar a pressão sobre os sistemas de saúde, enquanto a substituição dessas fontes por alternativas menos poluentes representa uma estratégia de mitigação.',
        'A utilização de combustíveis fósseis nos centros urbanos constitui um problema ambiental principalmente pela emissão de gases responsáveis pela destruição da camada de ozônio, sendo esse o mecanismo predominante de intensificação do aquecimento global.',
        'A eletrificação da frota de veículos urbanos é suficiente para solucionar a poluição atmosférica, independentemente da matriz energética utilizada para produzir a eletricidade, uma vez que a ausência de combustão nos veículos elimina os impactos ambientais associados à geração de energia.'
      ],
      c: 1,
      explicacao: 'Os transportes movidos a combustíveis fósseis emitem poluentes que prejudicam a qualidade do ar e podem agravar doenças respiratórias. A adoção de alternativas menos poluentes ajuda a reduzir esses impactos.',
      fonte: 'Conteúdo do card — Poluição e seus impactos.'
    },
    {
      p: 'A urbanização acelerada promove transformações na paisagem e na dinâmica dos centros urbanos. A concentração de veículos, estabelecimentos comerciais, construções e atividades industriais amplia a exposição da população a diferentes formas de poluição, incluindo aquelas que nem sempre envolvem a contaminação direta do ar, da água ou do solo. Com base nos efeitos da poluição sonora e visual, assinale a alternativa que apresenta a interpretação mais adequada sobre seus impactos na qualidade de vida urbana.',
      o: [
        'A poluição sonora e a visual possuem mecanismos de atuação semelhantes, pois ambas dependem da emissão de ondas sonoras em frequências distintas, provocando alterações sensoriais que podem ser prevenidas exclusivamente por equipamentos de proteção individual.',
        'A poluição visual está associada principalmente à emissão de partículas atmosféricas que reduzem a visibilidade nos centros urbanos, enquanto a poluição sonora decorre da concentração de estímulos luminosos em ambientes de grande circulação.',
        'A exposição contínua a ruídos elevados pode provocar alterações fisiológicas e psicológicas, enquanto o excesso de estímulos luminosos e publicitários pode comprometer o conforto visual. Assim, o planejamento urbano deve considerar medidas específicas para reduzir ambas as formas de poluição.',
        'A regulamentação dos níveis de ruído em áreas residenciais e hospitalares representa uma medida suficiente para controlar os efeitos da poluição urbana sobre a população, uma vez que a poluição visual não apresenta consequências relevantes para o bem-estar coletivo.'
      ],
      c: 2,
      explicacao: 'A poluição sonora pode provocar problemas físicos e psicológicos, enquanto o excesso de estímulos visuais pode causar desconforto. Por isso, o planejamento urbano precisa considerar medidas específicas para controlar os dois problemas.',
      fonte: 'Conteúdo do card — Poluição e seus impactos.'
    },


  ]


};
