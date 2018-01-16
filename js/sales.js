'use strict';

var hrs = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var locations = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
var table = document.getElementById('sales-table');

// define Store object
function Store(location, maxCust, minCust, avgSalesPerCust){
  this.location = location;
  this.maxCust = maxCust;
  this.minCust = minCust;
  this.avgSalesPerCust = avgSalesPerCust;
}

// switch statement to map location property to proper readable version to display on table
Store.prototype.mapLocation = function() {
  var tableLocation = '';
  switch(this.location) {
  case 'downtown':
    tableLocation = locations[0];
    return tableLocation;
  case 'seatac':
    tableLocation = locations[1];
    return tableLocation;
  case 'seattle-center':
    tableLocation = locations[2];
    return tableLocation;
  case 'capitol-hill':
    tableLocation = locations[3];
    return tableLocation;
  case 'alki':
    tableLocation = locations[4];
    return tableLocation;
  }
};

// methods on the prototype object used to calculate data
Store.prototype.avgCustVolume = function() {
  return Math.ceil(Math.random() * (this.maxCust - this.minCust) + this.minCust);
};

Store.prototype.soldCookiesPerHour = function() {
  return Math.round(this.avgCustVolume() * this.avgSalesPerCust);
};

Store.prototype.locationData = function() {
  var hourlyTotals = [];
  var totalCookies = 0;
  for (var x = 0; x < hrs.length; x++) {
    hourlyTotals.push(this.soldCookiesPerHour());
    totalCookies += hourlyTotals[x];
  }

  return [hourlyTotals, totalCookies];
};

function tableHeader() {
  var trEl = document.createElement('tr');
  var emptyThEl = document.createElement('th');
  trEl.appendChild(emptyThEl);

  for (var i = 0; i < hrs.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = hrs[i];
    trEl.appendChild(thEl);
  }
  var totalEl = document.createElement('th');
  totalEl.textContent = 'Daily Location Total';
  trEl.appendChild(totalEl);
  table.appendChild(trEl);
}

function tableFooter() {
  var trEl = document.createElement('tr');
  var totals = document.createElement('td');
  totals.textContent = 'Totals';
  trEl.appendChild(totals);

  for (var i = 0; i < hrs.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = '--';
    trEl.appendChild(tdEl);
  }
  var grandTotal = document.createElement('td');
  grandTotal.textContent = '--';
  trEl.appendChild(grandTotal);
  table.appendChild(trEl);
}

Store.prototype.render = function() {
  var singleDataRender = this.locationData();
  var trEl = document.createElement('tr');
  var tdLocationEl = document.createElement('td');
  tdLocationEl.textContent = this.mapLocation();
  trEl.appendChild(tdLocationEl);

  for (var i = 0; i < singleDataRender[0].length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = singleDataRender[0][i];
    trEl.appendChild(tdEl);
  }

  var totalsTdEl = document.createElement('td');
  totalsTdEl.textContent = singleDataRender[1];
  trEl.appendChild(totalsTdEl);
  table.appendChild(trEl);
};

// instantiate objects for each store location
var downtown = new Store('downtown', 65, 23, 6.3);
var seatac = new Store('seatac', 24, 3, 1.2);
var seattleCenter = new Store('seattle-center', 38, 11, 3.7);
var capitolHill = new Store('capitol-hill', 38, 20, 2.3);
var alki = new Store('alki', 16, 2, 4.6);

tableHeader();
downtown.render();
seatac.render();
seattleCenter.render();
capitolHill.render();
alki.render();
tableFooter();