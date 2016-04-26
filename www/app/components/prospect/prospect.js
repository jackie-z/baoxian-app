import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Resource from 'angular-resource';
import prospectComponent from './prospect.component';
import prospectFactory from './prospect.factory';
import config from '../../config';

let prospectModule = angular.module('prospect', [
  uiRouter,
  Resource
])
 
.config(($stateProvider, $urlRouterProvider) => {  
  "ngInject";

  $stateProvider
    .state('app.prospect', {
      url: '/prospect',
      views: {
	      'menuContent': {
	        templateUrl: `${config.pathHtml}prospect/prospect.html`
		    }
	    }
    });
})

.directive('prospectView', prospectComponent)
.factory('prospect.factory', prospectFactory); 

export default prospectModule;
