import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    maxWidth: "100%",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
  },
  carouselInner: {
    display: "flex",
    flexWrap: "nowrap",
    position: "relative",
    left: 0,
    transition: "transform 0.3s ease-out",
  },
  carouselOF: {
    display: "flex",
    width: "100%",
    margin: "15px 30px",
    overflow: "hidden",
  },
  navButton: {
    borderRadius: "50%",
    position: "absolute",
    minWidth: 25,
    minHeight: 25,
    padding: 0,
    zIndex: 2,
    "&.left": {
      left: 0,
    },
    "&.right": {
      right: 0,
    },
  },
}));

export default useStyles;
