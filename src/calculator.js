export default class Calculator {
  constructor(earthYears){
  this.earthYears = earthYears;
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
}