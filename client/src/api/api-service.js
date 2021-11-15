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
  return fetchRequest("/company", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: body.event.name,
      city: body.event.city,
      goods: body.event.goods,
    }),
  });
}

// Driver's get and post functions
function getDriverProfile(id) {
  return fetchRequest(`/driver/${id}`);
}

function postDriverProfile(body) {
  return fetchRequest("/driver", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: body.event.name,
      city: body.event.city,
      job: body.event.job,
      time: body.event.time,
    }),
  });
}

// New job get and post function
function getJobs(companyId) {
  return fetchRequest(`/company/${companyId}/jobs`);
}

function postNewJob(body, companyId) {
  console.log(body);
  return fetchRequest(`/company/${companyId}/jobs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      companyId: companyId,
      size: body.event.size,
      time: body.event.time,
      distance: body.event.distance,
      description: body.event.description,
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

// router.get("/company/:id", ctrl.getCompanyProfile);
// router.post("/company", ctrl.postCompanyProfile);
// router.get("/driver/:id", ctrl.getDriverProfile);
// router.post("/driver", ctrl.postDriverProfile);
// router.post("/company/:id/jobs", ctrl.postJob);
