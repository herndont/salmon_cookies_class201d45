'use strict';

function StoreFront(location, min_customers_per_hr, max_customers_per_hr, average_cookies_per_cust){
  this.location = location;
  this.min_customers_per_hr = min_customers_per_hr;
  this.max_customers_per_hr = max_customers_per_hr;
  this.average_cookies_per_cust = average_cookies_per_cust;
}

var firstAndPike = new StoreFront ('1st and Pike', 23, 65, 6.3);
var seatacAndAirport = new StoreFront ('SeaTac and Airport', 3, 24, 1.2);
var seattleCenter = new StoreFront ('Seattle Center', 11, 38, 3.7);
var capitolHill = new StoreFront ('Capitol Hill', 20, 38, 2.3);
var alki = new StoreFront ('Alki', 2, 13, 4.6);

// by the hour, random number of customers
// multiply customers by average number of cookies and round up with final number
// keep a running total per store of number of cookies sold.

var myElement = document.getElementById('patHeader');
var tr_el1 = document.createElement('tr');
var th_el2 = document.createElement('th');
myElement.appendChild(tr_el1);
myElement.appendChild(th_el2);

for (var k=6; k <20; k++){
  var th_el1 = document.createElement('th');
  th_el1.textContent = ((k) + ':00');
  myElement.appendChild(th_el1);
}
var th_el3 = document.createElement('th');
th_el3.textContent = ('TOTAL');
myElement.appendChild(th_el3);

var stores = [firstAndPike, seatacAndAirport, seattleCenter, capitolHill, alki];

function cookiesPerHourRnd(store){
  var num_of_cust_per_hr = Math.floor(Math.random() * (store.max_customers_per_hr - store.min_customers_per_hr + 1));
  var num_of_cookies_per_hr = num_of_cust_per_hr * store.average_cookies_per_cust;
  var totalCookies_per_hr_rounded = Math.ceil(num_of_cookies_per_hr);

  //above is the total cookies per hour rounded up to the next cookie.

  var td_el1 = document.createElement('td');
  td_el1.textContent = totalCookies_per_hr_rounded;
  myElement.appendChild(td_el1);

  return totalCookies_per_hr_rounded;
}
firstAndPike.render = storeName_and_cookiesTotals();
seatacAndAirport.render = storeName_and_cookiesTotals();
seattleCenter.render = storeName_and_cookiesTotals();
capitolHill.render = storeName_and_cookiesTotals();
alki.render = storeName_and_cookiesTotals();

function storeName_and_cookiesTotals(){
  for (var j = 0; j < stores.length; j++ ){
    var store = stores[j];
    var total = 0;

    var tr_el = document.createElement('tr');
    myElement.appendChild(tr_el);

    var td_el =document.createElement('td');
    td_el.textContent = store.location;
    myElement.appendChild(td_el);

    for (var i=6; i < 20; i++){
      total = total + cookiesPerHourRnd(store);
    }
    var td_el3 = document.createElement('td');
    td_el3.textContent = total;
    myElement.appendChild(td_el3);
  }
}

