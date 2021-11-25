import { CREATE_POST } from "./types";

const initialState = {
    posts: [],
    fetchedPosts: []
};

export function postsReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_POST:
            return { ...state, posts: state.posts.concat(action.payload) };
        default:
            return state;
    }
}
