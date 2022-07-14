import Link, { LinkProps } from "next/link";
import Image from "next/image";
import { WP_REST_API_Attachment, WP_REST_API_Post } from "wp-types";
import React from "react";
import {
  Card,
  Text,
  Box,
  Overlay,
  useMantineTheme,
  Center,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import parse from "html-react-parser";

export default function Project({
  projectData,
  featuredMedia,
}: {
  projectData: WP_REST_API_Post;
  featuredMedia: WP_REST_API_Attachment;
}) {
  const featuredMediaSourceUrl = featuredMedia.source_url;
  const projectSlug: string = String(projectData.post_name);

  const theme = useMantineTheme();

  const { hovered, ref } = useHover();

  return (
    <div style={{ maxWidth: "540px" }}>
      <Card shadow="sm" p={0} ref={ref}>
        <Link href={`/projects/${projectData.id}`}>
          <a style={{ textDecoration: "none" }}>
            {featuredMedia &&
              (hovered ? (
                <Image
                  src={featuredMediaSourceUrl}
                  width={180}
                  height={120}
                  layout="responsive"
                  alt={`featured image of ${projectSlug}`}
                  style={{ filter: "brightness(60%)" }}
                />
              ) : (
                <Image
                  src={featuredMediaSourceUrl}
                  width={180}
                  height={120}
                  layout="responsive"
                  alt={`featured image of ${projectSlug}`}
                  style={{ filter: "brightness(70%)" }}
                />
              ))}
            <Box
              style={{
                zIndex: 100,
                position: "relative",
                top: "-8rem",
                textAlign: "center",
                marginBottom: "-6rem",
              }}
            >
              <Text
                color="white"
                size="xl"
                weight="bold"
                lineClamp={1}
                style={{ textDecoration: "none" }}
              >
                {projectData.title.rendered}
              </Text>
              <Text color={theme.colors.gray[2]} lineClamp={2}>
                {parse(projectData.content.rendered)}
              </Text>
            </Box>
          </a>
        </Link>
      </Card>
    </div>
  );
}
