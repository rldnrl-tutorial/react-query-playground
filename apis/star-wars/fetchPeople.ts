import axios from 'axios'

export type People = {
  name: string
  hair_color: string
  eye_color: string
}

const fetchPeople = async (url: string) => {
  const response = await axios.get<People>(url)
  return response.data
}

export default fetchPeople
