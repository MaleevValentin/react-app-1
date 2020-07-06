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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Gigi' id='1'/>
                <DialogItem name='Alex' id='2'/>
                <DialogItem name='David' id='3'/>
                <DialogItem name='Mauro' id='4'/>
                <DialogItem name='Paulo' id='5'/>
                <DialogItem name='Juan' id='6'/>
            </div>
            <div className={s.messages}>
                <Message message='Fine Alla FIne'/>
                <Message message='Forza Juve'/>
                <Message message='!!!!!!!!!!'/>
            </div>
        </div>
    );
}

export default Dialogs;