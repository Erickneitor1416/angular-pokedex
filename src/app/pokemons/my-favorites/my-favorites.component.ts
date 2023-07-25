import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-my-favorites',
  templateUrl: './my-favorites.component.html',
  styleUrls: ['./my-favorites.component.scss'],
})
export class MyFavoritesComponent implements OnInit {
  data: any[];
  constructor(private firestore: AngularFirestore) {}

  ngOnInit(): void {
    this.firestore
      .collection('pokemons', (ref) => ref.where('isFavorite', '==', true))
      .get()
      .subscribe((res) => {
        this.data = res['docs'];
      });
  }
}
