import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
    {id: 1, name: 'Gigi'},
    {id: 2, name: 'Alex'},
    {id: 3, name: 'David'},
    {id: 4, name: 'Mauro'},
    {id: 5, name: 'Paulo'},
    {id: 6, name: 'Juan'}
];

let messages = [
    {id: 1, message: 'Fine Alla FIne'},
    {id: 2, message: 'Forza Juve'},
    {id: 3, message: '!!!!!!!!!!'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo yo'},
    {id: 6, message: 'Yo yo'}
];

let posts = [
    {id: 1, message: 'Fino Alla Fine', likesCount: 6},
    {id: 2, message: 'Forza Juve!!!!', likesCount: 5}
];

ReactDOM.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
