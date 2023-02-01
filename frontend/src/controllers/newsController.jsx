import axios from 'axios'
import { baseURL } from '../config/config'

export const GetNews = async (setNews, value) => {
  try {
    const response = await axios.get(`${baseURL}/news?filter=${value}`)
    await setNews(response.data)
  } catch (error) {
    console.log(error)
  }
}

export const UpdateNews = async updatedNew => {
  try {
    await axios.patch(`${baseURL}/news/${updatedNew}`)
  } catch (error) {
    console.log(error)
  }
}

export const DeleteNews = async idNew => {
  try {
    await axios.delete(`${baseURL}/news/${idNew}`)
  } catch (error) {
    console.log(error)
  }
}
