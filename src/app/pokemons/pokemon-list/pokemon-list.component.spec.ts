import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { PokemonListComponent } from './pokemon-list.component';
import { PokemonService } from 'src/app/services/pokemon.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

let pokenmonsResults = {
  count: 3,
  results: [
    { name: 'Pokemon1', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
    { name: 'Pokemon2', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
    { name: 'Pokemon3', url: 'https://pokeapi.co/api/v2/pokemon/3/' },
  ],
};

fdescribe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;

  let mockPokemonService: jasmine.SpyObj<PokemonService>;

  beforeEach(async () => {
    mockPokemonService = jasmine.createSpyObj<PokemonService>(['getPokemons']);
    mockPokemonService.getPokemons.and.callFake(() => {
      return of(pokenmonsResults);
    });

    await TestBed.configureTestingModule({
      declarations: [PokemonListComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: PokemonService, useValue: mockPokemonService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getPokemons on init', fakeAsync(() => {
    component.getPokemons();
    tick();
    fixture.detectChanges();
    expect(component.pokemonIds).toBeDefined();
    expect(component.pokemonIds.length).toBe(3);
  }));
});
