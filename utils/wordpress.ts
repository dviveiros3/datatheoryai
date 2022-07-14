import { WP_REST_API_Posts } from "wp-types";

const BASE_URL = "https://wp-backend.datatheoryai.com/wp-json/wp/v2";

export async function getPosts() {
  const response = await fetch(BASE_URL + "/posts?_embed");
  const posts: Promise<WP_REST_API_Posts> = await response.json();
  return posts;
}

export async function getPostById(slug: string) {
  const posts = await getPosts();
  const postArray = posts.filter((post) => post.id.toString() === slug);
  const post = postArray.length > 0 ? postArray[0] : null;
  return post;
}

export async function getProjects() {
  const response = await fetch(BASE_URL + "/project?_embed");
  const projects: Promise<WP_REST_API_Posts> = await response.json();
  return projects;
}

export async function getProject(slug: string) {
  const projects = await getProjects();
  const projectArray = projects.filter(
    (project) => project.id.toString() === slug
  );
  const project = projectArray.length > 0 ? projectArray[0] : null;
  return project;
}

export async function getSlugs(postType: string) {
  let items: WP_REST_API_Posts = [];
  switch (postType) {
    case "posts":
      items = await getPosts();
      break;
    case "projects":
      items = await getProjects();
      break;
  }
  const itemSlugs = items.map((item) => {
    return {
      params: {
        slug: item.slug,
      },
    };
  });
  return itemSlugs;
}
