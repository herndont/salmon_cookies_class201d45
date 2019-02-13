'use strict';

var firstAndPike = {
  location: '1st and Pike',
  min_customers_per_hr: 23,
  max_customers_per_hr: 65,
  average_cookies_per_cust: 6.3,
};

var seatacAndAirport = {
  location: 'SeaTac and Airport',
  min_customers_per_hr: 3,
  max_customers_per_hr: 24,
  average_cookies_per_cust: 1.2,
};

var seattleCenter = {
  location: 'Seattle Center',
  min_customers_per_hr: 11,
  max_customers_per_hr: 38,
  average_cookies_per_cust: 3.7,
};

var capitolHill = {
  location: 'Capitol Hill',
  min_customers_per_hr: 20,
  max_customers_per_hr: 38,
  average_cookies_per_cust: 2.3,
};

var alki = {
  location: 'Alki',
  min_customers_per_hr: 2,
  max_customers_per_hr: 13,
  average_cookies_per_cust: 4.6,
};

// by the hour, random number of customers
// multiply customers by average number of cookies and round up with final number
// keep a running total per store of number of cookies sold.

var stores = [firstAndPike, seatacAndAirport, seattleCenter, capitolHill, alki];

function cookiesPerHourRnd(store){
  var num_of_cust_per_hr = Math.floor(Math.random() * (store.max_customers_per_hr - store.min_customers_per_hr + 1));
  var num_of_cookies_per_hr = num_of_cust_per_hr * store.average_cookies_per_cust;
  var totalCookies_per_hr_rounded = Math.ceil(num_of_cookies_per_hr);

  //above is the total cookies per hour rounded up to the next cookie.


  var myElement2 = document.getElementById('patHeader');
  var li_el1 = document.createElement('li');
  li_el1.textContent =((i) + ':00  ') + totalCookies_per_hr_rounded;
  myElement2.appendChild(li_el1);

  return totalCookies_per_hr_rounded;
}

for (var j = 0; j < stores.length; j++ ){
  var store = stores[j];
  var total = 0;


  var myElement = document.getElementById('patHeader');
  var h2_el = document.createElement('h2');
  h2_el.textContent = store.location;
  myElement.appendChild(h2_el);

  for (var i=6; i < 20; i++){
    total = total + cookiesPerHourRnd(store);
  }

  var myElement1 = document.getElementById('patHeader');
  var li_el15 = document.createElement('li');
  li_el15.textContent = 'Closing Total' + total;
  myElement1.appendChild(li_el15);
}

