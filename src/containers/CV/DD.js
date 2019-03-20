import data from 'data.js'
import projects from 'projects.js'

const { name, address, number, email, website, about } = data

const clone = str => JSON.parse(JSON.stringify(str))

const getHeader = () => {
  return [
		{ text: name, style: 'header' },
    { style: 'contact', text: address },
    {
      style: 'contact',
      columns: [
        { width: '*', text: number },
        { width: '*', text: email },
        { width: '*', text: website }
      ],
    },
  ]
}

const getProfile = () => {
  return [
		{
			text: 'Professional Profile',
			style: 'header'
    },
    { style: 'body', text: about[0] },
    { style: 'body', text: about[1] },
    { style: 'body', text: about[2] },
    { style: 'body', text: about[3] },
    { style: 'body', text: about[4] },
    { style: 'body', text: about[5] },
    { style: 'body', text: about[6] },
    { style: 'body', text: about[7] },
    {
      style: 'small',
      text: 'See below for a selection of the applications I have developed over recent years. For more info / links, please visit:'
    },
    {
      style: 'small',
      pageBreak: 'after',
      text: website,
      link: email
    },
  ]
}

const getWorkItems = () => {
  const passiv = [
    // <Item>
    {
      style: 'worktitle',
      text: 'PassivSystems, Newbury (Contract) - January 2017 - Present'
    },
    {
      style: 'workdesc',
      text: 'I am rebuilding the PassivLiving heating App - the control for their smart thermostat platform, available in App Store and Google Play'
    },
    {
      style: 'workitems',
      ul: clone(projects['passivliving-app'].notes)
    }
  ]
  const jlr = [
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
    }
  ]
  const dare = [
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
      pageBreak: 'after',
      ul: [
        'Full-stack development of custom features',
        'Third party API integration',
      ]
    }
  ]
  const rosielee = [
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
      style: 'workitems',
      ul: clone(projects['vue-playbook'].notes)
    },
    {
      style: 'worksubtitle',
      text: 'Other notable projects undertaken while at Rosie Lee include:'
    },
    {
      style: 'workitems',
      ul: clone(projects['rosie-lee-2016'].notes)
    }
  ]
  const dbs = [
    {
      style: 'worktitle',
      text: 'Deep Blue Sky, Bath - February 2014 - December 2014'
    },
    {
      style: 'workdesc',
      text: 'In this role I was responsible for building the frontend codebases of all new applications and maintaining legacy codebases (inc using Prototype.JS). All applications we integrated into a proprietary PHP CMS called Spirit. Notable projects included comparerecruit.com, amplifychange.org and manxflights.com'
    }
  ]
  const cognique = [
    {
      style: 'worktitle',
      text: 'Cognique, Street - May 2013 - February 2014'
    },
    {
      style: 'workdesc',
      text: 'In this role I built fullstack a range of bespoke websites. Including oldmillgroup.co.uk, collierreading.co.uk and strodetheatre.org.uk. I also developed a ‘guess-the-brand’ promotional game for Pandora Dress Agency, which was available in both the App Store and Google Play.'
    }
  ]

  return [].concat( passiv, jlr, dare, rosielee, dbs, cognique )

}

const getEducation = () => {
  return [
    {
			text: 'Education',
			style: 'header'
    },
    {
      style: 'body',
      text: 'Exeter University, PGCE - 2005 - 2006 \n Dartington College of Arts, BA (Hons) Music Composition - 2002 - 2005',
    },
  ]
}

export default {
	content: [].concat( getHeader(), getProfile(), getWorkItems(), getEducation() ),
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
