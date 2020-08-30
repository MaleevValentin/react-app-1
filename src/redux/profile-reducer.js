import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Fino Alla Fine', likesCount: 6},
        {id: 2, message: 'Forza Juve!!!!', likesCount: 5},
        {id: 3, message: 'Forza Juve!!!!', likesCount: 5},
        {id: 4, message: 'Forza Juve!!!!', likesCount: 7}
    ],
    newPostText: 'Forza Juve',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };

        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        default:
            return state;
    }
};

export const addPost = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const updateNewPostText = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
    }
}

export default profileReducer;