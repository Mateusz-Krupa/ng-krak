var RecipePageObject = require('./pageObjects/RecipePageObject')

describe('angularjs homepage', function() {


  var categoryComponent = new RecipePageObject();
  beforeEach(() => {
    browser.get('/#/category-list');
  })

  it('should greet the named user', function() {
    let listSize = categoryComponent.listElements.count();
    categoryComponent.removeButtons.then((items) => {
      items[0].click();
    })
    let listSizeAfterRemove = categoryComponent.listElements.count();
    expect(listSize).toBeGreaterThen(listSizeAfterRemove);
  });
});