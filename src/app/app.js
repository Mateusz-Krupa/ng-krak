import '../style/app.css';

import angular from 'angular';
import { ModelsModule } from './models/ModelsModule';
import { RecipeListController } from './components/recipe-list/recipe-list';

export const AppModule = angular.module("app", [
  ModelsModule.name
])
.component('app', RecipeListController.config());