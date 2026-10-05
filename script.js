/* Veicular Viaes — JavaScript clássico para abrir direto por file:// */
(function () {
  "use strict";

  /* Destino do formulário: abre um aplicativo de e-mail local, sem servidor. */
  var CONTACT_EMAIL = "adauto.silva@aramisinc.com.br";

  var CATEGORIES = [
    {
      id: "leis-de-transito", name: "Leis de trânsito", short: "Leis", icon: "⚖", color: "#dfece4",
      description: "Regras, documentos e caminhos para entender situações comuns no trânsito.",
      topics: ["Novas regras da CNH", "Pontuação da carteira de motorista", "Como consultar multas", "Como recorrer de multas", "Multas mais comuns no Brasil", "Infrações leves, médias, graves e gravíssimas", "Lei seca", "Dirigir sem habilitação", "Suspensão da CNH", "Cassação da CNH", "Renovação da CNH", "CNH digital", "Mudanças no Código de Trânsito Brasileiro", "Direitos do motorista"]
    },
    {
      id: "documentacao-do-veiculo", name: "Documentação do veículo", short: "Documentação", icon: "▤", color: "#e9e4d6",
      description: "Guias para consultar, organizar e manter os documentos do veículo em ordem.",
      topics: ["Como consultar IPVA", "Calendário IPVA dos estados", "Licenciamento anual", "CRLV digital", "Transferência de veículo", "Compra e venda de carro usado", "Comunicação de venda", "Placa Mercosul", "Documentos obrigatórios para dirigir"]
    },
    {
      id: "manutencao-automotiva", name: "Manutenção automotiva", short: "Manutenção", icon: "⚙", color: "#e8e3d8",
      description: "Cuidados preventivos, sinais de atenção e manutenção explicados sem complicação.",
      topics: ["Quando trocar óleo do motor", "Tipos de óleo", "Filtro de óleo", "Filtro de ar", "Filtro de combustível", "Velas do carro", "Correia dentada", "Suspensão", "Freios", "Pastilhas de freio", "Amortecedores", "Ar condicionado automotivo", "Bateria do carro", "Problemas no motor", "Luzes do painel"]
    },
    {
      id: "economia", name: "Economia", short: "Economia", icon: "↗", color: "#f0e6d5",
      description: "Ideias para entender os custos do carro e tomar decisões mais econômicas.",
      topics: ["Como economizar combustível", "Gasolina ou etanol", "Como reduzir gastos com carro", "Melhor forma de abastecer", "Manutenção que evita gastos", "Seguro mais barato", "Como cuidar do carro para valorizar"]
    },
    {
      id: "seguranca-no-transito", name: "Segurança no trânsito", short: "Segurança", icon: "＋", color: "#e2ebeb",
      description: "Hábitos preventivos e orientações para dirigir com mais atenção e segurança.",
      topics: ["Direção defensiva", "Como dirigir na chuva", "Como dirigir na neblina", "Viagens longas", "Crianças no carro", "Uso correto do cinto", "Como evitar acidentes", "Primeiros cuidados em acidentes", "Segurança em rodovias"]
    },
    {
      id: "viagens-de-carro", name: "Viagens de carro", short: "Viagens", icon: "⌁", color: "#e3e9d7",
      description: "Planejamento, preparação do veículo e organização para aproveitar melhor a estrada.",
      topics: ["Checklist antes de viajar", "O que levar no carro", "Melhores cuidados na estrada", "Viagens em família", "Planejamento de viagem", "Pedágios", "Rotas brasileiras", "Economia em viagens"]
    },
    {
      id: "tecnologia-automotiva", name: "Tecnologia automotiva", short: "Tecnologia", icon: "⌘", color: "#e5e1ec",
      description: "Recursos digitais, novos tipos de veículo e tecnologias que estão mudando a direção.",
      topics: ["Aplicativos para motoristas", "GPS e navegação", "Carros elétricos", "Carros híbridos", "Segurança digital no veículo", "Assistentes de direção", "Novas tecnologias"]
    },
    {
      id: "compra-de-veiculos", name: "Compra de veículos", short: "Compra", icon: "◇", color: "#efe2d9",
      description: "Critérios para pesquisar, avaliar e negociar um veículo com mais informação.",
      topics: ["Como comprar carro usado", "Como avaliar um veículo", "O que olhar antes de comprar", "Golpes na compra de carros", "Financiamento", "Consórcio", "Tabela FIPE", "Depreciação de veículos"]
    }
  ];

  var GUIDANCE = {
    "leis-de-transito": {
      intro: [
        "Entender {topic} ajuda o motorista a tomar decisões mais informadas, mas a aplicação de regras depende do caso concreto e da regulamentação vigente.",
        "Este guia organiza os principais pontos sobre {topic} e indica como conferir informações sem depender de prazos ou regras que podem mudar."
      ],
      sections: [
        ["Comece pelos dados do seu caso", "Identifique a situação", "Anote o que aconteceu, quando e onde. Em assuntos como {topic}, esses detalhes ajudam a localizar a orientação correta.", "Separe os registros", "Guarde notificações, protocolos e comprovantes recebidos. Compare os dados com os documentos do veículo ou da habilitação."],
        ["Confira a regra em fonte oficial", "Localize o órgão responsável", "Consulte o Detran do estado ou o órgão indicado no documento. Portais oficiais explicam os canais e requisitos atualmente aceitos.", "Leia o procedimento completo", "Verifique etapas, documentos, prazos e formas de atendimento diretamente na fonte atualizada; não confie apenas em resumos ou mensagens encaminhadas."],
        ["Organize os próximos passos", "Registre cada protocolo", "Se fizer uma consulta ou solicitação sobre {topic}, anote a data, o número de protocolo e a resposta obtida.", "Peça orientação específica", "Quando houver dúvida sobre o efeito de uma infração ou decisão no seu caso, procure o órgão responsável ou assistência jurídica qualificada."]
      ],
      tips: ["Consulte o portal oficial do órgão que aparece no seu documento.", "Confira se placa, Renavam, CPF e datas estão corretos antes de enviar uma solicitação.", "Salve cópias das notificações e dos protocolos.", "Desconfie de cobranças ou links recebidos sem confirmação no canal oficial.", "Verifique novamente as regras vigentes antes de tomar uma decisão."],
      faq: [
        ["Por onde começo a conferir {topic}?", "Comece pelo documento ou pela situação concreta e confirme os dados no canal oficial do órgão responsável. As etapas podem variar conforme estado, tipo de registro e circunstância."],
        ["As regras podem mudar de um estado para outro?", "A legislação nacional pode ser complementada por procedimentos e calendários locais. Confirme tanto a regra aplicável quanto o serviço do seu estado."],
        ["Este guia substitui uma orientação jurídica?", "Não. É informação educativa geral; um caso com prazo, penalidade ou contestação pode precisar de análise profissional e confirmação oficial."]
      ]
    },
    "documentacao-do-veiculo": {
      intro: [
        "Manter informações e documentos do veículo organizados reduz retrabalho. Este guia sobre {topic} apresenta verificações úteis antes de iniciar qualquer procedimento.",
        "Os serviços relacionados a {topic} podem depender do estado, da situação cadastral e do tipo de veículo. Use estas etapas como roteiro inicial e valide os requisitos locais."
      ],
      sections: [
        ["Reúna as informações antes de começar", "Confira os dados básicos", "Tenha em mãos os documentos pertinentes e verifique placa, Renavam, identificação do proprietário e eventuais comprovantes.", "Descubra qual serviço se aplica", "Uma pendência, transferência ou emissão pode exigir caminhos diferentes. Leia a descrição do serviço no portal oficial do Detran competente."],
        ["Faça o procedimento com cuidado", "Use o canal oficial", "Procure o site ou atendimento oficial do estado e confirme os documentos exigidos para {topic} antes de pagar taxas ou enviar arquivos.", "Guarde comprovantes", "Salve protocolo, recibo, comprovante de pagamento e cópia do documento emitido. Esses registros facilitam uma correção caso haja divergência."],
        ["Evite atrasos e intermediários duvidosos", "Acompanhe o andamento", "Consulte o status pelo protocolo e verifique se há exigências pendentes ou etapas presenciais.", "Proteja os dados do veículo", "Compartilhe documentos apenas em canais confiáveis. Não publique fotos que mostrem dados pessoais, códigos ou identificadores do veículo."]
      ],
      tips: ["Confirme as exigências no Detran do estado onde o veículo está registrado.", "Confira os dados antes de concluir uma solicitação.", "Mantenha cópias digitais legíveis dos documentos usados.", "Guarde protocolos e comprovantes até finalizar o serviço.", "Evite links de pagamento recebidos fora dos canais oficiais."],
      faq: [
        ["Quais documentos preciso separar para {topic}?", "A lista depende do serviço e do estado. Consulte a página oficial do procedimento e confira se há exigências para o perfil do proprietário ou do veículo."],
        ["Posso resolver tudo pela internet?", "Algumas etapas podem ser digitais, enquanto outras exigem vistoria, validação ou atendimento. A página oficial do serviço informa o fluxo vigente."],
        ["O que fazer se houver divergência nos dados?", "Interrompa o envio, confira os documentos de origem e use o canal oficial de atendimento para pedir correção e guardar o protocolo."]
      ]
    },
    "manutencao-automotiva": {
      intro: [
        "Um cuidado bem planejado pode ajudar a detectar desgaste antes que vire uma falha maior. Veja como avaliar {topic} sem substituir as recomendações específicas do fabricante.",
        "Os intervalos e procedimentos ligados a {topic} variam por veículo, uso e condições de rodagem. O manual do proprietário é o ponto de partida mais seguro."
      ],
      sections: [
        ["Use o manual como referência principal", "Confira a especificação do veículo", "Consulte o plano de manutenção e as especificações recomendadas para {topic}. Não escolha peças ou fluidos apenas pelo preço ou pela aparência.", "Considere como o carro é usado", "Trânsito intenso, poeira, calor, trajetos curtos, carga e estradas ruins podem alterar as condições de uso; peça ao profissional para avaliar o contexto."],
        ["Observe sinais sem desmontar o carro", "Registre sintomas", "Anote ruídos, vibrações, mudanças no consumo, alertas do painel e quando ocorrem. Essa descrição ajuda a oficina a investigar a causa.", "Evite reparos improvisados", "Não trabalhe em componentes quentes, energizados ou sob o veículo sem equipamento e conhecimento adequados. Pare se não puder verificar com segurança."],
        ["Planeje a inspeção e o serviço", "Peça diagnóstico e orçamento", "Solicite explicação da causa, das peças indicadas e do que é prioritário. Um orçamento claro deve separar serviço, peças e itens que ainda precisam de avaliação.", "Guarde o histórico", "Registre data, quilometragem, itens substituídos e comprovantes. Esse histórico facilita as próximas revisões e pode ajudar numa futura avaliação do carro."]
      ],
      tips: ["Consulte o manual antes de comprar peças, óleo ou fluidos.", "Não ignore luzes de alerta, vazamentos ou mudanças súbitas no comportamento do carro.", "Peça diagnóstico antes de autorizar serviços adicionais.", "Guarde notas e registros de manutenção com a quilometragem.", "Procure uma oficina qualificada se o sintoma envolver segurança ou exigir desmontagem."],
      faq: [
        ["Com que frequência devo verificar {topic}?", "Use o intervalo e a especificação do manual do seu veículo. O uso real e um sintoma observado podem justificar uma avaliação profissional antes do intervalo programado."],
        ["Posso fazer essa manutenção em casa?", "Somente se o procedimento for previsto para o usuário e você tiver ferramentas, conhecimento e condições seguras. Em caso de dúvida, procure assistência qualificada."],
        ["Quando devo parar de dirigir e pedir ajuda?", "Se houver perda de controle, alerta grave, fumaça, cheiro forte, superaquecimento ou falha de freio/direção, pare em local seguro e busque assistência."]
      ]
    },
    "economia": {
      intro: [
        "O custo de usar um carro depende de mais do que uma única compra ou abastecimento. Este guia reúne formas práticas de analisar {topic} sem comprometer segurança ou manutenção.",
        "Para decidir sobre {topic}, compare o custo total e seus próprios trajetos. Preços, cobertura de serviços e condições variam, então simule com dados reais antes de fechar."
      ],
      sections: [
        ["Entenda para onde vai o dinheiro", "Monte uma referência", "Anote gastos recorrentes com combustível, manutenção, seguro e uso diário por algumas semanas. Um registro simples mostra quais despesas pesam mais.", "Compare o mesmo período", "Ao avaliar {topic}, use distâncias e condições parecidas. Uma comparação sem o mesmo percurso ou cobertura pode levar a conclusões erradas."],
        ["Avalie opções sem sacrificar o necessário", "Olhe além do preço inicial", "Some taxas, consumo, manutenção, franquias, tempo e disponibilidade. O menor valor anunciado nem sempre representa o menor custo para o seu perfil.", "Faça uma estimativa realista", "Use preços atuais e faça mais de um cenário. Inclua imprevistos e evite projetar uma economia garantida a partir de uma única semana."],
        ["Transforme a análise em hábito", "Mude um fator por vez", "Teste uma alteração de rotina ligada a {topic} e registre o resultado. Assim fica mais fácil perceber o que realmente teve efeito.", "Proteja a segurança e a garantia", "Não adie manutenção necessária nem use produtos, peças ou coberturas inadequados para economizar. Confirme as condições no manual e no contrato."]
      ],
      tips: ["Registre gastos com data, quilometragem e tipo de despesa.", "Compare propostas com as mesmas coberturas e condições.", "Use preços locais e dados do seu próprio trajeto.", "Inclua manutenção preventiva no planejamento financeiro.", "Desconfie de promessa de economia fixa ou garantida."],
      faq: [
        ["Como saber se {topic} está valendo a pena?", "Compare o custo total com os seus hábitos reais, incluindo despesas que não aparecem no preço inicial. Reavalie quando preços ou rotina mudarem."],
        ["Onde encontro valores confiáveis?", "Use fontes oficiais, contratos completos e cotações recentes. Para consumo, use o manual e observe seus próprios registros em trajetos semelhantes."],
        ["Economizar pode afetar a segurança?", "Pode, se envolver adiar manutenção, escolher componentes inadequados ou eliminar proteção necessária. Reduza custos sem abrir mão das especificações e condições de segurança."]
      ]
    },
    "seguranca-no-transito": {
      intro: [
        "Segurança depende de antecipar riscos e adaptar a condução ao ambiente. Este guia sobre {topic} ajuda a organizar atitudes preventivas para antes e durante o trajeto.",
        "A melhor resposta a {topic} começa pela prevenção, pela atenção às condições do momento e por escolhas que deixem margem para reagir com calma."
      ],
      sections: [
        ["Prepare-se antes de sair", "Ajuste a condução ao contexto", "Observe clima, visibilidade, pavimento, tráfego e estado dos ocupantes. Se as condições não forem seguras, adie ou adapte o deslocamento.", "Revise o básico", "Confira pneus, iluminação, espelhos, cinto e os itens de segurança pertinentes. Crianças devem usar dispositivo adequado ao veículo e à regra vigente."],
        ["Mantenha espaço e atenção", "Reduza distrações", "Programe a rota antes de partir e deixe o celular fora do manuseio durante a condução. Faça pausas se o cansaço ou a sonolência aparecerem.", "Antecipe mudanças", "Mantenha distância compatível com a situação, sinalize com antecedência e evite manobras bruscas. A velocidade segura depende das condições, não apenas do limite indicado."],
        ["Saiba como agir se algo acontecer", "Priorize pessoas e local seguro", "Em uma ocorrência, evite se expor ao fluxo. Sinalize e acione o serviço de emergência adequado conforme a gravidade e as condições do local.", "Procure ajuda apropriada", "Não movimente feridos com suspeita de lesão, salvo perigo imediato. Siga as orientações do atendente de emergência e não substitua o socorro por dicas genéricas."]
      ],
      tips: ["Ajuste banco, espelhos e cintos antes de o veículo se mover.", "Adapte velocidade e distância a chuva, neblina, tráfego e pavimento.", "Nunca dirija sob efeito de álcool ou substâncias que reduzam a atenção.", "Pare em local seguro se estiver cansado, distraído ou com baixa visibilidade.", "Em uma emergência, acione o serviço apropriado e proteja-se do tráfego."],
      faq: [
        ["Qual é a primeira medida sobre {topic}?", "Reduza o risco imediato: adapte ou interrompa o trajeto se as condições não permitirem condução segura. Depois, consulte orientações oficiais específicas."],
        ["Uma dica geral serve para qualquer veículo?", "Nem sempre. Consulte o manual, a legislação e as recomendações do dispositivo de segurança ou do fabricante aplicáveis ao seu veículo."],
        ["Como agir se houver uma situação de emergência?", "Busque um local seguro, sinalize sem se expor e ligue para o serviço de emergência adequado. Siga as instruções recebidas."]
      ]
    },
    "viagens-de-carro": {
      intro: [
        "Uma viagem tranquila começa com tempo para conferir o veículo, a rota e as necessidades de quem vai junto. Este roteiro sobre {topic} ajuda a evitar esquecimentos comuns.",
        "Planejar {topic} com antecedência ajuda a repartir custos, escolher paradas e adaptar o percurso. Confirme condições locais e evite depender de uma única fonte de navegação."
      ],
      sections: [
        ["Organize veículo e documentos", "Faça uma revisão compatível com a viagem", "Confira itens previstos no manual, pneus, iluminação e eventuais alertas. Se houver sintoma ou manutenção pendente, procure uma oficina antes de partir.", "Separe os documentos necessários", "Confirme a documentação do veículo e dos ocupantes conforme o destino e o tipo de percurso. Deixe contatos de assistência acessíveis."],
        ["Planeje o percurso com folga", "Mapeie paradas e alternativas", "Anote pontos de abastecimento, descanso e possíveis desvios. Confira pedágios, restrições e condições de estrada em fontes atualizadas.", "Considere pessoas e bagagens", "Planeje pausas e espaço para os ocupantes. Distribua a bagagem sem bloquear a visão nem exceder a capacidade recomendada pelo fabricante."],
        ["Prepare-se para imprevistos", "Compartilhe o roteiro", "Informe a alguém de confiança o destino e a previsão de chegada. Mantenha o telefone carregado, mas não o manuseie enquanto dirige.", "Revise as condições no dia", "Clima, obras, tráfego e serviços mudam. Confira avisos recentes e tenha uma rota alternativa antes de iniciar o trecho."]
      ],
      tips: ["Faça a revisão do veículo com antecedência, não na véspera.", "Confira a rota, o clima e as condições de tráfego no dia.", "Planeje pausas regulares e alterne motoristas quando possível.", "Organize pedágios e abastecimentos usando valores e meios atualizados.", "Leve apenas bagagem que possa ser acomodada com segurança."],
      faq: [
        ["Quanto tempo antes devo preparar {topic}?", "Comece assim que definir o destino. Deixe revisão, documentos e ajustes de rota com margem para resolver pendências sem pressa."],
        ["Devo confiar só no GPS?", "Não. Navegação ajuda a planejar, mas pode ter dados desatualizados ou perder sinal. Confira a sinalização local e mantenha uma alternativa."],
        ["O que faço se o veículo apresentar problema na estrada?", "Priorize um local seguro, sinalize conforme possível e acione assistência. Não tente reparos em área de tráfego ou sem equipamento adequado."]
      ]
    },
    "tecnologia-automotiva": {
      intro: [
        "Novos recursos podem facilitar o uso do veículo, mas precisam ser entendidos antes de depender deles. Este guia apresenta o que observar em {topic}.",
        "Ao avaliar {topic}, vale comparar utilidade, compatibilidade, custo e privacidade. Recursos digitais complementam — não substituem — atenção e responsabilidade ao dirigir."
      ],
      sections: [
        ["Entenda o que o recurso faz", "Confira compatibilidade", "Leia o manual e os requisitos do veículo ou aparelho. Em {topic}, funções e nomes comerciais podem variar bastante entre marcas e versões.", "Conheça os limites", "Identifique situações em que o sistema não atua, depende de conexão ou exige intervenção. Não trate alertas e assistências como garantia contra acidentes."],
        ["Configure antes do trajeto", "Teste com o veículo parado", "Ajuste aplicativos, rotas, permissões e alertas antes de sair. Evite instalar, atualizar ou configurar serviços enquanto estiver dirigindo.", "Cuide dos dados pessoais", "Revise permissões, pareamentos e informações compartilhadas. Use senhas e atualizações recomendadas pelo fabricante e não conecte dispositivos desconhecidos."],
        ["Avalie custo e suporte", "Compare o custo total", "Considere instalação, assinatura, conectividade, atualizações e assistência. Um recurso pode depender de serviços ou cobertura indisponíveis em algumas regiões.", "Verifique fonte e suporte", "Prefira documentação do fabricante e lojas confiáveis. Confirme como receber atualizações e suporte antes de comprar ou ativar o recurso."]
      ],
      tips: ["Leia o manual do veículo e do dispositivo.", "Configure e teste recursos com o carro parado.", "Mantenha o sistema atualizado por canais legítimos.", "Revise permissões e dados compartilhados por aplicativos.", "Não confie em uma assistência digital como substituta da atenção."],
      faq: [
        ["Como escolher uma solução para {topic}?", "Compare compatibilidade, funções reais, custo total, suporte e tratamento de dados. Procure documentação oficial do fabricante."],
        ["O recurso funciona sem internet?", "Depende do produto e da função. Confira quais recursos ficam indisponíveis offline e planeje uma alternativa para o trajeto."],
        ["Posso depender totalmente dessa tecnologia?", "Não. Mantenha atenção à via, siga o manual e esteja preparado para limitações, falhas de sinal ou alertas incorretos."]
      ]
    },
    "compra-de-veiculos": {
      intro: [
        "Uma compra bem informada combina inspeção, análise de documentos e avaliação do custo total. Este guia sobre {topic} ajuda a estruturar a pesquisa antes de assumir um compromisso.",
        "Antes de decidir sobre {topic}, compare opções equivalentes e confirme informações com fontes independentes. Uma conversa ou anúncio, por si só, não comprova o estado ou o histórico do veículo."
      ],
      sections: [
        ["Pesquise antes de negociar", "Defina suas necessidades", "Considere uso, ocupantes, espaço, consumo, manutenção e orçamento. Compare veículos na mesma faixa e para a mesma finalidade.", "Verifique histórico e documentos", "Confira a identificação do veículo e os registros disponíveis em canais oficiais. Divergências devem ser esclarecidas antes de qualquer pagamento."],
        ["Inspecione sem pressa", "Avalie o estado real", "Peça uma inspeção independente, faça uma avaliação mecânica e examine o veículo à luz do dia. Um teste breve não revela todos os problemas.", "Analise o custo além do preço", "Inclua seguro, tributos, consumo, manutenção, transferência e financiamento. Use cotações e condições por escrito, não estimativas verbais."],
        ["Proteja a negociação", "Formalize cada condição", "Registre preço, prazos, itens incluídos, garantias oferecidas e responsabilidade por pendências. Leia o contrato completo antes de assinar.", "Use pagamento rastreável", "Confirme quem é o proprietário e o destinatário do pagamento. Desconfie de urgência artificial, terceiros intermediando ou valores muito abaixo do mercado."]
      ],
      tips: ["Inspecione o carro com um profissional independente.", "Confira número de identificação, documentos e histórico.", "Compare o custo total de uso, não só o preço anunciado.", "Não pague sinal antes de confirmar vendedor e condições.", "Leia e guarde contrato, laudos, recibos e comprovantes."],
      faq: [
        ["Qual é o primeiro passo para {topic}?", "Defina orçamento e necessidade, depois verifique documentos e condições do veículo antes de negociar. Não se comprometa sem esclarecer divergências."],
        ["Devo confiar no anúncio ou na avaliação do vendedor?", "Use o anúncio apenas como ponto de partida. Faça conferências documentais e, quando apropriado, uma inspeção independente."],
        ["O que fazer se houver pressão para pagar rápido?", "Interrompa a negociação até verificar vendedor, veículo, contrato e pagamento. Pressa e pedidos fora do combinado são sinais para redobrar a cautela."]
      ]
    }
  };

  var ARTICLES = [];
  CATEGORIES.forEach(function (category) {
    var guide = GUIDANCE[category.id];
    category.topics.forEach(function (topic, topicIndex) {
      [0, 1].forEach(function (variant) {
        var number = ARTICLES.length + 1;
        var slug = slugify(topic + (variant ? " cuidados e duvidas" : " guia pratico"));
        var title = variant
          ? topic + ": dúvidas, cuidados e próximos passos"
          : topic + ": passo a passo e pontos de atenção";
        var format = variant ? 1 : 0;
        var article = {
          id: number,
          slug: slug,
          title: title,
          topic: topic,
          category: category,
          summary: variant
            ? "Entenda os cuidados, dúvidas mais comuns e como verificar informações confiáveis sobre " + topic.toLowerCase() + "."
            : "Um roteiro prático para entender " + topic.toLowerCase() + ", organizar os próximos passos e confirmar os detalhes do seu caso.",
          intro: guide.intro[format].replace(/\{topic\}/g, topic.toLowerCase()),
          sections: guide.sections.map(function (section) {
            return {
              h2: section[0],
              h3a: section[1],
              pa: section[2].replace(/\{topic\}/g, topic.toLowerCase()),
              h3b: section[3],
              pb: section[4].replace(/\{topic\}/g, topic.toLowerCase())
            };
          }),
          tips: guide.tips.map(function (tip) { return tip; }),
          faq: guide.faq.map(function (item) {
            return { q: item[0].replace(/\{topic\}/g, topic.toLowerCase()), a: item[1].replace(/\{topic\}/g, topic.toLowerCase()) };
          }),
          conclusion: "Para lidar com " + topic.toLowerCase() + ", use este roteiro como ponto de partida, confirme os requisitos atuais em uma fonte oficial ou profissional qualificado e guarde os registros importantes. As condições podem variar conforme o veículo, o estado e a situação.",
          tags: [category.name, topic, "Guia para motoristas"],
          variant: variant,
          topicIndex: topicIndex
        };
        ARTICLES.push(article);
      });
    });
  });

  function slugify(value) {
    return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  function esc(value) {
    return String(value).replace(/[&<>"']/g, function (char) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char];
    });
  }

  function normalize(value) {
    return String(value || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function articleUrl(article) {
    return "index.html?artigo=" + encodeURIComponent(article.slug);
  }

  function categoryUrl(category) {
    return "index.html?cat=" + encodeURIComponent(category.id);
  }

  function categoryFor(id) {
    return CATEGORIES.find(function (category) { return category.id === id; });
  }

  function card(article) {
    var cat = article.category;
    return '<article class="article-card">' +
      '<a href="' + esc(articleUrl(article)) + '" aria-label="Ler: ' + esc(article.title) + '">' +
      '<div class="card-art" role="img" aria-label="Ilustração de capa: ' + esc(cat.name) + '" style="--art-bg:' + esc(cat.color) + '">' +
      '<span class="art-glyph" aria-hidden="true">' + esc(cat.icon) + '</span></div>' +
      '<div class="card-body"><span class="category-label">' + esc(cat.short) + '</span>' +
      '<h3>' + esc(article.title) + '</h3><p>' + esc(article.summary) + '</p>' +
      '<div class="card-foot"><span>Guia prático</span><span>Leia o artigo&nbsp; →</span></div></div></a></article>';
  }

  function grid(articles) {
    if (!articles.length) {
      return '<div class="empty-state"><h2>Nenhum artigo encontrado</h2><p>Tente outra palavra ou escolha uma categoria para explorar a biblioteca.</p><a class="text-link" href="index.html">Voltar ao início →</a></div>';
    }
    return '<div class="article-grid">' + articles.map(card).join("") + "</div>";
  }

  function searchForm(value) {
    return '<form class="search-form" action="index.html" method="get" role="search">' +
      '<input type="hidden" name="view" value="search">' +
      '<label class="visually-hidden" for="portal-search">Buscar assunto</label>' +
      '<input id="portal-search" name="q" type="search" value="' + esc(value || "") + '" placeholder="Ex.: IPVA, freios, viagem..." autocomplete="off">' +
      '<button type="submit">Buscar <span aria-hidden="true">→</span></button></form>';
  }

  function categoryTiles() {
    return '<div class="category-grid">' + CATEGORIES.map(function (category) {
      var count = ARTICLES.filter(function (article) { return article.category.id === category.id; }).length;
      return '<a class="category-tile" href="' + esc(categoryUrl(category)) + '">' +
        '<span class="category-icon" aria-hidden="true">' + esc(category.icon) + '</span>' +
        '<span><strong>' + esc(category.name) + '</strong><small>' + count + ' guias</small></span></a>';
    }).join("") + "</div>";
  }

  function sectionHeading(title, description, link, linkText) {
    return '<div class="section-heading"><div><h2>' + esc(title) + '</h2><p>' + esc(description) + '</p></div>' +
      (link ? '<a class="text-link" href="' + esc(link) + '">' + esc(linkText || "Ver todos →") + '</a>' : "") + '</div>';
  }

  function renderHome() {
    var feature = ARTICLES[0];
    var highlights = CATEGORIES.map(function (category) {
      return ARTICLES.find(function (article) { return article.category.id === category.id && article.variant === 0; });
    });
    var fresh = ARTICLES.slice(-6).reverse();
    return '<section class="hero"><div class="hero-copy"><span class="eyebrow">Seu caminho, mais informado</span>' +
      '<h1>Informação para quem vive sobre rodas.</h1>' +
      '<p>Guias diretos sobre trânsito, documentação, manutenção e tudo o que acompanha a vida de motorista.</p>' +
      searchForm("") + '</div><div class="hero-art" aria-hidden="true"><div class="hero-wheel"><span class="orbit-dot one"></span><span class="orbit-dot two"></span><div class="wheel-center"><span>V</span></div></div></div>' +
      '<div class="hero-stat"><strong>' + ARTICLES.length + ' guias</strong>&nbsp; em 8 categorias</div></section>' +
      '<section class="section"><div class="feature-card">' +
      '<div class="feature-copy"><span class="category-label">' + esc(feature.category.name) + ' · GUIA EM DESTAQUE</span>' +
      '<h3>' + esc(feature.title) + '</h3><p>' + esc(feature.summary) + '</p>' +
      '<a class="text-link" href="' + esc(articleUrl(feature)) + '">Ler o guia completo →</a></div>' +
      '<a class="feature-art" href="' + esc(articleUrl(feature)) + '" role="img" aria-label="Abrir guia: ' + esc(feature.title) + '" style="background:linear-gradient(135deg,' + esc(feature.category.color) + ',#c1d8c5)">' +
      '<span class="art-orbit"></span><span class="art-glyph" aria-hidden="true">' + esc(feature.category.icon) + '</span><span class="art-note">Orientação para o dia a dia</span></a></div></section>' +
      '<section class="section">' + sectionHeading("Explore por assunto", "O essencial para pesquisar, resolver e seguir em frente.", "", "") + categoryTiles() + '</section>' +
      '<section class="section">' + sectionHeading("Guias para começar", "Uma seleção editorial de temas úteis para diferentes momentos.", "index.html?view=popular", "Ver artigos populares →") +
      grid(highlights.slice(0, 6)) + '</section>' +
      '<section class="section">' + sectionHeading("Adicionados nesta edição", "Os guias que fecham a biblioteca inicial do portal.", "index.html?view=recent", "Ver artigos recentes →") +
      grid(fresh) + '</section>' +
      '<aside class="trust-strip"><span class="trust-symbol" aria-hidden="true">✓</span><div><strong>Informação para consultar com responsabilidade.</strong><p>Regras, serviços, prazos e especificações podem mudar. Confira a fonte oficial, o manual do veículo ou um profissional antes de agir.</p></div></aside>';
  }

  function pagination(page, pages, buildUrl) {
    if (pages <= 1) return "";
    var html = '<nav class="pagination" aria-label="Paginação">';
    if (page > 1) html += '<a href="' + esc(buildUrl(page - 1)) + '" aria-label="Página anterior">←</a>';
    var start = Math.max(1, page - 2);
    var end = Math.min(pages, page + 2);
    for (var n = start; n <= end; n++) {
      html += n === page ? '<span class="current" aria-current="page">' + n + '</span>' : '<a href="' + esc(buildUrl(n)) + '">' + n + '</a>';
    }
    if (page < pages) html += '<a href="' + esc(buildUrl(page + 1)) + '" aria-label="Próxima página">→</a>';
    return html + "</nav>";
  }

  function listPage(title, description, articles, page, linkBuilder, eyebrow) {
    var perPage = 9;
    var pages = Math.max(1, Math.ceil(articles.length / perPage));
    page = Math.max(1, Math.min(page || 1, pages));
    var visible = articles.slice((page - 1) * perPage, page * perPage);
    return '<div class="breadcrumb"><a href="index.html">Início</a><span> / </span><span>' + esc(title) + '</span></div>' +
      '<header class="page-heading"><span class="eyebrow">' + esc(eyebrow || "Biblioteca Veicular Viaes") + '</span><h1>' + esc(title) + '</h1><p>' + esc(description) + '</p></header>' +
      '<div class="results-meta"><span>' + articles.length + ' artigos nesta seleção</span><span>Página ' + page + ' de ' + pages + '</span></div>' +
      grid(visible) + pagination(page, pages, linkBuilder);
  }

  function renderCategory(category, page) {
    var articles = ARTICLES.filter(function (article) { return article.category.id === category.id; });
    return listPage(category.name, category.description + " Consulte os guias e confirme os detalhes atuais em fontes oficiais.", articles, page,
      function (n) { return "index.html?cat=" + encodeURIComponent(category.id) + "&page=" + n; }, "Categoria");
  }

  function renderSearch(query, page) {
    var needle = normalize(query);
    var matches = needle ? ARTICLES.filter(function (article) {
      return normalize(article.title + " " + article.summary + " " + article.category.name + " " + article.tags.join(" ")).indexOf(needle) !== -1;
    }) : ARTICLES;
    return '<div class="breadcrumb"><a href="index.html">Início</a><span> / </span><span>Busca</span></div>' +
      '<header class="page-heading"><span class="eyebrow">Encontre seu próximo passo</span><h1>Buscar artigos</h1><p>Pesquise por assunto em toda a biblioteca. A busca funciona no próprio navegador e não envia seus termos para um servidor.</p></header>' +
      '<div class="search-panel">' + searchForm(query) + '</div>' +
      '<div class="results-meta"><span>' + (needle ? matches.length + " resultado(s) para “" + esc(query) + "”" : ARTICLES.length + " artigos disponíveis") + '</span><span>' + CATEGORIES.length + ' categorias</span></div>' +
      searchResults(matches, page);
  }

  function searchResults(articles, page) {
    var perPage = 9;
    var pages = Math.max(1, Math.ceil(articles.length / perPage));
    page = Math.max(1, Math.min(page || 1, pages));
    var visible = articles.slice((page - 1) * perPage, page * perPage);
    var url = new URL(window.location.href);
    var query = url.searchParams.get("q") || "";
    return grid(visible) + pagination(page, pages, function (n) {
      return "index.html?view=search&q=" + encodeURIComponent(query) + "&page=" + n;
    });
  }

  function renderArticle(article) {
    var related = ARTICLES.filter(function (candidate) {
      return candidate.category.id === article.category.id && candidate.slug !== article.slug;
    }).slice(0, 3);
    if (related.length < 3) {
      related = related.concat(ARTICLES.filter(function (candidate) {
        return candidate.category.id !== article.category.id && candidate.slug !== article.slug;
      }).slice(0, 3 - related.length));
    }
    var sectionHtml = article.sections.map(function (section) {
      return '<section><h2>' + esc(section.h2) + '</h2><h3>' + esc(section.h3a) + '</h3><p>' + esc(section.pa) + '</p>' +
        '<h3>' + esc(section.h3b) + '</h3><p>' + esc(section.pb) + '</p></section>';
    }).join("");
    var faqHtml = article.faq.map(function (item) {
      return '<div class="faq-item"><h3>' + esc(item.q) + '</h3><p>' + esc(item.a) + '</p></div>';
    }).join("");
    return '<article class="article-page"><nav class="breadcrumb" aria-label="Trilha de navegação"><a href="index.html">Início</a><span> / </span><a href="' + esc(categoryUrl(article.category)) + '">' + esc(article.category.name) + '</a><span> / </span><span>Artigo</span></nav>' +
      '<header class="article-header"><a class="category-label" href="' + esc(categoryUrl(article.category)) + '">' + esc(article.category.name) + ' ↗</a>' +
      '<h1>' + esc(article.title) + '</h1><p class="article-summary">' + esc(article.summary) + '</p>' +
      '<div class="article-meta"><span>Veicular Viaes · guia informativo</span><span>Leitura aproximada: 4 min</span></div></header>' +
      '<div class="article-cover" role="img" aria-label="Ilustração de capa para ' + esc(article.title) + '" style="background:linear-gradient(135deg,' + esc(article.category.color) + ',#c5dbca)"><span class="cover-symbol" aria-hidden="true">' + esc(article.category.icon) + '</span></div>' +
      '<div class="prose-article"><p>' + esc(article.intro) + '</p>' + sectionHtml +
      '<section><h2>Dicas práticas</h2><p>Use esta lista como verificação inicial para organizar sua consulta sobre ' + esc(article.topic.toLowerCase()) + ':</p><ul>' +
      article.tips.map(function (tip) { return "<li>" + esc(tip) + "</li>"; }).join("") + '</ul></section>' +
      '<section><h2>Perguntas frequentes</h2><div class="faq-list">' + faqHtml + '</div></section>' +
      '<aside class="article-callout"><strong>Importante:</strong> este conteúdo é informativo e pode não refletir alterações recentes ou particularidades locais. Confirme exigências, prazos e procedimentos em canais oficiais; para diagnóstico ou decisão específica, procure um profissional qualificado.</aside>' +
      '<section><h2>Conclusão</h2><p>' + esc(article.conclusion) + '</p></section>' +
      '<div class="tag-list" aria-label="Assuntos relacionados">' + article.tags.map(function (tag) { return '<a class="tag" href="index.html?view=search&q=' + encodeURIComponent(tag) + '">' + esc(tag) + '</a>'; }).join("") + '</div></div>' +
      '<section class="related-section"><h2>Artigos relacionados</h2>' + grid(related) + '</section>' +
      '<p class="back-row"><a class="text-link" href="' + esc(categoryUrl(article.category)) + '">← Mais artigos em ' + esc(article.category.name) + '</a></p></article>';
  }

  function renderPopular() {
    var popular = CATEGORIES.map(function (category) {
      return ARTICLES.find(function (article) { return article.category.id === category.id && article.variant === 0; });
    });
    return listPage("Artigos populares", "Uma seleção editorial para encontrar rapidamente guias de diferentes assuntos. Esta lista não usa métricas reais de audiência.", popular, 1, function () { return "index.html?view=popular"; }, "Seleção editorial");
  }

  function renderRecent(page) {
    return listPage("Artigos recentes", "Os guias incluídos por último nesta edição da biblioteca, organizados pela ordem de inclusão no pacote.", ARTICLES.slice().reverse(), page,
      function (n) { return "index.html?view=recent&page=" + n; }, "Biblioteca");
  }

  function init() {
    document.querySelectorAll("[data-year]").forEach(function (node) {
      node.textContent = String(new Date().getFullYear());
    });
    var footerInner = document.querySelector(".footer-inner");
    if (footerInner && !footerInner.querySelector(".footer-contact")) {
      var contactBlock = document.createElement("section");
      contactBlock.className = "footer-contact";
      contactBlock.setAttribute("aria-label", "Dados do responsável pelo portal");
      contactBlock.innerHTML =
        '<strong>Responsável pelo portal</strong>' +
        '<b class="owner-name">Vci Vanguard Confeccoes Importadas S.a.</b>' +
        '<span class="owner-detail"><b>CNPJ:</b> 00.311.557/0065-08</span>' +
        '<span class="owner-detail owner-tax-id">00311557006508</span>' +
        '<a class="owner-detail" href="mailto:adauto.silva@aramisinc.com.br"><b>E-mail:</b> adauto.silva@aramisinc.com.br</a>' +
        '<a class="owner-detail" href="tel:+551143801600"><b>Telefone:</b> (11) 4380-1600</a>' +
        '<span class="owner-detail owner-address-label">Para correspondência:</span>' +
        '<address>Avenida Reboucas 2633 Bloco 2<br>Pinheiros<br>São Paulo SP · 05401-350</address>';
      footerInner.appendChild(contactBlock);
    }
    var menuButton = document.querySelector(".menu-toggle");
    var nav = document.getElementById("main-nav");
    if (menuButton && nav) {
      menuButton.addEventListener("click", function () {
        var open = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", String(!open));
        nav.classList.toggle("is-open", !open);
      });
    }
    var contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var status = document.getElementById("contact-status");
        if (!CONTACT_EMAIL || CONTACT_EMAIL.indexOf("@") === -1) {
          status.textContent = "O formulário está pronto, mas o endereço de destino ainda não foi configurado. Edite CONTACT_EMAIL no início de script.js e informe um e-mail válido para abrir o aplicativo de e-mail.";
          status.classList.add("notice-box");
          return;
        }
        var data = new FormData(contactForm);
        var subject = encodeURIComponent(String(data.get("subject") || "Contato pelo portal Veicular Viaes"));
        var body = encodeURIComponent("Nome: " + data.get("name") + "\nE-mail: " + data.get("email") + "\n\n" + data.get("message"));
        window.location.href = "mailto:" + CONTACT_EMAIL + "?subject=" + subject + "&body=" + body;
        status.textContent = "Sua mensagem foi preparada no aplicativo de e-mail. Revise e envie por lá.";
      });
    }

    var app = document.getElementById("app");
    if (!app) return;
    var params = new URLSearchParams(window.location.search);
    var articleSlug = params.get("artigo");
    var categoryId = params.get("cat");
    var view = params.get("view");
    var page = parseInt(params.get("page") || "1", 10);
    if (!Number.isFinite(page) || page < 1) page = 1;

    if (articleSlug) {
      var selected = ARTICLES.find(function (article) { return article.slug === articleSlug; });
      if (selected) {
        app.innerHTML = renderArticle(selected);
        document.title = selected.title + " — Veicular Viaes";
        var meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute("content", selected.summary);
        return;
      }
      app.innerHTML = '<div class="breadcrumb"><a href="index.html">Início</a><span> / </span><span>Artigo</span></div><div class="page-heading"><span class="eyebrow">Biblioteca Veicular Viaes</span><h1>Artigo não encontrado</h1><p>Este endereço pode estar incompleto. Explore as categorias ou busque outro assunto.</p></div>' + categoryTiles();
      document.title = "Artigo não encontrado — Veicular Viaes";
      return;
    }
    if (categoryId) {
      var category = categoryFor(categoryId);
      if (category) {
        app.innerHTML = renderCategory(category, page);
        document.title = category.name + " — Veicular Viaes";
      } else {
        app.innerHTML = renderHome();
      }
      return;
    }
    if (view === "popular") {
      app.innerHTML = renderPopular();
      document.title = "Artigos populares — Veicular Viaes";
    } else if (view === "recent") {
      app.innerHTML = renderRecent(page);
      document.title = "Artigos recentes — Veicular Viaes";
    } else if (view === "search") {
      app.innerHTML = renderSearch(params.get("q") || "", page);
      document.title = "Buscar artigos — Veicular Viaes";
    } else {
      app.innerHTML = renderHome();
    }
  }

  init();
}());