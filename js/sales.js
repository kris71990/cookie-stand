'use strict';

var downtown = {
  hrs: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '6pm', '8pm'],
  minCust: 23,
  maxCust: 65,
  avgSalesPerCust: 6.3,
  avgCustVolume: function(maxCust, minCust) {
    return Math.ceil(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  
  soldCookiesPerHour: function() {
    return this.avgCustVolume() * this.avgSalesPerCust;
  },

  hourlyData: function() {
    var hourlyTotals = [];
    var totalCookies = 0;
    for (var i = 0; i < this.hrs.length; i++) {
      hourlyTotals.push(Math.round(this.soldCookiesPerHour()));
      totalCookies += hourlyTotals[i];
    }
    return [hourlyTotals, totalCookies];
  },

  render: function() {
    var ulEl = document.getElementById('downtown');
    for (var i = 0; i < this.hourlyData()[0].length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.hrs[i] + ': ' + this.hourlyData()[0][i] + ' cookies';
      ulEl.appendChild(liEl);
    }

    var totalLiEl = document.createElement('li');
    totalLiEl.textContent = 'Total: ' + this.hourlyData()[1] + ' cookies';
    totalLiEl.className = 'total';
    ulEl.appendChild(totalLiEl);
  }
};

var seatac = {
  hrs: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '6pm', '8pm'],
  minCust: 3,
  maxCust: 24,
  avgSalesPerCust: 1.2,
  avgCustVolume: function(maxCust, minCust) {
    return Math.ceil(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  
  soldCookiesPerHour: function() {
    return this.avgCustVolume() * this.avgSalesPerCust;
  },

  hourlyData: function() {
    var hourlyTotals = [];
    var totalCookies = 0;
    for (var i = 0; i < this.hrs.length; i++) {
      hourlyTotals.push(Math.round(this.soldCookiesPerHour()));
      totalCookies += hourlyTotals[i];
    }
    return [hourlyTotals, totalCookies];
  },

  render: function() {
    var ulEl = document.getElementById('seatac');
    for (var i = 0; i < this.hourlyData()[0].length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.hrs[i] + ': ' + this.hourlyData()[0][i] + ' cookies';
      ulEl.appendChild(liEl);
    }

    var totalLiEl = document.createElement('li');
    totalLiEl.textContent = 'Total: ' + this.hourlyData()[1] + ' cookies';
    totalLiEl.className = 'total';
    ulEl.appendChild(totalLiEl);
  }
};

var seattleCenter = {
  hrs: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '6pm', '8pm'],
  minCust: 11,
  maxCust: 38,
  avgSalesPerCust: 3.7,
  avgCustVolume: function(maxCust, minCust) {
    return Math.ceil(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  
  soldCookiesPerHour: function() {
    return this.avgCustVolume() * this.avgSalesPerCust;
  },

  hourlyData: function() {
    var hourlyTotals = [];
    var totalCookies = 0;
    for (var i = 0; i < this.hrs.length; i++) {
      hourlyTotals.push(Math.round(this.soldCookiesPerHour()));
      totalCookies += hourlyTotals[i];
    }
    return [hourlyTotals, totalCookies];
  },

  render: function() {
    var ulEl = document.getElementById('seattle-center');
    for (var i = 0; i < this.hourlyData()[0].length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.hrs[i] + ': ' + this.hourlyData()[0][i] + ' cookies';
      ulEl.appendChild(liEl);
    }

    var totalLiEl = document.createElement('li');
    totalLiEl.textContent = 'Total: ' + this.hourlyData()[1] + ' cookies';
    totalLiEl.className = 'total';
    ulEl.appendChild(totalLiEl);
  }
};

var capitolHill = {
  hrs: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '6pm', '8pm'],
  minCust: 20,
  maxCust: 38,
  avgSalesPerCust: 2.3,
  avgCustVolume: function(maxCust, minCust) {
    return Math.ceil(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  
  soldCookiesPerHour: function() {
    return this.avgCustVolume() * this.avgSalesPerCust;
  },

  hourlyData: function() {
    var hourlyTotals = [];
    var totalCookies = 0;
    for (var i = 0; i < this.hrs.length; i++) {
      hourlyTotals.push(Math.round(this.soldCookiesPerHour()));
      totalCookies += hourlyTotals[i];
    }
    return [hourlyTotals, totalCookies];
  },

  render: function() {
    var ulEl = document.getElementById('capitol-hill');
    for (var i = 0; i < this.hourlyData()[0].length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.hrs[i] + ': ' + this.hourlyData()[0][i] + ' cookies';
      ulEl.appendChild(liEl);
    }

    var totalLiEl = document.createElement('li');
    totalLiEl.textContent = 'Total: ' + this.hourlyData()[1] + ' cookies';
    totalLiEl.className = 'total';
    ulEl.appendChild(totalLiEl);
  }
}

var alki = {
  hrs: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '6pm', '8pm'],
  minCust: 2,
  maxCust: 16,
  avgSalesPerCust: 4.6,
  avgCustVolume: function(maxCust, minCust) {
    return Math.ceil(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  
  soldCookiesPerHour: function() {
    return this.avgCustVolume() * this.avgSalesPerCust;
  },

  hourlyData: function() {
    var hourlyTotals = [];
    var totalCookies = 0;
    for (var i = 0; i < this.hrs.length; i++) {
      hourlyTotals.push(Math.round(this.soldCookiesPerHour()));
      totalCookies += hourlyTotals[i];
    }
    return [hourlyTotals, totalCookies];
  },

  render: function() {
    var ulEl = document.getElementById('alki');
    for (var i = 0; i < this.hourlyData()[0].length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.hrs[i] + ': ' + this.hourlyData()[0][i] + ' cookies';
      ulEl.appendChild(liEl);
    }

    var totalLiEl = document.createElement('li');
    totalLiEl.textContent = 'Total: ' + this.hourlyData()[1] + ' cookies';
    totalLiEl.className = 'total';
    ulEl.appendChild(totalLiEl);
  }
}

downtown.render();
seatac.render();
seattleCenter.render();
capitolHill.render();
alki.render();