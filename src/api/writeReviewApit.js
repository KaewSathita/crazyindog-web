import axios from '../config/axios';

export const createReview  = ({title, shortDesc, posterImage, description, category}) => axios.post('/create-review',{title, shortDesc, posterImage, description, category})

