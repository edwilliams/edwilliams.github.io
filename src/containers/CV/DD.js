import projects from 'projects.js'

const clone = str => JSON.parse(JSON.stringify(str))

export default {
	content: [
		{
			text: 'Ed Williams',
			style: 'header'
    },
    {
      style: 'contact',
      text: '101 Clay Street, Crockerton, Warminster, Wiltshire. BA12 2AF',
    },
    {
      style: 'contact',
      columns: [
        {
          width: '*',
          text: '+44 (0) 7599 166144'
        },
        {
          width: '*',
          text: 'edwilliamsdevelopment@gmail.com'
        },
        {
          width: '*',
          text: 'edwilliamsdevelopment.com'
        }
      ],
    },
		{
			text: 'Professional Profile',
			style: 'header'
    },
    {
      style: 'body',
      text: 'As a developer, I have many years of commercial experience in building robust and scalable websites, Progressive Web Apps and API\'s. I write fullstack JavaScript and enjoy taking a project on from end-to-end. As a confident Linux user I am comfortable using the CLI and writing build scripts. As a UI developer I am equally at home styling interfaces with JavaScript as I am with SASS/LESS and have extensive experience with animations (CSS, SVG and WebGL). My experience with React and Cordova has enabled me to migrate projects to React Native, where I currently see an exciting future for native app development. I am a keen functional programmer and have a proactive approach to learning new skills / keeping skills up-to-date.',
    },
    {
      style: 'body',
      text: 'I am experienced in communicating with stakeholders and clients alike, whether consulting for small enterprises or scoping projects for multinationals (Jaguar Land Rover, Good Energy, Nike, VUE, et al). As a Kanban enthusiast, I have brought Agile working to teams and believe in quick and direct communication with all colleagues and stakeholders. My work history (which also includes music and guitar teaching) has enabled me to effectively mentor junior developers and has given me a lifelong appreciation for what can be achieved by teamwork, as well as the ability to be effective both solo and remotely.'
    },
    {
      style: 'small',
      text: 'See below for a selection of the applications I have developed over recent years. For more info / links, please visit:'
    },
    {
      style: 'small',
      text: 'edwilliamsdevelopment.com',
      link: 'http://www.edwilliamsdevelopment.com/'
    },
    // <Item>
    {
      style: 'worktitle',
      text: 'Passiv Systems, Newbury (Contract) - January 2017 - Present'
    },
    {
      style: 'workdesc',
      text: 'I am rebuilding the PassivLiving heating App - the control for their smart thermostat platform, available in App Store and Google Play'
    },
    {
      style: 'workitems',
      pageBreak: 'after',
      ul: clone(projects['passivliving-app'].notes)
    },
    // </Item>
    // <Item>
    {
      style: 'worktitle',
      text: 'Virtual Forge, Holt (Contract) - August 2016 - November 2016'
    },
    {
      style: 'workdesc',
      text: 'I rebuilt a core piece of functionality of the Jaguar Landrover e-learning system, based on new designs, and worked closely with other developers into integrate this with their existing bespoke .NET platform.'
    },
    {
      style: 'worksubtitle',
      text: 'Jaguar / Landrover Learning Platform'
    },
    {
      style: 'workitems',
      ul: clone(projects['jaguar-land-rover'].notes)
    },
    // </Item>
    // <Item>
    {
      style: 'worktitle',
      text: 'Dare West, Bristol (Contract) - June 2016 - August 2016'
    },
    {
      style: 'workdesc',
      text: 'I joined Dare West as a fullstack developer to assist them in completing a site rebuild for the School of Economic Science. I continued in this role to work on their project with Good Energy.'
    },
    {
      style: 'worksubtitle',
      text: 'Good Energy'
    },
    {
      style: 'workitems',
      ul: clone(projects['good-energy'].notes)
    },
    {
      style: 'worksubtitle',
      text: 'School of Economic Science'
    },
    {
      style: 'workitems',
      ul: [
        'Full-stack development of custom features',
        'Third party API integration',
      ]
    },
    // </Item>
    // <Item>
    {
      style: 'worktitle',
      text: 'Rosie Lee, London - December 2014 - May 2016'
    },
    {
      style: 'workdesc',
      text: clone(projects['rosie-lee-2016'].desc)
    },
    {
      style: 'worksubtitle',
      text: 'VUE Playbook Application'
    },
    {
      style: 'workdesc',
      text: clone(projects['vue-playbook'].desc)
    },
    // </Item>
    // <Item>
    {
      style: 'worktitle',
      text: 'Deep Blue Sky, Bath - February 2014 - December 2014'
    },
    {
      style: 'workdesc',
      text: 'In this role I was responsible for building the frontend codebases of all new applications and maintaining legacy codebases (inc using Prototype). All applications we integrated into a proprietary CMS called Spirit, which was built with Perl and PHP. Notable projects included comparerecruit.com, amplifychange.org and manxflights.com'
    },
    // </Item>
    // <Item>
    {
      style: 'worktitle',
      text: 'Cognique, Street - May 2013 - February 2014'
    },
    {
      style: 'workdesc',
      text: 'In this role I built fullstack a range of bespoke websites. Including oldmillgroup.co.uk, collierreading.co.uk and strodetheatre.org.uk. I also developed a ‘guess-the-brand’ promotional game for Pandora Dress Agency, which was available in both the App Store and Google Play.'
    },
    // </Item>
		{
			text: 'Education',
			style: 'header'
    },
    {
      style: 'body',
      text: 'Exeter University, PGCE - 2005 - 2006 \n Dartington College of Arts, BA (Hons) Music Composition - 2002 - 2005',
    },
	],
	styles: {
		header: {
			fontSize: 12,
			bold: true,
      margin: [ 0, 20, 0, 20 ] // [ left, top, right, bottom ]
		},
    contact: {
      fontSize: 10,
      alignment: 'center',
      margin: [ 0, 0, 0, 10 ] // [ left, top, right, bottom ]
    },
		body: {
			fontSize: 11,
      margin: [ 0, 0, 0, 10 ] // [ left, top, right, bottom ]
		},
    small: {
      fontSize: 10,
      italics: true,
      margin: [ 0, 0, 0, 10 ] // [ left, top, right, bottom ]
    },
    worktitle: {
      fontSize: 12,
      bold: true,
      margin: [ 0, 30, 0, 10 ] // [ left, top, right, bottom ]
    },
    workdesc: {
      fontSize: 11,
      italics: true,
      margin: [ 0, 0, 0, 10 ] // [ left, top, right, bottom ]
    },
    worksubtitle: {
      fontSize: 11,
      bold: true,
      margin: [ 0, 0, 0, 10 ] // [ left, top, right, bottom ]
    },
    workitems: {
      fontSize: 11,
      margin: [ 0, 0, 0, 10 ] // [ left, top, right, bottom ]
    }
	}

}
