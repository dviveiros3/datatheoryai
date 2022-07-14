import {
  Container,
  Stack,
  Center,
  Box,
  Title,
  Divider,
  Grid,
  Space,
  Group,
  Button,
  Anchor,
  Text,
  Modal,
  useMantineColorScheme,
} from "@mantine/core";
import Link from "next/link";
import React from "react";
import { BsGithub, BsTwitter, BsLinkedin, BsChevronDown } from "react-icons/bs";
import { useMantineTheme } from "@mantine/core";
import { createStyles, keyframes } from "@mantine/core";

export const bounce = keyframes({
  "from, 20%, 53%, 80%, to": { transform: "translate3d(0, 0, 0)" },
  "40%, 43%": { transform: "translate3d(0, -20px, 0)" },
  "70%": { transform: "translate3d(0, -10px, 0)" },
  "90%": { transform: "translate3d(0, -4px, 0)" },
});

const useStyles = createStyles((theme) => ({
  container: {
    textAlign: "center",
    padding: theme.spacing.xl,
    animation: `${bounce} 3s ease-in-out infinite`,
  },
}));

export default function Hero() {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const [opened, setOpened] = React.useState(false);

  const iconColor = dark ? theme.colors.teal[1] : theme.colors.gray[7];

  return (
    <>
      <Container mt="xl" style={{ position: "relative" }}>
        <Stack pt="xl" align="center" spacing="xl">
          <Box mt="xl" pt="xl">
            <Text>
              <Title>DataTheoryAi</Title>
            </Text>
            <Divider mt="lg" mb="xl" />
            <Grid justify="center">
              <Link href="github.com">
                <a>
                  <Grid.Col span={3}>
                    <BsGithub fontSize="30" color={iconColor} />
                  </Grid.Col>
                </a>
              </Link>
              <Link href="twitter.com">
                <a>
                  <Grid.Col span={3}>
                    <BsTwitter fontSize="30" color={iconColor} />
                  </Grid.Col>
                </a>
              </Link>
              <Link href="linkedin.com">
                <a>
                  <Grid.Col span={3}>
                    <BsLinkedin fontSize="30" color={iconColor} />
                  </Grid.Col>
                </a>
              </Link>
            </Grid>
          </Box>
          <Space />
          <Stack align="center" mt="md">
            <Text size="sm">Lorem ipsum dolor sit amet</Text>
            <Text size="sm">
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            </Text>
            <Text size="sm">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
            </Text>
            <Space />
            <Group my="xl">
              {dark ? (
                <>
                  <Anchor href="#about">
                    <Button variant="outline" color="teal" size="lg">
                      About
                    </Button>
                  </Anchor>
                  <Modal
                    opened={opened}
                    onClose={() => setOpened(false)}
                    title="Contact"
                  >
                    You may contact us at
                    <ul>
                      <li>111-222-3333</li>
                      <li>somewhere@something.com</li>
                    </ul>
                  </Modal>
                  <Button
                    variant="outline"
                    color="teal"
                    size="lg"
                    onClick={() => setOpened(true)}
                  >
                    Contact
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" color="teal" size="lg">
                    About
                  </Button>
                  <Button variant="outline" color="teal" size="lg">
                    Contact
                  </Button>
                </>
              )}
            </Group>
            <Anchor href="#projects" className={classes.container}>
              <BsChevronDown
                fontSize="60"
                color={iconColor}
                style={{ marginTop: "200" }}
              />
            </Anchor>
            <Space />
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
