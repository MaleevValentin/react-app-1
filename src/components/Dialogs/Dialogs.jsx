import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Gigi
                </div>
                <div className={s.dialog}>
                    Alex
                </div>
                <div className={s.dialog}>
                    David
                </div>
                <div className={s.dialog}>
                    Mauro
                </div>
                <div className={s.dialog}>
                    Paulo
                </div>
                <div className={s.dialog}>
                    Juan
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