const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
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
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this.getState());

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this.getState());

        } else if (action.type === SEND_MESSAGE) {
            let newMessage = {
                id: 7,
                message: this._state.dialogsPage.newMessageText
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this.getState());

        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._callSubscriber(this.getState());

        } else {
            alert(`Unknown action.type "${action.type}"`);
        }
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageTextActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text});

window.store = store;
export default store;