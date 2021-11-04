import * as api from '../services/api';

const checkExistClient = async (email) => {
  const clients = await api.get('clients');
  const result = clients.find((client) => client.email === email);
  return result;
};

export default checkExistClient;
