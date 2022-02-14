import axios from 'axios'

const fetchSpecies = async (url: string) => {
  const response = await axios.get(url)
  return response.data
}

export default fetchSpecies
