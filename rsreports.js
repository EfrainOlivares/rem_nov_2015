 
function remove_destroyers(jobs_list) {
  new_jobs_list = _.reject(jobs_list, function(i) {
    return i["name"].match(/^Z|000|^update_/);
  }); 
  return new_jobs_list
} 
