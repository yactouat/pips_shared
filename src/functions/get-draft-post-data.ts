import axios from "axios";
import { BASE_URL } from "../constants";
import { BlogPostDto } from "../dtos";

const getDraftPostData = async (
  slug: string,
  token: string
): Promise<BlogPostDto> => {
  const postDataAPICall = await axios.get(
    `${BASE_URL}blog-posts/drafts/${slug}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const postData = postDataAPICall.data.data;
  return postData;
};

export default getDraftPostData;
