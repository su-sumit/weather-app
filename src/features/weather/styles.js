import { makeStyles } from "@material-ui/core/styles";

const slideWidthM = "33%";
const slideWidthXS = "50%";

export const useCarouselItemStyles = makeStyles((theme) => ({
  carouselItem: {
    flex: `0 0 ${slideWidthM}`,
    display: "flex",
    justifyContent: "left",
    alignItems: "space-between",
    boxSizing: "border-box",
    cursor: "pointer",
    "& .carousel-slide-item__body": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      flex: 1,
      border: "1px solid",
      borderColor: "rgb(0 0 0 / 75%)",
      padding: "10px",
      borderRadius: 4,
      "&.active": {
        borderColor: theme.palette.primary.main,
      },
    },
    [theme.breakpoints.down("xs")]: {
      flex: `0 0 ${slideWidthXS}`,
    },
  },
}));

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
  },
  paddedContainer: {
    padding: "10px",
  },
}));
