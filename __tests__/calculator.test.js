import Calculator from '../src/calculator.js'

describe('Calculator', () => {
  let calc;
  beforeEach(() => {
    calc = new Calculator(100);
    
  });
  test('should correctly calculate years on mercury given earth years', () => {
    expect(calc.calcMercury()).toEqual(417);
  }); 
  test('should correctly calculate years on Venus given earth years', () => {
    expect(calc.calcVenus()).toEqual(161); 
  });
  test('should correctly calculate years on Mars given earth years', () =>{
    expect(calc.calcMars()).toEqual(53); 
  });
  test('should correctly calculate years on Jupiter given earth years', () =>{
    expect(calc.calcJupiter()).toEqual(80); 
  });
  

  
});