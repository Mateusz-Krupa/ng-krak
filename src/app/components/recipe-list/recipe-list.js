import './recipe-list.css';

export class RecipeListController{
    constructor(RecipeModel ) {
      this.items = [];
      this.RecipeModel = RecipeModel;
    }


    getItems(){
      this.RecipeModel.get().then((res) => {
          this.items = res.data;
      })
    }

    static config(){
      return {
        template: require('./recipe-list.html'),
        controller: RecipeListController
      }
    }
}


