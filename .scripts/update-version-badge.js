const pc = require("picocolors")
const replace = require("replace")
const {version} = require('../package.json')

try {
    // Localizamos en el archivo Readme.md con un regex el badge de la versión de la app y lo remplazamos por la nueva.
    replace({
        regex: /version-\d+(\.\d+)+-blue/g,
        replacement: `version-${version}-blue`,
        paths: ['README.md'],
    })
    console.log(`✔ update badge to version ${pc.bold(version)} in ${pc.bold('README.md')}`)
} catch {
    console.log(`✖ Error to update badge to version ${pc.bold(version)} in ${pc.bold('README.md')}`)
}