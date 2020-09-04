import Calculator from '../src/calculator.js'

describe('Calculator', () => {
  let calc;
  beforeEach(() => {
    calc = new Calculator(100);
    
  });
  test('should correctly calculate years on mercury given earth years', () => {
    expect(calc.calcMercury()).toEqual(41700);
  }); 
  

  
});