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
$(document).ready(function() {
  let calc = new Calculator(0, 'United_States');
  writeCountries($('#country'), calc);
});