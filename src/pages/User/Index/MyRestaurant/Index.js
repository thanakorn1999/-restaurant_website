import * as React from "react";
import { Link } from "react-router-dom";
//
import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";

//
import GradeIcon from "@mui/icons-material/Grade";
import AddIcon from "@mui/icons-material/Add";
//
import { grey } from "@mui/material/colors";

const CardAddRes = styled(Card)({
  backgroundColor: grey[500],
});

const MyComponents = {
  getRestaurantCard: function getRestaurantCard(data) {
    function MiniData(props) {
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
                      {props.icon}
                    </Avatar>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={8}>
                <Typography align="center" variant="subtitle1" component="div">
                  {props.value}
                </Typography>
                <Typography align="center" variant="caption" component="div">
                  {props.title}
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </>
      );
    }
    if (data) {
      return (
        <Card sx={{ height: `100%` }}>
          <Grid
            container
            direction="row"
            justifyContent="start"
            spacing={0}
            sx={{ height: `100%` }}
          >
            <Grid item xs={3}>
              <CardMedia
                sx={{ height: `100%` }}
                component="img"
                image="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                alt={`restaurant image ${data.id}`}
              />
            </Grid>
            <Grid item xs={9}>
              <Container sx={{ height: `100%`, py: 1 }}>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold" }}
                  noWrap
                  component="div"
                >
                  {data.name}
                </Typography>
                <Grid container direction="row" spacing={1} sx={{ mb: 1 }}>
                  <Grid item xs={4}>
                    {MiniData({
                      value: data.ratingA,
                      title: "เรทติ้ง",
                      icon: <GradeIcon />,
                    })}
                  </Grid>
                  <Grid item xs={4}>
                    {MiniData({
                      value: data.ratingB,
                      title: "เรทติ้ง",
                      icon: <GradeIcon />,
                    })}
                  </Grid>
                  <Grid item xs={4}>
                    {MiniData({
                      value: data.ratingC,
                      title: "เรทติ้ง",
                      icon: <GradeIcon />,
                    })}
                  </Grid>
                </Grid>
                <Divider />
                {/* Details */}
                {/* sx={{ height: 75, overflow: "hidden", my: 1 }} */}
                <Typography
                  variant="caption"
                  component="div"
                  sx={{
                    display: "-webkit-box",
                    overflow: "hidden",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 4,
                    height: 77,
                    my: 1,
                  }}
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

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Typography variant="h6" noWrap component="div">
        ร้านอาหารของเรา
      </Typography>
      <Grid
        sx={{ mt: 10 }}
        container
        direction="row"
        justifyContent="start"
        spacing={2}
      >
        {dataMyRestaurant.map((item, index) => (
          <Grid item xs={4}>
            {MyComponents.getRestaurantCard(item)}
          </Grid>
        ))}
        <Grid item xs={4}>
          <CardAddRes sx={{ height: "100%" }}>
            <CardActionArea sx={{ height: "100%" }} onClick={handleClickOpen}>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                direction="row"
                sx={{ height: "100%" }}
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
