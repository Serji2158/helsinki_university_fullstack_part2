import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

export const getAll = () => {
  return axios.get(baseUrl)
}

export const create = newPerson => {
  return axios.post(baseUrl, newPerson)
}

export const remove = id => {
  return axios.delete(`${baseUrl}/${id}`, id)
}

export const update = (id, changedContact) => {
  return axios.put(`${baseUrl}/${id}`, changedContact)
}
