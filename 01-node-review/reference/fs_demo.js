const fs = require('fs');
const path = require('path');

// create folder

// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//   if (err) throw err;
//   console.log('Folder created..');
// });

// Create & Write to file

// fs.writeFile(
//   path.join(__dirname, '/test', 'hello.txt'),
//   'Hello World!',
//   (err) => {
//     if (err) throw err;
//     console.log('File written to...');

//     // File append
//     fs.appendFile(
//       path.join(__dirname, '/test', 'hello.txt'),
//       ' I Love Node',
//       (err) => {
//         if (err) throw err;
//         console.log('File written to');
//       }
//     );
//   }
// );

// Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Rename file

fs.rename(
  path.join(__dirname, '/test', 'hello.txt'),
  path.join(__dirname, '/test', 'world.txt'),
  (err, data) => {
    if (err) throw err;
    console.log('Renamed');
  }
);
