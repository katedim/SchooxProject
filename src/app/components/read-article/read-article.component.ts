import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerService } from '../../services/server.service';
import { Article } from '../../models/article';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-read-article',
  templateUrl: './read-article.component.html',
  styleUrls: ['./read-article.component.css']
})
export class ReadArticleComponent implements OnInit {
  articleTitle: string = '';
  article: Article = new Article();
  articleArray: Article[] = [];
  test:  string ='';
  articleAuthorName: string = '';
  articleAuthorId: string = '';
  articleBody: string = '';

  constructor(private route: ActivatedRoute, private serverService: ServerService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.articleTitle = params.get('id') || '';
      this.getArticleByTitle(this.articleTitle);
    });
  }

  getArticleByTitle(articleTitle: string) {
    this.serverService.getArticleByTitle(articleTitle).subscribe(
      (article: Article) => {
        if (article) {
          const articles = JSON.parse(JSON.stringify(article));
          this.articleAuthorName = articles[0]?.author.name;
          this.articleAuthorId = articles[0]?.author.id;
          this.articleBody = articles[0]?.body;
          this.article = article;

        } else {
          this.article = new Article();
        }
      },
      (err) => {
        console.log('Error retrieving article:', err);
        alert('Unable to get article');
      }
    );

  }







}
