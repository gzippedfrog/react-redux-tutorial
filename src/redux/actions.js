import { CREATE_POST, FETCH_POST, HIDE_LOADER, SHOW_LOADER } from "./types";

export const createPost = (post) => ({
  type: CREATE_POST,
  payload: post
});

// export const showLoader = () => ({});

export function fetchPosts() {
  return async (dispatch) => {
    dispatch({ type: SHOW_LOADER });

    let response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    response = await response.json();
    await new Promise((resolve) => setTimeout(() => resolve(), 1000));

    dispatch({ type: HIDE_LOADER });
    dispatch({ type: FETCH_POST, payload: response });
  };
}
