import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(dialog => (<DialogItem name={dialog.name} id={dialog.id}/>));
    let messagesElements = props.state.messages.map(m => (<Message message={m.message}/>));
    let newAddMessage = React.createRef();
    let addMessage = () => {
        let text = newAddMessage.current.value;
        alert(text);
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
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>

        </div>
    );
}

export default Dialogs;