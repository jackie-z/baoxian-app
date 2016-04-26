import template from './index.component.html';
import controller from './index.controller';


let indexComponent = function () { 
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default indexComponent;
