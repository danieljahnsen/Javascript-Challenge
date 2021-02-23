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