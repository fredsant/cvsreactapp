const BASE_URL = 'http://localhost:3001';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency();

  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  cvs: {
    list() {
      //throw new Error('Not Found');
      //throw new Error('500: Server Error');
        return callApi('/cvs');
    },
    create(cv) {
      //throw new Error ('500: Server Error');
      return callApi(`/cvs`, {
        method: 'POST',
        body: JSON.stringify(cv),
      });
    },
    read(cvId) {
      return callApi(`/cvs/${cvId}`);
    },
    update(cvId, updates) {
      return callApi(`/cvs/${cvId}`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    
    remove(cvId) {
      return callApi(`/cvs/${cvId}`, {
        method: 'DELETE',
      });
    },
  },
};

export default api;