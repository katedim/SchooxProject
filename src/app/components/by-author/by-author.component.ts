import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerService } from '../../services/server.service';
import { Author } from '../../models/author';
import { Article } from '../../models/article';

@Component({
  selector: 'app-by-author',
  templateUrl: './by-author.component.html',
  styleUrls: ['./by-author.component.css']
})
export class ByAuthorComponent implements OnInit{

  author: Author ={'id': '', 'name': ''};
  authorArticlesArray: Article[] = [];

  constructor(private route: ActivatedRoute, private serverService: ServerService) {}

    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.author.id = params.get('id') || '';
        this.getArticlesByAuthor(this.author);
      });
    }

    getArticlesByAuthor(author: Author) {
      this.serverService.getArticlesByAuthor(author).subscribe(
        (res) => {
          this.authorArticlesArray = res;
          this.author.name = this.authorArticlesArray[0].author.name;
        },
        (err) => {
          console.log(err);
          alert('Failed to fetch articles by author');
        }
      );
    }
}
