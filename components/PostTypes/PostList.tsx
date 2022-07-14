import { WP_REST_API_Post, WP_REST_API_Posts } from "wp-types";
import { Divider, useMantineTheme } from "@mantine/core";
import Post from "./Post";

const PostList = ({ posts }: { posts: WP_REST_API_Posts }) => {
  const theme = useMantineTheme();
  const jsxPosts = posts.map((post: WP_REST_API_Post) => {
    if (post) {
      return (
        <div key={post.id}>
          <Divider my="lg"  />
          <Post postData={post} />
        </div>
      );
    }
    return undefined;
  });
  return <div style={{paddingBottom: "200px"}}>{jsxPosts}</div>;
};

export default PostList;
