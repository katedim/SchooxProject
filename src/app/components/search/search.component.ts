import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, debounceTime, map, switchMap } from 'rxjs';
import { ServerService } from '../../services/server.service';
import { Article } from '../../models/article';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  searchForm: any;
  articleObj: Article = new Article();
  articleArray: Article[] = [];

  constructor(searchForm: FormBuilder, private serverService: ServerService) {

    this.searchForm = searchForm.group({
      name: new FormControl(''),
      fav: new FormControl('')
    })
  }

  ngOnInit(): void {
    this.getAllArticles();
    this.handleValueChanges();
  }

  getAllArticles() {
    this.serverService.getAllArticles().subscribe(res => {
      this.articleArray = res;
    }, _err => {
      alert("Unable to get articles");
    });
  }

  handleValueChanges(): void {
    this.searchForm.get('name').valueChanges.pipe(
      debounceTime(750),
      switchMap((searchValue: string) =>
        this.serverService.getAllArticles().pipe(
          map((res: Article[]) =>
            res.filter((article: Article) =>
              article.title.toLowerCase().includes(searchValue.toLowerCase()) ||
              article.author.name.toLowerCase().includes(searchValue.toLowerCase()) ||
              article.body.toLowerCase().includes(searchValue.toLowerCase())
            )
          )
        )
      )
    ).subscribe((filteredArticles: Article[]) => {
      this.articleArray = filteredArticles;
    });
  }

  updateFavArticle(article: Article) {
    this.serverService.editArticle(article).subscribe((res) => {
    })
  }
}
