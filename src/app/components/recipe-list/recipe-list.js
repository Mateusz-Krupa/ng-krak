import './recipe-list.css';

export class RecipeListController{
    constructor( $filter, RecipeModel ) {
        RecipeModel.get(1).then((res) => {
          console.log(res);
        })
    }

    onClick(){
        alert("clicked")
    }

    static config(){
      return {
        template: require('./recipe-list.html'),
        controller: RecipeListController
      }
    }
}


