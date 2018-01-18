'use strict';

var hrs = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var locations = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
var table = document.getElementById('sales-table');
var form = document.getElementById('location-form');


// define Store object
function Store(location, maxCust, minCust, avgSalesPerCust){
  this.location = location;
  this.maxCust = maxCust;
  this.minCust = minCust;
  this.avgSalesPerCust = avgSalesPerCust;
  Store.allLocations.push(this);
  this.custEachHour = [];
  this.totalCookies = 0;
}

Store.allLocations = [];

// methods on the prototype object used to calculate data
Store.prototype.custVolume = function() {
  return Math.ceil(Math.random() * (this.maxCust - this.minCust - 1) + this.minCust);
};

Store.prototype.soldCookiesPerHour = function() {
  return Math.round(this.custVolume() * this.avgSalesPerCust);
};

Store.prototype.locationData = function() {
  for (var x = 0; x < hrs.length; x++) {
    this.custEachHour.push(this.soldCookiesPerHour());
    this.totalCookies += this.custEachHour[x];
  }
};

Store.prototype.render = function() {
  this.locationData();
  var trEl = document.createElement('tr');
  var tdLocationEl = document.createElement('td');
  tdLocationEl.textContent = this.location;
  trEl.appendChild(tdLocationEl);

  for (var i = 0; i < this.custEachHour.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.custEachHour[i];
    trEl.appendChild(tdEl);
  }

  var totalsTdEl = document.createElement('td');
  totalsTdEl.textContent = this.totalCookies;
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
    for (var j = 0; j < Store.allLocations.length; j++) {
      total += Store.allLocations[j].custEachHour[i];
    }

    var tdEl = document.createElement('td');
    tdEl.textContent = total;
    trEl.appendChild(tdEl);
  }

  var grandTotalEl = document.createElement('td');
  var grandTotal = 0;
  for (var x in Store.allLocations) {
    grandTotal += Store.allLocations[x].totalCookies;
  }
  grandTotalEl.textContent = grandTotal;
  trEl.appendChild(grandTotalEl);
  table.appendChild(trEl);
}

// instantiate objects for each store location
new Store('1st and Pike', 65, 23, 6.3);
new Store('SeaTac', 24, 3, 1.2);
new Store('Seattle Center', 38, 11, 3.7);
new Store('Capitol Hill', 38, 20, 2.3);
new Store('Alki', 16, 2, 4.6);

function renderAll() {
  for (var i = 0; i < Store.allLocations.length; i++) {
    Store.allLocations[i].render();
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