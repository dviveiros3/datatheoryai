import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import React from "react";
import { BsSun, BsMoonStars } from "react-icons/bs";

export default function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <ActionIcon
      variant="outline"
      color={dark ? "yellow" : "blue"}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? <BsSun size={18} /> : <BsMoonStars size={18} />}
    </ActionIcon>
  );
}
