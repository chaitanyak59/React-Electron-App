const fs = require('fs');
const path = require('path');

const electronPath = path.resolve(path.join(__dirname, '..'), 'electron');

const NODE_ENV = {
  dev: 'development',
  prod: 'production',
  staging: 'staging'
}

const mode = process.argv[2]; // Every Node Process 2nd Arg would be env variables
const filePath = `${electronPath}/${mode}/config/index.js`
fs.readFile(filePath, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/process.env.NODE_ENV/g, `"${NODE_ENV[mode]}"`);

  fs.writeFileSync(filePath, result, 'utf8');
});