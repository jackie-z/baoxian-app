class HomeController {
  constructor($scope, $http) {
    this.name = 'home';
    this.test = 'mytest';
    this.$scope = $scope;
    this.$http = $http;
    // this.init();
    // this.factory = factory;
  }

 //  init(){
	// //code

 //  }

  getUserInfo(){
  	this.$http.get('http://localhost:3000/api/sales/info/1').then(response => {
      this.userInfo = response.data
    });
  }


}

export default HomeController;
