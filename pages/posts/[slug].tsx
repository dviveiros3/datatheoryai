import Link from "next/link";
import { getPostById, getSlugs } from "../../utils/wordpress";
import { WP_REST_API_Post } from "wp-types";
import { GetStaticPropsContext } from "next";
import { Button, Card, Center, Container, Stack, Title } from "@mantine/core";
import parse from "html-react-parser";

export default function PostPage({ post }: { post: WP_REST_API_Post }) {
  return (
    <Container pt="xl">
      <Stack align="center">
        {post && <Title pb="xl">{parse(post.title.rendered)}</Title>}
        {post && <Card pb="xl">{parse(post.content.rendered)}</Card>}
        <Link href="/">
          <Button variant="outline">Return Home</Button>
        </Link>
      </Stack>
    </Container>
  );
}

export async function getStaticPaths() {
  const paths = await getSlugs("posts");
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const post: WP_REST_API_Post | null = await getPostById(
    context?.params?.slug as string
  );
  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}
