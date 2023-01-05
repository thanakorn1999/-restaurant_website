import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  deleteCard,
  editCard,
  editDescription,
} from "../../../../../../../actions";
import Dialog from "@mui/material/Dialog";

import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextArea from "react-textarea-autosize";
import { useDispatch } from "react-redux";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import ModalSideList from "./ModalSideList";

const CardContainer = styled.div`
  margin-bottom: 0.5em;
`;

const Modalstyle = {
  position: "absolute",
  top: "40vh",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  bgcolor: "background.paper",
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  minHeight: "50vh",
  "@media screen and (min-width: 900px)": {
    width: "60vw",
  },
};

const EditButtonIcon = styled.div`
  margin-left: 8px;
  cursor: pointer;
  color: black;
  /* display: none; */
  &:hover {
    display: inline;
  }
`;

class TrelloCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: this.props.message,
      description: this.props.description,
      showEdit: "none",
      showText: "inline",
      showModal: false,
      showDescription: "inline",
      showDescriptionEdit: "none",
    };

    this.openEdit = this.openEdit.bind(this);
    this.closeTextArea = this.closeTextArea.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.openDescriptionEdit = this.openDescriptionEdit.bind(this);
    this.closeDescriptionEdit = this.closeDescriptionEdit.bind(this);
  }

  handleInputChange = (e) => {
    this.setState({
      message: e.target.value,
    });
    const { dispatch } = this.props;
    dispatch(editCard(this.props.list, this.props.id, this.state.message));
  };

  handleDescriptionChange = (e) => {
    this.setState({
      description: e.target.value,
    });
    const { dispatch } = this.props;
    dispatch(
      editDescription(this.props.list, this.props.id, this.state.description)
    );
  };

  closeTextArea() {
    this.setState({
      showText: "inline",
      showEdit: "none",
    });
    const { dispatch } = this.props;
    dispatch(editCard(this.props.list, this.props.id, this.state.message));
  }

  openEdit() {
    this.setState({
      showText: "none",
      showEdit: "inline",
    });
  }

  openDescriptionEdit() {
    this.setState({
      showDescription: "none",
      showDescriptionEdit: "inline",
    });
  }

  closeDescriptionEdit() {
    this.setState({
      showDescription: "inline",
      showDescriptionEdit: "none",
    });
  }

  openModal() {
    this.setState({
      showModal: true,
    });
  }
  handleCloseModal() {
    this.setState({
      showModal: false,
    });
  }

  render() {
    return (
      <Draggable draggableId={String(this.props.id)} index={this.props.index}>
        {(provided) => (
          <CardContainer
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Card key={this.props.id} sx={{ maxWidth: 300 }}>
              <CardContent style={{ display: "flex" }}>
                <Typography
                  onClick={this.openModal}
                  id=""
                  sx={{ fontSize: 14 }}
                  style={{ display: this.state.showText }}
                  color="text.secondary"
                  gutterBottom
                >
                  {this.props.message}
                </Typography>
                <TextArea
                  autoFocus
                  onBlur={this.closeTextArea}
                  value={this.state.message}
                  onChange={this.handleInputChange}
                  style={{
                    display: this.state.showEdit,
                    resize: "none",
                    width: "100%",
                    outline: "1px",
                    border: "1px",
                  }}
                />
                <div
                  style={{
                    marginLeft: "auto",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* < AlertDialog style={{marginLeft: "auto"}} list={this.props.list} index={this.props.index} yesFunction={this.deleteCard}/> */}
                  <EditButtonIcon>
                    <Icon
                      fontSize="small"
                      style={{
                        marginLeft: 8,
                        cursor: "pointer",
                        color: "gray",
                        fontSize: 14,
                      }}
                      onClick={this.openEdit}
                    >
                      edit
                    </Icon>
                  </EditButtonIcon>
                </div>
              </CardContent>
              <Button
                variant="contained"
                style={{
                  fontSize: "12px",
                  color: "white",
                  backgroundColor: "#5aac44",
                  display: this.state.showEdit,
                  marginLeft: 8,
                  marginBottom: 8,
                }}
                onMouseDown={this.closeTextArea}
              >
                Finish Editing
              </Button>
              <div
                onClick={this.openModal}
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "0.1em",
                }}
              >
                <Icon
                  fontSize="small"
                  style={{ marginLeft: 8, cursor: "pointer", color: "gray" }}
                >
                  visibility
                </Icon>
                {this.state.description !== "" &&
                this.state.showDescription !== "none" ? (
                  <Icon
                    fontSize="small"
                    style={{ marginLeft: 8, cursor: "pointer", color: "gray" }}
                  >
                    notes
                  </Icon>
                ) : (
                  ""
                )}
              </div>
              {/* < CardModal /> */}
              <Modal
                open={this.state.showModal}
                onClose={this.handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={Modalstyle}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    {this.state.message}
                    <p style={{ fontSize: 12 }}>
                      In list {this.props.listTitle}{" "}
                    </p>
                  </Typography>
                  <Grid container spacing={1}>
                    <Grid item xs={12} sm={9} md={10}>
                      <div style={{ display: "flex", alignContent: "bottom" }}>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          <b>Description:</b>
                        </Typography>
                        {this.state.description !== "" &&
                        this.state.showDescription !== "none" ? (
                          <Button
                            size="small"
                            style={{
                              backgroundColor: "#c6c8cc",
                              color: "#5a5c61",
                              marginLeft: "1em",
                            }}
                            onClick={this.openDescriptionEdit}
                          >
                            Edit
                          </Button>
                        ) : (
                          ""
                        )}
                      </div>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {this.state.description !== "" &&
                        this.state.showDescriptionEdit === "none" ? (
                          this.state.description
                        ) : (
                          <Button
                            style={{
                              backgroundColor: "#c6c8cc",
                              color: "#5a5c61",
                              width: "100%",
                              height: "5em",
                              display: this.state.showDescription,
                            }}
                            onClick={this.openDescriptionEdit}
                          >
                            <div
                              style={{ marginRight: "auto", marginLeft: "1em" }}
                            >
                              Add More detailed description
                            </div>
                          </Button>
                        )}

                        <TextArea
                          autoFocus
                          onBlur={this.closeDescriptionEdit}
                          value={this.state.description}
                          onChange={this.handleDescriptionChange}
                          style={{
                            display: this.state.showDescriptionEdit,
                            resize: "none",
                            width: "90%",
                            outline: "1px",
                            border: "1px",
                            background: "rgba(0,0,0,.1)",
                            minRows: "5",
                            padding: "1em",
                            paddingRight: "0em",
                            borderRadius: "5px",
                          }}
                        />
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3} md={2}>
                      <Typography sx={{ fontSize: 12 }}>Add to card</Typography>
                      <ModalSideList icon="person" text="Members" />
                      <AlertDialog
                        list={this.props.list}
                        index={this.props.index}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Modal>
            </Card>
          </CardContainer>
        )}
      </Draggable>
    );
  }
}

function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);
  const list = props.list;
  const index = props.index;

  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    console.log("User has confirmed deletion of", list, "index", index);
    dispatch(deleteCard(list, index));
    setOpen(false);
  };

  return (
    <div>
      <div onClick={handleClickOpen} style={{ pointer: "cursor" }}>
        <ModalSideList icon="close" text="Delete" />
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete this task?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this task? This cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button key="yes" onClick={handleConfirm} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default connect()(TrelloCard);
