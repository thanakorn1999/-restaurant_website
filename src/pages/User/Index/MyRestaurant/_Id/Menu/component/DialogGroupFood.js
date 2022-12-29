import * as React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

export function DialogGroupFood() {
  const objectForm = {
    name: null,
    detail: null,
    imageMain: null,
    imageList: null,
    price: null,
  };
  return (
    <>
      <DialogTitle>DialogGroupFood</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        {/* <Button onClick={handleDialogClose}>Cancel</Button> */}
        {/* <Button onClick={handleDialogClose}>Subscribe</Button> */}
      </DialogActions>
    </>
  );
}
