const csv = require('csv-parser')
const fs = require('fs')
var md5 = require('md5');

let resultsString= ""
let i=1;

fs.createReadStream('annual-enterprise-survey-2020-financial-year-provisional-csv.csv')
  .pipe(csv())
  .on('data', (data) => {
      i%2 ==1 ? resultsString += data['Industry_code_NZSIOC'] :false 
      i++

})
  .on('end', () => {
    console.log(md5(resultsString));
    
    console.log("-----------------------------------------------------------");
    console.log(resultsString);
  });
  