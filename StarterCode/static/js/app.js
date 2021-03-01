// from data.js
var tableData = data;

// Using the code from Day 3 Activity 3
var tbody = d3.select("tbody");

data.forEach((data) => {
    var row = tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Button event code from day 3 activity 9
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

//Event handler function from day activty 9
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = data.filter(event => event.datetime === inputValue);

  console.log(filteredData);

  //Remove existing tbody for new table
  table1 = d3.select("tbody");
  table1.html("");
  
  //Append the filtered data
  filteredData.forEach((data) => {
    var row = tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};