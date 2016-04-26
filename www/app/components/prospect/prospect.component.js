import template from './prospect.component.html';
import controller from './prospect.controller';


let prospectComponent = function () { 
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default prospectComponent;
