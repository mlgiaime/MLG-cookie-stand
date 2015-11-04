var time = ['Location', '10am ' , '11am ' , '12pm ' , '1pm ' , '2pm ' , '3pm ' , '4pm ' , '5pm ' , 'Total'];
var pikePlace = {
  location: 'Pike Place',
  minCustHr: 17,
  maxCustHr: 88,
  avgCookiesPerCust: 5.2,
  hourlyTotal: [],
  dailyTotal: 0,

 randCustHour: function() {
    var result = Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
    console.log(result);
    return result;
  },

  cookieTotal: function() {
    for (var i = 0; i < time.length; i++) {
      var hourly = this.randCustHour() * this.avgCookiesPerCust;
      this.hourlyTotal.push(Math.floor(hourly));
      this.dailyTotal += this.hourlyTotal[i];
      console.log(this.dailyTotal);
    }
  },


  display: function() {
    this.cookieTotal();
    var createTable = document.createElement('table');
    var trElement = document.createElement('tr');

    for (var i = 0; i < this.hourlyTotal.length; i++) {
      var thElement = document.createElement('th');
      thElement.textContent = time[i];
      trElement.appendChild(thElement);
    }
    createTable.appendChild(trElement);
    var trElement = document.createElement('tr');
    var tdElement = document.createElement('td');
    tdElement.textContent = this.location;
    trElement.appendChild(tdElement);
    createTable.appendChild(trElement);

    for(var i = 1; i < 9; i++) {
      var tdElement = document.createElement('td');
      tdElement.textContent = this.hourlyTotal[i];
      trElement.appendChild(tdElement);
    }

    var trElement = document.createElement('tr');
    var tdElement = document.createElement('td');
    tdElement.textContent = this.dailyTotal;
    trElement.appendChild(tdElement);
    createTable.appendChild(trElement);

    document.body.appendChild(createTable);
  },
};
pikePlace.display();


var seatac = {
  location: 'Seatac',
  minCustHr: 6,
  maxCustHr: 44,
  avgCookiesPerCust: 1.2,
  hourlyTotal: [],
  dailyTotal: 0,

  randCustHour: function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
    console.log(randCustHour());
  },

  randCustHour: function() {
    var result = Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
    console.log(result);
    return result;
  },

  cookieTotal: function() {
    for (var i = 0; i < time.length; i++) {
      var hourly = this.randCustHour() * this.avgCookiesPerCust;
      this.hourlyTotal.push(Math.floor(hourly));
      this.dailyTotal += this.hourlyTotal[i];
      console.log(this.dailyTotal);
    }
  },

  display: function() {
    this.cookieTotal();
    var createTable = document.createElement('table');
    var trElement = document.createElement('tr');

    for (var i = 0; i < this.hourlyTotal.length; i++) {
      var thElement = document.createElement('th');
      thElement.textContent = time[i];
      trElement.appendChild(thElement);
    }
    createTable.appendChild(trElement);
    var trElement = document.createElement('tr');
    var tdElement = document.createElement('td');
    tdElement.textContent = this.location;
    trElement.appendChild(tdElement);
    createTable.appendChild(trElement);

    for(var i = 1; i < 9; i++) {
      var tdElement = document.createElement('td');
      tdElement.textContent = this.hourlyTotal[i];
      trElement.appendChild(tdElement);
    }
    var trElement = document.createElement('tr');
    var tdElement = document.createElement('td');
    tdElement.textContent = this.location;
    trElement.appendChild(tdElement);
    createTable.appendChild(trElement);

    var trElement = document.createElement('tr');
    var tdElement = document.createElement('td');
    tdElement.textContent = this.dailyTotal;
    trElement.appendChild(tdElement);
    createTable.appendChild(trElement);

    document.body.appendChild(createTable);
  },
};
seatac.display();

