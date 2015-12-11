'use strict';

class NavbarController {
  //start-non-standard
  menu = [
    {
      'title': 'Home',
      'link': '#banner',
    },
    {
      'title': 'Clients',
      'link': '#clients',
    },
    {
      'title': 'Work',
      'link': '#work',
    },
    {
      'title': 'Contact',
      'link': '#contact',
    }
  ];

  isCollapsed = true;
  //end-non-standard

  constructor($location) {
    this.$location = $location;
  }

  isActive(route) {
    return route === this.$location.path();
  }
}

angular.module('itinerateConsultingApp')
  .controller('NavbarController', NavbarController);
