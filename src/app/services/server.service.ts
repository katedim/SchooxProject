import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  serviceUrl: string;


  constructor(private http: HttpClient) {
    this.serviceUrl = "http://localhost:3000/articles";
  }

  getAllArticles() {
    return this.http.get<Article[]>(this.serviceUrl);
  }

  getArticleByTitle(title: string) {
    const url = `${this.serviceUrl}?title=${title}`;
    return this.http.get<Article>(url);
  }

   editArticle( article: Article) {
    return this.http.put<Article>(this.serviceUrl+'/'+article.id, article);
   }
}
