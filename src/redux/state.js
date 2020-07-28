import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
            newMessageBody: ''
        },
        profilePage: {
            posts: [
                {id: 1, message: 'Fino Alla Fine', likesCount: 6},
                {id: 2, message: 'Forza Juve!!!!', likesCount: 5},
                {id: 3, message: 'Forza Juve!!!!', likesCount: 5},
                {id: 4, message: 'Forza Juve!!!!', likesCount: 7}
            ],
            newPostText: 'Forza Juve'
        },
        sidebar: {}
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this.getState());
    }
};

window.store = store;
export default store;