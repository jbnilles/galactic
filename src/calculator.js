export default class Calculator {
  constructor(earthYears, country){
    this.expectedLife = {
      United_States: 78.5,
      United_Kingdom: 80.96
    };
    this.earthYears = earthYears;
    this.lifeExpectancy = this.getEarthLifeExpectancy(country);
    this.mercury = {
      name: 'Mercury',
      years: this.calcMercury(),
      expectedYears: this.calcMercuryExpectancy(),
    };
    this.venus = {
      name: 'Venus',
      years: this.calcVenus(),
      expectedYears: this.calcVenusExpectancy(),
    };
    this.earth = {
      name: 'Earth',
      years: this.earthYears,
      expectedYears: this.lifeExpectancy,
    };
    this.mars = {
      name: 'Mars',
      years: this.calcMars(),
      expectedYears: this.calcMarsExpectancy(),
    };
    this.jupiter = {
      name: 'Jupiter',
      years: this.calcJupiter(),
      expectedYears: this.calcJupiterExpectancy(),
    };
  }
  calcMercury() {
    return Math.round(this.earthYears / .24);
  }
  calcVenus() {
    return Math.round(this.earthYears / .62);
  }
  calcMars() {
    return Math.round(this.earthYears / 1.88);
  }
  calcJupiter() {
    return Math.round(this.earthYears / 11.86);
  }
  getEarthLifeExpectancy(country) {
    return this.expectedLife[country];
  }
  calcMercuryExpectancy() {
    return Math.round(this.lifeExpectancy / .24);
  }
  calcVenusExpectancy() {
    return Math.round(this.lifeExpectancy / .62);
  }
  calcMarsExpectancy() {
    return Math.round(this.lifeExpectancy / 1.88);
  }
  calcJupiterExpectancy() {
    return Math.round(this.lifeExpectancy / 11.86);
  }
  calcPassedExpectancy(age, expectedLife) {
    console.log(age + '   ' + expectedLife )
    return Math.round(age - expectedLife);
  }
}