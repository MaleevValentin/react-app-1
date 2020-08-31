import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => (
        <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>));
    let messagesElements = state.messages.map(m => (<Message message={m.message} key={m.id}/>));

    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
    };

    if (!props.isAuth) return <Redirect to="/login"/>;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea onChange={onNewMessageChange}
                              value={state.newMessageBody}
                              placeholder='Enter your message'/>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>

        </div>
    );
}

export default Dialogs;