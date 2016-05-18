import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Menu from './menu/menu';
import Study from './study/study';
import Index from './index/index';
import Prospect from './prospect/prospect';
import Message from './message/message';
import Profit from './profit/profit';
import Setting from './setting/setting';
import Tabs from './tabs/tabs';

console.log(Tabs.name);

let componentModule = angular.module('app.components', [
  Menu.name,
  Home.name,
  About.name,
  Study.name,
  Index.name,
  Prospect.name,
  Message.name,
  Profit.name,
  Setting.name,
  Tabs.name
]);

export default componentModule;