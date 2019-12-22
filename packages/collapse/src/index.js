/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Box } from "@theme-ui/components";
import { theme } from "design-token";
const Collapse = () => {
  return (
    <Box
      p={4}
      sx={{
        color: theme.colors.primary,
        background: theme.colors.background,
        display: "flex"
      }}
    >
      <div>Beep</div>
      <div sx={{ ml: "auto" }}>></div>
    </Box>
  );
};

export default Collapse;
