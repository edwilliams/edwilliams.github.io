// return <iframe width="1" height="1" frameBorder="0" src="test.txt"></iframe>

const padLeft = int => ( int > 9 ) ? int.toString() : `0${int}`

// saveAs('CV.pdf', createName())
export const saveAs = (uri, filename) => {
  const link = document.createElement('a');
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
  const d = new Date()
  const DD = padLeft(d.getDate())
  const MM = padLeft(d.getMonth() + 1)
  const YY = d.getFullYear()
  return `cv-ed-williams-${YY}-${MM}-${DD}`
}