export default {
  'passivliving-app': {
    title: 'PassivLiving App iOS / Android',
    subTitle: 'App to control smart thermostat platform, available in App Store and Google Play',
    desc: 'In January 2017 I started a contract with smart energy firm PassivSystems a contract to rebuild their heating control App into a series of reusable components. PassivSystems wanted the app to be deployed both in App stores and on their desktop portal. This needed to take place against the backdrop of business requirements driving new features into the App. The result was a managed migration away from the original codebase (written in Ember) to a React / Redux centric system, deployed within a Cordova shell',
    notes: [
      'utilising iframes to migrate to new React ecosystem',
      'initial maintenance of legacy Ember codebase and build systems (Grunt / Gulp)',
      'maintaining and utilising Cordova plugins and build scripts',
      'writing / updating custom Webpack and Jenkins build scripts during migrations',
      'leading regular stakeholder meetings to plan new feature architecture',
      'working alongside MA students at City University to develop new UX features',
      'working with external designers to realise university generated wireframes',
      'engineering UI updates around an eventpoll system',
      'engineering bespoke animations to represent heating states within the app',
      'participating in new API specification',
      'writing and maintaining unit tests (Ava) and integration tests (Cypress)',
      'utilising emulators in Xcode and Android Studio to test across a range of devices',
    ],
    location: 'Newbury: 2017 to Present',
    logo: 'img/logo/passivliving.png',
    imageMain: 'img/passivliving/iphone6-800x800.png',
    images: [
      'img/passivliving/ipad-800x800.png'
    ],
  },
  'jaguar-land-rover': {
    title: 'Jaguar Land Rover E-Learning Platform',
    subTitle: 'A propriety and internationally utilized Learning platform for members of the iconic Jaguar Land Rover',
    desc: '',
    _desc: 'I rebuilt a core piece of functionality of the Jaguar Landrover e-learning system, based on new designs, and worked closely with other developers into integrate this with their existing bespoke .NET platform. The Ajax-centric UI (inc K​nockout) was fed by a controller API which I worked closely with the .NET developers to create.',
    location: 'Virtual Forge: 2016',
    logo: 'img/logo/jaguarlandrover.jpg',
    imageMain: 'img/jaguar-land-rover/macbook-640x400.jpg',
    vid: '/vid/jlr.m4v'
  },
  'good-energy': {
    title: 'Good Energy Quote Engine',
    subTitle: 'Website for ethical renewable electricity company Good Energy\'s following a rebranding by leading Bristol design agency Dare West',
    desc: '',
    _desc: 'I contributed to the development of Good Energy\'s new website - an Umbraco / .NET build with all HTML in Razor templates. All SCSS written in BEM format, HTML in Razor templates and all Javascript written in ​ES6​ modules with ​Browserify​ / ​Gulp​.',
    location: 'Dare West: 2016',
    logo: 'img/logo/goodenergy.png',
    imageMain: 'img/good-energy/macbook-640x400.jpg',
  },
  'rosie-lee-2016': {
    title: 'Rosie Lee 2016 Website',
    subTitle: 'Website for leading London design agency Rosie Lee',
    desc: '',
    _desc: 'Using a forked version of lazyload (to better animate high quality imagery) I built the 2016 build of Rosie Lee\'s website.',
    location: 'Rosie Lee: 2016',
    logo: 'img/logo/rosielee.png',
    imageMain: 'img/rosielee/macbook-640x400.jpg',
  },
  'vue-playbook': {
    title: 'VUE Playbook presentation',
    subTitle: 'HTML5 cinema presentation for VUE cinema',
    desc: '',
    _desc: 'Cutting edge ​CSS animation​ presentation tool. Built o​ffline-first​ and engineered on top of Impress. I then built a custom CMS for stakeholders to make changes to the slides.',
    location: 'VUE: 2015',
    logo: 'img/logo/vue.png',
    imageMain: 'img/vue/macbook-640x400.jpg',
  }
}
