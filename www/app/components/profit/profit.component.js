import template from './profit.component.html';
import controller from './profit.controller';


let profitComponent = function () { 
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default profitComponent;
