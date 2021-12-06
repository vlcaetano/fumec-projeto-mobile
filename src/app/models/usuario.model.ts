import { UserGame } from "./userGame.model";

export interface Usuario {
  id: string;
  nome: string;
  nickName: string;
  email: string;
  senha: string;
  uid: string;
  url: string;
  userGames: UserGame[];
}
