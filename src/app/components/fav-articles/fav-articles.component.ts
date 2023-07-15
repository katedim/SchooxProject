import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../services/server.service';
import { map } from 'rxjs';
import { Article } from '../../models/article';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fav-articles',
  templateUrl: './fav-articles.component.html',
  styleUrls: ['./fav-articles.component.css']
})
export class FavArticlesComponent implements OnInit{

  favArticleArray: Article[] = [];

  constructor(private serverService: ServerService, private http: HttpClient) {
  }
  ngOnInit(): void {
    this.getFavoriteArticles();
  }

  getFavoriteArticles() {

        this.serverService.getAllArticles().pipe(
          map((res: Article[]) =>
            res.filter((article: Article) =>
              article.favArticle === true
            )
          )
        )
        .subscribe((favArticles: Article[]) => {
          this.favArticleArray = favArticles;
          let message: string = (favArticles) ? 'Yes' : 'no';
    });
  }

}
