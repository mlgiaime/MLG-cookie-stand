var time = ['10am: ' + '11am: ' + '12pm: ' + '1pm: ' + '2pm: ' + '3pm: ' + '4pm: ' + '5pm: '];
var pikePlace = {
  minCustHr: 17,
  maxCustHr: 88,
  avgCookiesPerCust: 5.2,
  hourlyTotal: [],
  dailyTotal: [],
  randCustHour: function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
    console.log(randCustHour());
  },

  cookiesPerHour: function() {
    for (var i = 0; i < time.length; i++) {
    this.hourlyTotal.push(Math.floor(this.randCustHour() * this.avgCookiesPerCust));
  }
  }
  var hour = document.createElement('ul');
  this.hourlyTotal += this.dailyTotal[i];
  hour.innerHTML = hour[i] + this.dailyTotal[i];
  this.domID.appendChild(hour);

  var hour = document.createElement('ul');
  hour.innerHTML = 'Total: ' + this.dailyTotal;
  this.domID.appendChild(hour);
 }


pikePlace.cookiesPerHour();
    var hour = document.createElement('ul');
    this.hourlyTotal += this.dailyTotal[i];
    hour.innerHTML = hour[i] + this.dailyTotal[i];
    this.domID.appendChild(hour);


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
  var time = ['10am-- ' + '11am-- ' + '12pm-- ' + '1pm-- ' + '2pm-- ' + '3pm-- ' + '4pm-- ' + '5pm-- '];
  cookiesPerHour: function() {
    for (var i = 0; i < time.length; i++) {
    this.hourlyTotal.push(Math.floor(this.randCustHour() * this.avgCookiesPerHr));
    console.log(this.hourlyTotal);
  }
  }
    var hour = document.createElement('ul');
    this.hourlyTotal += this.dailyTotal[i];
    hour.innerHTML = time[i] + this.dailyTotal[i];
    this.domID.appendChild(hour);
  }
  var hour = document.createElement('ul');
  hour.innerHTML = 'Total -- ' + this.dailyTotal;
  this.domID.appendChild(hour);
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
  var time = ['10am-- ' + '11am-- ' + '12pm-- ' + '1pm-- ' + '2pm-- ' + '3pm-- ' + '4pm-- ' + '5pm-- '];
  cookiesPerHour: function() {
    for (var i = 0; i < time.length; i++) {
    this.hourlyTotal.push(Math.floor(this.randCustHour() * this.avgCookiesPerHr));
    console.log(this.hourlyTotal);
  }
  }
    var hour = document.createElement('ul');
    this.hourlyTotal += this.dailyTotal[i];
    hour.innerHTML = time[i] + this.dailyTotal[i];
    this.domID.appendChild(hour);
  }
  var hour = document.createElement('ul');
  hour.innerHTML = 'Total -- ' + this.dailyTotal;
  this.domID.appendChild(hour);
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
  var time = ['10am-- ' + '11am-- ' + '12pm-- ' + '1pm-- ' + '2pm-- ' + '3pm-- ' + '4pm-- ' + '5pm-- '];
  cookiesPerHour: function() {
    for (var i = 0; i < time.length; i++) {
    this.hourlyTotal.push(Math.floor(this.randCustHour() * this.avgCookiesPerHr));
    console.log(this.hourlyTotal);
  }
  }
    var hour = document.createElement('ul');
    this.hourlyTotal += this.dailyTotal[i];
    hour.innerHTML = time[i] + this.dailyTotal[i];
    this.domID.appendChild(hour);
  }
  var hour = document.createElement('ul');
  hour.innerHTML = 'Total -- ' + this.dailyTotal;
  this.domID.appendChild(hour);
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
  var time = ['10am-- ' + '11am-- ' + '12pm-- ' + '1pm-- ' + '2pm-- ' + '3pm-- ' + '4pm-- ' + '5pm-- '];
  cookiesPerHour: function() {
    for (var i = 0; i < time.length; i++) {
    this.hourlyTotal.push(Math.floor(this.randCustHour() * this.avgCookiesPerHr));
    console.log(this.hourlyTotal);
  }
  }
    var hour = document.createElement('ul');
    this.hourlyTotal += this.dailyTotal[i];
    hour.innerHTML = time[i] + this.dailyTotal[i];
    this.domID.appendChild(hour);
  }
  var hour = document.createElement('ul');
  hour.innerHTML = 'Total -- ' + this.dailyTotal;
  this.domID.appendChild(hour);
  }
};

alki.cookiesPerHour();
