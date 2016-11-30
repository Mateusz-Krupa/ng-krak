import {AppNavigation} from './app-navigation/app-navigation';
import {RemoveButtonController} from './remove-button/remove-button';

export const UiModule = angular.module("app.ui", [])
  .component("appNavigation", AppNavigation.config())
  .component("removeButton", RemoveButtonController.config())
