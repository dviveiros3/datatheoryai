import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Center,
  Grid,
  Stack,
  useMantineColorScheme,
  Anchor,
  Group,
} from "@mantine/core";
import Link from "next/link";
import React from "react";
import ColorSchemeToggle from "./PostTypes/ColorSchemeToggle";

export default function Nav({ children }: { children: React.ReactNode }) {
  const theme = useMantineTheme();
  const [opened, setOpened] = React.useState(false);
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <AppShell
      styles={{
        main: {
          background: dark ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      footer={
        <Footer
          height="30px"
          style={{
            borderTop: "none",
            backgroundColor: "rgba(255,255,255,0)",
          }}
        >
          <Stack align="center" style={{ margin: "0" }}>
            <Text
              size="sm"
              color={dark ? theme.colors.teal[1] : theme.colors.dark[8]}
            >
              Next.js app © {new Date().getFullYear()} William Latshaw
            </Text>
          </Stack>
        </Footer>
      }
      header={
        <Header
          height={70}
          p="md"
          style={{
            borderBottom: "none",
            backgroundColor: "rgba(255,255,255,0)",
          }}
        >
          <Grid>
            <Grid.Col span={3}>
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
              <Link href="/">
                <a style={{ textDecoration: "none" }}>
                  <Text
                    weight="bold"
                    color={dark ? theme.colors.gray[3] : theme.colors.gray[8]}
                  >
                    DataTheoryAi
                  </Text>
                </a>
              </Link>
            </Grid.Col>
            <Grid.Col span={3} offset={5}>
              <Group>
                <Link href="#projects">
                  <a style={{ textDecoration: "none" }}>
                    <Text
                      color={dark ? theme.colors.gray[3] : theme.colors.gray[8]}
                      weight={600}
                      transform="uppercase"
                    >
                      Projects
                    </Text>
                  </a>
                </Link>
                <Link href="#blog">
                  <a style={{ textDecoration: "none" }}>
                    <Text
                      color={dark ? theme.colors.gray[3] : theme.colors.gray[8]}
                      weight={600}
                      transform="uppercase"
                    >
                      Blog
                    </Text>
                  </a>
                </Link>

                <Link href="#about">
                  <a style={{ textDecoration: "none" }}>
                    <Text
                      color={dark ? theme.colors.gray[3] : theme.colors.gray[8]}
                      weight={600}
                      transform="uppercase"
                    >
                      About
                    </Text>
                  </a>
                </Link>
              </Group>
            </Grid.Col>
            <Grid.Col span={1}>
              <ColorSchemeToggle />
            </Grid.Col>
          </Grid>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}
