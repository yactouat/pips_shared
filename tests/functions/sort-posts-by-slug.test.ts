import { BlogPostStatusType } from "./../../src/types";

import sortPostsBySlug from "./../../src/functions/sort-posts-by-slug";

describe("sortPostsBySlug", () => {
  test("should sort posts by slug alphabetically", () => {
    const inputPosts = [
      {
        date: "2023-04-08",
        slug: "c",
        title: "C",
        status: "draft" as BlogPostStatusType,
      },
      {
        date: "2023-04-07",
        slug: "a",
        title: "A",
        status: "draft" as BlogPostStatusType,
      },
      {
        date: "2023-04-08",
        slug: "b",
        title: "B",
        status: "draft" as BlogPostStatusType,
      },
    ];
    const expected = [
      {
        date: "2023-04-07",
        slug: "a",
        title: "A",
        status: "draft" as BlogPostStatusType,
      },
      {
        date: "2023-04-08",
        slug: "b",
        title: "B",
        status: "draft" as BlogPostStatusType,
      },
      {
        date: "2023-04-08",
        slug: "c",
        title: "C",
        status: "draft" as BlogPostStatusType,
      },
    ];
    const actual = sortPostsBySlug(inputPosts);
    expect(actual[0].slug).toBe(expected[0].slug);
    expect(actual[1].slug).toBe(expected[1].slug);
    expect(actual[2].slug).toBe(expected[2].slug);
  });
});
