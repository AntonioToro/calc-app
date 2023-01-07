const replace = require("replace")
const {version} = require('../package.json')

replace({
    regex: /version-\d+(\.\d+)+-blue/g,
    replacement: `version-${version}-blue`,
    paths: ['README.md'],
})