var southcenter = {
  location: southcenter,
  minCustHr: 11,
  maxCustHr: 38,
  avgCookiesPerCust: 1.9,
  hourlyTotal: [],
  dailyTotal: 0,

  randCustHour: function() {
    var result = Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
    console.log(result);
    return result;
  },

  cookieTotal: function() {
    for (var i = 0; i < time.length; i++) {
      var hourly = this.randCustHour() * this.avgCookiesPerCust;
      this.hourlyTotal.push(Math.floor(hourly));
      this.dailyTotal += this.hourlyTotal[i];
      console.log(this.dailyTotal);
    }
  },
  display: function() {
    this.cookieTotal();
    var createTable = document.createElement('table');
    var trElement = document.createElement('tr');

    for (var i = 0; i < this.hourlyTotal.length; i++) {
      var thElement = document.createElement('th');
      thElement.textContent = time[i];
      trElement.appendChild(thElement);
    }
    createTable.appendChild(trElement);
    var trElement = document.createElement('tr');
    var tdElement = document.createElement('td');
    tdElement.textContent = this.location;
    trElement.appendChild(tdElement);
    createTable.appendChild(trElement);

    for(var i = 1; i < 9; i++) {
      var tdElement = document.createElement('td');
      tdElement.textContent = this.hourlyTotal[i];
      trElement.appendChild(tdElement);
    }
    var trElement = document.createElement('tr');
    var tdElement = document.createElement('td');
    tdElement.textContent = this.location;
    trElement.appendChild(tdElement);
    createTable.appendChild(trElement);

    var trElement = document.createElement('tr');
    var tdElement = document.createElement('td');
    tdElement.textContent = this.dailyTotal;
    trElement.appendChild(tdElement);
    createTable.appendChild(trElement);

    document.body.appendChild(createTable);
  },
};


southcenter.display();

var bellevueSquare = {
  location: bellevueSquare,
  minCustHr: 20,
  maxCustHr: 48,
  avgCookiesPerCust: 3.3,
  hourlyTotal: [],
  dailyTotal: 0,
  randCustHour: function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
    console.log(randCustHour());
  },
  randCustHour: function() {
    var result = Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
    console.log(result);
    return result;
  },

  cookieTotal: function() {
    for (var i = 0; i < time.length; i++) {
      var hourly = this.randCustHour() * this.avgCookiesPerCust;
      this.hourlyTotal.push(Math.floor(hourly));
      this.dailyTotal += this.hourlyTotal[i];
      console.log(this.dailyTotal);
    }
  },
  display: function() {
    this.cookieTotal();
    var createTable = document.createElement('table');
    var trElement = document.createElement('tr');

    for (var i = 0; i < this.hourlyTotal.length; i++) {
      var thElement = document.createElement('th');
      thElement.textContent = time[i];
      trElement.appendChild(thElement);
    }
    createTable.appendChild(trElement);
    var trElement = document.createElement('tr');
    var tdElement = document.createElement('td');
    tdElement.textContent = this.location;
    trElement.appendChild(tdElement);
    createTable.appendChild(trElement);

    for(var i = 1; i < 9; i++) {
      var tdElement = document.createElement('td');
      tdElement.textContent = this.hourlyTotal[i];
      trElement.appendChild(tdElement);
    }
    var trElement = document.createElement('tr');
    var tdElement = document.createElement('td');
    tdElement.textContent = this.location;
    trElement.appendChild(tdElement);
    createTable.appendChild(trElement);

    var trElement = document.createElement('tr');
    var tdElement = document.createElement('td');
    tdElement.textContent = this.dailyTotal;
    trElement.appendChild(tdElement);
    createTable.appendChild(trElement);

    document.body.appendChild(createTable);
  },
};

bellevueSquare.display();

var alki = {
  location: alki,
  minCustHr: 3,
  maxCustHr: 24,
  avgCookiesPerCust: 2.6,
  hourlyTotal: [],
  dailyTotal: 0,

  randCustHour: function() {
    var result = Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
    console.log(result);
    return result;
  },

  cookieTotal: function() {
    for (var i = 0; i < time.length; i++) {
      var hourly = this.randCustHour() * this.avgCookiesPerCust;
      this.hourlyTotal.push(Math.floor(hourly));
      this.dailyTotal += this.hourlyTotal[i];
      console.log(this.dailyTotal);
    }
  },
    display: function() {
    this.cookieTotal();
    var createTable = document.createElement('table');
    var trElement = document.createElement('tr');

    for (var i = 0; i < this.hourlyTotal.length; i++) {
      var thElement = document.createElement('th');
      thElement.textContent = time[i];
      trElement.appendChild(thElement);
    }
    createTable.appendChild(trElement);
    var trElement = document.createElement('tr');
    var tdElement = document.createElement('td');
    tdElement.textContent = this.location;
    trElement.appendChild(tdElement);
    createTable.appendChild(trElement);

    for(var i = 1; i < 9; i++) {
      var tdElement = document.createElement('td');
      tdElement.textContent = this.hourlyTotal[i];
      trElement.appendChild(tdElement);
    }
    var trElement = document.createElement('tr');
    var tdElement = document.createElement('td');
    tdElement.textContent = this.location;
    trElement.appendChild(tdElement);
    createTable.appendChild(trElement);

    var trElement = document.createElement('tr');
    var tdElement = document.createElement('td');
    tdElement.textContent = this.dailyTotal;
    trElement.appendChild(tdElement);
    createTable.appendChild(trElement);

    document.body.appendChild(createTable);
  },
};

 alki.display();
