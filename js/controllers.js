'use strict';

var TTTracker = angular.module('TTTracker', []);

TTTracker.controller('TitlesCtrl', function ($scope) {
	$scope.titles = [
		{'name': 'fate stay night'},
		{'name': 'mushishi'},
		{'name': 'psychopass'}
	];

	$scope.orderProp='name';
});