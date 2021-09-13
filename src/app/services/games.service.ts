import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private games: Game[] = [
    {
      id: 1,
      name: "Borderlands 3",
      price: 119.9,
      imgPortrait: "assets/images/games/portrait/borderlands3.png",
      imgLandscape: "assets/images/games/landscape/borderlands3.png",
      destaque: true,
      maisVendido: false,
      novidade: false,
      description: "O jogo de tiro original está de volta, com milhões de armas e uma aventura cheia de destruição! <br><br> Acabe com novos mundos e inimigos com um dos quatro novos Vault Hunters. <br><br> Jogue sozinho ou com amigos para enfrentar inimigos insanos, conseguir um monte de itens e salvar seu lar dos líderes cultistas mais cruéis da galáxia."
    },
    {
      id: 2,
      name: "Marvel's Avengers",
      price: 99.99,
      imgPortrait: "assets/images/games/portrait/avengers.png",
      imgLandscape: "assets/images/games/landscape/avengers.png",
      destaque: false,
      maisVendido: true,
      novidade: false,
      description: "Monte sua equipe com os heróis mais poderosos da Terra, incorpore seus poderes e viva seus sonhos de super-herói.<br><br>Marvel\"s Avengers é um jogo épico de ação e aventura em terceira pessoa que combina uma história original cinematográfica com jogabilidade individual e cooperativa. <br><br> Monte uma equipe com até quatro jogadores online, domine habilidades extraordinárias, personalize um elenco crescente de heróis e proteja a Terra de ameaças cada vez maiores."
    },
    {
      id: 3,
      name: "Call of Duty: Black Ops Cold War",
      price: 229.9,
      imgPortrait: "assets/images/games/portrait/cod.png",
      imgLandscape: "assets/images/games/landscape/cod.png",
      destaque: false,
      maisVendido: true,
      novidade: false,
      description: "Nada é o que parece numa emocionante campanha para um jogador da Raven Software, onde os intervenientes se defrontam com figuras históricas e verdades duras, ao lutarem em todo o mundo, passando por locais icónicos como Berlim Oriental, o Vietname, a Turquia, a sede do KGB soviético e muito mais."
    },
    {
      id: 4,
      name: "Samurai Jack: Battle Through Time",
      price: 75.99,
      imgPortrait: "assets/images/games/portrait/samurai.png",
      imgLandscape: "assets/images/games/landscape/samurai.png",
      destaque: false,
      maisVendido: false,
      novidade: false,
      description: "Com as vozes dos atores originais, Samurai Jack: Battle Through Time é um jogo de ação em plataformas que vai atravessar todo o espaço-tempo, onde as tuas ações vão criar uma nova lenda! <br><br> Uma aventura inédita que encaixa no final épico da série, junta-te a aliados de confiança da série e enfrenta inimigos familiares.<br><br> Visita locais e momentos clássicos dos teus episódios favoritos. Viaja até um futuro sombrio para libertar a humanidade. Mergulha no passado para enfrentar monstros diabólicos. Encontra o teu destino enquanto viajas pelo espaço-tempo."
    },
    {
      id: 5,
      name: "Monster Hunter World: Iceborne",
      price: 89.99,
      imgPortrait: "assets/images/games/portrait/monster.png",
      imgLandscape: "assets/images/games/landscape/monster.png",
      destaque: false,
      maisVendido: true,
      novidade: false,
      description: "\"Explore o novo mundo... e além!\" <br><br>A aventura de Monster Hunter: World chega a novas alturas em \"Monster Hunter World: Iceborne\".<br><br>Com novos monstros, novos locais, novas missões, novas combinações de armas e muito mais, Iceborne expande as possibilidades do vasto e estonteante universo de Monster Hunter: World.<br><br>Junte-se à Comissão de Pesquisa e embarque em uma aventura inesquecível rumo às profundezas da Fronteira Glacial, uma tundra nevada que diversos monstros lendários chamam de lar."
    },
    {
      id: 6,
      name: "Poly Bridge",
      price: 20.69,
      imgPortrait: "assets/images/games/portrait/polybridge.png",
      imgLandscape: "assets/images/games/landscape/polybridge.png",
      destaque: false,
      maisVendido: false,
      novidade: false,
      description: "Use suas habilidades em engenharia neste novo e envolvente simulador de construção de pontes repleto de recursos.<br><br> Passe horas resolvendo quebra-cabeças no modo Campanha e, em seguida, crie seu próprio design no modo Caixa de Areia.<br><br> Desafie seus amigos e outros membros da comunidade na Oficina do Steam para que tentem resolver seus quebra-cabeças, e aproveite para baixar os novos níveis enviados por outros jogadores."
    },
    {
      id: 7,
      name: "Fall Guys",
      price: 37.99,
      imgPortrait: "assets/images/games/portrait/fallguys.png",
      imgLandscape: "assets/images/games/landscape/fallguys.png",
      destaque: false,
      maisVendido: false,
      novidade: true,
      description: "Fall Guys: Ultimate Knockout reúne hordas de participantes online em disparada por rounds e rounds cada vez mais caóticos até sobrar um único vencedor!<br><br> Enfrente obstáculos bizarros, empurre seus concorrentes inconvenientes e desafie as leis da física a caminho da vitória. Deixe sua dignidade para trás e prepare-se para fracassos hilários em sua missão pela coroa!<br><br> Um imenso pandemônio online: Encare uma série de percursos com desafios malucos, obstáculos ridículos e uma multidão de concorrentes online, todos na esperança de avançar para o próximo round caótico.<br><br>Competição e cooperação: Alterne entre desafios competitivos free-for-all e os cooperativos, onde a equipe perdedora inteira é eliminada!"
    },
    {
      id: 8,
      name: "Among Us",
      price: 10.89,
      imgPortrait: "assets/images/games/portrait/amongus.png",
      imgLandscape: "assets/images/games/landscape/amongus.png",
      destaque: false,
      maisVendido: false,
      novidade: true,
      description: "Jogue com 4-10 jogadores online ou via WiFi local enquanto tenta preparar sua nave para a partida, mas cuidado, pois um ou mais jogadores aleatórios entre a Tripulação são Impostores empenhados em matar todos!<br><br> Criado originalmente como um party game, recomendamos jogar com amigos em uma party em LAN ou online usando o chat de voz. Desfrute de jogo multiplataforma entre Android, iOS e PC."
    },
    {
      id: 9,
      name: "Mafia: Definitive Edition",
      price: 229.9,
      imgPortrait: "assets/images/games/portrait/mafiade.png",
      imgLandscape: "assets/images/games/landscape/mafiade.png",
      destaque: false,
      maisVendido: false,
      novidade: true,
      description: "Neste jogo refeito do zero, suba na hierarquia da máfia durante a Lei Seca. Após um encontro acidental com a máfia, o taxista Tommy Angelo entra em um terrível submundo. Apesar da relutância em se relacionar com a família Salieri, Tommy logo descobre que as oportunidades são grandes demais para ignorar. <br><br> Histórias da máfia: Entre na pele de um gângster da Lei Seca e suba na hierarquia. <br><br> Lost Heaven: A paisagem urbana da década de 1930 foi recriada da arquitetura aos carros e à cultura do entreguerras para ver, ouvir e interagir.<br><br>Um clássico refeito: Fielmente recriado, com história ampliada, jogabilidade e trilha sonora original. É Mafia como você lembrava e muito mais."
    },
    {
      id: 10,
      name: "Resident Evil 2",
      price: 89.99,
      imgPortrait: "assets/images/games/portrait/re2.png",
      imgLandscape: "assets/images/games/landscape/re2.png",
      destaque: true,
      maisVendido: false,
      novidade: false,
      description: "Obra prima que definiu o gênero, Resident Evil 2 retorna, completamente refeito com uma experiência narrativa mais profunda. Usando o RE Engine de propriedade da Capcom, Resident Evil 2 oferece uma nova visão na clássica saga de horror de sobrevivência com visuais realistas de tirar o fôlego, áudio imersivo de acelerar o coração, uma nova câmera sobre o ombro e controles modernos além de modos de jogabilidade do jogo original.<br><br> Em Resident Evil 2, a ação clássica, exploração tensa e a jogabilidade de resolver quebra-cabeças que definiu a série Resident Evil retorna. Os jogadores se juntam ao policial novato, Leon S. Kennedy, e à estudante universitária, Claire Redfield, que acabam juntos por uma epidemia desastrosa em Raccoon City que transformou sua população em zumbis mortais. Leon e Claire possuem suas próprias campanhas separadas, permitindo que os jogadores vejam a história da perspectiva de ambos os personagens. O destino desses dois personagens favoritos dos fãs está nas mãos dos jogadores conforme eles trabalham juntos para sobreviver e descobrir o que está por trás do terrível ataque à cidade. Será que eles sairão com vida?"
    },
    {
      id: 11,
      name: "Hades",
      price: 47.49,
      imgPortrait: "assets/images/games/portrait/hades.png",
      imgLandscape: "https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Hades_image1600w.png",
      destaque: true,
      maisVendido: false,
      novidade: false,
      description: "Hades é um jogo roguelike que combina os melhores aspectos dos títulos da Supergiant aclamados pela crítica, incluindo a ação rápida de Bastion, a rica atmosfera e profundidade de Transistor e a narrativa baseada em personagens de Pyre. <br><br> Na pele do imortal Príncipe do Submundo, você usará os poderes e as armas míticas do Olimpo para se libertar das garras do deus dos mortos, enquanto se fortalece e descobre mais sobre a história a cada tentativa única de fuga. <br><br> Os deuses do Olimpo vão te ajudar! Conheça Zeus, Atena, Poseidon e muitos outros, e escolha entre dezenas de Dádivas poderosas que aprimoram suas habilidades. Existem milhares de construções possíveis de personagens para descobrir à medida que avança."
    },
    {
      id: 12,
      name: "Green Hell",
      price: 47.49,
      imgPortrait: "https://cdn-products.eneba.com/resized-products/uiAcncxmFfJ3JRqLjaW3EemyTDu1rK1f7QMoflzY6B4_350x200_1x-0.jpg",
      imgLandscape: "https://projectn.com.br/wp-content/uploads/2020/11/7e1518_cff080cbbae743439723d7455d525f82_mv2.jpg",
      destaque: false,
      maisVendido: false,
      novidade: false,
      description: "Você está sozinho na selva sem comida ou equipamentos, tentando sobreviver e buscando uma maneira de escapar. À beira da morte, o jogador é colocado em uma jornada de resistência já que os efeitos do isolamento afetam fortemente não só o corpo, mas também a mente. Por quanto tempo você conseguirá sobreviver aos perigos do desconhecido?\n\nNesta jornada, você não receberá nenhuma ajuda do mundo exterior. Equipado apenas com suas próprias mãos, você deverá aprender técnicas reais de sobrevivência para construir abrigos, fazer ferramentas e construir armas para caçar e se defender. Constantemente ameaçado pela selva, você lutará tanto contra animais selvagens quanto doenças tropicais. Os jogadores também enfrentarão armadilhas elaboradas por suas próprias mentes e medos que se arrastam pela escuridão da selva sem fim."
    },
    {
      id: 13,
      name: "Crysis 3",
      price: 89,
      imgPortrait: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1slc.png",
      imgLandscape: "https://steamcdn-a.akamaihd.net/steam/apps/1282690/capsule_616x353.jpg?t=1591304094",
      destaque: false,
      maisVendido: false,
      novidade: false,
      description: "O destino do mundo está em suas mãos. Inimigos novos e antigos ameaçam a paz que você lutou tanto para conseguir 24 anos atrás. A sua busca pelo Alpha Ceph continua, mas desta vez você também precisará expor a verdade por trás da C.E.L.L. Corporation. <br><br>Não será fácil, mas seu Nanotraje ajudará a abrir um caminho para a vitória. Execute um ataque furtivo para derrotar seus adversários silenciosamente ou dizime o inimigo com uma explosão de força bruta. Não existe forma errada de salvar o mundo."
    },
    {
      id: 14,
      name: "Cyberpunk 2077",
      price: 199.9,
      imgPortrait: "https://media.playstation.com/is/image/SCEA/cyberpunk-2077-box-art-01-ps4-us-06jun19?$native_nt$",
      imgLandscape: "https://steamcdn-a.akamaihd.net/steam/apps/1091500/ss_85dfceb0df4165789a395e3c4d6cbcdf197930c6.1920x1080.jpg?t=1606918828",
      destaque: false,
      maisVendido: true,
      novidade: false,
      description: "Cyberpunk 2077 é uma história de ação e aventura de mundo aberto ambientada em Night City, uma megalópole obcecada por poder, glamour e biomodificações. Você joga como V, um mercenário fora da lei atrás de um implante único que carrega a chave da imortalidade. Você pode personalizar aparatos cibernéticos, conjunto de habilidades e estilo de jogo do personagem e explorar uma vasta cidade onde as decisões tomadas definem a história e o mundo ao seu redor."
    },
    {
      id: 15,
      name: "FIFA 21",
      price: 299,
      imgPortrait: "https://s2.glbimg.com/cR6UG41AAS4yXBruf9ZR0s5nfs4=/0x0:984x1394/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/i/P/8ztmLfQku3G6Uew6Hzbw/fifa-21-capa.jpg",
      imgLandscape: "https://images.daznservices.com/di/library/GOAL/ca/f3/fifa-21-kylian-mbappe_5y8kt6rcv8tf1kifrjd2ku44c.jpg?t=2054301555&quality=100",
      destaque: true,
      maisVendido: false,
      novidade: false,
      description: "Jogue o Maior Jogo do Mundo com +17.000 jogadores, mais de 700 times em +90 estádios e mais de 30 ligas de todo o mundo."
    },
    {
      id: 16,
      name: "Red Dead Redemption 2",
      price: 239,
      imgPortrait: "https://s1.gaming-cdn.com/images/products/5679/orig/red-dead-redemption-2-standard-edition-cover.jpg",
      imgLandscape: "https://img.hype.games/cdn/facad932-4082-4d20-980d-34bb385d2233Red-Dead-Redemption-2-Ultimate-Edition-Cover.jpg",
      destaque: false,
      maisVendido: false,
      novidade: false,
      description: "Estados Unidos, 1899.<br><br> Arthur Morgan e a gangue Van der Linde são bandidos em fuga. Com agentes federais e os melhores caçadores de recompensas no seu encalço, a gangue precisa roubar, assaltar e lutar para sobreviver no impiedoso coração dos Estados Unidos. Conforme divisões internas profundas ameaçam despedaçar a gangue, Arthur deve fazer uma escolha entre os seus próprios ideais e a lealdade à gangue que o criou."
    },
    {
      id: 17,
      name: "Sea of Thieves",
      price: 89.99,
      imgPortrait: "https://store-images.s-microsoft.com/image/apps.16347.14554784103656548.6c0bfca6-ceff-4368-9bde-2fe50f344136.007dce43-6492-46f2-bb2b-2b28df98fc3c",
      imgLandscape: "https://img.ibxk.com.br/2018/03/26/26201929787520.jpg",
      destaque: false,
      maisVendido: false,
      novidade: false,
      description: "Sea of Thieves oferece a experiência pirata definitiva, desde navegar e lutar até explorar e pilhar - tudo o que você precisa para viver a vida pirata e se tornar uma lenda por seus feitos. Sem nenhum papel definido, você tem total liberdade para interagir com o mundo e os outros jogadores como preferir.\nSeja viajando em grupo ou velejando a sós, você certamente encontrará outras tripulações nessa aventura de mundo compartilhado - mas serão elas amigas ou inimigas, e o que você fará a respeito?"
    }
  ]

  constructor() { }

  public getAll(): Game[] {
    return this.games
  }

  public getGameById(id: number): Game {
    for (const game of this.games) {
      if (game.id === id) {
        return game
      }
    }
  }
}
