import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[] = [
    new Recipe('Idli Recipe (Idli Batter Recipe with Pro Tips)','Idli Recipe, Learn how to make soft Idli Batter using rice or rava. Making soft and fluffiest Idlis at home is really an art which you can easily master with my step by step recipe guide. In this post I share 2 ways to make healthiest and softest Idli at home. The first one is using rice and the other is using idly rava, which is also known as rice rava in some parts of the world. Both the methods will give you soft idlis.',
    'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/idli-380x570.jpg.webp'),
    new Recipe('A test recipe 2','Sample description','https://www.vegrecipesofindia.com/wp-content/uploads/2021/02/matar-paneer-2-480x270.jpg'),
    new Recipe('A test recipe 3','Sample description','https://www.vegrecipesofindia.com/wp-content/uploads/2021/02/matar-paneer-2-480x270.jpg')
  ]

  constructor(){

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
