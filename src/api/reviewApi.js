import axios from '../config/axios';

export const getAll = () => axios.get('reviews');
export const getById = (id) => axios.get(`reviews/${id}`);
export const create = (payload) => axios.post('reviews/create-review', payload);
export const update = (id, payload) => axios.put(`reviews/${id}`, payload);
export const destroy = (id) => axios.delete(`reviews/${id}`);

