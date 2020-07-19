import {rerenderEntireTree} from "../render";

let state = {
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Gigi'},
            {id: 2, name: 'Alex'},
            {id: 3, name: 'David'},
            {id: 4, name: 'Mauro'},
            {id: 5, name: 'Paulo'},
            {id: 6, name: 'Juan'}
        ],
        messages: [
            {id: 1, message: 'Fine Alla FIne'},
            {id: 2, message: 'Forza Juve'},
            {id: 3, message: '!!!!!!!!!!'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo yo'},
            {id: 6, message: 'Yo yo'}
        ]
    },
    profilePage: {
        posts: [
            {id: 1, message: 'Fino Alla Fine', likesCount: 6},
            {id: 2, message: 'Forza Juve!!!!', likesCount: 5},
            {id: 3, message: 'Forza Juve!!!!', likesCount: 5},
            {id: 4, message: 'Forza Juve!!!!', likesCount: 7}
        ]
    }
};

export let addPost = (postMessage) => {
  let newPost = {
      id: 5,
      message: postMessage,
      likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export let sendMessage = (addMessage) => {
    let newMessage = {
        id: 7,
        message: addMessage
    };
    state.dialogsPage.messages.push(newMessage);
    rerenderEntireTree(state);
};

export default state;