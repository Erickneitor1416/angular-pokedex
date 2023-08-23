import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit, OnDestroy {
  subscribe: Subscription;
  pokemonIds: any[];
  constructor(private pokemonService: PokemonService) {}
  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
  ngOnInit(): void {
    this.getPokemons();
  }
  getPokemons() {
    this.subscribe = this.pokemonService.getPokemons().subscribe({
      next: (response) => {
        this.pokemonIds = [];
        response.results.forEach((item: any) => {
          this.pokemonIds.push(item.url.slice(0, -1).split('/').pop());
        });
      },
    });
  }
}
