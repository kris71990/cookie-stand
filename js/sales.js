'use strict';

var hrs = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var table = document.getElementById('sales-table');

// define Store object
function Store(location, maxCust, minCust, avgSalesPerCust){
  this.location = location;
  this.maxCust = maxCust;
  this.minCust = minCust;
  this.avgSalesPerCust = avgSalesPerCust;
}

// methods on the prototype object used to calculate data
Store.prototype.avgCustVolume = function() {
  return Math.ceil(Math.random() * (this.maxCust - this.minCust) + this.minCust);
};

Store.prototype.soldCookiesPerHour = function() {
  return this.avgCustVolume() * this.avgSalesPerCust;
};

Store.prototype.hourlyData = function() {
  var hourlyTotals = [];
  var totalCookies = 0;
  for (var i = 0; i < hrs.length; i++) {
    hourlyTotals.push(Math.round(this.soldCookiesPerHour()));
    totalCookies += hourlyTotals[i];
  }
  return [hourlyTotals, totalCookies];
};

Store.prototype.test_render = function() {
  var trEl = document.createElement('tr');
  for (var i = 0; i < this.hourlyData()[0].length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.hourlyData()[0][i];
    trEl.appendChild(tdEl);
  }
  table.appendChild(trEl);
};




















// method appends data in list of its own creation, to be rendered when called below

Store.prototype.render = function() {
  var ulEl = document.getElementById(this.location);
  for (var i = 0; i < this.hourlyData()[0].length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = hrs[i] + ': ' + this.hourlyData()[0][i] + ' cookies';
    ulEl.appendChild(liEl);
  }

  var totalLiEl = document.createElement('li');
  totalLiEl.textContent = 'Total: ' + this.hourlyData()[1] + ' cookies';
  totalLiEl.className = 'total';
  ulEl.appendChild(totalLiEl);
};


// instantiate objects for each store location
var downtown = new Store('downtown', 65, 23, 6.3);
var seatac = new Store('seatac', 24, 3, 1.2);
var seattleCenter = new Store('seattle-center', 38, 11, 3.7);
var capitolHill = new Store('capitol-hill', 38, 20, 2.3);
var alki = new Store('alki', 16, 2, 4.6);

// call render function of each object to render data
downtown.render();
seatac.render();
seattleCenter.render();
capitolHill.render();
alki.render();

downtown.test_render();
seatac.test_render();
seattleCenter.test_render();
capitolHill.test_render();
alki.test_render();



