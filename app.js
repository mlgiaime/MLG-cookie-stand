var hour = ['Location', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', 'Total'];

function CookieStand(location, minCustPerHour, maxCustPerHour, avgCookiesPerHour) {
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerHour = avgCookiesPerHour;
  this.totalCookies = [];
  this.total = 0;
  var location = [];


this.custPerHour = function() {
    return Math.floor(Math.random() * this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
};

this.cookiesPerHour = function() {
    for (var i = 0; i < time.length; i++) {
      var hourlyTotal = this.custPerHour() * this.avgCookiesPerHour
    };
}

this.total += this.totalCookies[i];

location.push(this);

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
  pikePlace.avgCookiesPerHour = 0;
  displayAllLocations();
}

updateLocation();

var pikePlace = ('Pike Place', 17, 88, 5.2);
var seatac = ('Seatac', 6, 44, 1.2);
var southcenter = ('Southcenter', 11, 38, 1.9);
var bellSquare = ('Bellevue Square', 20, 48, 3.3);
var alki = ('Alki', 3, 24, 2.6);

