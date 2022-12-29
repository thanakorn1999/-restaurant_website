import * as React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

export function DialogFood(props) {
  const objectForm = {
    name: null,
    detail: null,
    imageMain: null,
    imageList: null,
    price: null,
  };
  return (
    <>
      <DialogTitle>เพิ่มเมนูอาหาร</DialogTitle>
      <DialogContent>
        {/* <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText> */}

        <Grid container spacing={1}>
          <Grid item xs={8}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="ชื่อเมนู"
              value={objectForm.name}
              fullWidth
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              autoFocus
              margin="dense"
              id="detail"
              label="ราคา"
              value={objectForm.price}
              fullWidth
              size="small"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              id="outlined-multiline-static"
              label="รายละเอียด"
              multiline
              fullWidth
              rows={4}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleDialogClose}>Cancel</Button>
        <Button onClick={props.handleDialogClose}>Subscribe</Button>
      </DialogActions>
    </>
  );
}
