import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private games: Game[] = [
    {
      id: '1',
      name: "Borderlands 3",
      price: 119.9,
      imgPortrait: "assets/images/games/portrait/borderlands3.png",
      imgLandscape: "assets/images/games/landscape/borderlands3.png",
      imgSquare: "https://image.api.playstation.com/vulcan/ap/rnd/202010/2323/p50N4PBK9rNanGYKFecTvac5.png",
      featured: true,
      bestSeller: false,
      trending: false,
      description: "O jogo de tiro original está de volta, com milhões de armas e uma aventura cheia de destruição! <br><br> Acabe com novos mundos e inimigos com um dos quatro novos Vault Hunters. <br><br> Jogue sozinho ou com amigos para enfrentar inimigos insanos, conseguir um monte de itens e salvar seu lar dos líderes cultistas mais cruéis da galáxia."
    },
    {
      id: '2',
      name: "Gang Beasts",
      price: 36.99,
      imgPortrait: "https://e.snmc.io/lk/l/x/54624af7734e044bce801f69fb34c0fe/8964939",
      imgLandscape: "https://news.xbox.com/pt-br/wp-content/uploads/sites/8/2021/06/Gang-Beasts-Key-Art.jpg?resize=1024,576",
      imgSquare: "https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/35/a6/db/35a6db02-2f70-db38-e064-44b423048385/AppIcon-0-1x_U007emarketing-0-85-220-4.png/1024x1024bb.png",
      featured: false,
      bestSeller: false,
      trending: true,
      description: "Gang Beasts é um party game multijogador bobo com personagens grosseiramente gelatinosos, sequências de luta brutalmente hilárias e locais perigosamente insanos, ambientado nas duras ruas de Bife City."
    },
    {
      id: '3',
      name: "Call of Duty: Vanguard",
      price: 229.9,
      imgPortrait: "https://store-images.s-microsoft.com/image/apps.31712.14284165171924425.328fdc67-fafc-4929-b10f-b1bc44a36c07.9cb9d66c-985e-4c82-b678-6a638d68b0c8",
      imgLandscape: "https://i1.wp.com/thebusinessofesports.com/wp-content/uploads/2021/08/VGD_REVEAL-001.jpg?resize=1536%2C869&ssl=1",
      imgSquare: "https://image.api.playstation.com/vulcan/img/rnd/202108/2717/W2MFtexi8Ljl8McgGULpY6hx.png",
      featured: false,
      bestSeller: true,
      trending: false,
      description: "A premiada série Call of Duty® retorna com o Call of Duty®: Vanguard, no qual os jogadores vão viver batalhas decisivas da Segunda Guerra Mundial enquanto lutam pela vitória nas Frentes Oriental e Ocidental da Europa, no Pacífico e no Norte da África."
    },
    {
      id: '4',
      name: "Samurai Jack: Battle Through Time",
      price: 75.99,
      imgPortrait: "assets/images/games/portrait/samurai.png",
      imgLandscape: "assets/images/games/landscape/samurai.png",
      imgSquare: "https://vulcan.dl.playstation.net/ap/rnd/202007/1106/qycF6NNWh51Sz9FNthEqXwW0.png",
      featured: false,
      bestSeller: false,
      trending: false,
      description: "Com as vozes dos atores originais, Samurai Jack: Battle Through Time é um jogo de ação em plataformas que vai atravessar todo o espaço-tempo, onde as tuas ações vão criar uma nova lenda! <br><br> Uma aventura inédita que encaixa no final épico da série, junta-te a aliados de confiança da série e enfrenta inimigos familiares.<br><br> Visita locais e momentos clássicos dos teus episódios favoritos. Viaja até um futuro sombrio para libertar a humanidade. Mergulha no passado para enfrentar monstros diabólicos. Encontra o teu destino enquanto viajas pelo espaço-tempo."
    },
    {
      id: '5',
      name: "Monster Hunter World: Iceborne",
      price: 89.99,
      imgPortrait: "assets/images/games/portrait/monster.png",
      imgLandscape: "assets/images/games/landscape/monster.png",
      imgSquare: "https://games-b26f.kxcdn.com/wp-content/uploads/2019/07/monster-hunter-world-iceborne-1024x1024.jpg",
      featured: false,
      bestSeller: true,
      trending: false,
      description: "\"Explore o novo mundo... e além!\" <br><br>A aventura de Monster Hunter: World chega a novas alturas em \"Monster Hunter World: Iceborne\".<br><br>Com novos monstros, novos locais, novas missões, novas combinações de armas e muito mais, Iceborne expande as possibilidades do vasto e estonteante universo de Monster Hunter: World.<br><br>Junte-se à Comissão de Pesquisa e embarque em uma aventura inesquecível rumo às profundezas da Fronteira Glacial, uma tundra nevada que diversos monstros lendários chamam de lar."
    },
    {
      id: '6',
      name: "Nioh 2",
      price: 120.99,
      imgPortrait: "https://live.staticflickr.com/65535/48593864851_f118ff0173_k.jpg",
      imgLandscape: "https://image.api.playstation.com/vulcan/ap/rnd/202011/0516/f21KkGycWwf7Pkj6hyjNLFo1.jpg",
      imgSquare: "https://image.api.playstation.com/vulcan/ap/rnd/202012/0716/VdvtCeb0L1OuGlhguLuo6gE9.png",
      featured: true,
      bestSeller: false,
      trending: false,
      description: "Domine as artes letais de samurai na pele de um guerreiro metade humano, metade yokai, nesta sequência desafiadora do RPG de ação.<br><br>Explore o Japão da violenta era Sengoku e o letal Reino Sombrio, ambos infestados de demônios grotescos e impiedosos.<br><br>Empunhe armas letais e extermine todos os inimigos que surgirem pelo caminho. Com o sistema de combate reformulado e a habilidade de virar um yokai completo, você terá poderes devastadores."
    },
    {
      id: '7',
      name: "Fall Guys",
      price: 37.99,
      imgPortrait: "assets/images/games/portrait/fallguys.png",
      imgLandscape: "assets/images/games/landscape/fallguys.png",
      imgSquare: "https://image.api.playstation.com/vulcan/img/rnd/202107/2119/LKoMmjhc0rz2Dao82MLvlpht.png",
      featured: false,
      bestSeller: false,
      trending: true,
      description: "Fall Guys: Ultimate Knockout reúne hordas de participantes online em disparada por rounds e rounds cada vez mais caóticos até sobrar um único vencedor!<br><br> Enfrente obstáculos bizarros, empurre seus concorrentes inconvenientes e desafie as leis da física a caminho da vitória. Deixe sua dignidade para trás e prepare-se para fracassos hilários em sua missão pela coroa!<br><br> Um imenso pandemônio online: Encare uma série de percursos com desafios malucos, obstáculos ridículos e uma multidão de concorrentes online, todos na esperança de avançar para o próximo round caótico.<br><br>Competição e cooperação: Alterne entre desafios competitivos free-for-all e os cooperativos, onde a equipe perdedora inteira é eliminada!"
    },
    {
      id: '8',
      name: "Among Us",
      price: 10.89,
      imgPortrait: "assets/images/games/portrait/amongus.png",
      imgLandscape: "assets/images/games/landscape/amongus.png",
      imgSquare: "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/c2025b041d22a3315d187f5f6c8f46d9.jpg",
      featured: false,
      bestSeller: false,
      trending: true,
      description: "Jogue com 4-10 jogadores online ou via WiFi local enquanto tenta preparar sua nave para a partida, mas cuidado, pois um ou mais jogadores aleatórios entre a Tripulação são Impostores empenhados em matar todos!<br><br> Criado originalmente como um party game, recomendamos jogar com amigos em uma party em LAN ou online usando o chat de voz. Desfrute de jogo multiplataforma entre Android, iOS e PC."
    },
    {
      id: '9',
      name: "Mafia: Definitive Edition",
      price: 229.9,
      imgPortrait: "assets/images/games/portrait/mafiade.png",
      imgLandscape: "assets/images/games/landscape/mafiade.png",
      imgSquare: "https://image.api.playstation.com/vulcan/ap/rnd/202006/1023/35jaBRLW6kV4wfF3bi0nxRIH.png",
      featured: false,
      bestSeller: false,
      trending: true,
      description: "Neste jogo refeito do zero, suba na hierarquia da máfia durante a Lei Seca. Após um encontro acidental com a máfia, o taxista Tommy Angelo entra em um terrível submundo. Apesar da relutância em se relacionar com a família Salieri, Tommy logo descobre que as oportunidades são grandes demais para ignorar. <br><br> Histórias da máfia: Entre na pele de um gângster da Lei Seca e suba na hierarquia. <br><br> Lost Heaven: A paisagem urbana da década de 1930 foi recriada da arquitetura aos carros e à cultura do entreguerras para ver, ouvir e interagir.<br><br>Um clássico refeito: Fielmente recriado, com história ampliada, jogabilidade e trilha sonora original. É Mafia como você lembrava e muito mais."
    },
    {
      id: '10',
      name: "Resident Evil 2",
      price: 89.99,
      imgPortrait: "assets/images/games/portrait/re2.png",
      imgLandscape: "assets/images/games/landscape/re2.png",
      imgSquare: "https://image.api.playstation.com/cdn/UP0102/CUSA09193_00/YDXpf9y12EN7AWyRgO9z24F8x72kwH4m.png",
      featured: true,
      bestSeller: false,
      trending: false,
      description: "Obra prima que definiu o gênero, Resident Evil 2 retorna, completamente refeito com uma experiência narrativa mais profunda. Usando o RE Engine de propriedade da Capcom, Resident Evil 2 oferece uma nova visão na clássica saga de horror de sobrevivência com visuais realistas de tirar o fôlego, áudio imersivo de acelerar o coração, uma nova câmera sobre o ombro e controles modernos além de modos de jogabilidade do jogo original.<br><br> Em Resident Evil 2, a ação clássica, exploração tensa e a jogabilidade de resolver quebra-cabeças que definiu a série Resident Evil retorna. Os jogadores se juntam ao policial novato, Leon S. Kennedy, e à estudante universitária, Claire Redfield, que acabam juntos por uma epidemia desastrosa em Raccoon City que transformou sua população em zumbis mortais. Leon e Claire possuem suas próprias campanhas separadas, permitindo que os jogadores vejam a história da perspectiva de ambos os personagens. O destino desses dois personagens favoritos dos fãs está nas mãos dos jogadores conforme eles trabalham juntos para sobreviver e descobrir o que está por trás do terrível ataque à cidade. Será que eles sairão com vida?"
    },
    {
      id: '11',
      name: "Hades",
      price: 47.49,
      imgPortrait: "assets/images/games/portrait/hades.png",
      imgLandscape: "https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Hades_image1600w.png",
      imgSquare: "https://image.api.playstation.com/vulcan/ap/rnd/202104/0517/9AcM3vy5t77zPiJyKHwRfnNT.png",
      featured: true,
      bestSeller: false,
      trending: false,
      description: "Hades é um jogo roguelike que combina os melhores aspectos dos títulos da Supergiant aclamados pela crítica, incluindo a ação rápida de Bastion, a rica atmosfera e profundidade de Transistor e a narrativa baseada em personagens de Pyre. <br><br> Na pele do imortal Príncipe do Submundo, você usará os poderes e as armas míticas do Olimpo para se libertar das garras do deus dos mortos, enquanto se fortalece e descobre mais sobre a história a cada tentativa única de fuga. <br><br> Os deuses do Olimpo vão te ajudar! Conheça Zeus, Atena, Poseidon e muitos outros, e escolha entre dezenas de Dádivas poderosas que aprimoram suas habilidades. Existem milhares de construções possíveis de personagens para descobrir à medida que avança."
    },
    {
      id: '12',
      name: "Green Hell",
      price: 47.49,
      imgPortrait: "https://cdn-products.eneba.com/resized-products/uiAcncxmFfJ3JRqLjaW3EemyTDu1rK1f7QMoflzY6B4_350x200_1x-0.jpg",
      imgLandscape: "https://projectn.com.br/wp-content/uploads/2020/11/7e1518_cff080cbbae743439723d7455d525f82_mv2.jpg",
      imgSquare: "https://image.api.playstation.com/vulcan/img/rnd/202106/0411/HMFFrDc55LTdqf9sls0eMzK4.png",
      featured: false,
      bestSeller: false,
      trending: false,
      description: "Você está sozinho na selva sem comida ou equipamentos, tentando sobreviver e buscando uma maneira de escapar. À beira da morte, o jogador é colocado em uma jornada de resistência já que os efeitos do isolamento afetam fortemente não só o corpo, mas também a mente. Por quanto tempo você conseguirá sobreviver aos perigos do desconhecido?\n\nNesta jornada, você não receberá nenhuma ajuda do mundo exterior. Equipado apenas com suas próprias mãos, você deverá aprender técnicas reais de sobrevivência para construir abrigos, fazer ferramentas e construir armas para caçar e se defender. Constantemente ameaçado pela selva, você lutará tanto contra animais selvagens quanto doenças tropicais. Os jogadores também enfrentarão armadilhas elaboradas por suas próprias mentes e medos que se arrastam pela escuridão da selva sem fim."
    },
    {
      id: '13',
      name: "Dead By Daylight",
      price: 39.99,
      imgPortrait: "https://www.mobygames.com/images/covers/l/603701-dead-by-daylight-special-edition-windows-apps-front-cover.jpg",
      imgLandscape: "https://i.redd.it/1pj94zx19y901.png",
      imgSquare: "https://image.api.playstation.com/vulcan/img/rnd/202105/2616/031IHhxEk8txw0w3IKfGXFiW.png",
      featured: false,
      bestSeller: true,
      trending: false,
      description: "Dead by Daylight é um jogo de terror multiplayer (4vs1) onde um jogador assume o papel do assassino selvagem e os outros quatro jogadores jogam como sobreviventes, tentando escapar do assassino e evitar ser pego, torturado e morto."
    },
    {
      id: '14',
      name: "Cyberpunk 2077",
      price: 199.9,
      imgPortrait: "https://media.playstation.com/is/image/SCEA/cyberpunk-2077-box-art-01-ps4-us-06jun19?$native_nt$",
      imgLandscape: "https://steamcdn-a.akamaihd.net/steam/apps/1091500/ss_85dfceb0df4165789a395e3c4d6cbcdf197930c6.1920x1080.jpg?t=1606918828",
      imgSquare: "https://image.api.playstation.com/vulcan/ap/rnd/202008/0416/6Bo40lnWU0BhgrOUm7Cb6by3.png",
      featured: false,
      bestSeller: true,
      trending: false,
      description: "Cyberpunk 2077 é uma história de ação e aventura de mundo aberto ambientada em Night City, uma megalópole obcecada por poder, glamour e biomodificações. Você joga como V, um mercenário fora da lei atrás de um implante único que carrega a chave da imortalidade. Você pode personalizar aparatos cibernéticos, conjunto de habilidades e estilo de jogo do personagem e explorar uma vasta cidade onde as decisões tomadas definem a história e o mundo ao seu redor."
    },
    {
      id: '15',
      name: "FIFA 22",
      price: 299,
      imgPortrait: "https://assets.vg247.com/current//2021/07/fifa_21_covers-1-922x1152.png",
      imgLandscape: "https://entrelementos.com/wp-content/uploads/2021/08/fifa-22-1200x675.jpg",
      imgSquare: "https://image.api.playstation.com/vulcan/ap/rnd/202106/2914/mFIMmTCnJJzwZRcIErgm5Czr.png",
      featured: true,
      bestSeller: false,
      trending: false,
      description: "Jogue o Maior Jogo do Mundo com +17.000 jogadores, mais de 700 times em +90 estádios e mais de 30 ligas de todo o mundo."
    },
    {
      id: '16',
      name: "Red Dead Redemption 2",
      price: 239,
      imgPortrait: "https://s1.gaming-cdn.com/images/products/5679/orig/red-dead-redemption-2-standard-edition-cover.jpg",
      imgLandscape: "https://img.hype.games/cdn/facad932-4082-4d20-980d-34bb385d2233Red-Dead-Redemption-2-Ultimate-Edition-Cover.jpg",
      imgSquare: "https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png",
      featured: false,
      bestSeller: false,
      trending: false,
      description: "Estados Unidos, 1899.<br><br> Arthur Morgan e a gangue Van der Linde são bandidos em fuga. Com agentes federais e os melhores caçadores de recompensas no seu encalço, a gangue precisa roubar, assaltar e lutar para sobreviver no impiedoso coração dos Estados Unidos. Conforme divisões internas profundas ameaçam despedaçar a gangue, Arthur deve fazer uma escolha entre os seus próprios ideais e a lealdade à gangue que o criou."
    },
    {
      id: '17',
      name: "Sea of Thieves",
      price: 89.99,
      imgPortrait: "https://store-images.s-microsoft.com/image/apps.16347.14554784103656548.6c0bfca6-ceff-4368-9bde-2fe50f344136.007dce43-6492-46f2-bb2b-2b28df98fc3c",
      imgLandscape: "https://img.ibxk.com.br/2018/03/26/26201929787520.jpg",
      imgSquare: "https://cdna.artstation.com/p/assets/covers/images/009/864/496/large/joachim-coppens-artstation-square-thumb-wld.jpg?1521295418",
      featured: false,
      bestSeller: true,
      trending: false,
      description: "Sea of Thieves oferece a experiência pirata definitiva, desde navegar e lutar até explorar e pilhar - tudo o que você precisa para viver a vida pirata e se tornar uma lenda por seus feitos. Sem nenhum papel definido, você tem total liberdade para interagir com o mundo e os outros jogadores como preferir.\nSeja viajando em grupo ou velejando a sós, você certamente encontrará outras tripulações nessa aventura de mundo compartilhado - mas serão elas amigas ou inimigas, e o que você fará a respeito?"
    }
  ]

  constructor(private firestore: AngularFirestore) { }

  public getAll() {
    return this.firestore.collection('games').snapshotChanges()
  }

  public getGameById(id: string) {
    return this.firestore.collection('games').doc(id).ref.get().then((gameFirebase) => {
      if (gameFirebase.exists) {
        const gameId = gameFirebase.id;
        const gameData = gameFirebase.data();

        return this.buildGame(gameId, gameData)
      }

      return this.buildEmptyGame()
    })
  }

  public getUserGames(): Game[] {
    return Array.of(this.games[0], this.games[1], this.games[2])
  }

  public addGame(game: Game) {
    delete game.id
    return this.firestore.collection('games').add({ ...game })
  }

  public updateGame(game: Game){
    return this.firestore.doc(`games/${game.id}`).update(game);
  }

  public deleteGame(id: Number){
    let posicao = null;

    for(let i = 0; i < this.games.length; i++){
      if (Number(this.games[i].id) === id){
        posicao = i;
        break;
      }
    }

    if (posicao || posicao === 0){
      this.games.splice(posicao,1);
    }

  }

  private buildGame(gameId, gameData): Game {
    return {
      id: gameId,
      name: gameData['name'],
      price: gameData['price'],
      description: gameData['description'],
      imgPortrait: gameData['imgPortrait'],
      imgLandscape: gameData['imgLandscape'],
      imgSquare: gameData['imgSquare'],
      featured: gameData['featured'],
      bestSeller: gameData['bestSeller'],
      trending: gameData['trending']
    }
  }

  private buildEmptyGame(): Game {
    return {
      id: '',
      name: '',
      price: 0,
      description: '',
      imgPortrait: '',
      imgLandscape: '',
      imgSquare: '',
      featured: false,
      bestSeller: false,
      trending: false,
    }
  }
}
