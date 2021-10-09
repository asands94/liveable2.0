import api from './apiConfig';

export const getAllArticles = async () => {
  try {
  const url = 'http://localhost:1337'
  const resp = await api.get(`${url}/articles`);
    return resp.data;
  } catch (error) {
    throw error
  }
};

export const getOneArticle = async (id) => {
  try {
  const url = 'http://localhost:1337'
  const resp = await api.get(`${url}/articles/${id}`);
    return resp.data;
  } catch (error) {
        throw error
      }
};