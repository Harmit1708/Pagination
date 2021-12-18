const url =
  "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json";
// function api_data(url) {
//   let request = new XMLHttpRequest();
//   request.open("GET", url, true);
//   request.onload = () => {
//     let data = JSON.parse(request.responseText);
//     let table = document.getElementById("table_1");
//     generateTableHead(table, data);
//     generateTable(table, data);
//     // table_format(data);
//   };
//   request.send();
// }

// api_data(url);

function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  keys = Object.keys(data[0]);
  for (let key of keys) {
    console.log(key);
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  let i = 0;
  for (let element of data) {
    i++;
    if (i == 11) {
      break;
    }
    let row = table.insertRow();
    debugger;
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

function myfunction(x) {
  let request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.onload = () => {
    let data = JSON.parse(request.responseText);
    document.getElementById("table_1").innerHTML = "";
    const page_length = 10;
    data = data.splice((Number(x) - 1) * page_length, Number(x) * page_length);
    let table = document.getElementById("table_1");
    generateTableHead(table, data);
    generateTable(table, data);
  };
  request.send();
}

myfunction(1);
