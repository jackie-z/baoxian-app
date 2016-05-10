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
	        templateUrl: `${config.pathHtml}study/study.html`,
          controller: 'study'
		    }
	    }
    });
})

.directive('studyView', studyComponent)
.factory('study.factory', studyFactory)
.controller('study', ['$scope', 
  function($scope){
    $scope.active_content='orders';
    $scope.queries=[
      {
        id:1,
        title:'到底为啥买保险 寿险精英掏心',
        time:'2分钟前',
        pic:'./img/u37.png'
      },
      {
        id:2,
        title:'到底为啥买保险 寿险精英掏心',
        time:'2分钟前',
        pic:'./img/u37.png'
      },
      {
        id:3,
        title:'到底为啥买保险 寿险精英掏心',
        time:'2分钟前',
        pic:'./img/u37.png'
      }
    ];
    $scope.headOne = $scope.queries[0];
    $scope.setActiveContent = (value) => {
      console.log(value);
      $scope.active_content=value;
    }
    console.log($scope);
  }]);

export default studyModule;
