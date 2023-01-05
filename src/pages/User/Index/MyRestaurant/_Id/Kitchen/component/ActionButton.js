import React from "react";
//
import { connect } from "react-redux";
import { addList, addCard } from "../../../../../../../actions";
//
import Icon from "@mui/material/Icon";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
//
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextArea from "react-textarea-autosize";
import styled from "styled-components";
const openFormButtonGroup = styled.div`
  display: "flex";
  align-items: "center";
  cursor: "pointer";
  border-radius: 3px;
  height: 36px;
  width: 300px;
  padding-left: 10px;
`;

const FormButtonGroup = styled.div`
  margin-top: 8px;
  display: flex;
  alignitems: center;
`;

class ActionButton extends React.Component {
  state = {
    formOpen: false,
    text: "",
  };

  openForm = () => {
    this.setState({ formOpen: true });
  };

  closeForm = (e) => {
    this.setState({ formOpen: false });
  };

  handleInputChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleAddList = () => {
    const { dispatch } = this.props;
    const { text } = this.state;

    if (text) {
      this.setState({
        text: "",
      });
      dispatch(addList(text));
    }

    return;
  };

  handleAddCard = () => {
    const { dispatch, listId } = this.props;
    const { text } = this.state;
    if (text) {
      this.setState({
        text: "",
      });
      dispatch(addCard(listId, text));
    }

    return;
  };

  renderAddButton = () => {
    const { list } = this.props;
    const buttonText = list ? "Add another list" : "Add another card";
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? "white" : "inherit";
    const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";
    return (
      <div
        onClick={this.openForm}
        style={{
          ...styles.openFormButtonGroup,
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          background: buttonTextBackground,
        }}
      >
        <AddIcon />
        <p>{buttonText}</p>
      </div>
    );
  };

  renderForm = () => {
    const { list } = this.props;

    const placeholder = list
      ? "Enter list title..."
      : "Enter title for this card...";
    const buttonTitle = list ? "Add List" : "Add Card";
    const formWidth = list ? 300 : "inherit";
    return (
      <div style={{ width: { formWidth } }}>
        <Card
          style={{
            overflow: "visible",
            minHeight: 80,
            width: { formWidth },
            padding: "6px 8px 2px",
            marginBottom: 4,
          }}
        >
          <TextArea
            placeholder={placeholder}
            autoFocus
            onBlur={this.closeForm}
            value={this.state.text}
            onChange={this.handleInputChange}
            style={{
              resize: "none",
              width: "100%",
              outline: "none",
              border: "none",
            }}
          />
        </Card>
        <FormButtonGroup>
          {/* We use onMouseDown because it will fire before our onBlur function. */}
          <Button
            variant="contained"
            style={{ color: "white", backgroundColor: "#5aac44" }}
            onMouseDown={list ? this.handleAddList : this.handleAddCard}
          >
            {buttonTitle}
          </Button>

          <CloseIcon
            style={{ marginLeft: 8, cursor: "pointer", color: "red" }}
            onClick={this.closeForm}
          />
        </FormButtonGroup>
      </div>
    );
  };

  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}

const styles = {
  openFormButtonGroup: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 3,
    height: 36,
    width: 300,
    paddingLeft: 10,
  },
  formButtonGroup: {
    marginTop: 8,
    display: "flex",
    alignItems: "center",
  },
};

export default connect()(ActionButton);
