describe('recipeList', () => {
  
  let $componentController;
  beforeEach(() => {
    angular.mock.module('app');
    angular.mock.inject((_$componentController_) => {
      $componentController = _$componentController_;
    });
  });

  it("should ...", () => {
    var bindings = {items: [{name: 'XXX'}]};
    var ctrl = $componentController('recipeList', null, bindings);
    expect(ctrl).toBeDefined();
  });


});
