import Calculator from '../src/calculator.js'

describe('Calculator', () => {
  let calc;
  beforeEach(() => {
    calc = new Calculator(100, 'United_States');
    
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
    expect(calc.calcJupiter()).toEqual(8); 
  });
  test('should return the expected life expectancy based on which country the user selects', () => {
    expect(calc.getEarthLifeExpectancy('United_States')).toEqual(78.5);
  });
  test('should correctly calculate life expectancy on mercury given earth life expectancy', () => {
    expect(calc.calcMercuryExpectancy()).toEqual(327);
  }); 
  test('should correctly calculate life expectancy on venus given earth life expectancy', () => {
    expect(calc.calcVenusExpectancy()).toEqual(127);
  }); 
  test('should correctly calculate life expectancy on mars given earth life expectancy', () => {
    expect(calc.calcMarsExpectancy()).toEqual(42);
  }); 
  test('should correctly calculate life expectancy on jupiter given earth life expectancy', () => {
    expect(calc.calcJupiterExpectancy()).toEqual(7);
  }); 
  test('if user is passed the life expectancy return how many years passed', () => {
    expect(calc.calcPassedExpectancy(100,78.5)).toEqual(7);
  }); 

  
});