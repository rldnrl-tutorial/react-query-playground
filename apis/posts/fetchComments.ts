import axios from 'axios'
import { BASE_URL } from './config'

export type Comment = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

const fetchComments = async (postId: number) => {
  const response = await axios.get<Comment[]>(`${BASE_URL}/comments?postId=${postId}`)

  return response.data
}

export default fetchComments
