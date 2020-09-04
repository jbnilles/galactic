export default class Calculator {
  constructor(earthYears){
  this.earthYears = earthYears;
  this.lifeExpectancy = 0; 
  this.expectedLife = {
    United_States: 78.5,
    United_Kingdom: 80.96
  }
  
  }
  constructor(earthYears, country){
    this.earthYears = earthYears;
    this.lifeExpectancy = getEarthLifeExpectancy(country); 
    this.expectedLife = {
      United_States: 78.5,
      United_Kingdom: 80.96
    }
  }
  calcMercury() {
    return Math.round(this.earthYears / .24);
  };
  calcVenus() {
    return Math.round(this.earthYears / .62);
  };
  calcMars() {
    return Math.round(this.earthYears / 1.88);
  };
  calcJupiter() {
    return Math.round(this.earthYears / 11.86);
  };
  getEarthLifeExpectancy(country) {
    return this.expectedLife[country];
  }
  calcMercuryExpectancy() {
    return Math.round(this.lifeExpectancy / .24);
  }
}