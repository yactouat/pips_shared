import axios from "axios";
import { BASE_URL } from "../constants";
import { BlogPostDto } from "../dtos";

const getPublishedPostData = async (slug: string): Promise<BlogPostDto> => {
  const postDataAPICall = await axios.get(
    `${BASE_URL}blog-posts/published/${slug}`
  );
  const postData = postDataAPICall.data.data;
  return postData;
};

export default getPublishedPostData;
