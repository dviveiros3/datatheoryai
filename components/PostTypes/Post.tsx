import Link from "next/link";
import Image from "next/image";
import { WP_REST_API_Post } from "wp-types";
import React from "react";
import {
  Card,
  Text,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { getDate } from "../../utils/utils";
import parse from "html-react-parser";

export default function Post({ postData }: { postData: WP_REST_API_Post }) {
  const postSlug: string = String(postData.post_name);
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Link href={`/posts/${postData.id}`}>
      <a
        style={{
          textDecoration: "none",
        }}
      >
        <Text
          size="xl"
          color={dark ? theme.colors.gray[1] : theme.colors.gray[9]}
          transform="capitalize"
          lineClamp={1}
          weight="semibold"
        >
          {postData.title.rendered}
        </Text>
        <Text
          size="sm"
          color={dark ? theme.colors.gray[5] : theme.colors.gray[7]}
        >
          {getDate(postData.date)}
        </Text>
        <Text size="sm" lineClamp={4} color={dark ? theme.colors.gray[4] : theme.colors.gray[8]}>
          {parse(postData.content.rendered)}
        </Text>
      </a>
    </Link>
  );
}
