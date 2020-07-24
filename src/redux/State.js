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

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('State changed');
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this.getState());
    },

    sendMessage() {
        let newMessage = {
            id: 7,
            message: this._state.dialogsPage.newMessageText
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this.getState());
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this.getState());
    },

    updateNewMessageText(newMessage) {
        this._state.dialogsPage.newMessageText = newMessage;
        this._callSubscriber(this.getState());
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    }
};

window.store = store;

export default store;