import './remove-button.css';

export class RemoveButtonController{
    constructor() {
      
    }

    remove(){
      this.onRemove({index: this.index})
    }

    static config(){
      return {
        template: require('./remove-button.html'),
        controller: RemoveButtonController, 
        bindings: {
          index: "@",
          onRemove: "&"
        }
      }
    }
}


