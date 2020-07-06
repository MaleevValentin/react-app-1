import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/1'>Gigi</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Alex</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>David</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Mauro</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5'>Paulo</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/6'>Juan</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Fine</div>
                <div className={s.message}>Alla</div>
                <div className={s.message}>Fine</div>
            </div>
        </div>
    );
}

export default Dialogs;