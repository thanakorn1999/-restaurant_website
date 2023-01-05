import React from "react";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button";

const style = {
  display: "flex",
  width: "10em",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  padding: ".25em",
  paddingTop: ".3em",
  borderRadius: 5,
  fontFamily: "Roboto",
  color: "black",
  marginBottom: ".25em",
  pointer: "cursor",
  textAlign: "left",
};

class ModalSideList extends React.Component {
  render() {
    // const localFunction = this.props.function;
    return (
      <Button style={style}>
        <div style={{ marginRight: "auto" }}>
          <Icon
            fontSize="small"
            style={{
              marginLeft: 8,
              // cursor: "pointer",
              color: "black",
              marginRight: 4,
              float: "Left",
            }}
          >
            {this.props.icon}
          </Icon>
          {this.props.text}
        </div>
      </Button>
    );
  }
}

export default ModalSideList;
