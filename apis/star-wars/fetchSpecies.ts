import axios from 'axios'

export interface FetchSpeciesResponse {
  count: number
  next: string
  previous: null
  results: Result[]
}

export interface Result {
  name: string
  classification: string
  designation: Designation
  average_height: string
  skin_colors: string
  hair_colors: string
  eye_colors: string
  average_lifespan: string
  homeworld: null | string
  language: string
  people: string[]
  films: string[]
  created: string
  edited: string
  url: string
}

export enum Designation {
  Reptilian = 'reptilian',
  Sentient = 'sentient',
}

const fetchSpecies = async (url: string) => {
  const response = await axios.get<FetchSpeciesResponse>(url)
  return response.data
}

export default fetchSpecies
