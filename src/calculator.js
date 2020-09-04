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
    return parseFloat((this.earthYears / .24).toFixed(2));
  }
  calcVenus() {
    return parseFloat((this.earthYears / .62).toFixed(2));
  }
  calcMars() {
    return parseFloat((this.earthYears / 1.88).toFixed(2));
  }
  calcJupiter() {
    return parseFloat((this.earthYears / 11.86).toFixed(2));
  }
  getEarthLifeExpectancy(country) {
    return this.expectedLife[country];
  }
  calcMercuryExpectancy() {
    return parseFloat((this.lifeExpectancy / .24).toFixed(2));
  }
  calcVenusExpectancy() {
    return parseFloat((this.lifeExpectancy / .62).toFixed(2));
  }
  calcMarsExpectancy() {
    return parseFloat((this.lifeExpectancy / 1.88).toFixed(2));
  }
  calcJupiterExpectancy() {
    return parseFloat((this.lifeExpectancy / 11.86).toFixed(2));
  }
  calcPassedExpectancy(age, expectedLife) {
    return (age - expectedLife);
  }
  calcYearsOld(month, day, year) {
    let date = new Date();
    let curDay = date.getDate();
    let curMonth = date.getMonth() + 1;
    let curYear = date.getFullYear();
    console.log(curDay);
    console.log(curMonth);
    console.log(curYear);

    let tempAge = curYear - year;
    if(month === curMonth) {
      if(curDay < day) {
        tempAge--;
      } 
    } else if (month > curMonth) {
      tempAge--;
    } 
    return tempAge;
  }
  calcNextBirthday(yearsOld, planetModifier ) {
    let planetDays = 365 * planetModifier;
    let daysTillBirthday = planetDays -  (planetDays * (yearsOld - Math.floor(yearsOld)));
    return parseFloat(daysTillBirthday.toFixed(2));
  }
}