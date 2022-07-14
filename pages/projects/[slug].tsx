import Link from "next/link";
import { getProject, getSlugs } from "../../utils/wordpress";
import { WP_REST_API_Post } from "wp-types";
import { GetStaticPropsContext } from "next";
import { Button, Card, Center, Container, Stack, Title } from "@mantine/core";
import parse from "html-react-parser";

export default function ProjectPage({
  project,
}: {
  project: WP_REST_API_Post;
}) {
  return (
    <Container pt="xl">
      <Stack align="center">
        {project && <Title pb="xl">{parse(project.title.rendered)}</Title>}
        {project && <Card pb="xl">{parse(project.content.rendered)}</Card>}
        <Link href="/">
          <Button>Return Home</Button>
        </Link>
      </Stack>
    </Container>
  );
}

export async function getStaticPaths() {
  const paths = await getSlugs("projects");
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const project: WP_REST_API_Post | null = await getProject(
    context?.params?.slug as string
  );
  return {
    props: {
      project,
    },
    revalidate: 10,
  };
}
