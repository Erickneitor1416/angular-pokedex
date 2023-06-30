import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-pokemon-list-by-type',
  templateUrl: './pokemon-list-by-type.component.html',
  styleUrls: ['./pokemon-list-by-type.component.scss'],
})
export class PokemonListByTypeComponent implements OnInit {
  pokemonList: any;
  constructor(
    private categoryService: CategoryService,
    private activeteRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activeteRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      console.log('parameter get from outside', id);
      this.categoryService.getPokemonsListByTypes(Number(id)).subscribe({
        next: (data) => {this.pokemonList= data.pokemon
        console.log(JSON.stringify(this.pokemonList.pokemon.pokemon));
        },
      });
    });
  }
}
