export const initialState = [
  {
    title: "(F)rello",
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: "This is a project where I wanted to work on creating interable UIs using React.",
      },
      {
        id: `card-${1}`,
        text: "I used React, React-Redux, react-beautiful-dnd and Material UI to create this.",
      },
    ],
  },
  {
    title: "Limitations",
    id: `list-${1}`,
    cards: [
      {
        id: `card-${2}`,
        text: "This is just a small project and I haven't yet hooked it up to a backend to persist the lists.",
      },
      {
        id: `card-${3}`,
        text: "I plan to expand on this by adding the ability to create multiple boards and switch between them using an expandable sidebar.",
      },
      {
        id: `card-${4}`,
        text: "You can add new cards, create a new list and move cards and lists around the area.",
      },
    ],
  },
];
