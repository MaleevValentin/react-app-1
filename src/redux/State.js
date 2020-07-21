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
        ],
        newMessageText: 'new message'
    },
    profilePage: {
        posts: [
            {id: 1, message: 'Fino Alla Fine', likesCount: 6},
            {id: 2, message: 'Forza Juve!!!!', likesCount: 5},
            {id: 3, message: 'Forza Juve!!!!', likesCount: 5},
            {id: 4, message: 'Forza Juve!!!!', likesCount: 7}
        ],
        newPostText: 'Forza Juve'
    }
};

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export let sendMessage = () => {
    let newMessage = {
        id: 7,
        message: state.dialogsPage.newMessageText
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export let updateNewMessageText = (newMessage) => {
    state.dialogsPage.newMessageText = newMessage;
    rerenderEntireTree(state);
};

export default state;