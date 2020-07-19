import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(dialog => (<DialogItem name={dialog.name} id={dialog.id}/>));
    let messagesElements = props.state.messages.map(m => (<Message message={m.message}/>));
    let newAddMessage = React.createRef();
    let sendMessage = () => {
        let text = newAddMessage.current.value;
        props.sendMessage(text);
        newAddMessage.current.value = '';
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea ref={newAddMessage}/>
                </div>
                <div>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>

        </div>
    );
}

export default Dialogs;