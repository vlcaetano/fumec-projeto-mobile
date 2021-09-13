export class Game {
  id: number
  name: string
  price: number
  description: string
  imgPortrait: string
  imgLandscape: string  
  featured: boolean
  bestSeller: boolean
  trending: boolean

  constructor()
  constructor(id?: number,
              name?: string,
              price?: number,
              description?: string,
              imgPortrait?: string,
              imgLandscape?: string , 
              featured?: boolean,
              bestSeller?: boolean,
              trending?: boolean) {
    this.id = (id)? id : null;
    this.name = (name)? name : 'Jogo sem nome';
    this.price = (price)? price : 99.90;
    this.description = (description)? description : 'Jogo sem descrição';
    this.imgPortrait = (imgPortrait)? imgPortrait : '';
    this.imgLandscape = (imgLandscape)? imgLandscape : '';
    this.featured = (featured)? featured : false;
    this.bestSeller = (bestSeller)? bestSeller : false;
    this.trending = (trending)? trending : false;
  }
}