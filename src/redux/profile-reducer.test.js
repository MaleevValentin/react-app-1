import React from "react";
import profileReducer, {addPost, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Fino Alla Fine', likesCount: 6},
        {id: 2, message: 'Forza Juve!!!!', likesCount: 5},
        {id: 3, message: 'Forza Juve!!!!', likesCount: 5},
        {id: 4, message: 'Forza Juve!!!!', likesCount: 7}
    ]
};

test('new post should be added', () => {
    // 1. test data
    let action = addPost("it-kamasutra.com");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(5);
});

test('message of new post should be correct', () => {
    // 1. test data
    let action = addPost("it-kamasutra.com");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[4].message).toBe("it-kamasutra.com");
});

test('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

test(`after deleting length of messages shouldn't be decrement if id is incorrect`, () => {
    // 1. test data
    let action = deletePost(1000);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(4);
});