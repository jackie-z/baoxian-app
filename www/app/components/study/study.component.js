import template from './study.component.html';
import controller from './study.controller';

let studyComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default studyComponent;
