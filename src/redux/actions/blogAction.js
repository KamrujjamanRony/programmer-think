import { BLOG_LOADED } from "../actionTypes/actionTypes";

export const loaded = (blogs) => {
  return {
    type: BLOG_LOADED,
    payload: blogs,
  };
};
