import Head from "next/head";
import { getPosts, getProjects } from "../utils/wordpress";
import PostList from "../components/PostTypes/PostList";
import ProjectList from "../components/PostTypes/ProjectList";
import Section from "../components/Section";
import { WP_REST_API_Posts } from "wp-types";

import {
  Container,
  Center,
  Title,
  Anchor,
  useMantineColorScheme,
  useMantineTheme,
  Space,
  Button,
  Stack,
  Text,
} from "@mantine/core";

import Hero from "../components/Hero";
import ParticleBg from "../components/ParticleBg";
import { createStyles } from "@mantine/core";
import Link from "next/link";

const useStyles = createStyles((theme, _params, getRef) => ({
  containerPadding: {
    paddingBottom: "100px",
  },
}));

export default function Home({
  posts,
  projects,
}: {
  posts: WP_REST_API_Posts;
  projects: WP_REST_API_Posts;
}) {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <>
      <Head>
        <title>DataTheoryAI</title>
        <meta
          name="description"
          content="Keep up with datatheoryai's recent updates"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* You can add more metadata here, like open graph tags for social media, etc */}
      </Head>
      <Section className={classes.containerPadding}>
        <ParticleBg />
        <Hero />
      </Section>
      <Space h="xl" />
      <Container id="projects" mt="xl" style={{ minHeight: "75vh" }}>
        <Center>
          <Anchor
            size="xl"
            color={dark ? "teal" : "dark"}
            style={{ textDecoration: "none", cursor: "pointer" }}
            my="xl"
          >
            <Title>Projects</Title>
          </Anchor>
        </Center>
        <p style={{ color: "gray", marginTop: "0px", marginBottom: "2rem" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          nobis ducimus eveniet fugiat asperiores veritatis quidem similique
          dignissimos inventore error consequatur cumque nulla nisi quaerat,
          possimus pariatur! Neque, enim nihil!
        </p>
        <ProjectList projects={projects} />
      </Container>
      <Container id="about" style={{ minHeight: "75vh" }}>
        <Stack align="center">
          <Text size="xl" color={dark ? "teal" : "dark"}>
            <Title>About</Title>
          </Text>
          <Text size="md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            molestiae ea deserunt unde fugit! Consequuntur fugit error facilis.
            Ipsum, sit! Consectetur eos laboriosam enim, molestiae sint placeat
            quia earum esse! Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Nobis consequuntur aliquid qui non vitae doloremque autem!
            Consequuntur doloribus dolor ipsa doloremque vitae error architecto
            cum rerum. Hic suscipit sequi iure? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Dolor fuga libero animi quia sed
            culpa, aliquid consequatur ea laudantium, ab perferendis
            reprehenderit earum dolore, natus deserunt? Nobis voluptatibus sunt
            doloribus.
          </Text>
        </Stack>
      </Container>
      <Container id="blog" style={{ minHeight: "75vh" }}>
        <Center>
          <Anchor
            size="xl"
            color={dark ? "teal" : "dark"}
            style={{ textDecoration: "none", cursor: "pointer" }}
            mt="xl"
            mb="md"
          >
            <Title>Blog</Title>
          </Anchor>
        </Center>
        <p style={{ color: "gray", marginTop: "0px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          nobis ducimus eveniet fugiat asperiores veritatis quidem similique
          dignissimos inventore error consequatur cumque nulla nisi quaerat,
          possimus pariatur! Neque, enim nihil!
        </p>
        <PostList posts={posts} />
      </Container>
    </>
  );
}

export async function getServerSideProps() {
  const posts = await getPosts();
  const projects = await getProjects();

  return {
    props: {
      posts,
      projects,
    },
  };
}
