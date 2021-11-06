const URL = 'https://crudcrud.com/api/f5f2d99dd78a402087d2fadca60f9f83';

export const create = async (endpoint, data) => {
  const response = await fetch(`${URL}/${endpoint}`, {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    method: 'POST',
    body: JSON.stringify(data),
  });
  const created = await response.json();
  return created;
};

export const get = async (endpoint) => {
  const response = await fetch(`${URL}/${endpoint}`);
  const data = await response.json();
  return data;
};

export const getById = async (endpoint, id) => {
  const response = await fetch(`${URL}/${endpoint}/${id}`);
  const data = await response.json();
  return data;
};

export const edit = async (endpoint, id, data) => {
  const response = await fetch(`${URL}/${endpoint}/${id}`, {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    method: 'PUT',
    body: JSON.stringify(data),
  });
  const updated = await response.json();
  return updated;
};

export const remove = async (endpoint, id) => {
  await fetch(`${URL}/${endpoint}/${id}`, {
    method: 'DELETE',
  });
};
