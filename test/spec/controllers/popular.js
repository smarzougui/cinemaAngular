describe('Controller: PopularCtrl', function() {

    // load the controller's module
    beforeEach(module('openclassroomAngularApp'));

    var PopularCtrl, serviceAjax, scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($rootScope, _$controller_, _serviceAjax_) {
        scope = $rootScope.$new();
        $controller = _$controller_;
        serviceAjax = _serviceAjax_;

        PopularCtrl = $controller('PopularCtrl', {
            $scope: scope,
            serviceAjax: serviceAjax
        });

    }));

    it('should set $scope.movies and $scope.total_pages when calling $scope.loadMovies', function() {
        spyOn(serviceAjax, 'popular').and.callFake(function() {
            return {
                success: function(callback) {
                    callback({
                        "results": [
                            {}
                        ], "total_pages": 10
                    })
                }
            }
        });

        scope.loadMovies();

        expect(scope.totalPages).toEqual(10);
        expect(scope.movies).toEqual([
            {}
        ]);
    });

    it('should call loadMovies function when calling pageChanged function', function() {
        spyOn(scope, "loadMovies");
        scope.pageChanged();
        expect(scope.loadMovies).toHaveBeenCalled();
    });


    it('Should return a correct password strength status', function() {
        var $scope = {};
        var controller = $controller('PopularCtrl', {$scope: $scope});
        $scope.password = "StrenghtPassword";
        $scope.grade();
        expect($scope.strength).toEqual('strong');
    });

});
