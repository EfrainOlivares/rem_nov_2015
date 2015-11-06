function loadjson()
{
  //$.ajax({url: "http://173.255.114.32:8080/api/python?pretty=true"}).then(function(response){
  //  console.log("AAA", response)
  //});
  return $.ajax({url: "http://104.154.75.139:8080/api/json?pretty=true", async: false}).responseText
}
 
function remove_destroyers(jobs_list) {
  new_jobs_list = _.reject(jobs_list, function(i) {
    return i["name"].match(/^Z|000|^update_/);
  }); 
  return new_jobs_list
} 
