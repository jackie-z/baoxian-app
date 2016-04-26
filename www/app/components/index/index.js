import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Resource from 'angular-resource';
import indexComponent from './index.component';
import indexFactory from './index.factory';
import config from '../../config';

let indexModule = angular.module('index', [
  uiRouter,
  Resource
])
 
.config(($stateProvider, $urlRouterProvider) => {  
  "ngInject";

  $stateProvider
    .state('app.index', {
      url: '/index',
      views: {
	      'menuContent': {
	        templateUrl: `${config.pathHtml}index/index.html`
		    }
	    }
    });
})

.directive('indexView', indexComponent)
.factory('index.factory', indexFactory); 

export default indexModule;
