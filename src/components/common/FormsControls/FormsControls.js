import React from "react";
import styles from "./FormsControls.module.css";
import {Field} from "redux-form";

const FormControl = ({input, meta: {touched, error}, children}) => {
    const isError = touched && error;
    return (
        <div className={styles.formControl + " " + (isError ? styles.error : "")}>
            <div>
                {children}
            </div>
            {isError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const CreateField = (placeholder, name, component, validators, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder} name={name}
               component={component}
               validate={validators}
               {...props}
        />
    </div>
)
