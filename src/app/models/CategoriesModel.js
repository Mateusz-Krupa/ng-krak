export class CategoriesModel {
  constructor($http){
    this.$http = $http;
  }
  
  get(){
    return this.$http({
      method: 'GET',
      url: 'http://localhost:3000/categories'
    });
  }
}