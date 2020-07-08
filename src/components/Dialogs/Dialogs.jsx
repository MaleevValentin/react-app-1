import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Gigi'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'David'},
        {id: 4, name: 'Mauro'},
        {id: 5, name: 'Paulo'},
        {id: 6, name: 'Juan'}
    ];

    let messagesData = [
        {id: 1, message: 'Fine Alla FIne'},
        {id: 2, message: 'Forza Juve'},
        {id: 3, message: '!!!!!!!!!!'}
    ];

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id}/>
                <Message message={messagesData[1].message} id={messagesData[1].id}/>
            </div>
        </div>
    );
}

export default Dialogs;