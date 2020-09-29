import React, {useState} from "react";

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || "----"}</span>
            </div>
            }

            {editMode &&
            <div>
                <input autoFocus
                       onBlur={deactivateEditMode}
                       onChange={onStatusChange}
                       value={status}/>
            </div>
            }
        </div>

    )
}

export default ProfileStatusWithHooks;