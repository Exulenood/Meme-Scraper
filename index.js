import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import bent from 'bent';

const fileNamer = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileNamer);

// ################# TESTING SITE ########################
//
//
// console.log('##########testing site start ###########');
// const rp = require('request-promise'); // removed require (deprecatet)

// const getHtml = bent('string');

// let fetchedString = await getHtml(
//   'https://memegen-link-examples-upleveled.netlify.app/',
// );
// fetchedString = fetchedString.replace(/(\r\n|\n|\r)/gm, '');

// console.log(fetchedString); // Test OK! Output: desired markup
// console.log(typeof fetchedString); // Output: string

// const parser = new DOMParser();  // FAIL: doesn´t work with node.js
// const parsedHtmL = parser.parseFromString(fetchedString, 'text/html'); // FAIL: doesn´t work with node.js
// console.log(parsedHtmL); // FAIL: doesn´t work with node.js

// try to filter start and stop indexes of the href="https://memecomplete.com/edit/https://api.memegen.link/images/somememe.jpg"

// const testString =
//   'this is Peters string with an http reference with 2 certain index points to someday get an.jpg out of an html markup code safed as a string';
//    01234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789 -- control index output OK!
//           1         2         3         4         5         6         7         8         9         10        11        12        13         -- control index output OK!

// console.log(testString[30]); // OK! output h http start at 30
// console.log(testString[93]); // OK! output g img ends at 93

// const imgEndIndexesAll = []; -----------------------------------
// let imgEndIndexesReduced = []; -------------------------------------

// function testSniffImgEndIndex() {                          // Tested OK! Arrayoutput for the Index of a "g" after ".im" was 93
//   for (let i = 0; i < testString.length; i++) {
//     let j;
//     if (testString[i] === '.') {
//       j = i + 1;
//       let k;
//       if (testString[j] === 'j') {
//         k = j + 1;
//         let l;
//         if (testString[k] === 'p') {
//           l = k + 1;
//           if (testString[l] === 'g') {
//             arraywithImgEndIndexes.push([l]);
//           }
//         }
//       }
//     }
//   }
//   console.log(`Array with img end indexes: ${arraywithImgEndIndexes}`);
// }
// testSniffImgEndIndex()

// function SniffImgEndIndex(givenString) {
//   const imgEndIndexesAll = [];
//   for (let i = 0; i < givenString.length; i++) {
//     let j;
//     if (givenString[i] === 'j') {
//       j = i + 1;
//       let k;
//       if (givenString[j] === 'p') {
//         k = j + 1;
//         let l;
//         if (givenString[k] === 'g') {
//           l = k + 1;
//           if (givenString[l] === '?') {
//             imgEndIndexesAll.push([l]);
//           }
//         }
//       }
//     }
//   }
//   return imgEndIndexesAll;
// }
// console.log(`Array of all img end indexes: \n ${imgEndIndexesAll}`); // tested OK!
// imgEndIndexesReduced = imgEndIndexesAll.slice(0, amountOfImages - 1);
// console.log
//   `Array of the first ${amountOfImages} img end indexes: \n ${imgEndIndexesReduced}`,
// );

// function sniffImgStartIndex(givenString, imgEndIndex) {
//   // tested OK!
//   for (let i = imgEndIndex - 4; i >= 0; i--) {
//     let j;
//     if (givenString[i] === '=') {
//       j = i - 1;
//       let k;
//       if (givenString[j] === 'c') {
//         k = j - 1;
//         let l;
//         if (givenString[k] === 'r') {
//           l = k - 1;
//           if (givenString[l] === 's') {
//             return l + 5;
//           }
//         }
//       }
//     }
//   }
// }

// testArraywithiIndexes.push([i]);
//
// console.log(`i-value: ${j}`);
// console.log(`m-value: ${k}`);
// SniffImgEndIndex(testString, 10);
// console.log(sniffImgStartIndex(testString, 93));

// function getImagePaths(givenString, amountOfImages) {
//   let imgEndIndexesReduced = [];
//   const imgStartIndexes = [];
//   const imagePaths = [];
//   imgEndIndexesReduced = SniffImgEndIndex(givenString).slice(0, amountOfImages);
//   // console.log(SniffImgEndIndex(givenString, amountOfImages)); // tested OK!
//   // console.log(imgEndIndexesReduced); // tested OK!
//   for (let i = 0; i < imgEndIndexesReduced.length; i++) {
//     imgStartIndexes.push(
//       sniffImgStartIndex(givenString, imgEndIndexesReduced[i]),
//     );
//     imagePaths.push(
//       givenString.slice(imgStartIndexes[i], imgEndIndexesReduced[i]),
//     );
//   }
//   return imagePaths;
// console.log(imgStartIndexes[2]);
// console.log(imgEndIndexesReduced[2]);

