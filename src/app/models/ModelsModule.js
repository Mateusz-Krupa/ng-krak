import {RecipeModel} from './RecipeModel'

export const ModelsModule = angular.module("app.models", [])
  .service(RecipeModel.name, RecipeModel)
