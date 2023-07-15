import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReadArticleComponent } from './read-article/read-article.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FavArticlesComponent } from './fav-articles/fav-articles.component';
import { ByAuthorComponent } from './by-author/by-author.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ReadArticleComponent,
    ShortenPipe,
    FavArticlesComponent,
    ByAuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
