import angular from 'angular';

export class FooterComponent {
  constructor() {
    this.date = new Date();
  }
}

export default angular.module('directives.footer', [])
  .component('footer', {
    template: require('./footer.pug'),
    controller: FooterComponent
  })
  .name;
