import apiUrl from '../apiConfig'
import axios from 'axios'

// CREATE food
// Creates a food data
export const createFood = (user, food) => {
  return axios({
    method: 'POST',
    url: `${apiUrl}/foods`,
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: food
  })
}
// Get Index
export const foodIndex = () => {
  return axios({
    url: `${apiUrl}/foods`,
    method: 'GET'
  })
}

// GET SHOW
// Show a single food data
export const foodShow = (user, foodId) => {
  // console.log(foodId, user)
  return axios({
    url: `${apiUrl}/blogs/${foodId}`,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

// DELETE Food data
// Deletes a single food data
export const foodDelete = (user, foodId) => {
  return axios({
    url: `${apiUrl}/foods/${foodId}/`,
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

// UPDATE food data
// Updates a single food
export const foodUpdate = (user, food, foodId) => {
  // console.log(food)
  return axios({
    url: `${apiUrl}/foods/${foodId}/`,
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      food: food
    }
  })
}
