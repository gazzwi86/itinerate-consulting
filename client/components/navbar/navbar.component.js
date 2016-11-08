'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

export class NavbarComponent {
  menu = [{
    title: 'Home',
    link: 'banner',
  },
  {
    title: 'Services',
    link: 'services',
  },
  {
    title: 'Work',
    link: 'work',
  },
  {
    title: 'Testimonials',
    link: 'testimonials',
  },
  {
    title: 'Contact',
    link: 'contact',
  }];
  $window;
  $location;
  scrolling;
  elmYPosition;
  currentYPosition;
  isCollapsed = true;

  constructor($location, $window) {
    'ngInject';

    this.$location = $location;

    this.scrolling = (eID) => {
      $location.hash(eID);

      // This scrolling function 
      // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript
      var startY = this.currentYPosition();
      var stopY = this.elmYPosition(eID);
      var distance = stopY > startY ? stopY - startY : startY - stopY;
      var speed = Math.round(distance / 100);
      var step = Math.round(distance / 25);
      var leapY = stopY > startY ? startY + step : startY - step;
      var timer = 0;
      
      if (speed >= 20) {
        speed = 10;
      }
      
      if (distance < 100) {
        scrollTo(0, stopY); return;
      }
      
      if (stopY > startY) {
        for (var i=startY; i<stopY; i+=step) {
          setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
          leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
      }

      for (var i=startY; i>stopY; i-=step) {
        setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
      }
    };
    
    this.currentYPosition = () => {
      // Firefox, Chrome, Opera, Safari
      if (self.pageYOffset) return self.pageYOffset;
      // Internet Explorer 6 - standards mode
      if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
      // Internet Explorer 6, 7 and 8
      if (document.body.scrollTop) return document.body.scrollTop;
      return 0;
    };

    this.elmYPosition = (eID) => {
      var elm = document.getElementById(eID);
      var y = elm.offsetTop;
      var node = elm;
      while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
      }

      return y;
    };
  }

  isActive(route) {
    return route === this.$location.path();
  }
}

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.pug'),
    controller: NavbarComponent
  })
  .name;