// console.log(imgRangeIndexes);
// let testImagePath = givenString.slice(1, 2);
// console.log(testImagePath);
// }

// console.log(getImagePaths(fetchedString, 10));

// const imagePaths = getImagePaths(fetchedString, 10);

// const getImage = bent('buffer');
// let bufferedImage = await getImage(
//   'https://api.memegen.link/images/xy/all_the_things!!!.jpg',
// );
// fs.writeFileSync('test.jpg', bufferedImage);

// console.log(bufferedImage);

// for (let i = 0; i < imagePaths.length; i++) {
//   let pathName = (i + 1).toString();
//   if (pathName.length < 2) {
//     pathName = `/memes/0${pathName}.jpg`;
//   } else {
//     pathName = `/memes/${pathName}.jpg`;
//   }
//   console.log(`Saved to: ${pathName}`);
//   const getImage = bent('buffer');
//   const bufferedImage = await getImage(imagePaths[i]);
//   fs.writeFileSync(dirName + pathName, bufferedImage);
// }
//
//
//
// ################# LAUNCH PAD ########################

// VVVVVVVVV retrieving the HTML Code of targetet URL as string VVVVVVVVV

const getHtml = bent('string');

let fetchedString = await getHtml(
  'https://memegen-link-examples-upleveled.netlify.app/',
);
fetchedString = fetchedString.replace(/(\r\n|\n|\r)/gm, ''); // removing line breaks

// VVVVVVVVV auxiliary function to find the end-Indexes of all Image files in the fetched string VVVVVVVVV

function SniffImgEndIndex(givenString) {
  const imgEndIndexesAll = [];
  for (let i = 0; i < givenString.length; i++) {
    let j;
    if (givenString[i] === 'j') {
      j = i + 1;
      let k;
      if (givenString[j] === 'p') {
        k = j + 1;
        let l;
        if (givenString[k] === 'g') {
          l = k + 1;
          if (givenString[l] === '?') {
            imgEndIndexesAll.push([l]);
          }
        }
      }
    }
  }
  return imgEndIndexesAll;
}

// VVVVVVVVV auxiliary function to find the start-Indexes of first 10 Image files in the fetched string VVVVVVVVV

function sniffImgStartIndex(givenString, imgEndIndex) {
  for (let i = imgEndIndex - 4; i >= 0; i--) {
    let j;
    if (givenString[i] === '=') {
      j = i - 1;
      let k;
      if (givenString[j] === 'c') {
        k = j - 1;
        let l;
        if (givenString[k] === 'r') {
          l = k - 1;
          if (givenString[l] === 's') {
            return l + 5;
          }
        }
      }
    }
  }
}

// VVVVVVVVV primary function to filter the first 10 Image-URLs out of the HTML-String VVVVVVVVV

function getImagePaths(givenString, amountOfImages) {
  let imgEndIndexesReduced = [];
  const imgStartIndexes = [];
  const imagePaths = [];
  imgEndIndexesReduced = SniffImgEndIndex(givenString).slice(0, amountOfImages);

  for (let i = 0; i < imgEndIndexesReduced.length; i++) {
    imgStartIndexes.push(
      sniffImgStartIndex(givenString, imgEndIndexesReduced[i]),
    );
    imagePaths.push(
      givenString.slice(imgStartIndexes[i], imgEndIndexesReduced[i]),
    );
  }
  return imagePaths;
}

// VVVVVVVVV calling the Filter Function into const VVVVVVVVV
const imagePaths = getImagePaths(fetchedString, 10);

// VVVVVVVVV loop through Path-Array to buffer and save the images VVVVVVVVV
for (let i = 0; i < imagePaths.length; i++) {
  let pathName = (i + 1).toString();
  if (pathName.length < 2) {
    pathName = `/memes/0${pathName}.jpg`;
  } else {
    pathName = `/memes/${pathName}.jpg`;
  }
  console.log(`Saved to: ${pathName}`);
  const getImage = bent('buffer');
  const bufferedImage = await getImage(imagePaths[i]);
  fs.writeFileSync(dirName + pathName, bufferedImage);
}
