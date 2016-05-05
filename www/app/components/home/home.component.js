import template from './home.component.html';
import controller from './home.controller';

class HomeComponent {
  constructor() {
    this.restrict = 'E';
    this.scope = {};
    this.template = template;
    this.controller = controller;
    this.controllerAs = 'vm';
    this.bindToController = true;
  }

  link(scope, element) {
  	// console.log(this)
   //  this.scope = scope;
   //  this.element = element;
    scope.vm.getUserInfo();
    // scope.$on('data_ready', () => this.createVisualization());
    // scope.$on('$destroy', () => {
    //   if (this.svg) {
    //     this.svg = null;
    //   }
    // });
    // scope.vm.requestData();
    // scope.vm.requestRandomData(3);
  }

}

export default HomeComponent;
