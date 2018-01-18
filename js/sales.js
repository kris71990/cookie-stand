'use strict';

var stores = [];
var hrs = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var locations = ['downtown', 'seatac', 'seattleCenter', 'capitolHill', 'alki'];
var table = document.getElementById('sales-table');
var form = document.getElementById('location-form');


// define Store object
function Store(location, maxCust, minCust, avgSalesPerCust){
  this.location = location;
  this.maxCust = maxCust;
  this.minCust = minCust;
  this.avgSalesPerCust = avgSalesPerCust;
  stores.push(this);
}

// switch statement to map location property to proper readable version to display on table
Store.prototype.mapLocation = function() {
  var tableLocation = '';
  switch(this.location) {
  case 'downtown':
    tableLocation = '1st and Pike';
    return tableLocation;
  case 'seatac':
    tableLocation = 'SeaTac Airport';
    return tableLocation;
  case 'seattleCenter':
    tableLocation = 'Seattle Center';
    return tableLocation;
  case 'capitolHill':
    tableLocation = 'Capitol Hill';
    return tableLocation;
  case 'alki':
    tableLocation = 'Alki';
    return tableLocation;
  default:
    tableLocation = this.location;
    return tableLocation;
  }
};

// methods on the prototype object used to calculate data
Store.prototype.custVolume = function() {
  return Math.ceil(Math.random() * (this.maxCust - this.minCust) + this.minCust);
};

Store.prototype.soldCookiesPerHour = function() {
  return Math.round(this.custVolume() * this.avgSalesPerCust);
};

Store.prototype.locationData = function() {
  var locationTotals = [];
  var totalCookies = 0;
  for (var x = 0; x < hrs.length; x++) {
    locationTotals.push(this.soldCookiesPerHour());
    totalCookies += locationTotals[x];
  }

  return [locationTotals, totalCookies];
};

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
  totals.textContent = 'Hourly Totals';
  trEl.appendChild(totals);

  for (var i = 0; i < hrs.length; i++) {
    var total = 0;
    for (var j = 0; j < stores.length; j++) {
      total += stores[j].locationData()[0][i];
    }

    var tdEl = document.createElement('td');
    tdEl.textContent = total;
    trEl.appendChild(tdEl);
  }

  var grandTotal = document.createElement('td');
  grandTotal.textContent = '--';
  trEl.appendChild(grandTotal);
  table.appendChild(trEl);
}

// instantiate objects for each store location
new Store('downtown', 65, 23, 6.3);
new Store('seatac', 24, 3, 1.2);
new Store('seattleCenter', 38, 11, 3.7);
new Store('capitolHill', 38, 20, 2.3);
new Store('alki', 16, 2, 4.6);

function renderAll() {
  for (var i = 0; i < stores.length; i++) {
    stores[i].render();
  }
}

function addEvent(event) {
  event.preventDefault();

  var newLocation = event.target.location.value;
  var newMaxCust = event.target.maxCust.value;
  var newMinCust = event.target.minCust.value;
  var avgSales = event.target.avgSales.value;

  new Store(newLocation, newMaxCust, newMinCust, avgSales);
  locations.push(newLocation);
  table.innerHTML = '';
  tableHeader();
  renderAll();
  tableFooter();
}

form.addEventListener('submit', addEvent);

tableHeader();
renderAll();
tableFooter();