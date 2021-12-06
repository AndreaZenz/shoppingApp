import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
            new Recipe('A test Recipe',
            'This is simply a test', 
            'https://image.shutterstock.com/image-photo/avocado-quinoa-roasted-sweet-potato-600w-753380965.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
            new Recipe('A test Recipe', 
            'This is simply a test', 
            'https://www.wellme.it/wp-content/uploads/2013/06/images_dieta-alimentazione_nutrirsi-sano_menopausa-sintomi-alimentazione.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
    ];
    constructor(private slService: ShoppingListService){

    }

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index:number){
        return this.recipes[index];
    }
    
    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
    }
}