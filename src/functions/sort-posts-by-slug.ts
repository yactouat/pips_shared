import { BlogPostMetaDto } from "../dtos";

const sortPostsBySlug = (posts: BlogPostMetaDto[]): BlogPostMetaDto[] => {
  posts.sort((a, b) => {
    return a.slug.localeCompare(b.slug);
  });
  return posts;
};

export default sortPostsBySlug;
