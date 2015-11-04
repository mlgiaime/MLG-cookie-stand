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


// calcRand: function() {

// }

// cookiesPerHour: function () {
//   return (Math.random() * )
// }


// makeList: function() {
//   this.cookiesPerHour();
//   var tbl = document.createElement('table');
//   var trElement = document.createElement('tr');
//   for(var = i; i < hours.length; i++) {
//     var thElement = document.createElement('th');
//     thElement.textContent = hours[i];
//     trElement.appendChild(thElement);
//   }
//     tbl.appendChild(trElement);
//     document.body.appendChild(tbl);
//   },
// }

// var pikePlace = new CookieStand('Pike Place Market', 'pike', 17, 88, 5.2);
// var seatac = new CookieStand();
// var southcenter =
// var bellSquare =
// var alki =

// function CookieStand(location, minCustPerHour, maxCustPerHour, avgCookiesPerHour) {
//   this.location = location;
//   this.minCustPerHour = minCustPerHour;
//   this.maxCustPerHour = maxCustPerHour;
//   this.avgCookiesPerHour = avgCookiesPerHour;
//   this.totalCookies = [];
//   this.total = 0;

//   this.custPerHour = function() {
//     return Math.floor(Math.random() * this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
//   };

//   this.cookiesPerHour = function() {
//     for (var i = 0; i < time.length; i++) {
//       var hourlyTotal = this.custPerHour() * this.avgCookiesPerHour
//     };
//   }

// this.total += this.totalCookies[i];

// var dailyTotal = document.createElement('li');
// hour.innerHTML = 'Total: ' + this.total;
// pike.appendChild(dailyTotal);
//   };
// };

// makeList: function() {
//   this.cookiesPerHour();
//   var tbl = document.createElement('table');
//   var trElement = document.createElement('tr');
//   for(var = 0; i < hours.length; i++) {
//     var thElement = document.createElement('th');
//     thElement.textContent = hours[i];
//     trElement.appendChild(thElement);
//   }
//     tbl.appendChild(trElement);
//     document.body.appendChild(tbl);
//   },
// }
