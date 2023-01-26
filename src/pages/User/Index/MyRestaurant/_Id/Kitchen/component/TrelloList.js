import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
//
import styled from "styled-components";

import Typography from "@mui/material/Typography";
//
import ActionButton from "./ActionButton";
import Card from "./TrelloCard";

const List = styled.div`
  background-color: #dfe3e6;
  border-radius: 0.4em;
  width: 300px;
  height: min-content;
  padding: 0.5em;
  margin-right: 0.5em;
  margin-bottom: 1em;

  /* @media (max-width: 402px) {
      width: calc(100vw - 6em);
      
    } */
  @media (max-width: 366px) {
    width: calc(100vw - 4em);
  }
`;

// const Title = styled.h4`
//   font-family: "Roboto";
// `;
{
  /* <Title>{title}</Title> */
}
const TrelloList = ({ title, cards, listId, index }) => {
  return (
    <Draggable draggableId={String(listId)} index={index}>
      {(provided) => (
        <List
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
        >
          <Droppable droppableId={String(listId)}>
            {/* Everything inside a droppable must be within a React render props function */}
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <Typography variant="subtitle2">{title}</Typography>
                {cards.map((card, index) => (
                  <Card
                    listTitle={title}
                    list={listId}
                    message={card.text}
                    description={card.description}
                    key={card.id}
                    id={card.id}
                    style={styles.card}
                    index={index}
                  />
                ))}
                {provided.placeholder}
                <ActionButton listId={listId} />
              </div>
            )}
          </Droppable>
        </List>
      )}
    </Draggable>
  );
};

const styles = {
  container: {
    backgroundColor: "#dfe3e6",
    borderRadius: 3,
    width: 300,
    height: "100%",
    padding: 8,
    marginRight: 8,
    marginBottom: 8,
  },

  title: {
    fontFamily: "Roboto",
  },

  card: {
    marginBottom: 8,
  },
};

export default TrelloList;
