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
function writeToPlanetCard(cardDom, keyValPair){
  let html = '';
  let tempDom = cardDom.children('#planet-name');
  tempDom.text(keyValPair[name]);
  tempDom = cardDom.children('#planet-stats');
  tempDom.text('');
  
  html += '<li> Years old: {keyValPair["years"]}</li>' 
  html += '<li> Life expectancy: {keyValPair["expectedYears"]}</li>' 
  if(keyValPair['expectedYearsPassed'] > 0) {
    html += '<li> You have lived past life expectancy by : {keyValPair["expectedYearsPassed"]} years</li>' 
  } else {
    html += '<li> You have about {Math.abs(keyValPair["expectedYearsPassed"])} years left to live</li>' 
  }
    
  
  tempDom.append(html);
}
$(document).ready(function() {
  let calc = new Calculator(0, 'United_States');
  writeCountries($('#country'), calc);
  writeToPlanetCard($('#mercury'), calc.mercury);
});