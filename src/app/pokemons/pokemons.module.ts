import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PokemonListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'pokemon-list', component: PokemonListComponent },
    ]),
  ],
})
export class PokemonsModule {}
