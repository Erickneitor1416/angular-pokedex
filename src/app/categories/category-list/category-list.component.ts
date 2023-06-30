import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit, OnDestroy {
  categoryList: any[];
  subsCategoryList: Subscription;
  constructor(private categoriesService: CategoryService) {}
  ngOnDestroy(): void {
    if (this.subsCategoryList) {
      this.subsCategoryList.unsubscribe;
    }
  }

  ngOnInit(): void {
    // console.log(this.categoriesService.getPokemonTypes());
    // this.categoryList = this.categoriesService.getPokemonTypes();
    this.subsCategoryList = this.categoriesService.getPokemonTypes().subscribe({
      next: (data) => (this.categoryList =data.results),
      // next: (data) => console.log(JSON.stringify(data)),
    });
    console.log(JSON.stringify(this.categoryList));
  }
}
