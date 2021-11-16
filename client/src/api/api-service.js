const url = "http://localhost:4000";

function fetchRequest(path, options) {
  return fetch(url + path, options)
    .then((res) => (res.status < 400 ? res : Promise.reject()))
    .then((res) => (res.status !== 204 ? res.json() : res)) // 204 - No content
    .catch((err) => {
      console.error("Error", err);
    });
}
// Company's get and post functions
function getCompanyProfile(id) {
  return fetchRequest(`/company/${id}`);
}

function postCompanyProfile(body) {
  const { name, city, goods } = body.company;
  return fetchRequest("/company", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      city,
      goods,
    }),
  });
}

// Driver's get and post functions
function getDriverProfile(id) {
  return fetchRequest(`/driver/${id}`);
}

function postDriverProfile(body) {
  const { name, city, job, time } = body.driver;
  return fetchRequest("/driver", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      city,
      job,
      time,
    }),
  });
}

// New job get and post function
function getJobs(companyId) {
  return fetchRequest(`/company/${companyId}/jobs`);
}

function postNewJob(body, companyId) {
  const { size, time, distance, description } = body.job;
  return fetchRequest(`/company/${companyId}/jobs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      //   companyId: companyId,
      size,
      time,
      distance,
      description,
    }),
  });
}

const ApiService = {
  getCompanyProfile,
  postCompanyProfile,
  getDriverProfile,
  postDriverProfile,
  getJobs,
  postNewJob,
};

export default ApiService;
