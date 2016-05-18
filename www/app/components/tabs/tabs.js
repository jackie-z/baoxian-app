import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Resource from 'angular-resource';
import config from '../../config';

let tabsModule = angular.module('tabs', [
  uiRouter,
  Resource
])
 
.config(($stateProvider, $urlRouterProvider) => {  
  "ngInject";

  $stateProvider
    .state('app.tabs', {
      url: '/tabs',
      abstract: true,
      views: {
	      'menuContent': {
	        templateUrl: `${config.pathHtml}tabs/tabs.html`
		    }
	    }
    });
})

export default tabsModule;
