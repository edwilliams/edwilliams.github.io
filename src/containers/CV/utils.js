// return <iframe width="1" height="1" frameBorder="0" src="test.txt"></iframe>

var padLeft = int => ( int > 9 ) ? int.toString() : `0${int}`

// saveAs('CV.pdf', createName())
export const saveAs = (uri, filename) => {
  var link = document.createElement('a');
  if (typeof link.download === 'string') {
      document.body.appendChild(link); // Firefox requires the link to be in the body
      link.download = filename;
      link.href = uri;
      link.click();
      document.body.removeChild(link); // remove the link when done
  } else {
      location.replace(uri);
  }
}

export const createName = () => {
  var d = new Date()
  var DD = padLeft(d.getDate())
  var MM = padLeft(d.getMonth() + 1)
  var YY = d.getFullYear()
  return `cv-ed-williams-${YY}-${MM}-${DD}`
}
