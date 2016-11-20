import './recipe-list.css';

export class RecipeListController{
    constructor( $filter, RecipeModel ) {
      
    }

    static config(){
      return {
        template: require('./recipe-list.html'),
        controller: RecipeListController
      }
    }
}


