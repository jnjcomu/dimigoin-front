const cdnPrefix = 'https://cdn.rawgit.comjnjcomu/dimigoin-front/master/app/assets'

const assets = {}

Object.keys(assets).forEach(k => (assets[k] = cdnPrefix + assets[k]))

export default assets
