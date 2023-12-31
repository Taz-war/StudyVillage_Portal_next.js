import React from "react";

import { Box, Button } from "@mui/material";

import BaseCard from "../../base-card/BaseCard";

const SizeButton = () => {
  return (
    <BaseCard title="Contained Button Sizes">
      <Box sx={{ textAlign: "center" }}>
        <Button
          variant="contained"
          size="small"
          sx={{
            ml: 1,
          }}
        >
          Small
        </Button>
        <Button
          variant="contained"
          size="medium"
          sx={{
            ml: 1,
          }}
        >
          Medium
        </Button>
        <Button
          variant="contained"
          size="large"
          sx={{
            ml: 1,
          }}
        >
          Large
        </Button>
      </Box>
    </BaseCard>
  );
};

export { SizeButton };
