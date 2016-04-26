import template from './setting.component.html';
import controller from './setting.controller';


let settingComponent = function () { 
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default settingComponent;
