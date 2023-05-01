const postProcessBlogPostImagesUrls = (
  blogPostStr: string,
  imagesBaseUrl: string
): string => {
  return blogPostStr
    .replace(
      /<img src="\.\/\.\.\/images/g,
      '<img class="content-images" src="' + imagesBaseUrl
    )
    .replace(
      /<img src="\.\.\/images/g,
      '<img class="content-images" src="' + imagesBaseUrl
    );
};

export default postProcessBlogPostImagesUrls;
