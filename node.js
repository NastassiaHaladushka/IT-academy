const fs = require('fs-extra');
fs.mkdirpSync('NewDir-01');
fs.createFileSync('NewDir-01/first.txt');
fs.mkdirpSync('NewDir-02');
fs.moveSync('NewDir-01/first.txt', 'NewDir-02/first.txt');
fs.mkdirpSync('NewDir-03');
fs.copyFileSync('NewDir-02/first.txt', 'NewDir-03/first.txt');
fs.removeSync('NewDir-02/first.txt');
fs.removeSync('NewDir-03/first.txt');
fs.removeSync('NewDir-03');
fs.removeSync('NewDir-02');
fs.removeSync('NewDir-01');