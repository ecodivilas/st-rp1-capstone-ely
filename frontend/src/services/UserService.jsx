import axios from "axios"
const baseURL = "http://localhost:8000/users"

export async function getAllUsers() {
    try {
        const users = await axios.get(baseURL)
        return users.data
    } catch (error) {
        console.log('Error: ', error)
    }
}

export async function createUser(user) {
    try {
        const createdUser = await axios.post(baseURL, user)
        return createdUser.data
    } catch (error) {
        console.log('Error: ', error)
    }
}

export async function editUser(user) {
    try {
        const updatedUser = await axios.put(`${baseURL}/${user.user_id}`, user)
        return updatedUser.data
    } catch (error) {
        console.log('Error: ', error)
    }
}

export async function deleteUser(user_id) {
    try {
        const deletedUser = await axios.delete(`${baseURL}/${user_id}`)
        return deletedUser.data
    } catch (error) {
        console.log('Error: ', error)
    }
}