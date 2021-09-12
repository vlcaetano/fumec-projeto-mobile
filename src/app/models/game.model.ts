export class Game {
  id: number
  name: string
  price: number
  description: string
  imgPortrait: string
  imgLandscape: string  
  destaque: boolean
  maisVendido: boolean
  novidade: boolean

  constructor()
  constructor(id?: number,
              name?: string,
              price?: number,
              description?: string,
              imgPortrait?: string,
              imgLandscape?: string , 
              destaque?: boolean,
              maisVendido?: boolean,
              novidade?: boolean) {
    this.id = (id)? id : null;
    this.name = (name)? name : 'Jogo sem nome';
    this.price = (price)? price : 99.90;
    this.description = (description)? description : 'Jogo sem descrição';
    this.imgPortrait = (imgPortrait)? imgPortrait : '';
    this.imgLandscape = (imgLandscape)? imgLandscape : '';
    this.destaque = (destaque)? destaque : false;
    this.maisVendido = (maisVendido)? maisVendido : false;
    this.novidade = (novidade)? novidade : false;
  }
}