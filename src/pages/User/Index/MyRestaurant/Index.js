import * as React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material";
import {
  Typography,
  Grid,
  Card,
  Container,
  Button,
  Divider,
  Avatar,
  CardMedia,
  CardActionArea,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
} from "@mui/material";
import GradeIcon from "@mui/icons-material/Grade";
import AddIcon from "@mui/icons-material/Add";
import { grey } from "@mui/material/colors";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  noneEvaluation: {
    boxShadow: 0,
  },
  fillHeight: {
    height: `100%`,
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
}));

const CardAddRes = styled(Card)({
  backgroundColor: grey[500],
});
//

const MyComponents = {
  RestaurantCard: function RestaurantCard(data) {
    const classes = useStyles();

    function DataItem({ value, title, icon }) {
      return (
        <>
          <Card
            sx={{ px: 1, backgroundColor: grey[500], borderRadius: 0 }}
            elevation={0}
          >
            <Grid container direction="row" alignItems="center">
              <Grid item xs={4}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item>
                    <Avatar sx={{ bgcolor: grey[400], width: 28, height: 28 }}>
                      {icon}
                    </Avatar>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={8}>
                <Typography align="center" variant="subtitle1" component="div">
                  {value}
                </Typography>
                <Typography align="center" variant="caption" component="div">
                  {title}
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </>
      );
    }

    if (data) {
      return (
        <Card variant="outlined" className={classes.fillHeight}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            spacing={0}
            className={classes.fillHeight}
          >
            {/* IMAGE */}
            <Grid item xs={12} md={3}>
              <CardMedia
                sx={{
                  height: {
                    xs: "150px",
                    md: "100%",
                  },
                }}
                component="img"
                image="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                alt={`restaurant image ${data.id}`}
              />
            </Grid>
            {/* DETAILS */}

            <Grid item xs={12} md={9}>
              <Container sx={{ py: 1 }} className={classes.fillHeight}>
                <Typography
                  variant="subtitle1"
                  className={classes.typography}
                  component="div"
                  fontWeight="bold"
                >
                  {data.name}
                </Typography>
                <Grid container direction="row" spacing={1} sx={{ mb: 1 }}>
                  <Grid item xs={4}>
                    {DataItem({
                      value: data.ratingA,
                      title: "เรทติ้ง",
                      icon: <GradeIcon />,
                    })}
                  </Grid>
                  <Grid item xs={4}>
                    {DataItem({
                      value: data.ratingB,
                      title: "เรทติ้ง",
                      icon: <GradeIcon />,
                    })}
                  </Grid>
                  <Grid item xs={4}>
                    {DataItem({
                      value: data.ratingC,
                      title: "เรทติ้ง",
                      icon: <GradeIcon />,
                    })}
                  </Grid>
                </Grid>
                <Divider />
                {/* Details */}
                <Typography
                  variant="caption"
                  component="div"
                  className={classes.typographyFourLine}
                >
                  {data.detail}
                </Typography>
                <Grid container direction="row" justifyContent="flex-end">
                  <Grid item>
                    <Button
                      variant="contained"
                      component={Link}
                      to={`/user/my_restaurant/${data.id}`}
                      sx={{ boxShadow: 0 }}
                    >
                      จัดการ
                    </Button>
                  </Grid>
                </Grid>

                {/* Btn */}
              </Container>
            </Grid>
          </Grid>
        </Card>
      );
    }
  },
};

export function MyRestaurant() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const dataMyRestaurant = [
    {
      id: 1,
      name: "นอมินีเลิฟ ครัวซองต์ช็อคแมคเคอเรล หงวนโหลยโท่ยซินโดรม แคร์ คอร์รัปชันเฟอร์รี่โปรเจคท์นาฏยศาลา ลอจิสติกส์ลาตินสุริยยาตร์วาริชศาสตร์บลอนด์ โบรชัวร์แชมปิยอง อัลบัมสปาย นรีแพทย์เฟรมโอเลี้ยง สี่แยกโบกี้แฟร์สโตน มลภาวะแซมบ้า กรุ๊ปเพาเวอร์ ขั้นตอนโบรชัวร์อึมครึม ผลไม้โคโยตี ไนท์ตุ๊ก มาร์เก็ตซาร์ดีนเคลม",
      detail:
        "นอมินีเลิฟ ครัวซองต์ช็อคแมคเคอเรล หงวนโหลยโท่ยซินโดรม แคร์ คอร์รัปชันเฟอร์รี่โปรเจคท์นาฏยศาลา ลอจิสติกส์ลาตินสุริยยาตร์วาริชศาสตร์บลอนด์ โบรชัวร์แชมปิยอง อัลบัมสปาย นรีแพทย์เฟรมโอเลี้ยง สี่แยกโบกี้แฟร์สโตน มลภาวะแซมบ้า กรุ๊ปเพาเวอร์ ขั้นตอนโบรชัวร์อึมครึม ผลไม้โคโยตี ไนท์ตุ๊ก มาร์เก็ตซาร์ดีนเคลมนอมินีเลิฟ ครัวซองต์ช็อคแมคเคอเรล หงวนโหลยโท่ยซินโดรม แคร์ คอร์รัปชันเฟอร์รี่โปรเจคท์นาฏยศาลา ลอจิสติกส์ลาตินสุริยยาตร์วาริชศาสตร์บลอนด์ โบรชัวร์แชมปิยอง อัลบัมสปาย นรีแพทย์เฟรมโอเลี้ยง สี่แยกโบกี้แฟร์สโตน มลภาวะแซมบ้า กรุ๊ปเพาเวอร์ ขั้นตอนโบรชัวร์อึมครึม ผลไม้โคโยตี ไนท์ตุ๊ก มาร์เก็ตซาร์ดีนเคลม",
      ratingA: 3,
      ratingB: 3,
      ratingC: 3,
    },
    {
      id: 2,
      name: "ซาร์ดีนเคลม",
      detail: "ซาร์ดีนเคลม",
      ratingA: 3,
      ratingB: 3,
      ratingC: 3,
    },
  ];

  return (
    <>
      <Typography variant="h6" component="div">
        ร้านอาหารของเรา
      </Typography>
      <Grid
        sx={{ mt: 10 }}
        container
        direction="row"
        justifyContent="flex-start"
        spacing={2}
      >
        {/* MyRestaurant CARD */}
        {dataMyRestaurant.map((item, index) => (
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            key={`dataMyRestaurant${item.title}`}
          >
            {MyComponents.RestaurantCard(item)}
          </Grid>
        ))}
        {/* ADD CARD */}
        <Grid item xs={12} md={4}>
          <CardAddRes className={classes.fillHeight}>
            <CardActionArea
              className={classes.fillHeight}
              onClick={handleClickOpen}
            >
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                direction="row"
                className={classes.fillHeight}
              >
                <Grid item>
                  <AddIcon color={grey[500]} fontSize="large" />
                </Grid>
              </Grid>
            </CardActionArea>
          </CardAddRes>
        </Grid>
      </Grid>

      {/* Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>เพิ่มร้านอาหารของฉัน</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            id="name"
            autoFocus
            margin="dense"
            label="ชือร้านค้า"
            fullWidth
            size="small"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ยกเลิก</Button>
          <Button onClick={handleClose}>ยืนยัน</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
