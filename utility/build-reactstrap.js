const fs = require('fs-extra')
const getAllFiles = require('./utility').getAllFiles
const path = require('path')
const rimraf = require('rimraf')
const argv = require('yargs').argv

const reactStrapBasePath = path.join(__dirname, '../../reactstrap')

if (fs.existsSync(reactStrapBasePath)) {
  // Copy pages and examples from reactstrap
  rimraf.sync(path.join(__dirname, '../src/reactstrap'))

  fs.copySync(
    path.join(reactStrapBasePath, 'docs'),
    path.join(__dirname, '../src/reactstrap')
  )

  // Create copy of all examples using .txt extension (for use with raw-loader in create-react-app)
  getAllFiles(path.join(__dirname, '../src/reactstrap/lib/examples')).forEach(
    file => {
      const fileString = fs.readFileSync(file).toString()
      fs.writeFile(file.replace('.js', '.txt'), fileString)
    }
  )

  // Update pages to reference .txt above
  getAllFiles(path.join(__dirname, '../src/reactstrap')).forEach(file => {
    const lines = fs
      .readFileSync(file)
      .toString()
      .split('\n')
      .map(line => {
        if (line.includes('!!raw!')) {
          line = line
            .replace('const', 'import')
            .replace('!!raw!', '')
            .replace("');", ".txt';")
            .replace('= require(', 'from ')
        }
        return line
      })
    fs.writeFileSync(file, lines.join('\n'))
  })

  // update routes based on pages
} else {
  console.log('reactstrap must be cloned as a sibling of this project')
}

console.log(reactStrapBasePath)
