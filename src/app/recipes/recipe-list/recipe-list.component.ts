import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test', 'https://image.shutterstock.com/image-photo/avocado-quinoa-roasted-sweet-potato-600w-753380965.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
