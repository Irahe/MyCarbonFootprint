import axios from 'axios';

export const BASE_URL = 'http://localhost:5005/';
// export const BASE_URL = 'https://api.irahe.com.br/my_footprint_api/';

const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' }
});

const callApi = async (service, parameter) => {
  const response = await api(service.url, {
    method: service.type,
    data: parameter
  });
  if (response && response.data && response.data.status === 'success') {
    return response.data.data;
  }
  console.log(response);
  return false;
};

export default callApi;
