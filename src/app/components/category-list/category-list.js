import './category-list.css';

export class CategoryListController{
    constructor(CategoriesModel) {
      this.items = [];
      this.CategoriesModel = CategoriesModel;
    }

    $onInit(){
      this.getItems();
    }

    onRemove(index){
      this.items.splice(index, 1);
    }

    getItems(){
      this.CategoriesModel.get().then((res) => {
          this.items = res.data;
      })
    }

    static config(){
      return {
        template: require('./category-list.html'),
        controller: CategoryListController
      }
    }
}


