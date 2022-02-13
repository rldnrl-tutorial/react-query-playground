import axios from 'axios'
import { BASE_URL } from './config'

export type UpdatePostForm = {
  postId: number
  data: {
    title: string
  }
}

const updatePost = async (updateForm: UpdatePostForm) => {
  const { postId, data } = updateForm
  const response = await axios.patch(`${BASE_URL}/posts/${postId}`, data)
  return response.data
}

export default updatePost
