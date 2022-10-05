import axios from '../config/axios';

export const updateProfileImg = input => axios.post('/users',input)