import angular from 'angular';
const ngRoute = require('angular-route');
import routing from './main.routes';

export class MainController {

  /*@ngInject*/
  constructor($uibModal) {
    this.$uibModal = $uibModal;
    this.services = [];
    this.clients = [];
    this.work = [];
    this.testimonials = [];

    this.services = [
      {
        src: 'assets/images/planning.jpg',
        title: 'Planning',
        desc: 'Good planning is key. We\'ll work with you to'
        + ' build a plan that ensures your initial project is a success, '
        + ' and has the longevity to last for several years.'
      },
      {
        src: 'assets/images/hosting.jpg',
        title: 'Hosting',
        desc: 'Hosting can seem like magic, but when it goes '
        + 'wrong, it can be difficult to fix.  We can host '
        + 'your site for you, so you know it\'s always working when a customer'
        + ' comes calling.'
      },
      {
        src: 'assets/images/webdevelopment.jpg',
        title: 'Web development',
        desc: 'Whether you want a single page site, an online store,'
        + ' a content managable site or a bespoke digital platform, '
        + 'we have you covered. We make all of our sites responsive, '
        + ' taking care of your mobile users.  '
      },
      {
        src: 'assets/images/mobile.jpg',
        title: 'Mobile apps',
        desc: 'Got a great idea for an app? Or want to convert a website '
        + 'to an app?  We\'ll get you in the AppStore in no time,'
        + ' saving you the expense of pricey iOS or Android developers.'
      }
    ];

    this.work = [
      {
        src: 'assets/images/vrc.jpg',
        title: 'Victoria Racing Club',
        project: 'Interactive brochure',
        desc: '<p>VRC required an e-Brochure for upcoming events which would allow them '
        + 'to update content, add products and enable the user to compare products before '
        + 'purchasing.  We created a WordPress website to allow easy content management and '
        + 'styled the frontend to be mobile, tablet and desktop friendly.</p>'
          + '<h5><a href="http://vrc.flemington.com.au/" target="_blank">Check it out</a></h5>'
      },
      {
        src: 'assets/images/hcf.jpg',
        title: 'HCF',
        project: 'Digital survey for employees',
        desc: '<p>HCF wanted to depict the range of customers they provide services for '
        + 'to their employees, as well as having them understand their market segment.  '
        + 'I created an AngularJS survey that worked out the users\' segmentation based on '
        + 'their answers.  The app was simple to manage, featuring a full MEAN stack for '
        + 'easy deployment.</p>'
      },
      {
        src: 'assets/images/eurostar-site.jpg',
        title: 'Eurostar',
        project: 'Mobile website and app',
        desc: '<p>In 2015 Eurostar moved their app and web development in house and required '
        + 'experienced full stack Javascript developers for their mobile team.  Working in a '
        + 'Test Driven Development (TDD) and Behavioural Driven Testing (BDT) environment, '
        + 'we created a mobile website and app using Cordova, AngularJS, Jasmine and Protractor.</p>'
          + '<h5><a href="http://m.eurostar.com/" target="_blank">Check it out</a></h5>'
      },
      {
        src: 'assets/images/workangel-site.jpg',
        title: 'WorkAngel',
        project: 'Reposive web application',
        desc: '<p>WorkAngel focus on changing the way companies engage with their employees '
        + 'and improve staff retention in the mobile age. Working as part of the web team in '
        + 'a TDD environment, the mobile website and desktop site were built in AngularJS '
        + 'using Jasmine and Protractor to implement unit tests. We managed styling with '
        + 'SASS and BEM to improve manageability.</p>'
          + '<h5><a href="http://www.workangel.com/" target="_blank">Check it out</a></h5>'
      },
      {
        src: 'assets/images/burberry-nailbar.jpg',

        title: 'Burberry',
        project: 'Digital nail bar',
        desc: '<p>As part of their current marketing strategy, which combines traditional '
        + 'and digital marketing tactics, Burberry required developers to research and develop '
        + 'a digital nail bar. Using a Raspberry Pi, Arduino, RFID and iPad app,  we created '
        + 'a prototype that could identify which physical nail product was selected, updating '
        + 'the digital display of a hand and fingernails with the customer\'s colour choice. '
        + 'This fixture has been installed in Burberry retail spaces and department stores '
        + 'beauty counters, enabling customers to test Burberry nail products before purchasing.</p>'
          + '<h5><a href="https://www.youtube.com/watch?v=H9yaz2XS8xQ" target="_blank">Check it out</a></h5>'
      },
      {
        src: 'assets/images/hsbc-site.jpg',
        title: 'HSBC',
        project: 'Digital results presentation',
        desc: '<p>HSBC required an animated presentation for their FY15 financial results. '
        + 'Working with AnalogFolk, we created a HTML5 website with video animation using '
        + 'Javascript, HTML and CSS3. The end result was a significant improvement on HSBC\'s '
        + 'previous Powerpoint presentations and had a strong impact on internal stakeholders.</p>'
      },
      {
        src: 'assets/images/olympics.jpg',
        title: 'London 2012 Olympics',
        project: 'Responsive website ',
        desc: '<p>Organisations of the London 2012 Olympics required a public website that could '
        + 'support a large number of social channels. Working with Collective London, we build a '
        + 'site using Zend Framework that listed social media accounts and hashtags users could '
        + 'follow, as well as displaying the number of Twitter, Facebook and Google+ followers '
        + 'each account had. The site could also fetch and cache tweets associated with particular '
        + 'accounts and hashtags.</p>'
      },
      {
        src: 'assets/images/dulux-site.jpg',
        title: 'Dulux',
        project: 'Let\'s colour digital magazine',
        desc: '<p>Dulux required a mobile-friendly interactive magazine to complement their '
        + '\'Let\'s Colour\' magazine publication. Working with AnalogFolk we created the app '
        + 'using HTML5, JavaScript, CSS3, and HandleBars.js to maximise basic templating and CMS '
        + 'functionality. It was built to be accessed by multiple browsers types, ensuring the '
        + 'digital publication reached a large audience.</p>'
          + '<h5><a href="http://www.duluxletscolourmagazine.co.uk/index.jsp" target="_blank">Check '
        + 'it out</a></h5>'
      },
      {
        src: 'assets/images/fifa-gotw.jpg',
        title: 'FIFA GOTW',
        project: 'Facebook application',
        desc: '<p>For the launch of a new release in the Fifa series, EA wanted to drive social '
        + 'engagement with the game and brand. To advertise new game features we created a '
        + 'Facebook-enabled page and application which allowed users to upload their goal videos '
        + 'and vote on their favourite. The application was a tremendous success, recording high '
        + 'consumer engagement metrics.</p>'
          + '<h5><a href="https://apps.facebook.com/fifagotw/" target="_blank">Check it out</a></h5>'
      },
      {
        src: 'assets/images/buggle.jpg',
        title: 'The Buggle',
        project: 'Website, app and electronics',
        desc: '<p>Having prototyped the electronics and application, we have been key in the further '
        + 'development of The Buggle, an app that allows users to check out the music playing in '
        + 'nearby bars before arriving.  We are responsible for the creating and maintaining the '
        + 'website, server, app and electronics.  Cordova, JavaScript, Node.js, server administration, '
        + 'HTML5 and CSS3 are integral to further development.</p>'
          + '<h5><a href="http://www.thebuggle.com/" target="_blank">Check it out</a></h5>'
      },
      {
        src: 'assets/images/billy.jpg',
        title: 'Billy Elliot',
        project: 'Responsive website',
        desc: '<p>Working with AKA Promotions, we created a website for \'Billy Elliot\' the '
        + 'musical, using Joomla. The website was used for the musical\'s various territories, '
        + 'featuring a user management system that allowed for the creation of users to manage '
        + 'different versions of the website as well as approval chains for changes. The website '
        + 'also employed external APIs, using this data as a form of Content Delivery Network to '
        + 'speed up load times.</p>'
          + '<h5><a href="http://billyelliotthemusical.com/" target="_blank">Check it out</a></h5>'
      },
      {
        src: 'assets/images/wwd.jpg',
        title: 'Walking With Dinosaurs',
        project: 'Responsive website',
        desc: '<p>For the world arena tour of the hit BBC television series \'Walking With Dinosaurs\', '
        + 'we partnered with AKA Promotions to create a responsive website. The site was built in '
        + 'WordPress, and a large number of the plugins we developed used different API. We also used '
        + 'PHP device detection to deliver device-specific media, which significantly improved load '
        + 'times.</p>'
          + '<h5><a href="http://www.dinosaurlive.com/" target="_blank">Check it out</a></h5>'
      },
      {
        src: 'assets/images/aka-site.jpg',
        title: 'AKA Promotions',
        project: 'Responsive website',
        desc: '<p>We created AKA Promotions first responsive website, using the CMS-style capabilities '
        + 'of WordPress to publish content.The site also used PHP mobile detection to better render '
        + 'pages, serving up device-specific, and location-specific content for improved relevance '
        + 'and lower impact on slower connections.</p>'
          + '<h5><a href="http://www.akauk.com/" target="_blank">Check it out</a></h5>'
      },
      {
        src: 'assets/images/hampshire.jpg',
        title: 'NHS Hampshire',
        project: 'Website',
        desc: '<p>The NHS Hampshire Trust required a website to house a large number of articles and '
        + 'useful documents, as well as provide a wide range of information and news to the public.  '
        + 'Built with Joomla, we created different user levels, enabling content to be created and '
        + 'approved by employees with different authorisation levels.</p>'
      },
      {
        src: 'assets/images/primarycare.jpg',
        title: 'Primary Care',
        project: 'Website',
        desc: '<p>The NHS Hampshire Trust required a website to house a large number of articles and '
        + 'useful documents, as well as provide a wide range of information and news to the public.  '
        + 'Built with Joomla, we created different user levels, enabling content to be created and '
        + 'approved by employees with different authorisation levels.</p>'
      },
      {
        src: 'assets/images/qst.jpg',
        title: 'Quality Support Tool',
        project: 'Digital application',
        desc: '<p>We also created a Quality Support Tool for the NHS Hampshire, consisting of a '
        + 'website with a fully-customisable interface for tracking the quality of care within '
        + 'various healthcare facilities in NHS Trusts in and around Hampshire. The tool allowed '
        + 'administrators to create a number of metrics to measure against, determine various '
        + 'input types and appropriate data types. It also offered useful highlights, popups and '
        + 'keys to interpret and report on the data.</p>'
      }
    ];

    this.testimonials = [
      {
        text: 'Full stack developer Gareth displayed very high level creative thinking and problem solving, high '
        + 'technical competence and great understanding of frontend tool chain including '
        + 'AngularJS,LESS, SASS, Grunt, Gulp, Unit testing & Jenkins. Gareth made immense '
        + 'contribution to the team success by providing valuable inputs to improvements '
        + 'of process, refactoring legacy codebase from the very basic level, adding unit '
        + 'test coverage and delivering some very large business features in very short '
        + 'timespan.',
        title: 'Eurostar',
        person: 'Ravi Julapalli, Architecture lead',
        img: 'assets/images/eurostar.jpg'
      },
      {
        text: 'Developer Gareth is an awesome person with a number of positive qualities, and is '
        + 'capable of dealing with any kind of issue a web development project can throw '
        + 'up. He has been a component in the project, building a new feature and dealing '
        + 'with deadline issues at the same time, always with a smile! He stays abreast '
        + 'of current web technologies and spends a good portion of time championing them as part '
        + 'of our project when possible.',
        title: 'Work Angel Technology',
        person: 'Pierre Beard, Front End Developer',
        img: 'assets/images/workangel.jpg'
      },
      {
        text: 'Web developer Gareth is very proactive and technical proficient. Gareth\'s passion for '
        + 'technology is immense and he is able to turn his hand to many technical problems '
        + 'and produce a solution in a timely and creative manner regardless of his experience '
        + 'within the language or technology.',
        title: 'Collective',
        person: 'Greg Sines, Digital Development Manager',
        img: 'assets/images/collective.jpg'
      },
      {
        text: 'Back end developer Gareth is a skilled and knowledgable developer who approaches every task '
        + 'with diligence and enthusiasm. His personable manner and ability to stay calm '
        + 'under pressure are an asset to any development team.',
        title: 'AKA UK',
        person: 'Gethyn Jones, Front End Developer',
        img: 'assets/images/aka.jpg'
      }
    ];

    this.desc = (item, client) => {
      var popupTemplate = '';

      if (client) {
        popupTemplate += '<div class="clientImg"><img src="' + item.src + '" alt="' + item.title + '" class="dialogImg" /></div>';
      } else {
        popupTemplate += '<div><img src="' + item.src + '" alt="' + item.title + '" class="dialogImg" /></div>';
      }

      popupTemplate += '<div class="dialog-text"><h2>' + item.title + '</h2>' + item.desc + '</div>';

      this.$uibModal.open({
        animation: true,
        template: popupTemplate
      });
    };
  }

}

export default angular.module('itinerateConsultingApp.main', [ngRoute])
  .config(routing)
  .component('main', {
    template: require('./main.pug'),
    controller: MainController
  })
  .name;

MainController.$inject = ['$uibModal'];