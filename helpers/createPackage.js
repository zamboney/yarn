var fs = require('fs');
var path = require('path');
var mainPath = path.join(__dirname, '..', 'packages');
var args = require('args');
args.option('main', 'create main package (a.k.a package 1)');
args.option('depMain', 'create dev main package (a.k.a package 2)');
var packageName;
var flags = args.parse(process.argv);
if (flags.main) {
    packageName = path.join('packages', 'package1');
    fs.mkdirSync(packageName);
    console.log('create main');
    fs.writeFileSync(path.join(__dirname, '..', packageName, 'package.json'), fs.readFileSync(path.join(__dirname, 'package1', 'package.json')));
    fs.writeFileSync(path.join(__dirname, '..', packageName, 'index.js'), fs.readFileSync(path.join(__dirname, 'package1', 'index.js')));
}
if (flags.depMain) {
    packageName = path.join('packages', 'package2');
    fs.mkdirSync(packageName);
    console.log('create dep main');
    fs.writeFileSync(path.join(__dirname, '..', packageName, 'package.json'), fs.readFileSync(path.join(__dirname, 'package2', 'package.json')));
    fs.writeFileSync(path.join(__dirname, '..', packageName, 'index.js'), fs.readFileSync(path.join(__dirname, 'package2', 'index.js')));
}
if (!flags.depMain && !flags.main) {
    var last_package = fs.readdirSync(mainPath).filter((item)=> item.match(/package\d+/));
    packageName = path.join('packages', 'package' + (last_package.length + 1));
    fs.mkdirSync(packageName);
}
fs.writeFileSync(path.join(__dirname, '..', packageName, '.npmrc'), 'registry=http://localhost:8082\n');
console.log(path.join(__dirname, '..', packageName, '.npmrc'), 'created');
fs.writeFileSync(path.join(__dirname, '..', packageName, '.yarnrc'), 'registry "http://localhost:8082"\n');
console.log(path.join(__dirname, '..', packageName, '.yarnrc'), 'created');
console.log(packageName, 'created');

