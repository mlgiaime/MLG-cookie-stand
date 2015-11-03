var pikePlace = {
  minCustHr: 17,
  maxCustHr: 88,
  avgCookiesPerHr: 5.2,
  hourlyTotals: [],
  dailyTotal: [],
  randCustHour: function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
    console.log(randCustHour());
  },
  cookiesPerHour: function() {
    for (var i = 0; i < 8; i++) {
    this.hourlyTotals.push(Math.floor(this.randCustHour() * this.avgCookiesPerHr));
    console.log(this.hourlyTotals);
  }
  }
  cookiesPerDay: function() {
    var totals = [];
    for(var i = 0; i < hourlyTotals.length; i++) {
      dailyTotal += totals[i];
    }
    return this.totals;
  }
  //return Math.floor(this.cookiesPerHour[i]);
    // calculate your individual hourly totals
    // this will involve a 'for' loop to populate the hourlyTotals array
    // you could also go ahead and calculate your daily total here, too

  display: function() {
//hard-code hours, append the hourly totals to each, make total appear at the bottom


    /*var nextStore = document.createElement('li');
    nextStore.innerHTML = ques[i][0];
    document.body.appendChild(nextStore);*/
    // this method will read through the array and put it in the HTML document
    // as an intermediate step, just console.log() the individual values
  }
};
pikePlace.cookiesPerHour();

var seatac = {
  minCustHr: 6,
  maxCustHr: 44,
  avgCookiesPerHr: 1.2,
  hourlyTotals: [],
  dailyTotal: [],
  randCustHour: function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
    console.log(randCustHour());
  },
  cookiesPerHour: function() {
    for (var i = 0; i < 8; i++) {
    this.hourlyTotals.push(Math.floor(this.randCustHour() * this.avgCookiesPerHr));
    console.log(this.hourlyTotals);
  }
  }
  cookiesPerDay: function() {
    var totals = [];
    for(var i = 0; i < hourlyTotals.length; i++) {
      dailyTotal += totals[i];
    }
    return this.totals;
  }
  //return Math.floor(this.cookiesPerHour[i]);
    // calculate your individual hourly totals
    // this will involve a 'for' loop to populate the hourlyTotals array
    // you could also go ahead and calculate your daily total here, too

  display: function() {
//hard-code hours, append the hourly totals to each, make total appear at the bottom


    /*var nextStore = document.createElement('li');
    nextStore.innerHTML = ques[i][0];
    document.body.appendChild(nextStore);*/
    // this method will read through the array and put it in the HTML document
    // as an intermediate step, just console.log() the individual values
  }
};
seatac.cookiesPerHour();

var southcenter = {
  minCustHr: 11,
  maxCustHr: 38,
  avgCookiesPerHr: 1.9,
  hourlyTotals: [],
  dailyTotal: [],
  randCustHour: function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
    console.log(randCustHour());
  },
  cookiesPerHour: function() {
    for (var i = 0; i < 8; i++) {
    this.hourlyTotals.push(Math.floor(this.randCustHour() * this.avgCookiesPerHr));
    console.log(this.hourlyTotals);
  }
  }
  cookiesPerDay: function() {
    var totals = [];
    for(var i = 0; i < hourlyTotals.length; i++) {
      dailyTotal += totals[i];
    }
    return this.totals;
  }
  //return Math.floor(this.cookiesPerHour[i]);
    // calculate your individual hourly totals
    // this will involve a 'for' loop to populate the hourlyTotals array
    // you could also go ahead and calculate your daily total here, too

  display: function() {
//hard-code hours, append the hourly totals to each, make total appear at the bottom


    /*var nextStore = document.createElement('li');
    nextStore.innerHTML = ques[i][0];
    document.body.appendChild(nextStore);*/
    // this method will read through the array and put it in the HTML document
    // as an intermediate step, just console.log() the individual values
  }
};
southcenter.cookiesPerHour();

var bellevueSquare = {
  minCustHr: 20,
  maxCustHr: 48,
  avgCookiesPerHr: 3.3,
  hourlyTotals: [],
  dailyTotal: [],
  randCustHour: function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
    console.log(randCustHour());
  },
  cookiesPerHour: function() {
    for (var i = 0; i < 8; i++) {
    this.hourlyTotals.push(Math.floor(this.randCustHour() * this.avgCookiesPerHr));
    console.log(this.hourlyTotals);
  }
  }
  cookiesPerDay: function() {
    var totals = [];
    for(var i = 0; i < hourlyTotals.length; i++) {
      dailyTotal += totals[i];
    }
    return this.totals;
  }
  //return Math.floor(this.cookiesPerHour[i]);
    // calculate your individual hourly totals
    // this will involve a 'for' loop to populate the hourlyTotals array
    // you could also go ahead and calculate your daily total here, too

  display: function() {
//hard-code hours, append the hourly totals to each, make total appear at the bottom


    /*var nextStore = document.createElement('li');
    nextStore.innerHTML = ques[i][0];
    document.body.appendChild(nextStore);*/
    // this method will read through the array and put it in the HTML document
    // as an intermediate step, just console.log() the individual values
  }
};
bellevueSquare.cookiesPerHour();

var alki = {
  minCustHr: 3,
  maxCustHr: 24,
  avgCookiesPerHr: 2.6,
  hourlyTotals: [],
  dailyTotal: [],
  randCustHour: function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
    console.log(randCustHour());
  },
  cookiesPerHour: function() {
    for (var i = 0; i < 8; i++) {
    this.hourlyTotals.push(Math.floor(this.randCustHour() * this.avgCookiesPerHr));
    console.log(this.hourlyTotals);
  }
  }
  cookiesPerDay: function() {
    var totals = [];
    for(var i = 0; i < hourlyTotals.length; i++) {
      dailyTotal += totals[i];
    }
    return this.totals;
  }
  //return Math.floor(this.cookiesPerHour[i]);
    // calculate your individual hourly totals
    // this will involve a 'for' loop to populate the hourlyTotals array
    // you could also go ahead and calculate your daily total here, too

  display: function() {
//hard-code hours, append the hourly totals to each, make total appear at the bottom


    /*var nextStore = document.createElement('li');
    nextStore.innerHTML = ques[i][0];
    document.body.appendChild(nextStore);*/
    // this method will read through the array and put it in the HTML document
    // as an intermediate step, just console.log() the individual values
  }
};
alki.cookiesPerHour();
