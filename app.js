
var time = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
var allShops = [];

function CookieStand(location, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
  this.location = location;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.totalHourlyCookieSales = [];
  this.total = 0;
  allShops.push(this);

  this.custPerHour = function() {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour)) + this.minCustPerHour;
  }

  this.cookiesPerHour = function() {
    for (var i = 0; i < time.length; i++) {
      var hourlyTotal = Math.floor(this.custPerHour() * this.avgCookiesPerCust);
      this.totalHourlyCookieSales.push(hourlyTotal);
      this.total += this.totalHourlyCookieSales[i];
    }
  }
}

function giveData() {
  for (var c = 0; c < allShops.length; c++) {
    allShops[c].cookiesPerHour();
    console.log(allShops[c].totalHourlyCookieSales
      );
  };
}
function makeTable() {
  var table = document.createElement('table');
  var headerRow = document.createElement('tr');
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
      tb.innerHTML = allShops[a].totalHourlyCookieSales[b];
      tr.appendChild(tb);
    }
    var dailyTotal = document.createElement('td');
    dailyTotal.innerHTML = allShops[a].total;
    tr.appendChild(dailyTotal);
    table.appendChild(tr);
  }
  document.getElementById('table').appendChild(table);
}

function appendNewStore() {
  var name = document.getElementsByName('shopID')[0].value;
  var minCust = document.getElementsByName('minCustPerHour')[0].value;
  var maxCust = document.getElementsByName('maxCustPerHour')[0].value;
  var avgCookiesPerCust = document.getElementsByName('avgCookiesPerCust')[0].value;
  var newStore = new CookieStand(name, minCust, maxCust, avgCookiesPerCust);
  document.getElementById('table').childNodes[0].remove();
  giveData();
  makeTable();
}

var pikePlace = new CookieStand('Pike Place', 17, 88, 5.2);
var seatac = new CookieStand('Seatac', 6, 44, 1.2);
var southcenter = new CookieStand('Southcenter', 11, 38, 1.9);
var bellSquare = new CookieStand('Bellevue Square', 20, 48, 3.3);
var alki = new CookieStand('Alki', 3, 24, 2.6);

giveData();
makeTable();

document.getElementById('submit').addEventListener('click',appendNewStore);
