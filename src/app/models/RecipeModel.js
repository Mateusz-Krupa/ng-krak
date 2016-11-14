export class RecipeModel{
  constructor($http){
    this.$http = $http;
  }

  get(id){
    return this.$http({
      method: 'GET',
      url: 'http://localhost:3000/recipe/' + id 
    })
  }

  set(){
    console.log("setting something");
  }

}