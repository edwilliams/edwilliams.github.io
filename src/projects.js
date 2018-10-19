export default {
  about: {
    one: 'As a developer, I have many years of commercial experience in building robust and scalable websites, Progressive Web Apps (PWA\'s) and API\'s. I write fullstack JavaScript and enjoy taking a project on from end-to-end. As a confident Linux user I am comfortable using the CLI and writing build scripts. As a UI developer I am equally at home styling interfaces with JavaScript as I am with SASS/LESS and have extensive experience with animations (CSS, SVG and WebGL). My experience with React and Cordova has enabled me to migrate projects to React Native, where I currently see an exciting future for native app development. I am a keen functional programmer and have a proactive approach to learning new skills / keeping skills up-to-date.',
    two: 'I am experienced in communicating with stakeholders and clients alike, whether consulting for small enterprises or scoping projects for multinationals (Jaguar Land Rover, Good Energy, Nike, VUE, et al). As a Kanban enthusiast, I have brought Agile working to teams and believe in quick and direct communication with all colleagues and stakeholders. My work history (which also includes music and guitar teaching) has enabled me to effectively mentor junior developers and has given me a lifelong appreciation for what can be achieved by teamwork, as well as the ability to be effective both solo and remotely.',
  },
  'passivliving-app': {
    title: 'PassivLiving App iOS / Android',
    subTitle: 'App to control smart thermostat platform, available in App Store and Google Play',
    desc: 'In January 2017 I started a contract with smart energy firm PassivSystems a contract to rebuild their heating control App into a series of reusable components. The new app was to be deployed both in App stores (iOS / Android) and on their desktop portal. This development needed to take place alongside the maintenance of the existing App before finally making the switch to the new App. The result was a managed migration away from the original codebase (written in Ember) to a React / Redux centric system, deployed within a Cordova shell',
    notes: [
      'Initial maintenance of legacy Ember codebase and build systems (Grunt / Gulp)',
      'Utilising iframes to migrate to App from Ember to React',
      'SVG and WebGL bespoke animations to represent heating states within the app',
      'Translating propriety business logic into standalone JavaScript libraries',
      'Writing and maintaining unit tests and working with QA in integration testing',
      'Leading regular stakeholder meetings to plan new feature architecture',
      'Participating in new API specification',
      'Debugging via device emulation in Xcode and Android Studio',
      'Maintaining and utilising Cordova plugins',
      'Writing and updating Webpack and Jenkins build scripts',
      'Working with external designers to realise university generated wireframes',
      'Engineering UI updates around an bespoke eventpoll system',
      'Working alongside MA UX students at City University to develop new features',
    ],
    location: 'Newbury: 2017 to Present',
    logo: 'img/logo/passivliving.png',
    imageMain: 'img/passivliving/iphone-se-840x1696.png',
    images: [
      'img/passivliving/ipad-1079x768.png'
    ],
  },
  'jaguar-land-rover': {
    title: 'Jaguar Land Rover E-Learning Platform',
    subTitle: 'A propriety and internationally utilized Learning platform for staff at iconic Jaguar Land Rover',
    desc: 'This e-learning platform is Jaguar Land Rover\'s propriety dashboard to monitor and record staff progress through various professional courses they have to undertake in their role. Brought in towards the end of this enterprise scale project, I was tasked with taking a proof-of-concept dashboard and building it into a robust browser application that worked on a range of new and legacy devices.',
    notes: [
      'Building the UI in vanilla Javascript, borrowing heavily from Angular\'s design pattern',
      'Using virtual machines to integrate into a .NET workflow, including TFS version control and Razor templates in Visual Studio',
      'Performed large scale CSS refactoring of legacy code',
      'Working as part of a distributed national and international team',
      'Supporting and integrating into existing legacy frontend code, including Knockout.js',
      'Browser support stretching back to Internet Explorer 8',
    ],
    location: 'Virtual Forge: 2016',
    logo: 'img/logo/jaguarlandrover.jpg',
    imageMain: 'img/jaguar-land-rover/ipad-1079x768.png',
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
    imageMain: 'img/good-energy/macbook-1024x601.jpg',
  },
  'rosie-lee-2016': {
    title: 'Rosie Lee 2016 Website',
    subTitle: 'Website for leading London design agency Rosie Lee',
    desc: 'As Senior Developer I was responsible for all in-house development and provided consultancy for all projects with a digital element. Along with building the fullstack of their website and a collection of microsites for JD Sports, I also built a fullstack business application system known internally as, \'Inside Rosie Lee\'. I worked with management to write all business logic and UI, which included a timesheet system, a CRM and a system for tracking project management and finance.',
    location: 'Rosie Lee: 2016',
    logo: 'img/logo/rosielee.png',
    imageMain: 'img/rosielee/macbook-1024x601.jpg',
  },
  'vue-playbook': {
    title: 'VUE Playbook presentation',
    subTitle: 'HTML5 cinema presentation for VUE cinema',
    desc: 'In my role as Senior Developer at Rosie Lee I undertook as significant project for the marketing department at leading cinema company VUE. The requirement was to develop an offline-first HTML5 presentation to showcase their \'playbooks\' to their clients. The application was developed to be projected on a cinema screen and I worked closely with VUE at their London office to ensure smooth installation.',
    location: 'VUE: 2015',
    logo: 'img/logo/vue.png',
    imageMain: 'img/vue/macbook-1024x601.jpg',
    vid: '/vid/vue.m4v'
  }
}
