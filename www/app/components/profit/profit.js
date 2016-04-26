import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Resource from 'angular-resource';
import profitComponent from './profit.component';
import profitFactory from './profit.factory';
import config from '../../config';

let profitModule = angular.module('profit', [
  uiRouter,
  Resource
])
 
.config(($stateProvider, $urlRouterProvider) => {  
  "ngInject";

  $stateProvider
    .state('app.profit', {
      url: '/profit',
      views: {
	      'menuContent': {
	        templateUrl: `${config.pathHtml}profit/profit.html`
		    }
	    }
    });
})

.directive('profitView', profitComponent)
.factory('profit.factory', profitFactory); 

export default profitModule;
