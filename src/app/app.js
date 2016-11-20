import '../style/app.css';

import angular from 'angular';
import { ModelsModule } from './models/ModelsModule';
import { RecipeListController } from './components/recipe-list/recipe-list';
import { RecipeAppController } from './components/recipe-app/recipe-app';

export const AppModule = angular.module("app", [
  ModelsModule.name
])
.component('recipeApp', RecipeAppController.config())
.component('recipeList', RecipeListController.config());