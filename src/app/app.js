import '../style/app.css';

import angular from 'angular';

import { ModelsModule } from './models/ModelsModule';
import { SpaModule } from './spa/SpaModule';
import { UiModule } from './ui/UiModule';
import { RecipeListController } from './components/recipe-list/recipe-list';
import { RecipeAppController } from './components/recipe-app/recipe-app';
import { CategoryListController } from './components/category-list/category-list'

export const AppModule = angular.module("app", [
  ModelsModule.name,
  SpaModule.name,
  UiModule.name
])
.component('categoryList', CategoryListController.config())
.component('recipeApp', RecipeAppController.config())
.component('recipeList', RecipeListController.config());