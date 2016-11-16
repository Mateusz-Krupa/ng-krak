var RecipePageObject = require('./pageObjects/RecipePageObject')

describe('angularjs homepage', function() {


  var recipe = new RecipePageObject();
  beforeEach(() => {
    browser.get('/');
    browser.ignoreSynchronization = false;
  })

  it('should greet the named user', function() {
    expect(recipe.name.getText()).toEqual("Name:");
  });
});