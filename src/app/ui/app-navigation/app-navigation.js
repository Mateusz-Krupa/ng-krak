import './app-navigation.css';

export class AppNavigation{
    constructor() {
      
    }

    static config(){
      return {
        template: require('./app-navigation.html'),
        controller: AppNavigation
      }
    }
}


