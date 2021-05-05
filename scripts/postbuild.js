const util = require('util')
const { ncp } = require('ncp')

const _ncp = util.promisify(ncp)

_ncp.limit = 16

// 1) every build - app, website and styleguide - copies all public assets to the respective build folder
// 2) copy app frontend into server's public folder
const main = async () => {
  await _ncp('dist', '')
  await _ncp('public', '')
}

main()
