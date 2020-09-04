import Calculator from '../src/calculator.js'

describe('Calculator', () => {
  let calc;
  beforeEach(() => {
    calc = new Calculator(100, 'United_States');
    
  });
  test('should correctly calculate years on mercury given earth years', () => {
    expect(calc.calcMercury()).toEqual(416.67);
  }); 
  test('should correctly calculate years on Venus given earth years', () => {
    expect(calc.calcVenus()).toEqual(161.29); 
  });
  test('should correctly calculate years on Mars given earth years', () =>{
    expect(calc.calcMars()).toEqual(53.19); 
  });
  test('should correctly calculate years on Jupiter given earth years', () =>{
    expect(calc.calcJupiter()).toEqual(8.43); 
  });
  test('should return the expected life expectancy based on which country the user selects', () => {
    expect(calc.getEarthLifeExpectancy('United_States')).toEqual(78.5);
  });
  test('should correctly calculate life expectancy on mercury given earth life expectancy', () => {
    expect(calc.calcMercuryExpectancy()).toEqual(327.08);
  }); 
  test('should correctly calculate life expectancy on venus given earth life expectancy', () => {
    expect(calc.calcVenusExpectancy()).toEqual(126.61);
  }); 
  test('should correctly calculate life expectancy on mars given earth life expectancy', () => {
    expect(calc.calcMarsExpectancy()).toEqual(41.76);
  }); 
  test('should correctly calculate life expectancy on jupiter given earth life expectancy', () => {
    expect(calc.calcJupiterExpectancy()).toEqual(6.62);
  }); 
  test('if user is passed the life expectancy return how many years passed', () => {
    expect(calc.calcPassedExpectancy(100,78.5)).toEqual(21.5);
  }); 
  test('calulate user age based on user birthday', () => {
    expect(calc.calcYearsOld(9,4,2000)).toEqual(20); 
  }); 
  test('calculate days until next birthday for user on mercury', () =>  {
    expect(calc.calcNextBirthday(20.00, .24)).toEqual(87.6); 
  });
  test('calculate days until next birthday for user on Venus', () =>  {
    expect(calc.calcNextBirthday(20.00, .62)).toEqual(226.3); 
  });
  test('calculate days until next birthday for user on earth', () =>  {
    expect(calc.calcNextBirthday(20.00, 1)).toEqual(365); 
  });
  test('calculate days until next birthday for user on mars', () =>  {
    expect(calc.calcNextBirthday(20.00, 1.88)).toEqual(686.2); 
  });
  test('calculate days until next birthday for user on jupiter', () =>  {
    expect(calc.calcNextBirthday(20.00, 11.86)).toEqual(4328.9); 
  });

  
});