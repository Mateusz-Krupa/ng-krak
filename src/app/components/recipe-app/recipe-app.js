import './recipe-app.css';

export class RecipeAppController{
    constructor( $filter, RecipeModel ) {
      this.navigationItems = [{

      }]



    }

    static config(){
      return {
        template: require('./recipe-app.html'),
        controller: RecipeAppController
      }
    }
}


