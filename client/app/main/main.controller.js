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
          title: 'Eurostar'
        },
        {
          src: 'assets/images/workangel.jpg',
          title: 'WorkAngel'
        },
        {
          src: 'assets/images/analogfolk.jpg',
          title: 'Analog Folk'
        },
        {
          src: 'assets/images/burberry.jpg',
          title: 'Burberry'
        },
        {
          src: 'assets/images/collective.jpg',
          title: 'Collective London'
        },
        {
          src: 'assets/images/aka.jpg',
          title: 'AKA'
        },
        {
          src: 'assets/images/nhs.jpg',
          title: 'NHS'
        }
      ];

      $scope.work = [
        {
          src: 'assets/images/eurostar-site.jpg',
          title: 'Eurostar',
          desc: '<p>Eurostar International required developers for their mobile team.  Working in a TDD and BDT environment, the mobile website and app were created using Cordova, AngularJS, Jasmine, Protractor, amongst other tools.</p>'
            + '<h5><a href="http://m.eurostar.com/" target="_blank">Check it out</a></h5>'
        },
        {
          src: 'assets/images/workangel-site.jpg',
          title: 'WorkAngel',
          desc: '<p>WorkAngel are changing people\'s perception of how to do employee engagement and improve staff retention in the mobile age. Working as part of the web team in a TDD environment, the mobile website and desktop site are built in AngularJS using Jasmine, Protractor to implement unit tests. Styling was managed using SASS, with BEM to improve manageability.</p>'
            + '<h5><a href="http://www.workangel.com/" target="_blank">Check it out</a></h5>'
        },
        {
          src: 'assets/images/burberry-nailbar.jpg',

          title: 'Burberry Beauty Box',
          desc: '<p>Burberry, known well for their use of digital and blurring the lines between digital and real realms required the research and development of a prototype digital fixture.  Using a Raspberry Pi, Arduino, RFID and iPad app, a digital nail bar was developed to determine which physical product are placed on the fixture, updating the digital display to reflect the customer\'s choice.  The fixture maximised the retail space available, allowing customers to digitally try products, before getting consultations.</p>'
            + '<h5><a href="https://www.youtube.com/watch?v=H9yaz2XS8xQ" target="_blank">Check it out</a></h5>'
        },
        {
          src: 'assets/images/hsbc-site.jpg',
          title: 'HSBC',
          desc: '<p>Working with AnalogFolk for HSBC building an animated presentation, allowing media artifacts to play in situe. The level of animation available in CSS3 and HTML5 greatly outshines that of Powerpoint and thus, it had a very impressive impact. The tool created was not dissimilar to Reveal.js, and utilised its library.</p>'
        },
        {
          src: 'assets/images/olympics.jpg',
          title: 'London 2012 Olympics',
          desc: '<p>Working at Collective London, the London 2012 Olympics website was created utilising a large number of social channels. Built in Zend Framework the section listed social media accounts and hashtags users could follow, as well as displaying the number of Twitter, Facebook and Google+ followers each account had.  More technical features involved fetching and caching tweets associated with particular accounts and hashtags.</p>'
        },
        {
          src: 'assets/images/dulux-site.jpg',
          title: 'Dulux',
          desc: '<p>Again in conjunction with Analogfolk, a mobile friendly interactive magazine was created to show off their Let\'s Colour Magazine publication.  Built to be accessible on as many browsers as possible, it made sure the magazine reached as large an audience as possible.  The publication was made using HTML5 JavaScript and CSS3, utilising HandleBars.js to make best use of basic templating and CMS functionality.</p>'
            + '<h5><a href="http://www.duluxletscolourmagazine.co.uk/index.jsp" target="_blank">Check it out</a></h5>'
        },
        {
          src: 'assets/images/fifa-gotw.jpg',
          title: 'FIFA GOTW',
          desc: '<p>For the launch of a new release in the Fifa series, EA wanted to drive social engagement with the game and brand. In order to do so and thanks to new features in the game, a Facebook enabled page and application was created which allowed users to upload their goals and for the brand\'s Facebook fans to vote on their favourite. The application was a tremendous success with huge metrics regarding consumer engagement.</p>'
            + '<h5><a href="https://apps.facebook.com/fifagotw/" target="_blank">Check it out</a></h5>'
        },
        {
          src: 'assets/images/buggle.jpg',
          title: 'The Buggle',
          desc: '<p>Having prototyped the electronics and application, we have been key in the further development of The Buggle, an app that allows users to check out the music playing in nearby bars before arriving.  Currently going through a new round of development, we are responsible for the creation and maintenance of website, server, app and electronics.  Cordova, JavaScript, Node.js, server administration, HTML5 and CSS3 are integral to development.</p>'
            + '<h5><a href="http://www.thebuggle.com/" target="_blank">Check it out</a></h5>'
        },
        {
          src: 'assets/images/billy.jpg',
          title: 'Billy Elliot',
          desc: '<p>Billy Elliot the Musical\'s website was built in Joomla in conjunction with aka Promotions. The website was used for the musical\'s various territories, and thus featured a user management system that would allow for the creation of users to manage different versions of the website as well as approval chains for changes. The website also employed external APIs, utilising this data as a form of Content Delivery Network to speed up load times.</p>'
            + '<h5><a href="http://billyelliotthemusical.com/" target="_blank">Check it out</a></h5>'
        },
        {
          src: 'assets/images/wwd.jpg',
          title: 'Walking With Dinosaurs',
          desc: '<p>Walking With Dinosaurs, the world arena tour of the hit BBC television series, was a responsive website develop in conjunction with aka Promotions. The site was built in WordPress, and a large number of plugins developed utilised a number of different APIs in the process. A key feature of the websites delivery was the way device specific media was delivered thanks to PHP device detection, improving load times.</p>'
            + '<h5><a href="http://www.dinosaurlive.com/" target="_blank">Check it out</a></h5>'
        },
        {
          src: 'assets/images/aka-site.jpg',
          title: 'AKA Promotions',
          desc: '<p>This was the first responsive website aka Promotions had worked on.  Built in WordPress, the site utilised the CMS style capabilities of WordPress to publish content regarding the company.  The site used PHP mobile detection to better render pages, serving up device specific, and location specific content to remain relevant and lower the impact on slower connections.</p>'
            + '<h5><a href="http://www.akauk.com/" target="_blank">Check it out</a></h5>'
        },
        {
          src: 'assets/images/hampshire.jpg',
          title: 'NHS Hampshire',
          desc: '<p>Built with Joomla, the NHS Hampshire website harnessed the different user levels to allow for the creation of content on the website to be effectively signed off.  The website housed a large number of articles and useful documents that offered a wide range of information and news regarding the NHS Hampshire Trust.  It was a key tool in the trusts communications with the public.</p>'
        },
        {
          src: 'assets/images/primarycare.jpg',
          title: 'Primary Care',
          desc: '<p>This was a login portal for the Primary Care facilities in the Hampshire area to log in to and keep up to date with news, acquire and manage documents and keep abreast of new procedures. The site was built in Joomla and had to be secure for obvious reasons.</p>'
        },
        {
          src: 'assets/images/qst.jpg',
          title: 'Quality Support Tool',
          desc: '<p>This website featured a fully customisable interface for tracking the quality of care within various healthcare facilities in NHS Trusts in and around Hampshire. The tool allowed administrators to create a number of metrics to measure against, determine various input types and appropriate data types, useful highlights, popups and keys to interpret the data and a means to report upon these such as PDF.</p>'
        }
      ];

      $scope.workEvent = function workEvent(item) {
        var popupTemplate = '<img src="' + item.src + '" alt="' + item.title + '" class="dialogImg" />';
        popupTemplate += '<div>';
          popupTemplate += '<h2>' + item.title + '</h2>';
          popupTemplate += item.desc;
        popupTemplate += '</div>';

        ngDialog.open({
          template: popupTemplate,
          plain: true
        });
      };
    }

  }

  angular.module('itinerateConsultingApp')
    .controller('MainController', MainController);

})();
