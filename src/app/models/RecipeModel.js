export class RecipeModel{
  constructor($http){
    this.$http = $http;
  }
  
  getList(){
    return this.$http({
      method: 'GET',
      url: 'http://localhost:3000/recipe'
    });
  }

  get(id){
    return this.$http({
      method: 'GET',
      url: 'http://localhost:3000/recipe' + id
    });
  }

}