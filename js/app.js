'use strict';

var StoreFront =function (location, min_customers_per_hr, max_customers_per_hr, average_cookies_per_cust){
  this.location = location;
  this.min_customers_per_hr = min_customers_per_hr;
  this.max_customers_per_hr = max_customers_per_hr;
  this.average_cookies_per_cust = average_cookies_per_cust;
};

//store objects
var firstAndPike = new StoreFront ('1st and Pike', 23, 65, 6.3);
var seatacAndAirport = new StoreFront ('SeaTac and Airport', 3, 24, 1.2);
var seattleCenter = new StoreFront ('Seattle Center', 11, 38, 3.7);
var capitolHill = new StoreFront ('Capitol Hill', 20, 38, 2.3);
var alki = new StoreFront ('Alki', 2, 13, 4.6);
//header with the store times
var myElement = document.getElementById('patHeader');
var tr_el1 = document.createElement('tr');
var th_el2 = document.createElement('th');
myElement.appendChild(tr_el1);
myElement.appendChild(th_el2);

//store time loop to create times in the header
for (var k=6; k <20; k++){
  var th_el1 = document.createElement('th');
  th_el1.textContent = ((k) + ':00');
  myElement.appendChild(th_el1);
}
//element created for the total cell for rows
var th_el3 = document.createElement('th');
th_el3.textContent = ('TOTAL');
myElement.appendChild(th_el3);

//total footer identifier for columns

for (var l=6; l <20; l++){
  var td_el4 = document.createElement('td');
  var tfoot_el = document.createElement('tfoot');
  tfoot_el.textContent = 'dumb';
  myElement.appendChild(td_el4);
  myElement.appendChild(tfoot_el);
}


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
StoreFront.prototype.render2 = function() {
  var td_el =document.createElement('td');
  td_el.textContent = this.location;
};

StoreFront.prototype.render = function(){
  var total = 0;
  var tr_el = document.createElement('tr');
  myElement.appendChild(tr_el);

  var td_el =document.createElement('td');
  td_el.textContent = this.location;
  myElement.appendChild(td_el);

  for (var i=6; i < 20; i++){
    total = total + cookiesPerHourRnd(this);
  }
  var td_el3 = document.createElement('td');
  td_el3.textContent = total;
  myElement.appendChild(td_el3);
};

firstAndPike.render();
seatacAndAirport.render();
seattleCenter.render();
capitolHill.render();
alki.render();

var store_form = document.getElementById('store_input_form');

var handle_form_input = function(form_event){
  form_event.preventDefault();
  var location = event.target.storeName.value;
  var min_Customers = event.target.minCust.value;
  var max_Customers = event.target.maxCust.value;
  var average_Cookies = event.target.aveCookies.value;

  var newStore = new StoreFront(location, min_Customers, max_Customers, average_Cookies);

  newStore.render();
  newStore.render2();
};

store_form.addEventListener('submit', handle_form_input);

//style all of the customer and internal facing pages.
//make sure that input information flows into a new object in the table
//create footer row for the table
