import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ReadArticleComponent } from './read-article/read-article.component';
import { FavArticlesComponent } from './fav-articles/fav-articles.component';
import { ByAuthorComponent } from './by-author/by-author.component';

const routes: Routes = [
  {path: 'articles', component: SearchComponent},
  {path: '', component: SearchComponent},
  {path: 'articles/favorites', component: FavArticlesComponent},
  {path: 'articles/:id', component: ReadArticleComponent},
  {path: 'articles/authors/:id', component: ByAuthorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
