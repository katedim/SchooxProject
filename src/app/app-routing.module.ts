import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { ReadArticleComponent } from './components/read-article/read-article.component';
import { FavArticlesComponent } from './components/fav-articles/fav-articles.component';
import { ByAuthorComponent } from './components/by-author/by-author.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

const routes: Routes = [
  {path: 'articles', component: SearchComponent},
  {path: '', component: SearchComponent},
  {path: 'articles/favorites', component: FavArticlesComponent},
  {path: 'articles/:id', component: ReadArticleComponent},
  {path: 'articles/authors/:id', component: ByAuthorComponent},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
