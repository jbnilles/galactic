export default class Calculator {
  constructor(earthYears, country){
    this.expectedLife = {
      United_States: 78.5,
      United_Kingdom: 80.96
    }
    this.earthYears = earthYears;

    this.lifeExpectancy = this.getEarthLifeExpectancy(country); 
    
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
  calcVenusExpectancy() {
    return Math.round(this.lifeExpectancy / .62);
  }
}