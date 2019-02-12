'use strict';

var firstAndPike = {
  location: '1st and Pike',
  min_customers: 23,
  max_customers: 65,
  average_cookies: 6.3,
};

/*var seatacAndAirport = {
  location: 'SeaTac and Airport',
  min_customers: 3,
  max_customers: 24,
  average_cookies: 1.2 
};

var seattleCenter = {
  location: 'Seattle Center',
  min_customers: 11,
  max_customers: 38,
  average_cookies: 3.7 
};

var capitolHill = {
  location: 'Capitol Hill',
  min_customers: 20,
  max_customers: 38,
  average_cookies: 2.3 
};

var alki = {
  location: 'Alki',
  min_customers: 2,
  max_customers: 13,
  average_cookies: 4.6 
};
*/
// by the hour, random number of customers
// multiply customers by average number of cookies and round up with final number
// keep a running total per store of number of cookies sold.


function calculateHourlyCustomers(store){
  var num_of_cust = Math.floor(Math.random() * (store.max_customers - store.min_customers + 1));
  var num_of_cookies = num_of_cust * store.average_cookies;
  var totalCookies = Math.ceil(num_of_cookies);
  console.log(totalCookies);
}

calculateHourlyCustomers(firstAndPike);


