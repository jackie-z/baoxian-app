import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Resource from 'angular-resource';
import newComponent from './new.component';
import newFactory from './new.factory';
import config from '../../config';

let newModule = angular.module('new', [
  uiRouter,
  Resource
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('app.new', {
      url: '/new',
      views: {
	      'menuContent': {
	        templateUrl: `${config.pathHtml}new/new.html`
		    }
	    }
    });
})

.directive('newView', newComponent)
.factory('new.factory', newFactory); 

export default newModule;
