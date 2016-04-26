import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Resource from 'angular-resource';
import studyComponent from './study.component';
import studyFactory from './study.factory';
import config from '../../config';

let studyModule = angular.module('study', [
  uiRouter,
  Resource
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('app.study', {
      url: '/study',
      views: {
	      'menuContent': {
	        templateUrl: `${config.pathHtml}study/study.html`
		    }
	    }
    });
})

.directive('studyView', studyComponent)
.factory('study.factory', studyFactory); 

export default studyModule;
