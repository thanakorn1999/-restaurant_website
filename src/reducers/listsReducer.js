import { CONSTANTS } from "../actions";
// import { FirebaseContext } from "../config/firebase";
import { useContext } from "react-redux";
// import initialState from "./initLists";

let listId = 2;
let cardId = 5;

// const initialState = {
//     "list-0" : {
//       "cards" :
//       {
//         "card-0" :
//         {
//           "description" : "I wanted to use project to develop my abilities to create interactive User interfaces that allow web-users to create data on a website using a GUI.",
//           "id" : "card-0",
//           "text" : "Create an interactive UI."
//         },
//         "card-1":
//         {
//           "description" : "I wanted to use this project to develop familiarity with React-Redux, which seemed a better solution for this project, given the actions needed.",
//           "id" : "card-1",
//           "text" : "Use React, React-Redux and Material UI to create interface."
//         }
//       },
//       "id" : "list-0",
//       "title" : "(F)rello"
//       }
//   }

const initialState = [
  {
    title: "(F)rello",
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: "Create an interactive UI.",
        description:
          "I wanted to use project to develop my abilities to create interactive User interfaces that allow web-users to create data on a website using a GUI.",
        dueDate: "",
      },
      {
        id: `card-${1}`,
        text: "Use React, React-Redux and Material UI to create interface.",
        description:
          "I wanted to use this project to develop familiarity with React-Redux, which seemed a better solution for this project, given the actions needed.",
      },
    ],
  },
  {
    title: "Limitations",
    id: `list-${1}`,
    cards: [
      {
        id: `card-${2}`,
        text: "No back-end",
        description:
          "This is just a small project and I haven't yet hooked it up to a backend to persist the lists.",
      },
      {
        id: `card-${3}`,
        text: "Single board",
        description:
          "I plan to expand on this by adding the ability to create multiple boards and switch between them using an expandable sidebar.",
      },
      {
        id: `card-${4}`,
        text: "Functionality not complete",
        description:
          "You can add new cards, create a new list and move cards and lists around the area.",
      },
    ],
  },
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      console.log("Action received", action);
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${listId}`,
      };
      listId += 1;
      return [...state, newList];

    case CONSTANTS.ADD_CARD: {
      const newCard = {
        description: "",
        text: action.payload.text,
        id: `card-${cardId}`,
      };
      cardId += 1;
      console.log("Action received", action);
      const newState = state.map((list) => {
        if (list.id === action.payload.listId) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        } else {
          return list;
        }
      });
      return newState;
    }

    case CONSTANTS.DELETE_CARD: {
      const Card = {
        id: action.payload.cardId,
      };
      console.log("Action received", action);
      const newState = [...state];
      const list = state.find((list) => action.payload.listId === list.id);
      list.cards.splice(Card.id, 1);

      return newState;
    }

    case CONSTANTS.EDIT_CARD: {
      console.log("Action received", action);
      const newState = [...state];
      const cardId = action.payload.cardId;
      const list = state.find((list) => action.payload.listId === list.id);
      const card = list.cards.find((card) => cardId === card.id);
      card.text = action.payload.message;

      return newState;
    }

    case CONSTANTS.DRAG_HAPPENED:
      console.log("Action received", action);
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type,
      } = action.payload;
      const newState = [...state];
      //Dragging list

      if (type === "list") {
        const list = newState.splice(droppableIndexStart, 1);
        newState.splice(droppableIndexEnd, 0, ...list);
        return newState;
      }

      //When card is dropped within the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find((list) => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      //When dropped into another list
      if (droppableIdStart !== droppableIdEnd) {
        //Find id of the list where the drag started
        const listStart = state.find((list) => droppableIdStart === list.id);
        //Remove the card from the cards array
        const card = listStart.cards.splice(droppableIndexStart, 1);
        //Find the list where the drag ended
        const listEnd = state.find((list) => droppableIdEnd === list.id);

        //Put the card in the new list
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }
      return newState;

    default:
      return state;
  }
};

export default listsReducer;
