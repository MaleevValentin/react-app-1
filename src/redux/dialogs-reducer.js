const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 7,
                message: state.newMessageBody
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageBody: ''
            };

        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.newMessage
            };

        default:
            return state;
    }
};

export const sendMessage = () => ({type: SEND_MESSAGE});

export const updateNewMessageBody = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, newMessage: body});

export default dialogsReducer;