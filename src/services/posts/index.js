import { api } from ".."

export const getPosts = async() => {
    const response = await api.get("/posts?userId=1") 
    return response.data
}