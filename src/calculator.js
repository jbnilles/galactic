export default class Calculator {
  constructor(earthYears){
  this.earthYears = earthYears;
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
}