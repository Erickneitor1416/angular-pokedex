import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ObservableComponent } from './observable/observable.component';
import { CategoriesModule } from './categories/categories.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonsModule } from './pokemons/pokemons.module';

@NgModule({
  declarations: [AppComponent, ToolbarComponent, ObservableComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    CategoriesModule,
    HttpClientModule,
    PokemonsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'category-list', pathMatch: 'full' },
      { path: '**', component:PageNotFoundComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
