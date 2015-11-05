var time = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
var allShops = [];

function CookieStand(location, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
  this.location = location;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.totalCookies = [];
  this.total = 0;
  allShops.push(this);

  this.custPerHour = function() {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour)) + this.minCustPerHour;
  };

  this.cookiesPerHour = function() {
    for (var i = 0; i < time.length; i++) {
      var hourlyTotal = Math.floor(this.custPerHour() * this.avgCookiesPerCust);
      this.totalCookies.push(hourlyTotal);
      this.total += this.totalCookies[i];
    };
  };
}

var pikePlace = new CookieStand('Pike Place', 17, 88, 5.2);
var seatac = new CookieStand('Seatac', 6, 44, 1.2);
var southcenter = new CookieStand('Southcenter', 11, 38, 1.9);
var bellSquare = new CookieStand('Bellevue Square', 20, 48, 3.3);
var alki = new CookieStand('Alki', 3, 24, 2.6);

function giveData() {
  for (var c = 0; c < allShops.length; c++) {
    allShops[c].cookiesPerHour();
    console.log(allShops[c].totalCookies);
  };
}

//makes the table
function makeTable() {
  var table = document.createElement('table');
  var headerRow = document.createElement('tr');
  //makes the empty cell
  var emptyCell = document.createElement('td');
    headerRow.appendChild(emptyCell);

  for (var i = 0; i < time.length; i++) {
    var td = document.createElement('td');
    td.innerHTML = time[i];
    headerRow.appendChild(td);
  };
  var totalColumn = document.createElement('td');
  totalColumn.innerHTML = 'Total';
  headerRow.appendChild(totalColumn);
  table.appendChild(headerRow);

  for (var a = 0; a < allShops.length; a++) {
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.innerHTML = allShops[a].location;
    tr.appendChild(td);
    for (var b = 0; b < time.length; b++) {
      var tb = document.createElement('td');
      tb.innerHTML = allShops[a].totalCookies[b];
      tr.appendChild(tb);
    }
    var dailyTotal = document.createElement('td');
    dailyTotal.innerHTML = allShops[a].total;
    tr.appendChild(dailyTotal);
    table.appendChild(tr);
  }

  document.getElementById('table').appendChild(table);
}

// function updateLocation() {
//   location.avgCookiesPerHour = 0;
// }
giveData();
makeTable();
// updateLocation();




//
//makes it a lot easier to add more locations to your array
// function displayAllLocations() {
//   for (var i = 0; i < location.length; i++) {
//   location[i].displayData();
//   };
// }



