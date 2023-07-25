import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {
  @Input()
  pokemonDetail: string;

  pokemonData: any;

  constructor(
    private pokemonService: PokemonService,
    private firestore: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.pokemonService
      .getPokemonDetails(Number(this.pokemonDetail))
      .subscribe({
        next: (data) => {
          this.pokemonData = data;
          // this.pokemonImageUrl = data.sprites.front_default;
          /* this.firestore
            .collection('pokemons')
            .add({
              id: data.id,
              name: data.name,
            })
            .then((docRef) => {
              console.log(docRef);
            })
            .catch((error) => {
              console.log(error);
            }); */
          this.firestore.collection('pokemons').doc(data.id.toString()).set({
            name: data.name,
          });
        },
      });
  }
}
