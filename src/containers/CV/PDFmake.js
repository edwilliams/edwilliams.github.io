import pdfMake from 'pdfmake/build/pdfmake'
import vfsFonts from 'pdfmake/build/vfs_fonts'

export default dd => {

	const { vfs } = vfsFonts.pdfMake
	pdfMake.vfs = vfs

  return pdfMake.createPdf(dd)

}
