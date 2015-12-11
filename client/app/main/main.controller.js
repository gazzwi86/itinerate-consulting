'use strict';

(function() {

  class MainController {

    constructor($scope, ngDialog) {
      $scope.date = new Date();
      $scope.clients = [];
      $scope.work = [];

      $scope.clients = [
        {
          src: 'assets/images/eurostar.jpg',
          title: 'Eurostar',
        },
        {
          src: 'assets/images/workangel.jpg',
          title: 'WorkAngel',
        },
        {
          src: 'assets/images/analogfolk.jpg',
          title: 'Analog Folk',
        },
        {
          src: 'assets/images/burberry.jpg',
          title: 'Burberry',
        },
        {
          src: 'assets/images/collective.jpg',
          title: 'Collective London',
        },
        {
          src: 'assets/images/aka.jpg',
          title: 'AKA',
        },
        {
          src: 'assets/images/nhs.jpg',
          title: 'NHS',
        },
      ];

      $scope.work = [
        {
          src: 'assets/images/eurostar-site.jpg',
          title: 'Eurostar',
          desc: '<p></p>',
        },
        {
          src: 'assets/images/workangel-site.jpg',
          title: 'WorkAngel',
          desc: '<p></p>',
        },
        {
          src: 'assets/images/hsbc-site.jpg',
          title: 'HSBC',
          desc: '<p></p>',
        },
        {
          src: 'assets/images/olympics.jpg',
          title: 'London 2012 Olympics',
          desc: '<p></p>',
        },
        {
          src: 'assets/images/dulux-site.jpg',
          title: 'Dulux',
          desc: '<p></p>',
        },
        {
          src: 'assets/images/fifa-gotw.jpg',
          title: 'FIFA GOTW',
          desc: '<p></p>',
        },
        {
          src: 'assets/images/buggle.jpg',
          title: 'The Buggle',
          desc: '<p></p>',
        },
        {
          src: 'assets/images/billy.jpg',
          title: 'Billy Elliot',
          desc: '<p></p>',
        },
        {
          src: 'assets/images/wwd.jpg',
          title: 'Walking With Dinosaurs',
          desc: '<p></p>',
        },
        {
          src: 'assets/images/aka-site.jpg',
          title: 'AKA Promotions',
          desc: '<p></p>',
        },
        {
          src: 'assets/images/midnighttango.jpg',
          title: 'Midnight Tango',
          desc: '<p></p>',
        },
        {
          src: 'assets/images/hampshire.jpg',
          title: 'NHS Hampshire',
          desc: '<p></p>',
        },
        {
          src: 'assets/images/hchc.jpg',
          title: 'HCHC',
          desc: '<p></p>',
        },
        {
          src: 'assets/images/primarycare.jpg',
          title: 'Primary Care',
          desc: '<p></p>',
        },
        {
          src: 'assets/images/qst.jpg',
          title: 'Quality Support Tool',
          desc: '<p></p>',
        },
      ];

      $scope.workEvent = function workEvent(item) {
        console.log(item);

        var popupTemplate = '<img src="' + item.src + '" alt="' + item.title + '" class="dialogImg" />';
        popupTemplate += '<div>';
          popupTemplate += '<h2>' + item.title + '</h2>';
          popupTemplate += item.desc;
        popupTemplate += '</div>';

        ngDialog.open({
          template: popupTemplate,
          plain: true,
          // className: 'dialogBox',
        });
      };
    }

  }

  angular.module('itinerateConsultingApp')
    .controller('MainController', MainController);

})();
