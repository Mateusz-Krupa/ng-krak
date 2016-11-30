import {RecipeModel} from './RecipeModel'
import {CategoriesModel} from './CategoriesModel' 

export const ModelsModule = angular.module("app.models", [])
  .service(RecipeModel.name, RecipeModel)
  .service(CategoriesModel.name, CategoriesModel);
