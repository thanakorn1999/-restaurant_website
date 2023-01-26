import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import {
  Grid,
  CardMedia,
  Card,
  CardActions,
  Button,
  Typography,
  Container,
} from "@mui/material";
// TODOLIST : q
const TitleTextField = (props) => (
  <Typography
    variant="subtitle1"
    color={"otherColor.grey.main"}
    sx={{ fontWeight: "bold", pt: 2 }}
  >
    {props.children}
  </Typography>
);

export function DialogFood(props) {
  // data
  const initStateFormAddFood = {
    title: null,
    detail: null,
    price: {
      type: "default",
      default: null,
      list: [
        {
          title: null,
          value: null,
        },
      ],
    },
    tags: [],
  };
  // useState
  const [formAddFood, setformAddFood] = useState(initStateFormAddFood);

  // handleChange useState
  const handleChangeTypePrice = (event) => {
    setformAddFood((prevState) => ({
      ...prevState,
      price: { ...prevState.price, type: event.target.value },
    }));
  };
  const handleAddPriceList = () => {
    setformAddFood((prevState) => ({
      ...prevState,
      price: {
        ...prevState.price,
        list: [...prevState.price.list, { title: null, value: null }],
      },
    }));
  };

  // useEffect
  useEffect(() => {
    if (props.mode === "edit") {
      setformAddFood(props.data);
    }
  }, [props.mode]);

  return (
    <>
      <DialogTitle>
        {props.mode === "add" ? `เพิ่มเมนูอาหาร` : `แก้ไขเมนูอาหาร`}
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={1}>
          {/* Image */}
          <Grid item xs={6}>
            <Card variant="outlined">
              <CardMedia
                style={{ aspectRatio: 4 / 3 }}
                lazy
                image={formAddFood?.img ?? ""}
                title="green iguana"
              />
              <CardActions>
                <Button variant="contained" sx={{ width: `100%` }}>
                  Upload Image (4 / 3)
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* NAME && PRICE */}
          <Grid item xs={6}>
            {/* Name Menu */}
            <>
              <TitleTextField>ชื่อเมนู</TitleTextField>
              <TextField
                margin="dense"
                id="name"
                label=""
                value={formAddFood.title}
                fullWidth
                variant="outlined"
                size="small"
              />
            </>
            {/* Price */}
            <>
              <TitleTextField>ราคา</TitleTextField>

              <Grid container alignItems={"center"} spacing={1}>
                {/* Radio : Price Type  */}
                <Grid item>
                  <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group">
                      เลือกรูปแบบ ราคา
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={formAddFood.price.type}
                      onChange={handleChangeTypePrice}
                    >
                      <FormControlLabel
                        value="default"
                        control={<Radio />}
                        label="ราคาเดียว"
                      />
                      <FormControlLabel
                        value="list"
                        control={<Radio />}
                        label="หลายราคา"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                {/*  Value Price  */}
                {formAddFood.price.type === "default" ? (
                  <Grid item>
                    <TextField
                      margin="dense"
                      id="detail"
                      value={formAddFood.price.default}
                      fullWidth
                      size="small"
                      variant="outlined"
                      label={"ราคา (บาท)"}
                    />
                  </Grid>
                ) : (
                  formAddFood.price.list.map((itemPrice, indexPrice) => (
                    <Grid item>
                      <Grid container spacing={1}>
                        <Grid item xs={6}>
                          <TextField
                            margin="dense"
                            id="detail"
                            value={itemPrice.title}
                            fullWidth
                            size="small"
                            label={"size หรือ ป้ายกำกับราคา"}
                            variant="outlined"
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            margin="dense"
                            id="detail"
                            value={itemPrice.value}
                            fullWidth
                            label={"ราคา (บาท)"}
                            size="small"
                            variant="outlined"
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  ))
                )}
                {formAddFood.price.type === "list" ? (
                  <Button onClick={handleAddPriceList}>เพิ่มเรทราคา</Button>
                ) : null}
              </Grid>
            </>
          </Grid>
        </Grid>

        {/* Detail */}
        <>
          <TitleTextField>รายละเอียด</TitleTextField>

          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                id="outlined-multiline-static"
                multiline
                fullWidth
                value={formAddFood.detail}
                rows={4}
              />
            </Grid>
          </Grid>
        </>
      </DialogContent>
      {/* DialogActions */}
      <DialogActions>
        <Button onClick={props.handleDialogClose}>Cancel</Button>
        <Button onClick={props.handleDialogClose}>Subscribe</Button>
      </DialogActions>
    </>
  );
}
