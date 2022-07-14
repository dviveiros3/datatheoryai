import {
  WP_REST_API_Attachment,
  WP_REST_API_Post,
  WP_REST_API_Posts,
} from "wp-types";
import { SimpleGrid, useMantineTheme } from "@mantine/core";
import Project from "./Project";

const ProjectList = ({ projects }: { projects: WP_REST_API_Posts }) => {
  const theme = useMantineTheme();
  const jsxProjects = projects.map((project: WP_REST_API_Post) => {
    if (project) {
      const featuredMedia: unknown =
        project?.["_embedded"]?.["wp:featuredmedia"]?.[0];
      return (
        <Project
          projectData={project}
          featuredMedia={featuredMedia as WP_REST_API_Attachment}
          key={project.id}
        />
      );
    }
    return undefined;
  });
  return (
    <SimpleGrid
      cols={3}
      breakpoints={[{ maxWidth: 800, cols: 2, spacing: "md" }]}
      spacing="xl"
      style={{ paddingBottom: "200px" }}
    >
      {jsxProjects}
    </SimpleGrid>
  );
};

export default ProjectList;
