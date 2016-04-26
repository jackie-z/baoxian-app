import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Resource from 'angular-resource';
import settingComponent from './setting.component';
import settingFactory from './setting.factory';
import config from '../../config';

let settingModule = angular.module('setting', [
  uiRouter,
  Resource
])
 
.config(($stateProvider, $urlRouterProvider) => {  
  "ngInject";

  $stateProvider
    .state('app.setting', {
      url: '/setting',
      views: {
	      'menuContent': {
	        templateUrl: `${config.pathHtml}setting/setting.html`
		    }
	    }
    });
})

.directive('settingView', settingComponent)
.factory('setting.factory', settingFactory); 

export default settingModule;