import template from './message.component.html';
import controller from './message.controller';


let messageComponent = function () { 
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default messageComponent;
