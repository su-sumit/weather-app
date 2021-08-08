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
      padding: "10px",
      borderRadius: 4,
      background: "#F0FFFF",
      textAlign: "center",
      fontWeight: 500,
      "&.active": {
        background: "#1E90FF",
        color: "white",
      },
    },
  },
  temp: {
    fontWeight: 800,
    fontSize: "40px",
  },
  date: {},
  [theme.breakpoints.down("xs")]: {
    temp: {
      fontSize: "30px",
    },
    carouselItem: {
      flex: `0 0 ${slideWidthXS}`,
    },
  },
}));

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    background: "#FAFAFA",
  },
  paddedContainer: {
    padding: "10px",
  },
  appBar: {
    padding: "10px",
    marginBottom: "15px",
    background: "#212121",
    textAlign: "center",
  },
}));
