
//declaring global variables
var time = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
var allShops = [];

//constructor function for all salmon cookie stores
function CookieStand(location, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
  this.location = location;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.totalHourlyCookieSales = [];
  this.total = 0;
  allShops.push(this);

  //calculates random number of customers per hour between the provided min and max of customer per hour
  this.custPerHour = function() {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour)) + this.minCustPerHour;
  }

  //uses result of the custPerHour function and the provided average cookies
  //per customer to calculate how many cookies are sold each hour of operation
  this.cookiesPerHour = function() {
    for (var i = 0; i < time.length; i++) {
      var hourlyTotal = Math.floor(this.custPerHour() * this.avgCookiesPerCust);
      this.totalHourlyCookieSales.push(hourlyTotal);
      this.total += this.totalHourlyCookieSales[i];
    }
  }
}



//this function calculates the total number of cookies sold at each location
//per hour, using the calculated cookies per hour
function giveData() {
  for (var c = 0; c < allShops.length; c++) {
    allShops[c].cookiesPerHour();
    console.log(allShops[c].totalHourlyCookieSales
      );
  };
}

//makes the table
function makeTable() {
  var table = document.createElement('table');
  var headerRow = document.createElement('tr');
  //makes the empty cell for the top left corner of table
  var emptyCell = document.createElement('td');
    headerRow.appendChild(emptyCell);

  //looks at the hours a store is open and populates the table with the
  //length of the time array
  for (var i = 0; i < time.length; i++) {
    var td = document.createElement('td');
    td.innerHTML = time[i];
    headerRow.appendChild(td);
  };

  //calculates the total cookies sold per location per day
  var totalColumn = document.createElement('td');
  totalColumn.innerHTML = 'Total';
  headerRow.appendChild(totalColumn);
  table.appendChild(headerRow);

  //this loop creates a row for each location in the table
  for (var a = 0; a < allShops.length; a++) {
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.innerHTML = allShops[a].location;
    tr.appendChild(td);

    //this loop populates the hourly total cookie sales in the table
    for (var b = 0; b < time.length; b++) {
      var tb = document.createElement('td');
      tb.innerHTML = allShops[a].totalHourlyCookieSales[b];
      tr.appendChild(tb);
    }
    //this makes the final table column and displays the cumulative total
    //for all the hours each location is open each day
    var dailyTotal = document.createElement('td');
    dailyTotal.innerHTML = allShops[a].total;
    tr.appendChild(dailyTotal);
    table.appendChild(tr);
  }

  //accesses the HTML file and the element named 'table' and sends the table
  //data generated with this javascript to the webpage

  document.getElementById('table').appendChild(table);
}

//info provided for base constructor function
var pikePlace = new CookieStand('Pike Place', 17, 88, 5.2);
var seatac = new CookieStand('Seatac', 6, 44, 1.2);
var southcenter = new CookieStand('Southcenter', 11, 38, 1.9);
var bellSquare = new CookieStand('Bellevue Square', 20, 48, 3.3);
var alki = new CookieStand('Alki', 3, 24, 2.6);

//CALL YO FUNCTIONS, HOMESLICE!
giveData();
makeTable();

//Attempting event listeners
// document.getElementById('stores').addEventListener('click')

// function appendNewStore() {
//   var addInput = document.getElementById('input');
//   form.oninput
// }

