 
// Given a list of jobs, removes all destroyers and custom utility jobs and returns regular jobs
function remove_destroyers(jobs_list) {
  new_jobs_list = _.reject(jobs_list, function(i) {
    return i["name"].match(/^Z|000|^update/);
  }); 
  return new_jobs_list
} 

// Given a list of jobs, returns the count of jobs that were successful
function successful_jobs_count(jobs_list) {
  var success_count = 0;
  sucessful_jobs = _.filter(jobs_list, function(i) {
    return i["color"].match(/blue/)
  });
  return successful_jobs.count
}

// Given a list of jbos, returns an array of jobs just for that cloud. Not sure if this will work. Cloud 
// parameter has to be the exact term used for filtering 
function jobs_by_cloud(jobs_list, cloud) {
  cloud_jobs = _.filter(jobs_list, function(i) {
    return i["name"].match(/cloud/)
  });
  cloud_jobs_filtered = _.reject(cloud_jobs, function(j) {
    return i["name"].match(/^Z|000|^update/);
  })
  return cloud_jobs_filtered
}
