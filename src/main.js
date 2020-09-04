import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './calculator.js';

function writeCountries(dom, calc) {
  dom.text('');
  let html ='';
  for (const key in calc.expectedLife) {
    html = '';
    html += '<option value=' + key + '>' + key.replace('_', ' ') + '</option>';
    dom.append(html);
  }
}
function writeToPlanetCard(cardDom, keyValPair, calc){
  let html = '';
  let tempDom = cardDom.find('#planet-name');
  //tempDom.text('yo');
  tempDom.text(keyValPair['name']);
  //$('#planet-name').text('here1');
 

  tempDom = cardDom.find('#planet-stats');
  tempDom.text('');
  
  
  html += '<li> Years old: ' + keyValPair["years"] + '</li>' 
  html += '<li> Life expectancy: ' + keyValPair["expectedYears"] + '</li>' 
  let expectedYearsPassed = calc.calcPassedExpectancy(keyValPair['years'],keyValPair['expectedYears']);
  if(expectedYearsPassed > 0 ) {
    html += '<li> You have lived past life expectancy by : '+ expectedYearsPassed + ' years</li>' 
  } else {
    html += '<li> You have about ' + Math.abs(expectedYearsPassed) + ' years left to live</li>' 
  }
  tempDom.append(html);
}
$(document).ready(function() {
  let calc = new Calculator(0, 'United_States');
  writeCountries($('#country'), calc);
  writeToPlanetCard($('#mercury'), calc.mercury, calc);
  writeToPlanetCard($('#venus'), calc.venus, calc);
  writeToPlanetCard($('#earth'), calc.earth, calc);
  writeToPlanetCard($('#mars'), calc.mars, calc);
  writeToPlanetCard($('#jupiter'), calc.jupiter, calc);

  
});