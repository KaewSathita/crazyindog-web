import axios from "../config/axios";


export const login = ({email, password} )=> axios.post('/auth/login', {email, password})
export const getMe = () => axios.get('./auth/me');
export const register = ({firstName, lastName, penName, petBreed, email, password, confirmPassword} ) => axios.post('/auth/register', {
  firstName, lastName, penName, petBreed, email, password, confirmPassword
})