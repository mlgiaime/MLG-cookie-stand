var hour = ['Location', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', 'Total'];

function CookieStand(location, minCustPerHour, maxCustPerHour, avgCookiesPerHour) {
  this.location = location;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerHour = avgCookiesPerHour;
  this.totalCookies = [];
  this.total = 0;

var pikePlace = ('Pike Place', 17, 88, 5.2);
var seatac = ('Seatac', 6, 44, 1.2);
var southcenter = ('Southcenter', 11, 38, 1.9);
var bellSquare = ('Bellevue Square', 20, 48, 3.3);
var alki = ('Alki', 3, 24, 2.6);

this.calcRand = function() {
  return Math.floor()
}

cookiesPerHour: function () {
  return (Math.random() * )
}



this.displayData = function() {
//   this.calcHourlySales();
//   var heading = document.createElement('tr');
//   var blank = document.createElement('td');
//   blank.textContent = '';
//   heading.appendChild(blank);
// }
var row = document.createElement('tr');
var location = document.createElement('th');
location.textContent = this.storeLocation;
row.appendChild(location);

for (var i = 0; i < hours.length; i++) {

}

var dailyTotal = document.createElement('th');
  dailyTotal.textContent = "Total";
  headerRow.appendChild(dailyTotal);
  tbl.appendChild(th);


//new stuff
//make new locations after creating the empty location array
var Ballard = new("Ballard", 5, 2, 3); //you can add as many as you want this way

var location = [];
location.push(this);


LOOK HERE FOR BETTER CODE EXAMPLE FOR COOKIES!!!!!!
//makes the table
var table = document.createElement('table');
var headerRow = document.createElement('headerRow');

//makes the empty cell
var emptyCell = document.createElement('emptyCell');
  headerRow.appendChild(emptyCell);

for (var i = 0; i < hours.length; i++) {
  var td = document.createElement('td');
  td.innerHTML = hours[i];
  headerRow.appendChild(td);
};
//makes it a lot easier to add more locations to your array
function displayAllLocations() {
  for (var i = 0; i < location.length; i++) {
  location[i].displayData();
  };
}

document.body.appendChild(tbl);
function updateLocation() {
  pikePlace.avgCookiesPerCust = 0;
  displayAllLocations();
}

updateLocation();
//end new style

makeList: function() {
  this.cookiesPerHour();
  var tbl = document.createElement('table');
  var trElement = document.createElement('tr');
  for(var = i; i < hours.length; i++) {
    var thElement = document.createElement('th');
    thElement.textContent = hours[i];
    trElement.appendChild(thElement);
  }
    tbl.appendChild(trElement);
    document.body.appendChild(tbl);
  },
}

var pikePlace = new CookieStand('Pike Place Market', 'pike', 17, 88, 5.2);
var seatac = new CookieStand();
var southcenter =
var bellSquare =
var alki =

function CookieStand(location, minCustPerHour, maxCustPerHour, avgCookiesPerHour) {
  this.location = location;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerHour = avgCookiesPerHour;
  this.totalCookies = [];
  this.total = 0;

  this.custPerHour = function() {
    return Math.floor(Math.random() * this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
  };

  this.cookiesPerHour = function() {
    for (var i = 0; i < time.length; i++) {
      var hourlyTotal = this.custPerHour() * this.avgCookiesPerHour
    };
  }

this.total += this.totalCookies[i];

var dailyTotal = document.createElement('li');
hour.innerHTML = 'Total: ' + this.total;
pike.appendChild(dailyTotal);
  };
};

makeList: function() {
  this.cookiesPerHour();
  var tbl = document.createElement('table');
  var trElement = document.createElement('tr');
  for(var = 0; i < hours.length; i++) {
    var thElement = document.createElement('th');
    thElement.textContent = hours[i];
    trElement.appendChild(thElement);
  }
    tbl.appendChild(trElement);
    document.body.appendChild(tbl);
  },

  PREVIOUS CONTENTS OF APP.JS
// var time = ['10am: ' + '11am: ' + '12pm: ' + '1pm: ' + '2pm: ' + '3pm: ' + '4pm: ' + '5pm: '];
// var pikePlace = {
//   minCustHr: 17,
//   maxCustHr: 88,
//   avgCookiesPerCust: 5.2,
//   hourlyTotal: [],
//   dailyTotal: [],
//   randCustHour: function() {
//     return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
//     console.log(randCustHour());
//   },

//   cookiesPerHour: function() {
//     for (var i = 0; i < time.length; i++) {
//     this.hourlyTotal.push(Math.floor(this.randCustHour() * this.avgCookiesPerCust));
//   }
//   }
//   var hour = document.createElement('ul');
//   this.hourlyTotal += this.dailyTotal[i];
//   hour.innerHTML = hour[i] + this.dailyTotal[i];
//   this.domID.appendChild(hour);

//   var hour = document.createElement('ul');
//   hour.innerHTML = 'Total: ' + this.dailyTotal;
//   this.domID.appendChild(hour);
//  }


// pikePlace.cookiesPerHour();
//     var hour = document.createElement('ul');
//     this.hourlyTotal += this.dailyTotal[i];
//     hour.innerHTML = hour[i] + this.dailyTotal[i];
//     this.domID.appendChild(hour);


// var seatac = {
//   minCustHr: 6,
//   maxCustHr: 44,
//   avgCookiesPerHr: 1.2,
//   hourlyTotals: [],
//   dailyTotal: [],
//   randCustHour: function() {
//     return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
//     console.log(randCustHour());
//   },
//   var time = ['10am-- ' + '11am-- ' + '12pm-- ' + '1pm-- ' + '2pm-- ' + '3pm-- ' + '4pm-- ' + '5pm-- '];
//   cookiesPerHour: function() {
//     for (var i = 0; i < time.length; i++) {
//     this.hourlyTotal.push(Math.floor(this.randCustHour() * this.avgCookiesPerHr));
//     console.log(this.hourlyTotal);
//   }
//   }
//     var hour = document.createElement('ul');
//     this.hourlyTotal += this.dailyTotal[i];
//     hour.innerHTML = time[i] + this.dailyTotal[i];
//     this.domID.appendChild(hour);
//   }
//   var hour = document.createElement('ul');
//   hour.innerHTML = 'Total -- ' + this.dailyTotal;
//   this.domID.appendChild(hour);
//   }
// };
// seatac.cookiesPerHour();

// var southcenter = {
//   minCustHr: 11,
//   maxCustHr: 38,
//   avgCookiesPerHr: 1.9,
//   hourlyTotals: [],
//   dailyTotal: [],
//   randCustHour: function() {
//     return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
//     console.log(randCustHour());
//   },
//   var time = ['10am-- ' + '11am-- ' + '12pm-- ' + '1pm-- ' + '2pm-- ' + '3pm-- ' + '4pm-- ' + '5pm-- '];
//   cookiesPerHour: function() {
//     for (var i = 0; i < time.length; i++) {
//     this.hourlyTotal.push(Math.floor(this.randCustHour() * this.avgCookiesPerHr));
//     console.log(this.hourlyTotal);
//   }
//   }
//     var hour = document.createElement('ul');
//     this.hourlyTotal += this.dailyTotal[i];
//     hour.innerHTML = time[i] + this.dailyTotal[i];
//     this.domID.appendChild(hour);
//   }
//   var hour = document.createElement('ul');
//   hour.innerHTML = 'Total -- ' + this.dailyTotal;
//   this.domID.appendChild(hour);
//   }
// };

// southcenter.cookiesPerHour();

// var bellevueSquare = {
//   minCustHr: 20,
//   maxCustHr: 48,
//   avgCookiesPerHr: 3.3,
//   hourlyTotals: [],
//   dailyTotal: [],
//   randCustHour: function() {
//     return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
//     console.log(randCustHour());
//   },
//   var time = ['10am-- ' + '11am-- ' + '12pm-- ' + '1pm-- ' + '2pm-- ' + '3pm-- ' + '4pm-- ' + '5pm-- '];
//   cookiesPerHour: function() {
//     for (var i = 0; i < time.length; i++) {
//     this.hourlyTotal.push(Math.floor(this.randCustHour() * this.avgCookiesPerHr));
//     console.log(this.hourlyTotal);
//   }
//   }
//     var hour = document.createElement('ul');
//     this.hourlyTotal += this.dailyTotal[i];
//     hour.innerHTML = time[i] + this.dailyTotal[i];
//     this.domID.appendChild(hour);
//   }
//   var hour = document.createElement('ul');
//   hour.innerHTML = 'Total -- ' + this.dailyTotal;
//   this.domID.appendChild(hour);
//   }
// };

// bellevueSquare.cookiesPerHour();

// var alki = {
//   minCustHr: 3,
//   maxCustHr: 24,
//   avgCookiesPerHr: 2.6,
//   hourlyTotals: [],
//   dailyTotal: [],
//   randCustHour: function() {
//     return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
//     console.log(randCustHour());
//   },
//   var time = ['10am-- ' + '11am-- ' + '12pm-- ' + '1pm-- ' + '2pm-- ' + '3pm-- ' + '4pm-- ' + '5pm-- '];
//   cookiesPerHour: function() {
//     for (var i = 0; i < time.length; i++) {
//     this.hourlyTotal.push(Math.floor(this.randCustHour() * this.avgCookiesPerHr));
//     console.log(this.hourlyTotal);
//   }
//   }
//     var hour = document.createElement('ul');
//     this.hourlyTotal += this.dailyTotal[i];
//     hour.innerHTML = time[i] + this.dailyTotal[i];
//     this.domID.appendChild(hour);
//   }
//   var hour = document.createElement('ul');
//   hour.innerHTML = 'Total -- ' + this.dailyTotal;
//   this.domID.appendChild(hour);
//   }
// };

// alki.cookiesPerHour();

// }
