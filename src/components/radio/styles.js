import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: "15px 30px",
    "& .MuiFormGroup-root": {
      flexDirection: "row",
    },

    "& .MuiRadio-colorSecondary.Mui-checked": {
      color: "#1E90FF",
    },
    "& .MuiFormControlLabel-label": {
      fontSize: "16px",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "15px 20px",
      "& .MuiFormControlLabel-label": {
        fontSize: "14px",
      },
    },
  },
}));
