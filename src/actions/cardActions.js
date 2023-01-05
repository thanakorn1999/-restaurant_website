import { CONSTANTS } from "../actions";

export const addCard = (listId, text) => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: { listId, text },
  };
};

export const deleteCard = (listId, cardId) => {
  return {
    type: CONSTANTS.DELETE_CARD,
    payload: { listId, cardId },
  };
};

export const editCard = (listId, cardId, message) => {
  return {
    type: CONSTANTS.EDIT_CARD,
    payload: { listId, cardId, message },
  };
};

export const editDescription = (listId, cardId, description) => {
  return {
    type: CONSTANTS.EDIT_DESCRIPTION,
    payload: { listId, cardId, description },
  };
};
