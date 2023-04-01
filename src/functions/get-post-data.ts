import axios from "axios";
import { BlogPostDto } from "../dtos";

const getPostData = async (slug: string): Promise<BlogPostDto> => {
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:8080"
      : "https://api.yactouat.com";
  const postDataAPICall = await axios.get(
    `${baseUrl}/blog-posts/published/${slug}`
  );
  const postData = postDataAPICall.data.data;
  return postData;
};

export default getPostData;
