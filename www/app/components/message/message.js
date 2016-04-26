import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Resource from 'angular-resource';
import messageComponent from './message.component';
import messageFactory from './message.factory';
import config from '../../config';

let messageModule = angular.module('message', [
  uiRouter,
  Resource
])
 
.config(($stateProvider, $urlRouterProvider) => {  
  "ngInject";

  $stateProvider
    .state('app.message', {
      url: '/message',
      views: {
	      'menuContent': {
	        templateUrl: `${config.pathHtml}message/message.html`
		    }
	    }
    });
})

.directive('messageView', messageComponent)
.factory('message.factory', messageFactory); 

export default messageModule;
