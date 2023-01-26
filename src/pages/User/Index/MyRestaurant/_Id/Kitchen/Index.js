import React, { Component } from "react";
//
import { connect } from "react-redux";
import { sort } from "../../../../../../actions";
//
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TrelloList from "./component/TrelloList";
import ActionButton from "./component/ActionButton";
//
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  overflow: auto;
  @media (max-width: 500px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

class Kitchen extends Component {
  onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };

  render() {
    const { lists } = this.props;

    return (
      <>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="all-list" direction="horizontal" type="list">
            {(provided) => (
              <ListContainer
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {lists.map((list, index) => (
                  <TrelloList
                    key={list.id}
                    listId={list.id}
                    title={list.title}
                    cards={list.cards}
                    index={index}
                  />
                ))}
                {provided.placeholder}
                <ActionButton list />
              </ListContainer>
            )}
          </Droppable>
        </DragDropContext>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(Kitchen);
// {
//   work:[
//   {
//   table:1,
//   status:0,
//   detail:{
//   type:'food',
//   food_id:1
//   },
//   logs:[
//   {
//   date:'2025-01-03',
//   user_id:1,
//   }
//   ],
//   }
//   ],
//   user:[
//   {
//   name:'',
//   work:[],
//   },
//   ]
//   }
