import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  fillHeight: {
    minHeight: `100%`,
  },
  typography: {
    display: "-webkit-box",
    overflow: "hidden",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 1,
    height: 25,
  },
  typographyFourLine: {
    display: "-webkit-box",
    overflow: "hidden",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 4,
    height: 77,
  },
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(theme => ({
//   root: {
//     backgroundColor: theme.palette.primary.main,
//     color: theme.palette.common.white,
//     padding: theme.spacing(2),
//   },
//   button: {
//     margin: theme.spacing(1),
//   },
//   extraStyle: {
//     fontSize: 20,
//   },
//   header: {
//     fontSize: 30,
//     fontWeight: 'bold',
//   },
//   subheader: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// }));
