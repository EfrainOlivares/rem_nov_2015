 
function remove_destroyers(jobs_list) {
  new_jobs_list = _.reject(jobs_list, function(i) {
    return i["name"].match(/^Z|000|^update_/);
  }); 
  return new_jobs_list
} 

function tabulate(data, columns) {

    // append the header row
    d3.select("#container").select("table").select("thead").select("tr")
        .selectAll("th")
        .data(columns)
        .enter()
        .append("th")
        .text(function(column) { return column; });

    // create a row for each object in the data
    d3.select("#container").select("table").select("tbody").selectAll("tr")
        .data(data)
        .enter()
        .append("tr")
        .selectAll("td")
        .data(function(row) {
            return columns.map(function(column) {
                console.log(row[column]);
                return {column: column, value: row[column]};
            });
        })
        .enter()
        .append("td")
        .text(function(d) { return d.value; });


    // exit header info
    d3.select("#container").select("table").select("thead").select("tr")
        .selectAll("th")
        .data(columns)
        .exit()
        .remove();

    // exit row info
//    rows.selectAll("tr")
//        .data(data)
//        .exit()
//        .remove(); 

}


function list(data) {
  d3.select('body').selectAll('p')
    .data(data)
    .enter()
    .append('p');


  d3.select('body').selectAll('p')
    .data(data)
    .text(function(d) {
      return d;
    });

  d3.select('body').selectAll('p')
    .data(data)
    .exit()
    .remove();
}


function simple_table(data, headers) {
  d3.select('body').select('table').select('thead').select('tr').selectAll('td')
    .data(data)
    .enter()
    .append('td');
 
  d3.select('body').select('table').select('thead').select('tr').selectAll('td')
    .data(data)
    .text(function(d) {
      return d;
    });

  d3.select('body').select('table').select('thead').select('tr').selectAll('td')
    .data(data)
    .exit()
    .remove();
}

function html_color(jenkins_color) {
  var html_color = ''
  switch(jenkins_color) {
    case "red_anime":
      html_color = 'lightred';
      break;
    case "blue_anime":
      html_color = 'lightblue';
      break;
    case "notbuilt":
      html_color = 'gray';
      break;
    case "blue": 
      html_color = 'blue';
      break;
    case "red": 
      html_color = 'red'; 
      break;
  }
  return html_color;
}
 



