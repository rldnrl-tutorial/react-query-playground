import axios from 'axios'
import { BASE_URL } from './config'

const deletePost = async (postId: number) => {
  const response = await axios.delete(`${BASE_URL}/posts/${postId}`)
  return response.data
}

export default deletePost
