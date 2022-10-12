import axios from 'axios'
import SubRedditResponse from '../models/SubRedditResponse'

export const getSubrredit = (url: string) => {
  return axios.get(url).then((response) => response.data)
}
