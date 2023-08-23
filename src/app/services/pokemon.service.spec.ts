import { TestBed } from '@angular/core/testing';

import { PokemonService } from './pokemon.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

describe('PokemonService', () => {
  let service: PokemonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get pokemon datail with data', () => {
    service.getPokemonDetails(1).subscribe((data: any) => {
      expect(data).toBeTruthy();
      expect(data.name).toBe('Pokemon');
      expect(data.id).toBe(1);
    });
    let req = httpMock.expectOne(`${environment.pokedexBaseUrl}pokemon/1`);
    expect(req.request.method).toBe('GET');
    let response = {
      id: 1,
      name: 'Pokemon',
    };
    req.flush(response);
  });

  //pokenmon list
  it('should get pokemon list with data', () => {
    service.getPokemons().subscribe((data: any) => {
      expect(data).toBeTruthy();
      expect(data.count).toBe(3);
      expect(data.results.length).toBe(3);
      expect(data.results).toBeDefined();
      expect(data.results[0].name).toBe('Pokemon1');
      expect(data.results[0].url).toBe('https://pokeapi.co/api/v2/pokemon/1/');
      expect(data.results[1].name).toBe('Pokemon2');
      expect(data.results[1].url).toBe('https://pokeapi.co/api/v2/pokemon/2/');
      expect(data.results[2].name).toBe('Pokemon3');
      expect(data.results[2].url).toBe('https://pokeapi.co/api/v2/pokemon/3/');
    });
    let req = httpMock.expectOne(`${environment.pokedexBaseUrl}pokemon`);
    expect(req.request.method).toBe('GET');
    let response = {
      count: 3,
      results: [
        { name: 'Pokemon1', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
        { name: 'Pokemon2', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
        { name: 'Pokemon3', url: 'https://pokeapi.co/api/v2/pokemon/3/' },
      ],
    };
    req.flush(response);
  });
});
