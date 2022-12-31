import { BLOG_LOADED } from "../actionTypes/actionTypes";

const initialState = {
    blogs: [],
}

const blogReducer = (state = initialState, action) => {
    switch(action.type) {
        case BLOG_LOADED:
            return {
                ...state,
                blogs: action.payload,
            };
        default: 
        return state;     
    }
}

export default blogReducer;