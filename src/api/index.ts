import axios from "axios"

export const API  = "http://localhost:3500"

export const getAll = (url: string) => {
    return axios
        .get(`${API}/${url}`)
        .then(response => response.data)
}

export const getById = (id: number, url: string) => {
    return axios
        .get(`${API}/${url}/${id}`)
        .then(response => response.data)
}

export const createItem = (data: string[], url: string) => {
    return axios.post(`${API}/${url}, ${data}`)
}
