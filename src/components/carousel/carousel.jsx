import React, { useEffect, useState } from "react";

import { Box, Button, Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";

import useStyles from "./styles.js";

const Carousel = ({ data, metric, children }) => {
  const itemsLength = data.length;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const slideJump = matches ? 2 : 3;
  const slideAmount = matches ? 50 : 33;

  const [activeIdx, setActiveIdx] = useState(0);

  const classes = useStyles();

  const prevClick = () => {
    const newIndex = activeIdx - slideJump;
    if (newIndex >= 0) {
      setActiveIdx(newIndex);
    }
  };

  const nextClick = () => {
    const newIndex = activeIdx + slideJump;
    if (newIndex < itemsLength) {
      setActiveIdx(newIndex);
    }
  };

  console.log(activeIdx, itemsLength);
  return (
    <Box className={classes.root}>
      {activeIdx !== 0 && (
        <Button
          className={`${classes.navButton} left`}
          onClick={() => prevClick()}
          variant="contained"
          color="primary"
        >
          <ChevronLeft />
        </Button>
      )}
      <Box className={classes.carouselOF}>
        <Grid
          container
          spacing={2}
          className={classes.carouselInner}
          style={{
            transform: `translateX(-${activeIdx * slideAmount}%)`,
          }}
        >
          {children}
        </Grid>
      </Box>
      {activeIdx + slideJump < itemsLength && (
        <Button
          className={`${classes.navButton} right`}
          onClick={() => nextClick()}
          variant="contained"
          color="primary"
        >
          <ChevronRight />
        </Button>
      )}
    </Box>
  );
};

export default Carousel;
