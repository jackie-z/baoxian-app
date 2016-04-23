import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Menu from './menu/menu';
import New from './new/new';

let componentModule = angular.module('app.components', [
  Menu.name,
  Home.name,
  About.name,
  New.name
]);

export default componentModule;