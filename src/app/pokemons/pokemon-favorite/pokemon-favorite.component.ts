import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-favorite',
  templateUrl: './pokemon-favorite.component.html',
  styleUrls: ['./pokemon-favorite.component.scss'],
})
export class PokemonFavoriteComponent implements OnInit, OnDestroy {
  @Input()
  pokemonData: any;

  subcription: Subscription;
  data: any;
  constructor(private firestore: AngularFirestore) {}
  ngOnDestroy(): void {
    if (this.subcription) {
      this.subcription.unsubscribe();
    }
  }

  ngOnInit(): void {
    let document = this.firestore
      .collection('pokemons')
      .doc(this.pokemonData.id.toString())
      .valueChanges();

    this.subcription = document.subscribe((res) => {
      this.data = res;
    });
  }

  markFavorite(value: boolean) {
    this.firestore
      .collection('pokemons')
      .doc(this.pokemonData.id.toString())
      .update({ isFavorite: value });
  }
}
