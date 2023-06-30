import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { RouterModule } from '@angular/router';
import { PokemonListByTypeComponent } from './pokemon-list-by-type/pokemon-list-by-type.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [PokemonListComponent, PokemonListByTypeComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatProgressBarModule,
    RouterModule.forChild([
      { path: 'pokemon-list', component: PokemonListComponent },
      {
        path: 'pokemon-list-by-type/:id',
        component: PokemonListByTypeComponent,
      },
    ]),
  ],
})
export class PokemonsModule { }
