import {
  Container,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import React from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadLinksPreset } from "tsparticles-preset-links";

export default function Hero() {
  const theme = useMantineTheme();

  async function customInit(engine: Engine): Promise<void> {
    await loadLinksPreset(engine);
  }

  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const options = {
    preset: "links",
    fullScreen: { enable: false },
    background: {
      color: dark ? theme.colors.dark[8] : "white",
    },
    particles: {
      links: {
        color: dark ? theme.colors.gray[1] : theme.colors.dark[8],
      },
      color: {
        value: dark ? theme.colors.gray[1] : theme.colors.dark[8],
      },
    },
  };

  return (
    <Particles
      options={options}
      init={customInit}
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0",
        padding: "0",
        margin: "0",
        zIndex: "0",
        maxHeight: "100vh",
      }}
    />
  );
}
