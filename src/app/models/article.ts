import { Author } from "./author";

export class Article {
  id: string = '';
  title: string = '';
  author: Author = {id: '', name: ''};
  body: string = '';
  favArticle: boolean = false;
}
