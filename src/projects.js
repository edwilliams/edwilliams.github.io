export default {
  'passivliving-app': {
    title: 'PassivLiving App iOS / Android',
    subTitle: 'App to control smart thermostat platform, available in App Store and Google Play',
    desc: 'In January 2017 I started a contract with smart energy firm PassivSystems a contract to rebuild their heating control App into a series of reusable components. The new app was to be deployed both in App stores (iOS / Android) and on their desktop portal. This development needed to take place alongside the maintenance of the existing App before finally making the switch to the new App. The result was a managed migration away from the original codebase (written in Ember) to a React / Redux centric system, deployed within a Cordova shell',
    notes: [
      'utilising iframes to migrate to new React ecosystem',
      'initial maintenance of legacy Ember codebase and build systems (Grunt / Gulp)',
      'maintaining and utilising Cordova plugins and build scripts',
      'writing / updating custom Webpack and Jenkins build scripts during migrations',
      'leading regular stakeholder meetings to plan new feature architecture',
      'working alongside MA UX students at City University to develop new features',
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
    subTitle: 'A propriety and internationally utilized Learning platform for staff at iconic Jaguar Land Rover',
    desc: 'This e-learning platform is Jaguar Land Rover\'s propriety dashboard to monitor and record staff progress through various professional courses they have to undertake in their role. Brought in towards the end of this enterprise scale project, I was taked with tasking a proof-of-concept dashboard and building it into a robust browser application that worked on a range of new and legacy systems',
    notes: [
      'working as part of a distributed national and international team',
      'using virtual machines to integrate into a .NET workflow, including TFS version control and Razor templates in Visual Studio',
      'supporting and integrating into existing legacy frontend code, including Knockout.js',
      'browser support stretching back to Internet Explorer 8',
      'building the UI in vanilla Javascript, borrowing heavily from Angular\'s design pattern',
    ],
    location: 'Virtual Forge: 2016',
    logo: 'img/logo/jaguarlandrover.jpg',
    imageMain: 'img/jaguar-land-rover/macbook-640x400.jpg',
    vid: '/vid/jlr.m4v'
  },
  'good-energy': {
    title: 'Good Energy Quote Engine',
    subTitle: 'Website for ethical renewable electricity company Good Energy',
    desc: 'I joined Dare West as a fullstack developer to assist them in completing a site rebuild for the School of Economic Science. I continued in this role to work on their project with Good Energy.',
    notes: [
      'Developing Good Energy\'s quote engine UI alongside .NET developers',
      'Created BEM-centric frontend code in Razor templates to integrate into an Umbraco / .NET backend',
      'Early adoption of ES6 modules with Browserify / Gulp',
    ],
    location: 'Dare West: 2016',
    logo: 'img/logo/goodenergy.png',
    imageMain: 'img/good-energy/macbook-640x400.jpg',
  },




// Inside Rosie Lee

// Bespoke business administration built as API with Node/Express
// Client composed of Collection of UI components

// VUE Playbook Application

// CSS animation presentation tool. Offline-first and engineered on top of Impress.js
// I later developed a custom backend solution to allow users to edit text
// Worked closely with client on site to install presentation in cinema



  'rosie-lee-2016': {
    title: 'Rosie Lee 2016 Website',
    subTitle: 'Website for leading London design agency Rosie Lee',
    desc: 'As Senior Developer I was responsible for all in-house development and provided consultancy for all projects with a digital element. Along with building the fullstack of their website and a collection of microsites for JD Sports, I also built a fullstack business application system known internally as, \'Inside Rosie Lee\'. I worked with management to write all business logic and UI, which included a timesheet system, a CRM and a system for tracking project management and finance.',
    location: 'Rosie Lee: 2016',
    logo: 'img/logo/rosielee.png',
    imageMain: 'img/rosielee/macbook-640x400.jpg',
  },
  'vue-playbook': {
    title: 'VUE Playbook presentation',
    subTitle: 'HTML5 cinema presentation for VUE cinema',
    desc: 'In my role as Senior Developer at Rosie Lee I undertook as significant project for the marketing department at leading cinema company VUE. The requirement was to develop an offline-first HTML5 presentation to showcase their \'playbooks\' to their clients. The application was developed to be projected on a cinema screen and I worked closely with VUE at their London office to ensure smooth installation.',
    location: 'VUE: 2015',
    logo: 'img/logo/vue.png',
    imageMain: 'img/vue/macbook-640x400.jpg',
  }
}
