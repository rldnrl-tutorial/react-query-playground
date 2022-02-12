import axios from "axios";
import { BASE_URL } from "./config";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const fetchPosts = async () => {
  const response = await axios.get<Post[]>(`${BASE_URL}/posts/?_limit=10&_page=0`);

  return response.data;
};

export default fetchPosts;
 