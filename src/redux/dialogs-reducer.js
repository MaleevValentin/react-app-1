const SEND_MESSAGE = 'SEND-MESSAGE';

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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 7,
                message: action.newMessageBody
            };
            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
        default:
            return state;
    }
};

export const sendMessage = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;