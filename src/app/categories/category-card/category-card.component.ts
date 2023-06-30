import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
})
export class CategoryCardComponent implements OnInit {
  @Input()
  pokemonType: any;
  imageURL: String;
  constructor() {}

  ngOnInit(): void {
    console.log('PokemonType', JSON.stringify(this.pokemonType));
    this.imageURL = `https://ui-avatars.com/api/?font-size=0.33&size=300&name=${this.pokemonType.name}`;
  }
}
